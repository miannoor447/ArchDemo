# API Middleware Architecture


## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [API Object Configuration](#api-object-configuration)
- [Middleware Components](#middleware-components)
- [Usage](#usage)
- [Installation](#installation)
- [License](#license)

## Overview

The goal of this architecture is to make server and API development as simple and intuitive as possible. By leveraging a central configuration for each API object and dynamically resolving components in middleware, this architecture provides a highly configurable and reusable structure.

The project aims to:
- Automate authorization checks, parameter validation, and other common API tasks.
- Minimize redundant code by modularizing functionality like token validation and permission checking.
- Allow developers to focus on API logic rather than boilerplate setup.

## Features

- **Authorization and Token Validation**: Easily manage API access with configurable token-based authorization.
- **Parameter Validation**: Ensure API inputs meet predefined requirements before processing.
- **Modular Handlers**: Load and execute handlers dynamically from predefined directories.
- **OTP and Email Handling**: Includes support for sending and verifying OTPs as well as sending emails.
- **Middleware-Based Architecture**: API configurations are resolved in middleware, simplifying API logic.
- **Encryption and Multi-Step Processing**: Configure APIs with encryption and multi-step workflows.

## API Object Configuration

Each API is represented as an object with various configurable options. The following is an example of an API object that will be resolved in middleware and processed accordingly:

```js
{
  authorization: {
    accessToken: false,
  },
  multistep: true,
  encryption: true,
  parameters: true,
  validation: true,
  sendOTP: true,
  verifyOTP: false,
  querying: true,
  sendEmail: true,
  callBackFunction: true,
  pagination: false,
}
```

### Key Config Options:
- **authorization**: Controls access token validation.
- **multistep**: Enables multi-step processing for complex workflows.
- **encryption**: Indicates whether data should be encrypted.
- **parameters**: Toggles parameter validation middleware.
- **validation**: Enables validation of request data.
- **sendOTP**: Handles sending OTPs to users.
- **verifyOTP**: Verifies OTPs provided by users.
- **querying**: Enables database querying capabilities.
- **sendEmail**: Sends emails as part of the API process.
- **callBackFunction**: Executes callback functions for API customization.
- **pagination**: Enables pagination in API responses.

## Middleware Components

The project is built around a set of modular components, each performing a specific task in API processing. Some key middleware components include:

### Handlers:

1. **sendResponse**: Standardizes API responses.
2. **validateToken**: Validates access tokens for authorized requests.
3. **permissionChecker**: Checks user permissions based on the API request.
4. **loadHandlerFromDirectory**: Dynamically loads the appropriate handler from a specified directory.
5. **objectResolver**: Resolves the API object and processes it accordingly.
6. **validateParametersMiddleware**: Validates parameters in API requests.

### Global Variables:
- `global.objectCache`: Caches loaded handlers for reuse.
- `global.objectCache`: Caches permissions associated with API requests.

The middleware handles the core processing of API requests, dynamically loading handlers and resolving configuration settings for each API.

## Usage

1. Define your API object configuration for each API.
2. Middleware processes the request based on the configuration:
   - Token validation (platformToken and accessToken)
   - Permission checks
   - Parameter validation (see all validations in Constants/validateParameters.js)
   - Multi-step workflows
   - Optional OTP functionality
3. Handlers are dynamically loaded, and API logic is executed based on the resolved configuration.

## Installation

1. Clone the repository.
2. Install dependencies using:

```bash
npm install
```
4. Start the server using:

```bash
npm start
```

## License

This project is licensed under the MIT License.

---


features: [
      {
          title: 'Applicant',
          description: 'Applying to university for admission',
          modules: [
              {
                  title: 'Application Management',
                  description: 'Allows applicants to manage their application by providing personal details, academic records, and payment information for selected programs.',
                  cardStatus: 'Completed',
                  functionalities: [
                      {
                          title: 'Program Selection',
                          description: 'Applicants select their preferred programs (BS, MS, PhD) during the application process.'
                      },
                      {
                          title: 'Personal Information',
                          description: 'Applicants provide personal, guardian, and address details required for the application.'
                      },
                      {
                          title: 'Academic Information',
                          description: 'Applicants upload necessary documents, including transcripts, ID, and certificates, to complete academic requirements.'
                      },
                      {
                          title: 'Fee Payment',
                          description: 'Applicants submit the application fee and track payment status within the application portal.'
                      }
                  ]
              },
              {
                  title: 'Test Selection',
                  description: 'Allows applicants to choose their preferred tests and provide relevant scores and verification documents for admission.',
                  cardStatus:'In_Progress',
                  functionalities: [
                      {
                          title: 'Preferred Test Selection',
                          description: 'Applicants select their preferred admission test(s) from available options, such as ITU or other approved tests.'
                      },
                      {
                          title: 'Test Score Submission',
                          description: 'Applicants submit their test scores and upload any required verification documents to complete test requirements.',
                          taskStatus:'done'
                      }
                  ]
              },
          ]
      },
      {
          title: 'Main Admin',
          description: 'Overseeing sub-admins',
          modules: [
              {
                  title: 'Performance Monitoring',
                  description: 'Tracks sub-admin activities and application statuses.',
                  functionalities: [
                      {
                          title: 'View Sub-Admin Activity Reports',
                          description: 'View details of each sub-admin’s activities.Monitors applications reviewed, accepted, or rejected by each sub-admin.'
                      },

                  ]

              },
          ]
      },
      {
          title: 'Sub Admin',
          description: 'Academic team managing applications',
          modules: [
              {
                  title: 'Dashboard',
                  description: 'Provides metrics and summaries of application statuses.',
                  cardStatus:'Completed',
                  functionalities: [
                      {
                          title: 'Track Performance Metrics',
                          description: 'Tracks applications reviewed, accepted, or rejected by him.',
                          taskStatus:'done'
                      },
                      {
                          title: 'View Summary Blocks',
                          description: 'Displays applications by type (BS, MS, PhD)',
                          taskStatus:'done'
                      }
                  ]
              },        
          ]
      },
      {
          title: 'IT Team',
          description: 'Handling technical assignments for admissions',
          modules: [
              {
                  title: 'Roll Number & Venue Assignment',
                  description: 'Module for generating unique roll numbers and assigning test venues for applicants',
                  functionalities: [
                      {
                          title: 'Generate Unique Roll Numbers',
                          description: 'Generates unique roll numbers for each verified applicant.',

                      },
                      {
                          title: 'Assign Test Venues',
                          description: 'Assigns test venues based on available seating.',

                      }

                  ]

              },
          ]
      },
  ],