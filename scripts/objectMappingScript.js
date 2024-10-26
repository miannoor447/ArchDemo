const fs = require('fs');
const path = require('path');

const mapParameters = (oldParameters) => {
  const newParameters = {
      fields: [[]] // Initialize fields as an empty array
  };

  // Iterate over each parameter in oldParameters
  for (const [key, value] of Object.entries(oldParameters)) {
      // Create a parameter object with the desired structure
      const parameter = {
          name: key, // The parameter name
          validations: value.validations || [], // Map validations, default to empty array
          required: !value.optional, // Invert optional to required
          source : value.source
      };

      // Push the parameter object into the fields array
      newParameters.fields[0].push(parameter);
  }

  return newParameters;
};

const determineRequestTypeAndMethod = (objectName) => {
  let requestType = '';
  let requestMethod = '';

  if (objectName.toLowerCase().includes('delete')) {
    requestType = 'DELETE';
    requestMethod = 'Deletion';
  } else if (objectName.toLowerCase().includes('insert') || objectName.toLowerCase().includes('add')) {
    requestType = 'POST';
    requestMethod = 'Insertion';
  } else if (objectName.toLowerCase().includes('get')) {
    requestType = 'GET';
    requestMethod = 'Retrieving';
  } else if (objectName.toLowerCase().includes('update')) {
    requestType = 'UPDATE';
    requestMethod = 'Updation';
  }

  return { requestType, requestMethod };
};

const mapOldToNewObject = (oldObject, objectName) => {
  const { requestType, requestMethod } = determineRequestTypeAndMethod(objectName);

  // Prepare the initial index for queryParams
  let index = 0;

  // Replace ? with corresponding queryParams values
  let queryPayload = oldObject.query.query_payload.replace(/\?/g, () => {
    // Use the current index to fetch the parameter
    const replacement = `{{${oldObject.query.query_values[index]}}}`;
    index++; // Increment index for the next replacement
    return replacement; // Return the replacement string
  });

  // Handle multi-line query payload formatting by removing unnecessary new lines
  queryPayload = queryPayload
    .split('\n') // Split into lines
    .map(line => line.trim()) // Trim each line
    .filter(line => line.length > 0) // Remove empty lines
    .join('\n'); // Join back into a single string with line breaks

  const newObject = {
    config: {
      features: {
        authorization: {
          accessToken: true,
          encryption: true, // Default value as per new object
          platformToken: false, // Default value
        },
        otpVerif: false, // Default value
        multistep: false,
        parameters: oldObject.input.parameters ? true : false, // Default value
      }
    },
    data: {
      parameters:  mapParameters(oldObject.input.parameters || {}),
      requestType: requestType || "POST", // Default to POST if not determined
      permission: objectName,
      apiInfo: [
        {
          requestMethod: requestMethod, // Default to Insertion if not determined
          callbackFunction: oldObject.callback_function || null,
          query: {
            pagination : oldObject.query.pagination || false,
            queryPayload: queryPayload, // Use the modified queryPayload
            queryParams: oldObject.query.query_values || []
          },
        }
      ],
      pagination: {
        pageSize: 10,
        options: {
          pageSizeOptions: [5, 10, 25, 50, 100, "All"],
        }
      }
    }
  };

  return newObject;
};

const mapAndWriteObject = (oldObject, objectName, directoryPath) => {
  const shortenedName = objectName.replace(/^handle/, '').replace(/_object$/, '').replace(/request/, '').replace(/Request/, '');
  const newObject = mapOldToNewObject(oldObject, shortenedName);

  // Replace "APIs" with "Objects" in the directoryPath
  const modifiedDirectoryPath = directoryPath.replace(/APIs/g, 'Objects');

  // Create the full file path where the new object will be written
  const filePath = path.join(modifiedDirectoryPath);
  const content = `global.${shortenedName}_object = ${JSON.stringify(newObject, null, 2)};\n`;
  // Write the new object to the file as JSON
  fs.writeFile(filePath, content, 'utf-8', (err) => {
    if (err) {
      console.error(`Error writing file: ${err.message}`);
    } else {
      console.log(`File written successfully to ${filePath}`);
    }
  });
};



module.exports = {mapAndWriteObject, mapOldToNewObject}