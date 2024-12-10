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
                      "queryPayload": "SELECT task_id as tasks_taskId, task_title as tasks_taskTitle, task_description as tasks_taskDescription, parent_task_id as tasks_parentTaskId, attachement_id as tasks_attachementId, task_flow_id as tasks_taskFlowId, task_assigned_to_user_role_designation_department_id as tasks_taskAssignedToUserRoleDesignationDepartmentId, status as tasks_status, created_by_user_role_designation_department_id as tasks_createdByUserRoleDesignationDepartmentId, updated_at as tasks_updatedAt, created_at as tasks_createdAt, updated_by as tasks_updatedBy, COUNT(*) OVER () AS table_count FROM tasks",
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
                  "successMessage": "tasks retrieved successfully!",
                  "errorMessage": "Failed to retrieve tasks."
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
                      "queryPayload": "SELECT task_id as tasks_taskId, task_title as tasks_taskTitle, task_description as tasks_taskDescription, parent_task_id as tasks_parentTaskId, attachement_id as tasks_attachementId, task_flow_id as tasks_taskFlowId, task_assigned_to_user_role_designation_department_id as tasks_taskAssignedToUserRoleDesignationDepartmentId, status as tasks_status, created_by_user_role_designation_department_id as tasks_createdByUserRoleDesignationDepartmentId, updated_at as tasks_updatedAt, created_at as tasks_createdAt, updated_by as tasks_updatedBy FROM tasks WHERE task_id = {{id}}",
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
                  "successMessage": "tasks entry retrieved successfully!",
                  "errorMessage": "Failed to retrieve tasks entry."
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
                            "name": "tasks_taskId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
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
                      "queryNature": "UPDATE",
                      "queryPayload": "UPDATE tasks SET task_id = {{tasks_taskId}}, task_title = {{tasks_taskTitle}}, task_description = {{tasks_taskDescription}}, parent_task_id = {{tasks_parentTaskId}}, attachement_id = {{tasks_attachementId}}, task_flow_id = {{tasks_taskFlowId}}, task_assigned_to_user_role_designation_department_id = {{tasks_taskAssignedToUserRoleDesignationDepartmentId}}, created_by_user_role_designation_department_id = {{tasks_createdByUserRoleDesignationDepartmentId}}, updated_by = {{tasks_updatedBy}} WHERE task_id = {{task_id}}",
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
                  "successMessage": "tasks updated successfully!",
                  "errorMessage": "There was an error updating tasks."
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
                    "queryPayload": "UPDATE tasks SET status = 'inactive' WHERE task_id = {{id}}",
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
                "successMessage": "tasks deleted successfully!",
                "errorMessage": "There was an error deleting tasks."
            }
            }]
        }
        }]
    }
    };


      global.AddTasks_object = {
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