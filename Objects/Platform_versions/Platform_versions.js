/* API Objects for table: platform_versions */

      global.ListPlatform_versionsAll_object = {
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
                      "queryPayload": "SELECT platform_version_id as platform_versions_platformVersionId, version_id as platform_versions_versionId, platform_id as platform_versions_platformId, encryption_key as platform_versions_encryptionKey, status as platform_versions_status, updated_by as platform_versions_updatedBy, created_at as platform_versions_createdAt, updated_at as platform_versions_updatedAt, COUNT(*) OVER () AS table_count FROM platform_versions",
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
                  "successMessage": "platform_versions retrieved successfully!",
                  "errorMessage": "Failed to retrieve platform_versions."
                }
              }]
            }
          }]
        }
      };


      global.ListPlatform_versions_object = {
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
                      "queryPayload": "SELECT platform_version_id as platform_versions_platformVersionId, version_id as platform_versions_versionId, platform_id as platform_versions_platformId, encryption_key as platform_versions_encryptionKey, status as platform_versions_status, updated_by as platform_versions_updatedBy, created_at as platform_versions_createdAt, updated_at as platform_versions_updatedAt FROM platform_versions WHERE platform_version_id = {{id}}",
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
                  "successMessage": "platform_versions entry retrieved successfully!",
                  "errorMessage": "Failed to retrieve platform_versions entry."
                }
              }]
            }
          }]
        }
      };


      global.UpdatePlatform_versions_object = {
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
                            "name": "platform_versions_platformVersionId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "platform_versions_versionId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "platform_versions_platformId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "platform_versions_encryptionKey",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "platform_versions_updatedBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }
                    ]
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "UPDATE",
                      "queryPayload": "UPDATE platform_versions SET platform_version_id = {{platform_versions_platformVersionId}}, version_id = {{platform_versions_versionId}}, platform_id = {{platform_versions_platformId}}, encryption_key = {{platform_versions_encryptionKey}}, updated_by = {{platform_versions_updatedBy}} WHERE platform_version_id = {{platform_version_id}}",
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
                  "successMessage": "platform_versions updated successfully!",
                  "errorMessage": "There was an error updating platform_versions."
                }
              }]
            }
          }]
        }
      };


    global.DeletePlatform_versions_object = {
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
                    "queryPayload": "UPDATE platform_versions SET status = 'inactive' WHERE platform_version_id = {{id}}",
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
                "successMessage": "platform_versions deleted successfully!",
                "errorMessage": "There was an error deleting platform_versions."
            }
            }]
        }
        }]
    }
    };


      global.AddPlatform_versions_object = {
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
                            "name": "platform_versions_versionId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "platform_versions_platformId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "platform_versions_encryptionKey",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "platform_versions_updatedBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }
                    ]

                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "INSERT",
                      "queryPayload": "INSERT INTO platform_versions (version_id, platform_id, encryption_key, updated_by) VALUES ({{platform_version_id}}, {{version_id}}, {{platform_id}}, {{encryption_key}}, {{status}}, {{updated_by}}, {{created_at}}, {{updated_at}})",
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
                  "successMessage": "platform_versions added successfully!",
                  "errorMessage": "There was an error adding platform_versions."
                }
              }]
            }
          }]
        }
      };