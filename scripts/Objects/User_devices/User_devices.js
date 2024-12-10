/* API Objects for table: user_devices */

      global.ListUser_devicesAll_object = {
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
                      "queryPayload": "SELECT user_device_id as user_devices_userDeviceId, user_id as user_devices_userId, device_token as user_devices_deviceToken, device_name as user_devices_deviceName, platform_version_id as user_devices_platformVersionId, os_version as user_devices_osVersion, status as user_devices_status, updated_by as user_devices_updatedBy, updated_at as user_devices_updatedAt, created_at as user_devices_createdAt, COUNT(*) OVER () AS table_count FROM user_devices",
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
                  "successMessage": "user_devices retrieved successfully!",
                  "errorMessage": "Failed to retrieve user_devices."
                }
              }]
            }
          }]
        }
      };


      global.ListUser_devices_object = {
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
                      "queryPayload": "SELECT user_device_id as user_devices_userDeviceId, user_id as user_devices_userId, device_token as user_devices_deviceToken, device_name as user_devices_deviceName, platform_version_id as user_devices_platformVersionId, os_version as user_devices_osVersion, status as user_devices_status, updated_by as user_devices_updatedBy, updated_at as user_devices_updatedAt, created_at as user_devices_createdAt FROM user_devices WHERE user_device_id = {{id}}",
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
                  "successMessage": "user_devices entry retrieved successfully!",
                  "errorMessage": "Failed to retrieve user_devices entry."
                }
              }]
            }
          }]
        }
      };


      global.UpdateUser_devices_object = {
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
                            "name": "user_devices_userDeviceId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "user_devices_userId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "user_devices_deviceToken",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "user_devices_deviceName",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "user_devices_platformVersionId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "user_devices_osVersion",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "user_devices_updatedBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }
                    ]
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "UPDATE",
                      "queryPayload": "UPDATE user_devices SET user_device_id = {{user_devices_userDeviceId}}, user_id = {{user_devices_userId}}, device_token = {{user_devices_deviceToken}}, device_name = {{user_devices_deviceName}}, platform_version_id = {{user_devices_platformVersionId}}, os_version = {{user_devices_osVersion}}, updated_by = {{user_devices_updatedBy}} WHERE user_device_id = {{user_device_id}}",
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
                  "successMessage": "user_devices updated successfully!",
                  "errorMessage": "There was an error updating user_devices."
                }
              }]
            }
          }]
        }
      };


    global.DeleteUser_devices_object = {
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
                    "queryPayload": "UPDATE user_devices SET status = 'inactive' WHERE user_device_id = {{id}}",
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
                "successMessage": "user_devices deleted successfully!",
                "errorMessage": "There was an error deleting user_devices."
            }
            }]
        }
        }]
    }
    };


      global.AddUser_devices_object = {
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
                            "name": "user_devices_userId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "user_devices_deviceToken",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "user_devices_deviceName",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "user_devices_platformVersionId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "user_devices_osVersion",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "user_devices_updatedBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }
                    ]

                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "INSERT",
                      "queryPayload": "INSERT INTO user_devices (user_id, device_token, device_name, platform_version_id, os_version, updated_by) VALUES ({{user_device_id}}, {{user_id}}, {{device_token}}, {{device_name}}, {{platform_version_id}}, {{os_version}}, {{status}}, {{updated_by}}, {{updated_at}}, {{created_at}})",
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
                  "successMessage": "user_devices added successfully!",
                  "errorMessage": "There was an error adding user_devices."
                }
              }]
            }
          }]
        }
      };