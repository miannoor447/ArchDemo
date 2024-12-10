/* API Objects for table: user_roles_designations_department */

      global.ListUser_roles_designations_departmentAll_object = {
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
                      "queryPayload": "SELECT user_role_designation_department_id as user_roles_designations_department_userRoleDesignationDepartmentId, role_designation_department_id as user_roles_designations_department_roleDesignationDepartmentId, user_id as user_roles_designations_department_userId, start_date as user_roles_designations_department_startDate, end_date as user_roles_designations_department_endDate, status as user_roles_designations_department_status, updated_by as user_roles_designations_department_updatedBy, created_at as user_roles_designations_department_createdAt, updated_at as user_roles_designations_department_updatedAt, COUNT(*) OVER () AS table_count FROM user_roles_designations_department",
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
                  "successMessage": "user_roles_designations_department retrieved successfully!",
                  "errorMessage": "Failed to retrieve user_roles_designations_department."
                }
              }]
            }
          }]
        }
      };


      global.ListUser_roles_designations_department_object = {
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
                      "queryPayload": "SELECT user_role_designation_department_id as user_roles_designations_department_userRoleDesignationDepartmentId, role_designation_department_id as user_roles_designations_department_roleDesignationDepartmentId, user_id as user_roles_designations_department_userId, start_date as user_roles_designations_department_startDate, end_date as user_roles_designations_department_endDate, status as user_roles_designations_department_status, updated_by as user_roles_designations_department_updatedBy, created_at as user_roles_designations_department_createdAt, updated_at as user_roles_designations_department_updatedAt FROM user_roles_designations_department WHERE user_role_designation_department_id = {{id}}",
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
                  "successMessage": "user_roles_designations_department entry retrieved successfully!",
                  "errorMessage": "Failed to retrieve user_roles_designations_department entry."
                }
              }]
            }
          }]
        }
      };


      global.UpdateUser_roles_designations_department_object = {
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
                            "name": "user_roles_designations_department_userRoleDesignationDepartmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "user_roles_designations_department_roleDesignationDepartmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "user_roles_designations_department_userId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "user_roles_designations_department_startDate",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "user_roles_designations_department_endDate",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "user_roles_designations_department_updatedBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }
                    ]
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "UPDATE",
                      "queryPayload": "UPDATE user_roles_designations_department SET user_role_designation_department_id = {{user_roles_designations_department_userRoleDesignationDepartmentId}}, role_designation_department_id = {{user_roles_designations_department_roleDesignationDepartmentId}}, user_id = {{user_roles_designations_department_userId}}, start_date = {{user_roles_designations_department_startDate}}, end_date = {{user_roles_designations_department_endDate}}, updated_by = {{user_roles_designations_department_updatedBy}} WHERE user_role_designation_department_id = {{user_role_designation_department_id}}",
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
                  "successMessage": "user_roles_designations_department updated successfully!",
                  "errorMessage": "There was an error updating user_roles_designations_department."
                }
              }]
            }
          }]
        }
      };


    global.DeleteUser_roles_designations_department_object = {
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
                    "queryPayload": "UPDATE user_roles_designations_department SET status = 'inactive' WHERE user_role_designation_department_id = {{id}}",
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
                "successMessage": "user_roles_designations_department deleted successfully!",
                "errorMessage": "There was an error deleting user_roles_designations_department."
            }
            }]
        }
        }]
    }
    };


      global.AddUser_roles_designations_department_object = {
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
                            "name": "user_roles_designations_department_roleDesignationDepartmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "user_roles_designations_department_userId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "user_roles_designations_department_startDate",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "user_roles_designations_department_endDate",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "user_roles_designations_department_updatedBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }
                    ]

                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "INSERT",
                      "queryPayload": "INSERT INTO user_roles_designations_department (role_designation_department_id, user_id, start_date, end_date, updated_by) VALUES ({{user_role_designation_department_id}}, {{role_designation_department_id}}, {{user_id}}, {{start_date}}, {{end_date}}, {{status}}, {{updated_by}}, {{created_at}}, {{updated_at}})",
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
                  "successMessage": "user_roles_designations_department added successfully!",
                  "errorMessage": "There was an error adding user_roles_designations_department."
                }
              }]
            }
          }]
        }
      };