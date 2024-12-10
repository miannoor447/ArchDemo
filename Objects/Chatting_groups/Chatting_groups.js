/* API Objects for table: chatting_groups */

      global.ListChatting_groupsAll_object = {
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
                      "queryPayload": "SELECT chatting_group_id as chatting_groups_chattingGroupId, chatting_group_name as chatting_groups_chattingGroupName, status as chatting_groups_status, updated_by as chatting_groups_updatedBy, updated_at as chatting_groups_updatedAt, created_at as chatting_groups_createdAt, COUNT(*) OVER () AS table_count FROM chatting_groups",
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
                  "successMessage": "chatting_groups retrieved successfully!",
                  "errorMessage": "Failed to retrieve chatting_groups."
                }
              }]
            }
          }]
        }
      };


      global.ListChatting_groups_object = {
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
                      "queryPayload": "SELECT chatting_group_id as chatting_groups_chattingGroupId, chatting_group_name as chatting_groups_chattingGroupName, status as chatting_groups_status, updated_by as chatting_groups_updatedBy, updated_at as chatting_groups_updatedAt, created_at as chatting_groups_createdAt FROM chatting_groups WHERE chatting_group_id = {{id}}",
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
                  "successMessage": "chatting_groups entry retrieved successfully!",
                  "errorMessage": "Failed to retrieve chatting_groups entry."
                }
              }]
            }
          }]
        }
      };


      global.UpdateChatting_groups_object = {
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
                            "name": "chatting_groups_chattingGroupId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "chatting_groups_chattingGroupName",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "chatting_groups_updatedBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }
                    ]
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "UPDATE",
                      "queryPayload": "UPDATE chatting_groups SET chatting_group_id = {{chatting_groups_chattingGroupId}}, chatting_group_name = {{chatting_groups_chattingGroupName}}, updated_by = {{chatting_groups_updatedBy}} WHERE chatting_group_id = {{chatting_group_id}}",
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
                  "successMessage": "chatting_groups updated successfully!",
                  "errorMessage": "There was an error updating chatting_groups."
                }
              }]
            }
          }]
        }
      };


    global.DeleteChatting_groups_object = {
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
                    "queryPayload": "UPDATE chatting_groups SET status = 'inactive' WHERE chatting_group_id = {{id}}",
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
                "successMessage": "chatting_groups deleted successfully!",
                "errorMessage": "There was an error deleting chatting_groups."
            }
            }]
        }
        }]
    }
    };


      global.AddChatting_groups_object = {
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
                            "name": "chatting_groups_chattingGroupName",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "chatting_groups_updatedBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }
                    ]

                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "INSERT",
                      "queryPayload": "INSERT INTO chatting_groups (chatting_group_name, updated_by) VALUES ({{chatting_group_id}}, {{chatting_group_name}}, {{status}}, {{updated_by}}, {{updated_at}}, {{created_at}})",
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
                  "successMessage": "chatting_groups added successfully!",
                  "errorMessage": "There was an error adding chatting_groups."
                }
              }]
            }
          }]
        }
      };