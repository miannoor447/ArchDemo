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
                      "queryPayload": "SELECT user_id as users_userId,user_id as id, email as users_email, first_name as users_firstName, last_name as users_lastName, phone_no as users_phoneNo, cnic as users_cnic, gender as users_gender, father_name as users_fatherName, image_attachment_id as users_imageAttachmentId, address as users_address, date_of_birth as users_dateOfBirth, blood_group as users_bloodGroup, religion as users_religion, status as users_status, updated_by as users_updatedBy, created_at as users_createdAt, updated_at as users_updatedAt, COUNT(*) OVER () AS table_count FROM users WHERE status!='inactive'",
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
                  "successMessage": "users retrieved successfully!",
                  "errorMessage": "Failed to retrieve users."
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
                      "queryPayload": "SELECT user_id as users_userId, email as users_email, first_name as users_firstName, last_name as users_lastName, phone_no as users_phoneNo, cnic as users_cnic, gender as users_gender, father_name as users_fatherName, image_attachment_id as users_imageAttachmentId, address as users_address, date_of_birth as users_dateOfBirth, blood_group as users_bloodGroup, religion as users_religion, status as users_status, updated_by as users_updatedBy, created_at as users_createdAt, updated_at as users_updatedAt FROM users WHERE user_id = {{id}} AND status!='inactive'",
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
                  "successMessage": "users entry retrieved successfully!",
                  "errorMessage": "Failed to retrieve users entry."
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
                    // "encryption" : false
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
                            "name": "users_userId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
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
                            "required": false,
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
                            "required": false,
                            "source": "req.body"
                            }
                    ]
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "PUT",
                      "queryPayload": "UPDATE users SET user_id = {{users_userId}}, email = {{users_email}}, first_name = {{users_firstName}}, last_name = {{users_lastName}}, phone_no = {{users_phoneNo}}, cnic = {{users_cnic}}, gender = {{users_gender}}, father_name = {{users_fatherName}}, image_attachment_id = {{users_imageAttachmentId}}, address = {{users_address}}, date_of_birth = {{users_dateOfBirth}}, blood_group = {{users_bloodGroup}}, religion = {{users_religion}}, updated_by = {{users_updatedBy}} WHERE user_id = {{users_userId}}",
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
                  "successMessage": "users updated successfully!",
                  "errorMessage": "There was an error updating users."
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
                    // "encryption": false,
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
                    "name": "Id",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    }
                ]
                },
                "apiInfo": {
                "query": {
                    "queryNature": "UPDATE",
                    "queryPayload": "UPDATE users SET status = 'inactive' WHERE user_id = {{Id}}",
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
                "successMessage": "users deleted successfully!",
                "errorMessage": "There was an error deleting users."
            }
            }]
        }
        }]
    }
    };


      global.AddUsers_object = {
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




      //Api for dropdown



      global.ListUsersDropdown_object = {
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
                    // "encryption" : false
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
                      "queryPayload": "SELECT user_id as value ,CONCAT(first_name, ' ',last_name,' - ' ,email) as label FROM users WHERE status!='inactive'",
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
                  "successMessage": "users retrieved successfully!",
                  "errorMessage": "Failed to retrieve users."
                }
              }]
            }
          }]
        }
      };
