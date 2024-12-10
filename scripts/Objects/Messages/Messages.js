/* API Objects for table: messages */

      global.ListMessagesAll_object = {
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
                      "queryPayload": "SELECT message_id as messages_messageId, sent_by_user_role_department_id as messages_sentByUserRoleDepartmentId, recepient_user_role_department_id as messages_recepientUserRoleDepartmentId, recepient_chatting_group_id as messages_recepientChattingGroupId, message_title as messages_messageTitle, message_body as messages_messageBody, attachement_id as messages_attachementId, status as messages_status, updated_by as messages_updatedBy, updated_at as messages_updatedAt, created_by as messages_createdBy, COUNT(*) OVER () AS table_count FROM messages",
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
                  "successMessage": "messages retrieved successfully!",
                  "errorMessage": "Failed to retrieve messages."
                }
              }]
            }
          }]
        }
      };


      global.ListMessages_object = {
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
                      "queryPayload": "SELECT message_id as messages_messageId, sent_by_user_role_department_id as messages_sentByUserRoleDepartmentId, recepient_user_role_department_id as messages_recepientUserRoleDepartmentId, recepient_chatting_group_id as messages_recepientChattingGroupId, message_title as messages_messageTitle, message_body as messages_messageBody, attachement_id as messages_attachementId, status as messages_status, updated_by as messages_updatedBy, updated_at as messages_updatedAt, created_by as messages_createdBy FROM messages WHERE message_id = {{id}}",
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
                  "successMessage": "messages entry retrieved successfully!",
                  "errorMessage": "Failed to retrieve messages entry."
                }
              }]
            }
          }]
        }
      };


      global.UpdateMessages_object = {
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
                            "name": "messages_messageId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "messages_sentByUserRoleDepartmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "messages_recepientUserRoleDepartmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "messages_recepientChattingGroupId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "messages_messageTitle",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "messages_messageBody",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "messages_attachementId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "messages_updatedBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "messages_createdBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }
                    ]
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "UPDATE",
                      "queryPayload": "UPDATE messages SET message_id = {{messages_messageId}}, sent_by_user_role_department_id = {{messages_sentByUserRoleDepartmentId}}, recepient_user_role_department_id = {{messages_recepientUserRoleDepartmentId}}, recepient_chatting_group_id = {{messages_recepientChattingGroupId}}, message_title = {{messages_messageTitle}}, message_body = {{messages_messageBody}}, attachement_id = {{messages_attachementId}}, updated_by = {{messages_updatedBy}}, created_by = {{messages_createdBy}} WHERE message_id = {{message_id}}",
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
                  "successMessage": "messages updated successfully!",
                  "errorMessage": "There was an error updating messages."
                }
              }]
            }
          }]
        }
      };


    global.DeleteMessages_object = {
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
                    "queryPayload": "UPDATE messages SET status = 'inactive' WHERE message_id = {{id}}",
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
                "successMessage": "messages deleted successfully!",
                "errorMessage": "There was an error deleting messages."
            }
            }]
        }
        }]
    }
    };


      global.AddMessages_object = {
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
                            "name": "messages_sentByUserRoleDepartmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "messages_recepientUserRoleDepartmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "messages_recepientChattingGroupId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "messages_messageTitle",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "messages_messageBody",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "messages_attachementId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "messages_updatedBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "messages_createdBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }
                    ]

                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "INSERT",
                      "queryPayload": "INSERT INTO messages (sent_by_user_role_department_id, recepient_user_role_department_id, recepient_chatting_group_id, message_title, message_body, attachement_id, updated_by, created_by) VALUES ({{message_id}}, {{sent_by_user_role_department_id}}, {{recepient_user_role_department_id}}, {{recepient_chatting_group_id}}, {{message_title}}, {{message_body}}, {{attachement_id}}, {{status}}, {{updated_by}}, {{updated_at}}, {{created_by}})",
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
                  "successMessage": "messages added successfully!",
                  "errorMessage": "There was an error adding messages."
                }
              }]
            }
          }]
        }
      };