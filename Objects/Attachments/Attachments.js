/* API Objects for table: attachments */

      global.ListAttachmentsAll_object = {
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
                      "queryPayload": "SELECT attachment_id as Attachments_attachmentId, attachment_name as Attachments_attachmentName, attachment_type as Attachments_attachmentType, attachment_size as Attachments_attachmentSize, attachment_link as Attachments_attachmentLink, uploaded_by_user_role_designation_department_id as Attachments_uploadedByUserRoleDesignationDepartmentId, status as Attachments_status, updated_by as Attachments_updatedBy, created_at as Attachments_createdAt, updated_at as Attachments_updatedAt, COUNT(*) OVER () AS table_count FROM Attachments",
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
                  "successMessage": "Attachments retrieved successfully!",
                  "errorMessage": "Failed to retrieve Attachments."
                }
              }]
            }
          }]
        }
      };


      global.ListAttachments_object = {
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
                      "queryPayload": "SELECT attachment_id as Attachments_attachmentId, attachment_name as Attachments_attachmentName, attachment_type as Attachments_attachmentType, attachment_size as Attachments_attachmentSize, attachment_link as Attachments_attachmentLink, uploaded_by_user_role_designation_department_id as Attachments_uploadedByUserRoleDesignationDepartmentId, status as Attachments_status, updated_by as Attachments_updatedBy, created_at as Attachments_createdAt, updated_at as Attachments_updatedAt FROM Attachments WHERE attachment_id = {{id}}",
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
                  "successMessage": "Attachments entry retrieved successfully!",
                  "errorMessage": "Failed to retrieve Attachments entry."
                }
              }]
            }
          }]
        }
      };


      global.UpdateAttachments_object = {
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
                            "name": "Attachments_attachmentName",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Attachments_attachmentType",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Attachments_attachmentSize",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Attachments_attachmentLink",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Attachments_uploadedByUserRoleDesignationDepartmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Attachments_updatedBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }
                    ]
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "UPDATE",
                      "queryPayload": "UPDATE Attachments SET attachment_name = {{Attachments_attachmentName}}, attachment_type = {{Attachments_attachmentType}}, attachment_size = {{Attachments_attachmentSize}}, attachment_link = {{Attachments_attachmentLink}}, uploaded_by_user_role_designation_department_id = {{Attachments_uploadedByUserRoleDesignationDepartmentId}}, updated_by = {{Attachments_updatedBy}} WHERE attachment_id = {{attachment_id}}",
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
                  "successMessage": "Attachments updated successfully!",
                  "errorMessage": "There was an error updating Attachments."
                }
              }]
            }
          }]
        }
      };


    global.DeleteAttachments_object = {
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
                    "queryPayload": "UPDATE Attachments SET status = 'inactive' WHERE attachment_id = {{id}}",
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
                "successMessage": "Attachments deleted successfully!",
                "errorMessage": "There was an error deleting Attachments."
            }
            }]
        }
        }]
    }
    };


      global.Addattachments_object = {
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
                            "name": "attachments_attachmentName",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "attachments_attachmentType",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "attachments_attachmentSize",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "attachments_attachmentLink",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "attachments_uploadedByUserRoleDesignationDepartmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "attachments_updatedBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }
                    ]

                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "INSERT",
                      "queryPayload": "INSERT INTO attachments (attachment_name, attachment_type, attachment_size, attachment_link, uploaded_by_user_role_designation_department_id, updated_by) VALUES ({{attachment_id}}, {{attachment_name}}, {{attachment_type}}, {{attachment_size}}, {{attachment_link}}, {{uploaded_by_user_role_designation_department_id}}, {{status}}, {{updated_by}}, {{created_at}}, {{updated_at}})",
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
                  "successMessage": "attachments added successfully!",
                  "errorMessage": "There was an error adding attachments."
                }
              }]
            }
          }]
        }
      };