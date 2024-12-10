/* API Objects for table: tasks */

      global.ListTasksAll_object = {
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
                      "queryPayload": "SELECT task_id as Tasks_taskId, task_title as Tasks_taskTitle, task_description as Tasks_taskDescription, parent_task_id as Tasks_parentTaskId, attachement_id as Tasks_attachementId, task_flow_id as Tasks_taskFlowId, task_assigned_to_user_role_designation_department_id as Tasks_taskAssignedToUserRoleDesignationDepartmentId, status as Tasks_status, created_by_user_role_designation_department_id as Tasks_createdByUserRoleDesignationDepartmentId, updated_at as Tasks_updatedAt, created_at as Tasks_createdAt, updated_by as Tasks_updatedBy, COUNT(*) OVER () AS table_count FROM Tasks",
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
                  "successMessage": "Tasks retrieved successfully!",
                  "errorMessage": "Failed to retrieve Tasks."
                }
              }]
            }
          }]
        }
      };


      global.ListTasks_object = {
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
                      "queryPayload": "SELECT task_id as Tasks_taskId, task_title as Tasks_taskTitle, task_description as Tasks_taskDescription, parent_task_id as Tasks_parentTaskId, attachement_id as Tasks_attachementId, task_flow_id as Tasks_taskFlowId, task_assigned_to_user_role_designation_department_id as Tasks_taskAssignedToUserRoleDesignationDepartmentId, status as Tasks_status, created_by_user_role_designation_department_id as Tasks_createdByUserRoleDesignationDepartmentId, updated_at as Tasks_updatedAt, created_at as Tasks_createdAt, updated_by as Tasks_updatedBy FROM Tasks WHERE task_id = {{id}}",
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
                  "successMessage": "Tasks entry retrieved successfully!",
                  "errorMessage": "Failed to retrieve Tasks entry."
                }
              }]
            }
          }]
        }
      };


      global.UpdateTasks_object = {
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
                            "name": "Tasks_taskTitle",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Tasks_taskDescription",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Tasks_parentTaskId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Tasks_attachementId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Tasks_taskFlowId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Tasks_taskAssignedToUserRoleDesignationDepartmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Tasks_createdByUserRoleDesignationDepartmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Tasks_updatedBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }
                    ]
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "UPDATE",
                      "queryPayload": "UPDATE Tasks SET task_title = {{Tasks_taskTitle}}, task_description = {{Tasks_taskDescription}}, parent_task_id = {{Tasks_parentTaskId}}, attachement_id = {{Tasks_attachementId}}, task_flow_id = {{Tasks_taskFlowId}}, task_assigned_to_user_role_designation_department_id = {{Tasks_taskAssignedToUserRoleDesignationDepartmentId}}, created_by_user_role_designation_department_id = {{Tasks_createdByUserRoleDesignationDepartmentId}}, updated_by = {{Tasks_updatedBy}} WHERE task_id = {{task_id}}",
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
                  "successMessage": "Tasks updated successfully!",
                  "errorMessage": "There was an error updating Tasks."
                }
              }]
            }
          }]
        }
      };


    global.DeleteTasks_object = {
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
                    "queryPayload": "UPDATE Tasks SET status = 'inactive' WHERE task_id = {{id}}",
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
                "successMessage": "Tasks deleted successfully!",
                "errorMessage": "There was an error deleting Tasks."
            }
            }]
        }
        }]
    }
    };


      global.Addtasks_object = {
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
                            "name": "tasks_taskTitle",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "tasks_taskDescription",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "tasks_parentTaskId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "tasks_attachementId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "tasks_taskFlowId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "tasks_taskAssignedToUserRoleDesignationDepartmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "tasks_createdByUserRoleDesignationDepartmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "tasks_updatedBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }
                    ]

                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "INSERT",
                      "queryPayload": "INSERT INTO tasks (task_title, task_description, parent_task_id, attachement_id, task_flow_id, task_assigned_to_user_role_designation_department_id, created_by_user_role_designation_department_id, updated_by) VALUES ({{task_id}}, {{task_title}}, {{task_description}}, {{parent_task_id}}, {{attachement_id}}, {{task_flow_id}}, {{task_assigned_to_user_role_designation_department_id}}, {{status}}, {{created_by_user_role_designation_department_id}}, {{updated_at}}, {{created_at}}, {{updated_by}})",
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
                  "successMessage": "tasks added successfully!",
                  "errorMessage": "There was an error adding tasks."
                }
              }]
            }
          }]
        }
      };