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
                      "queryPayload": "SELECT attachment_id as attachments_attachmentId, attachment_name as attachments_attachmentName, attachment_type as attachments_attachmentType, attachment_size as attachments_attachmentSize, attachment_link as attachments_attachmentLink, uploaded_by_user_role_designation_department_id as attachments_uploadedByUserRoleDesignationDepartmentId, status as attachments_status, updated_by as attachments_updatedBy, created_at as attachments_createdAt, updated_at as attachments_updatedAt, COUNT(*) OVER () AS table_count FROM attachments",
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
                  "successMessage": "attachments retrieved successfully!",
                  "errorMessage": "Failed to retrieve attachments."
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
                      "queryPayload": "SELECT attachment_id as attachments_attachmentId, attachment_name as attachments_attachmentName, attachment_type as attachments_attachmentType, attachment_size as attachments_attachmentSize, attachment_link as attachments_attachmentLink, uploaded_by_user_role_designation_department_id as attachments_uploadedByUserRoleDesignationDepartmentId, status as attachments_status, updated_by as attachments_updatedBy, created_at as attachments_createdAt, updated_at as attachments_updatedAt FROM attachments WHERE attachment_id = {{id}}",
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
                  "successMessage": "attachments entry retrieved successfully!",
                  "errorMessage": "Failed to retrieve attachments entry."
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
                            "name": "attachments_attachmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
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
                      "queryNature": "UPDATE",
                      "queryPayload": "UPDATE attachments SET attachment_id = {{attachments_attachmentId}}, attachment_name = {{attachments_attachmentName}}, attachment_type = {{attachments_attachmentType}}, attachment_size = {{attachments_attachmentSize}}, attachment_link = {{attachments_attachmentLink}}, uploaded_by_user_role_designation_department_id = {{attachments_uploadedByUserRoleDesignationDepartmentId}}, updated_by = {{attachments_updatedBy}} WHERE attachment_id = {{attachment_id}}",
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
                  "successMessage": "attachments updated successfully!",
                  "errorMessage": "There was an error updating attachments."
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
                    "queryPayload": "UPDATE attachments SET status = 'inactive' WHERE attachment_id = {{id}}",
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
                "successMessage": "attachments deleted successfully!",
                "errorMessage": "There was an error deleting attachments."
            }
            }]
        }
        }]
    }
    };


      global.AddAttachments_object = {
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