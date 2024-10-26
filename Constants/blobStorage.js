
const { initializeApp } = require("firebase/app");
const { getStorage, ref, uploadBytesResumable, getDownloadURL } = require("firebase/storage");
const firebaseConfig = require("./firebaseConfig");

async function uploadToFirebaseStorage(fileBuffer, fileName) {
  initializeApp(firebaseConfig); 
  const storage = getStorage();
  const uniqueFileName = `${Date.now()}-${fileName}`;
  const storageRef = ref(storage, `uploads/${uniqueFileName}`);
  const blob = new Blob([fileBuffer]);
  const uploadTask = uploadBytesResumable(storageRef, blob);
  const downloadURL = await new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        reject(error);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log("File available at", downloadURL);
          resolve(downloadURL);
        } catch (error) {
          reject(error);
        }
      }
    );
  });
  return downloadURL;
}

module.exports = uploadToFirebaseStorage;
