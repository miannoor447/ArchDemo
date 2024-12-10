/* API Objects for table: task_history */

      global.ListTask_historyAll_object = {
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
                      "queryPayload": "SELECT task_history_id as task_history_taskHistoryId, task_id as task_history_taskId, task_flow_step_id as task_history_taskFlowStepId, action as task_history_action, status as task_history_status, action_by_user_role_designation_department_id as task_history_actionByUserRoleDesignationDepartmentId, updated_at as task_history_updatedAt, created_at as task_history_createdAt, updated_by as task_history_updatedBy, COUNT(*) OVER () AS table_count FROM task_history",
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
                  "successMessage": "task_history retrieved successfully!",
                  "errorMessage": "Failed to retrieve task_history."
                }
              }]
            }
          }]
        }
      };


      global.ListTask_history_object = {
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
                      "queryPayload": "SELECT task_history_id as task_history_taskHistoryId, task_id as task_history_taskId, task_flow_step_id as task_history_taskFlowStepId, action as task_history_action, status as task_history_status, action_by_user_role_designation_department_id as task_history_actionByUserRoleDesignationDepartmentId, updated_at as task_history_updatedAt, created_at as task_history_createdAt, updated_by as task_history_updatedBy FROM task_history WHERE task_history_id = {{id}}",
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
                  "successMessage": "task_history entry retrieved successfully!",
                  "errorMessage": "Failed to retrieve task_history entry."
                }
              }]
            }
          }]
        }
      };


      global.UpdateTask_history_object = {
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
                            "name": "task_history_taskHistoryId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "task_history_taskId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "task_history_taskFlowStepId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "task_history_action",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "task_history_actionByUserRoleDesignationDepartmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "task_history_updatedBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }
                    ]
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "UPDATE",
                      "queryPayload": "UPDATE task_history SET task_history_id = {{task_history_taskHistoryId}}, task_id = {{task_history_taskId}}, task_flow_step_id = {{task_history_taskFlowStepId}}, action = {{task_history_action}}, action_by_user_role_designation_department_id = {{task_history_actionByUserRoleDesignationDepartmentId}}, updated_by = {{task_history_updatedBy}} WHERE task_history_id = {{task_history_id}}",
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
                  "successMessage": "task_history updated successfully!",
                  "errorMessage": "There was an error updating task_history."
                }
              }]
            }
          }]
        }
      };


    global.DeleteTask_history_object = {
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
                    "queryPayload": "UPDATE task_history SET status = 'inactive' WHERE task_history_id = {{id}}",
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
                "successMessage": "task_history deleted successfully!",
                "errorMessage": "There was an error deleting task_history."
            }
            }]
        }
        }]
    }
    };


      global.AddTask_history_object = {
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
                            "name": "task_history_taskId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "task_history_taskFlowStepId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "task_history_action",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "task_history_actionByUserRoleDesignationDepartmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "task_history_updatedBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }
                    ]

                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "INSERT",
                      "queryPayload": "INSERT INTO task_history (task_id, task_flow_step_id, action, action_by_user_role_designation_department_id, updated_by) VALUES ({{task_history_id}}, {{task_id}}, {{task_flow_step_id}}, {{action}}, {{status}}, {{action_by_user_role_designation_department_id}}, {{updated_at}}, {{created_at}}, {{updated_by}})",
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
                  "successMessage": "task_history added successfully!",
                  "errorMessage": "There was an error adding task_history."
                }
              }]
            }
          }]
        }
      };