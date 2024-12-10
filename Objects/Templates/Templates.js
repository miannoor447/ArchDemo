/* API Objects for table: templates */

      global.ListTemplatesAll_object = {
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
                      "queryPayload": "SELECT template_id as Templates_templateId, created_by_user_designation_department_id as Templates_createdByUserDesignationDepartmentId, template_type as Templates_templateType, template_title as Templates_templateTitle, template_body as Templates_templateBody, template_desc as Templates_templateDesc, template_audience as Templates_templateAudience, template_department as Templates_templateDepartment, list_of_attributes as Templates_listOfAttributes, status as Templates_status, updated_by as Templates_updatedBy, created_at as Templates_createdAt, updated_at as Templates_updatedAt, COUNT(*) OVER () AS table_count FROM Templates",
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
                  "successMessage": "Templates retrieved successfully!",
                  "errorMessage": "Failed to retrieve Templates."
                }
              }]
            }
          }]
        }
      };


      global.ListTemplates_object = {
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
                      "queryPayload": "SELECT template_id as Templates_templateId, created_by_user_designation_department_id as Templates_createdByUserDesignationDepartmentId, template_type as Templates_templateType, template_title as Templates_templateTitle, template_body as Templates_templateBody, template_desc as Templates_templateDesc, template_audience as Templates_templateAudience, template_department as Templates_templateDepartment, list_of_attributes as Templates_listOfAttributes, status as Templates_status, updated_by as Templates_updatedBy, created_at as Templates_createdAt, updated_at as Templates_updatedAt FROM Templates WHERE template_id = {{id}}",
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
                  "successMessage": "Templates entry retrieved successfully!",
                  "errorMessage": "Failed to retrieve Templates entry."
                }
              }]
            }
          }]
        }
      };


      global.UpdateTemplates_object = {
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
                            "name": "Templates_createdByUserDesignationDepartmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Templates_templateType",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Templates_templateTitle",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Templates_templateBody",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Templates_templateDesc",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Templates_templateAudience",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Templates_templateDepartment",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Templates_listOfAttributes",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Templates_updatedBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }
                    ]
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "UPDATE",
                      "queryPayload": "UPDATE Templates SET created_by_user_designation_department_id = {{Templates_createdByUserDesignationDepartmentId}}, template_type = {{Templates_templateType}}, template_title = {{Templates_templateTitle}}, template_body = {{Templates_templateBody}}, template_desc = {{Templates_templateDesc}}, template_audience = {{Templates_templateAudience}}, template_department = {{Templates_templateDepartment}}, list_of_attributes = {{Templates_listOfAttributes}}, updated_by = {{Templates_updatedBy}} WHERE template_id = {{template_id}}",
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
                  "successMessage": "Templates updated successfully!",
                  "errorMessage": "There was an error updating Templates."
                }
              }]
            }
          }]
        }
      };


    global.DeleteTemplates_object = {
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
                    "queryPayload": "UPDATE Templates SET status = 'inactive' WHERE template_id = {{id}}",
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
                "successMessage": "Templates deleted successfully!",
                "errorMessage": "There was an error deleting Templates."
            }
            }]
        }
        }]
    }
    };


      global.Addtemplates_object = {
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
                            "name": "templates_createdByUserDesignationDepartmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "templates_templateType",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "templates_templateTitle",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "templates_templateBody",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "templates_templateDesc",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "templates_templateAudience",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "templates_templateDepartment",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "templates_listOfAttributes",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "templates_updatedBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }
                    ]

                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "INSERT",
                      "queryPayload": "INSERT INTO templates (created_by_user_designation_department_id, template_type, template_title, template_body, template_desc, template_audience, template_department, list_of_attributes, updated_by) VALUES ({{template_id}}, {{created_by_user_designation_department_id}}, {{template_type}}, {{template_title}}, {{template_body}}, {{template_desc}}, {{template_audience}}, {{template_department}}, {{list_of_attributes}}, {{status}}, {{updated_by}}, {{created_at}}, {{updated_at}})",
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
                  "successMessage": "templates added successfully!",
                  "errorMessage": "There was an error adding templates."
                }
              }]
            }
          }]
        }
      };