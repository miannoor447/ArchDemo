/* API Objects for table: roles_designations_department */

      global.ListRoles_designations_departmentAll_object = {
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
                      "queryPayload": "SELECT role_designation_department_id as roles_designations_department_roleDesignationDepartmentId, designation_id as roles_designations_department_designationId, role_id as roles_designations_department_roleId, department_id as roles_designations_department_departmentId, status as roles_designations_department_status, updated_by as roles_designations_department_updatedBy, created_at as roles_designations_department_createdAt, updated_at as roles_designations_department_updatedAt, COUNT(*) OVER () AS table_count FROM roles_designations_department",
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
                  "successMessage": "roles_designations_department retrieved successfully!",
                  "errorMessage": "Failed to retrieve roles_designations_department."
                }
              }]
            }
          }]
        }
      };


      global.ListRoles_designations_department_object = {
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
                      "queryPayload": "SELECT role_designation_department_id as roles_designations_department_roleDesignationDepartmentId, designation_id as roles_designations_department_designationId, role_id as roles_designations_department_roleId, department_id as roles_designations_department_departmentId, status as roles_designations_department_status, updated_by as roles_designations_department_updatedBy, created_at as roles_designations_department_createdAt, updated_at as roles_designations_department_updatedAt FROM roles_designations_department WHERE role_designation_department_id = {{id}}",
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
                  "successMessage": "roles_designations_department entry retrieved successfully!",
                  "errorMessage": "Failed to retrieve roles_designations_department entry."
                }
              }]
            }
          }]
        }
      };


      global.UpdateRoles_designations_department_object = {
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
                            "name": "roles_designations_department_roleDesignationDepartmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "roles_designations_department_designationId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "roles_designations_department_roleId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "roles_designations_department_departmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "roles_designations_department_updatedBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }
                    ]
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "UPDATE",
                      "queryPayload": "UPDATE roles_designations_department SET role_designation_department_id = {{roles_designations_department_roleDesignationDepartmentId}}, designation_id = {{roles_designations_department_designationId}}, role_id = {{roles_designations_department_roleId}}, department_id = {{roles_designations_department_departmentId}}, updated_by = {{roles_designations_department_updatedBy}} WHERE role_designation_department_id = {{role_designation_department_id}}",
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
                  "successMessage": "roles_designations_department updated successfully!",
                  "errorMessage": "There was an error updating roles_designations_department."
                }
              }]
            }
          }]
        }
      };


    global.DeleteRoles_designations_department_object = {
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
                    "queryPayload": "UPDATE roles_designations_department SET status = 'inactive' WHERE role_designation_department_id = {{id}}",
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
                "successMessage": "roles_designations_department deleted successfully!",
                "errorMessage": "There was an error deleting roles_designations_department."
            }
            }]
        }
        }]
    }
    };


      global.AddRoles_designations_department_object = {
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
                            "name": "roles_designations_department_designationId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "roles_designations_department_roleId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "roles_designations_department_departmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "roles_designations_department_updatedBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }
                    ]

                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "INSERT",
                      "queryPayload": "INSERT INTO roles_designations_department (designation_id, role_id, department_id, updated_by) VALUES ({{role_designation_department_id}}, {{designation_id}}, {{role_id}}, {{department_id}}, {{status}}, {{updated_by}}, {{created_at}}, {{updated_at}})",
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
                  "successMessage": "roles_designations_department added successfully!",
                  "errorMessage": "There was an error adding roles_designations_department."
                }
              }]
            }
          }]
        }
      };