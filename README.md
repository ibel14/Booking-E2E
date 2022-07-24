# Booking E2E test

Tests are executed using the Cypress framework

# Preparations
This project was created using nodejs version 16.5.0. 

In case of issues with launching test cases check the installed nodejs version.

# Download
Download project files using:

```
git clone https://github.com/ponaehali/e2e-booking
```

Navigate to the directory with downloaded files and install all required dependencies for project using:

```
npm install
```

# Start
To run test-cases launch cypress using:

```
npx cypress run
```

## Additional notes:

Please note that the tests use the command - write, you can see that code in cypress/support/commands.js

The Page Object Pattern approach is also used for tests.
