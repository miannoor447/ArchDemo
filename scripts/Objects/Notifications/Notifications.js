/* API Objects for table: notifications */

      global.ListNotificationsAll_object = {
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
                      "queryPayload": "SELECT notification_id as notifications_notificationId, notification_title as notifications_notificationTitle, notification_message as notifications_notificationMessage, sent_to_user_role_designation_department_id as notifications_sentToUserRoleDesignationDepartmentId, status as notifications_status, updated_by as notifications_updatedBy, updated_at as notifications_updatedAt, created_at as notifications_createdAt, COUNT(*) OVER () AS table_count FROM notifications",
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
                  "successMessage": "notifications retrieved successfully!",
                  "errorMessage": "Failed to retrieve notifications."
                }
              }]
            }
          }]
        }
      };


      global.ListNotifications_object = {
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
                      "queryPayload": "SELECT notification_id as notifications_notificationId, notification_title as notifications_notificationTitle, notification_message as notifications_notificationMessage, sent_to_user_role_designation_department_id as notifications_sentToUserRoleDesignationDepartmentId, status as notifications_status, updated_by as notifications_updatedBy, updated_at as notifications_updatedAt, created_at as notifications_createdAt FROM notifications WHERE notification_id = {{id}}",
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
                  "successMessage": "notifications entry retrieved successfully!",
                  "errorMessage": "Failed to retrieve notifications entry."
                }
              }]
            }
          }]
        }
      };


      global.UpdateNotifications_object = {
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
                            "name": "notifications_notificationId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "notifications_notificationTitle",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "notifications_notificationMessage",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "notifications_sentToUserRoleDesignationDepartmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "notifications_updatedBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }
                    ]
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "UPDATE",
                      "queryPayload": "UPDATE notifications SET notification_id = {{notifications_notificationId}}, notification_title = {{notifications_notificationTitle}}, notification_message = {{notifications_notificationMessage}}, sent_to_user_role_designation_department_id = {{notifications_sentToUserRoleDesignationDepartmentId}}, updated_by = {{notifications_updatedBy}} WHERE notification_id = {{notification_id}}",
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
                  "successMessage": "notifications updated successfully!",
                  "errorMessage": "There was an error updating notifications."
                }
              }]
            }
          }]
        }
      };


    global.DeleteNotifications_object = {
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
                    "queryPayload": "UPDATE notifications SET status = 'inactive' WHERE notification_id = {{id}}",
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
                "successMessage": "notifications deleted successfully!",
                "errorMessage": "There was an error deleting notifications."
            }
            }]
        }
        }]
    }
    };


      global.AddNotifications_object = {
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
                            "name": "notifications_notificationTitle",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "notifications_notificationMessage",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "notifications_sentToUserRoleDesignationDepartmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "notifications_updatedBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }
                    ]

                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "INSERT",
                      "queryPayload": "INSERT INTO notifications (notification_title, notification_message, sent_to_user_role_designation_department_id, updated_by) VALUES ({{notification_id}}, {{notification_title}}, {{notification_message}}, {{sent_to_user_role_designation_department_id}}, {{status}}, {{updated_by}}, {{updated_at}}, {{created_at}})",
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
                  "successMessage": "notifications added successfully!",
                  "errorMessage": "There was an error adding notifications."
                }
              }]
            }
          }]
        }
      };