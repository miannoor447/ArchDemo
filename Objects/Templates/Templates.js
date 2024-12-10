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
                      "queryPayload": "SELECT template_id as templates_templateId, created_by_user_designation_department_id as templates_createdByUserDesignationDepartmentId, template_type as templates_templateType, template_title as templates_templateTitle, template_body as templates_templateBody, template_desc as templates_templateDesc, template_audience as templates_templateAudience, template_department as templates_templateDepartment, list_of_attributes as templates_listOfAttributes, status as templates_status, updated_by as templates_updatedBy, created_at as templates_createdAt, updated_at as templates_updatedAt, COUNT(*) OVER () AS table_count FROM templates",
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
                  "successMessage": "templates retrieved successfully!",
                  "errorMessage": "Failed to retrieve templates."
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
                      "queryPayload": "SELECT template_id as templates_templateId, created_by_user_designation_department_id as templates_createdByUserDesignationDepartmentId, template_type as templates_templateType, template_title as templates_templateTitle, template_body as templates_templateBody, template_desc as templates_templateDesc, template_audience as templates_templateAudience, template_department as templates_templateDepartment, list_of_attributes as templates_listOfAttributes, status as templates_status, updated_by as templates_updatedBy, created_at as templates_createdAt, updated_at as templates_updatedAt FROM templates WHERE template_id = {{id}}",
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
                  "successMessage": "templates entry retrieved successfully!",
                  "errorMessage": "Failed to retrieve templates entry."
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
                            "name": "templates_templateId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
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
                      "queryNature": "UPDATE",
                      "queryPayload": "UPDATE templates SET template_id = {{templates_templateId}}, created_by_user_designation_department_id = {{templates_createdByUserDesignationDepartmentId}}, template_type = {{templates_templateType}}, template_title = {{templates_templateTitle}}, template_body = {{templates_templateBody}}, template_desc = {{templates_templateDesc}}, template_audience = {{templates_templateAudience}}, template_department = {{templates_templateDepartment}}, list_of_attributes = {{templates_listOfAttributes}}, updated_by = {{templates_updatedBy}} WHERE template_id = {{template_id}}",
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
                  "successMessage": "templates updated successfully!",
                  "errorMessage": "There was an error updating templates."
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
                    "queryPayload": "UPDATE templates SET status = 'inactive' WHERE template_id = {{id}}",
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
                "successMessage": "templates deleted successfully!",
                "errorMessage": "There was an error deleting templates."
            }
            }]
        }
        }]
    }
    };


      global.AddTemplates_object = {
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