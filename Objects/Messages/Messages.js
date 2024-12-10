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
                      "queryPayload": "SELECT message_id as Messages_messageId, sent_by_user_role_department_id as Messages_sentByUserRoleDepartmentId, recepient_user_role_department_id as Messages_recepientUserRoleDepartmentId, recepient_chatting_group_id as Messages_recepientChattingGroupId, message_title as Messages_messageTitle, message_body as Messages_messageBody, attachement_id as Messages_attachementId, status as Messages_status, updated_by as Messages_updatedBy, updated_at as Messages_updatedAt, created_by as Messages_createdBy, COUNT(*) OVER () AS table_count FROM Messages",
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
                  "successMessage": "Messages retrieved successfully!",
                  "errorMessage": "Failed to retrieve Messages."
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
                      "queryPayload": "SELECT message_id as Messages_messageId, sent_by_user_role_department_id as Messages_sentByUserRoleDepartmentId, recepient_user_role_department_id as Messages_recepientUserRoleDepartmentId, recepient_chatting_group_id as Messages_recepientChattingGroupId, message_title as Messages_messageTitle, message_body as Messages_messageBody, attachement_id as Messages_attachementId, status as Messages_status, updated_by as Messages_updatedBy, updated_at as Messages_updatedAt, created_by as Messages_createdBy FROM Messages WHERE message_id = {{id}}",
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
                  "successMessage": "Messages entry retrieved successfully!",
                  "errorMessage": "Failed to retrieve Messages entry."
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
                            "name": "Messages_sentByUserRoleDepartmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Messages_recepientUserRoleDepartmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Messages_recepientChattingGroupId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Messages_messageTitle",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Messages_messageBody",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Messages_attachementId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Messages_updatedBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Messages_createdBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }
                    ]
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "UPDATE",
                      "queryPayload": "UPDATE Messages SET sent_by_user_role_department_id = {{Messages_sentByUserRoleDepartmentId}}, recepient_user_role_department_id = {{Messages_recepientUserRoleDepartmentId}}, recepient_chatting_group_id = {{Messages_recepientChattingGroupId}}, message_title = {{Messages_messageTitle}}, message_body = {{Messages_messageBody}}, attachement_id = {{Messages_attachementId}}, updated_by = {{Messages_updatedBy}}, created_by = {{Messages_createdBy}} WHERE message_id = {{message_id}}",
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
                  "successMessage": "Messages updated successfully!",
                  "errorMessage": "There was an error updating Messages."
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
                    "queryPayload": "UPDATE Messages SET status = 'inactive' WHERE message_id = {{id}}",
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
                "successMessage": "Messages deleted successfully!",
                "errorMessage": "There was an error deleting Messages."
            }
            }]
        }
        }]
    }
    };


      global.Addmessages_object = {
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