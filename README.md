# Itera JavaScript home assignment

The goal is to implement components that will display data from backend API.

## Description

This application is a simple SPA which shows the list of employees of some company, that can be filtered based on selected department.

There are two components `DepartmentFilter` and `EmployeeList`. The first one is a `select` which should contain options for selecting specific department and also for selecting people from all departments. The `EmployeeList` lists basic properties of employee in a table. For now, they are just React components with static markup, but you need to make them "come to life".

The backend API can be run by executing `npm run start-json-server` and it will be available at `http://localhost:3001`. It uses `json-server` library and it exposes these resources:

    Resources
    http://localhost:3001/employees
    http://localhost:3001/departments

To see full contents of "database", please see `db.json` file.

## Assignment

You are expected to develop these steps:

1. Implement `DepartmentFilter`, so that it shows list of departments from `departments` endpoint
2. Implement `EmployeeList`, so that is shows list of employees from `employees` endpoint
3. When selecting department, display only employees from specific department.
4. BONUS: Add ability to display employee details by clicking on name. You can use `GET /employees/{id}` call.

Other remarks:

- You can add/remove dependencies that you are familiar with and will "do the job".
    - Using state management library like Redux or Mobx is not required, but welcome. Using pure React is OK.
    - Using library for fetching data from backend like Axios is okay as well as using `fetch` API
- Unit tests are expected, but 100% coverage is not necessary. You need to prove ability to write frontend tests.
- "Production-like" code quality is expected. Application should not throw any errors or warnings in console.
- NB: Pagination and sorting is out of scope for this assignment.
- Usage of best-practices is highly anticipated

Assignment should be done in 2-4 hours, depending on seniority. Compressed archived containing **source code only** is then to be sent to Itera HR.

# `create-react-app` documentation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.