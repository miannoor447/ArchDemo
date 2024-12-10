/* API Objects for table: users */

      global.ListUsersAll_object = {
        "versions": {
          "versionData": [{
            "=1.0": {
              "steps": [{
                "config": {
                  "features": {
                    "multistep": false,
                    "parameters": true,
                    "pagination": true
                  },
                  "communication": {
                    //"encryption" : false
                    "encryption": {
                      "platformEncryption" : true,
                    }
                  },
                  "verification": {
                    "otp": false,
                    "accessToken": false
                  }
                },
                "data": {
                  "parameters": {
                    "fields": []
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "SELECT",
                      "queryPayload": "SELECT user_id as Users_userId, email as Users_email, first_name as Users_firstName, last_name as Users_lastName, phone_no as Users_phoneNo, cnic as Users_cnic, gender as Users_gender, father_name as Users_fatherName, image_attachment_id as Users_imageAttachmentId, address as Users_address, date_of_birth as Users_dateOfBirth, blood_group as Users_bloodGroup, religion as Users_religion, status as Users_status, updated_by as Users_updatedBy, created_at as Users_createdAt, updated_at as Users_updatedAt, COUNT(*) OVER () AS table_count FROM Users",
                      "database": "projectDB"
                    },
                    "utilityFunctions": {
                      "callbackFunction": null,
                      "payloadFunction": []
                    }
                  },
                  "requestMetaData": {
                    "requestMethod": "GET",
                    "permission": null,
                    "pagination": { "pageSize": 10 }
                  }
                },
                "response": {
                  "successMessage": "Users retrieved successfully!",
                  "errorMessage": "Failed to retrieve Users."
                }
              }]
            }
          }]
        }
      };


      global.ListUsers_object = {
        "versions": {
          "versionData": [{
            "=1.0": {
              "steps": [{
                "config": {
                  "features": {
                    "multistep": false,
                    "parameters": true,
                    "pagination": true
                  },
                  "communication": {
                    //"encryption" : false
                    "encryption": {
                      "platformEncryption" : true,
                    }
                  },
                  "verification": {
                    "otp": false,
                    "accessToken": false
                  }
                },
                "data": {
                  "parameters": {
                    "fields": [
                      {
                        "name": "id",
                        "validations": [],
                        "required": true,
                        "source": "req.query"
                      }
                    ]
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "SELECT",
                      "queryPayload": "SELECT user_id as Users_userId, email as Users_email, first_name as Users_firstName, last_name as Users_lastName, phone_no as Users_phoneNo, cnic as Users_cnic, gender as Users_gender, father_name as Users_fatherName, image_attachment_id as Users_imageAttachmentId, address as Users_address, date_of_birth as Users_dateOfBirth, blood_group as Users_bloodGroup, religion as Users_religion, status as Users_status, updated_by as Users_updatedBy, created_at as Users_createdAt, updated_at as Users_updatedAt FROM Users WHERE user_id = {{id}}",
                      "database": "projectDB"
                    },
                    "utilityFunctions": {
                      "callbackFunction": null,
                      "payloadFunction": []
                    }
                  },
                  "requestMetaData": {
                    "requestMethod": "GET",
                    "permission": null,
                    "pagination": { "pageSize": 10 }
                  }
                },
                "response": {
                  "successMessage": "Users entry retrieved successfully!",
                  "errorMessage": "Failed to retrieve Users entry."
                }
              }]
            }
          }]
        }
      };


      global.UpdateUsers_object = {
        "versions": {
          "versionData": [{
            "=1.0": {
              "steps": [{
                "config": {
                  "features": {
                    "multistep": false,
                    "parameters": true,
                    "pagination": false
                  },
                  "communication": {
                    //"encryption" : false
                    "encryption": {
                      "platformEncryption" : true,
                    }
                  },
                  "verification": {
                    "otp": false,
                    "accessToken": false
                  }
                },
                "data": {
                  "parameters": {
                    "fields": [
                        
                            {
                            "name": "Users_email",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Users_firstName",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Users_lastName",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Users_phoneNo",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Users_cnic",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Users_gender",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Users_fatherName",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Users_imageAttachmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Users_address",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Users_dateOfBirth",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Users_bloodGroup",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Users_religion",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Users_updatedBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }
                    ]
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "UPDATE",
                      "queryPayload": "UPDATE Users SET email = {{Users_email}}, first_name = {{Users_firstName}}, last_name = {{Users_lastName}}, phone_no = {{Users_phoneNo}}, cnic = {{Users_cnic}}, gender = {{Users_gender}}, father_name = {{Users_fatherName}}, image_attachment_id = {{Users_imageAttachmentId}}, address = {{Users_address}}, date_of_birth = {{Users_dateOfBirth}}, blood_group = {{Users_bloodGroup}}, religion = {{Users_religion}}, updated_by = {{Users_updatedBy}} WHERE user_id = {{user_id}}",
                      "database": "projectDB"
                    },
                    "utilityFunctions": {
                      "callbackFunction": null,
                      "payloadFunction": []
                    }
                  },
                  "requestMetaData": {
                    "requestMethod": "PUT",
                    "permission": null,
                    "pagination": {}
                  }
                },
                "response": {
                  "successMessage": "Users updated successfully!",
                  "errorMessage": "There was an error updating Users."
                }
              }]
            }
          }]
        }
      };


    global.DeleteUsers_object = {
    "versions": {
        "versionData": [{
        "=1.0": {
            "steps": [{
            "config": {
                "features": {
                "multistep": false,
                "parameters": true,
                "pagination": false
                },
                "communication": {
                    //"encryption": false,
                    "encryption": {
                        "platformEncryption": true,
                    }
                },
                "verification": {
                "otp": false,
                "accessToken": false
                }
            },
            "data": {
                "parameters": {
                "fields": [
                    {
                    "name": "id",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    }
                ]
                },
                "apiInfo": {
                "query": {
                    "queryNature": "UPDATE",
                    "queryPayload": "UPDATE Users SET status = 'inactive' WHERE user_id = {{id}}",
                    "database": "projectDB"
                },
                "utilityFunctions": {
                    "callbackFunction": null,
                    "payloadFunction": []
                }
                },
                "requestMetaData": {
                "requestMethod": "DELETE",
                "permission": null,
                "pagination": {}
                }
            },
            "response": {
                "successMessage": "Users deleted successfully!",
                "errorMessage": "There was an error deleting Users."
            }
            }]
        }
        }]
    }
    };


      global.Addusers_object = {
        "versions": {
          "versionData": [{
            "=1.0": {
              "steps": [{
                "config": {
                  "features": {
                    "multistep": true,
                    "parameters": true,
                    "pagination": false
                  },
                  "communication": {
                    "encryption": {
                      "platformEncryption": true,
                      "accessTokenEncryption": false
                    }
                  },
                  "verification": {
                    "otp": false,
                    "accessToken": true
                  }
                },
                "data": {
                  "parameters": {
                    "fields": [
                        
                            {
                            "name": "users_email",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "users_firstName",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "users_lastName",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "users_phoneNo",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "users_cnic",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "users_gender",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "users_fatherName",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "users_imageAttachmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "users_address",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "users_dateOfBirth",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "users_bloodGroup",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "users_religion",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "users_updatedBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }
                    ]

                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "INSERT",
                      "queryPayload": "INSERT INTO users (email, first_name, last_name, phone_no, cnic, gender, father_name, image_attachment_id, address, date_of_birth, blood_group, religion, updated_by) VALUES ({{user_id}}, {{email}}, {{first_name}}, {{last_name}}, {{phone_no}}, {{cnic}}, {{gender}}, {{father_name}}, {{image_attachment_id}}, {{address}}, {{date_of_birth}}, {{blood_group}}, {{religion}}, {{status}}, {{updated_by}}, {{created_at}}, {{updated_at}})",
                      "database": "projectDB"
                    },
                    "utilityFunctions": {
                      "callbackFunction": null,
                      "payloadFunction": []
                    }
                  },
                  "requestMetaData": {
                    "requestMethod": "POST",
                    "permission": null,
                    "pagination": {}
                  }
                },
                "response": {
                  "successMessage": "users added successfully!",
                  "errorMessage": "There was an error adding users."
                }
              }]
            }
          }]
        }
      };