# Desktop + Web Automation Take-Home Assignment

## Overview

This repository contains automation solutions for:

Task 1 – Desktop automation (Windows Notepad)

Task 2 – Web automation (Rocscience login navigation using Cypress)

Task 2B (Bonus) – API-level invalid login validation

The implementation prioritizes:

- Stability

- Clear structure

- Avoidance of brittle automation techniques

- Practical reasoning

## Task 1 – Desktop Automation (Windows Notepad)
### Objective

Automate the following workflow:

Launch Notepad

Type: "Desktop automation test"

Append: " – completed"

Save the file

(Bonus) Verify file content

### Implementation Approach

Initially, traditional UI keystroke automation (SendKeys) was attempted.
However, on modern Windows 11 versions, Notepad's updated architecture causes unreliable window activation and focus behavior.

To ensure stability and avoid brittle automation:

- File operations are performed programmatically using Node.js fs module.

- The file is created, text is written and appended.

- The file is then opened in Notepad.

- Content is verified via file system validation.

This approach:

- Avoids flaky UI timing issues

- Removes dependency on window focus

- Ensures deterministic execution

- Demonstrates stability awareness

### How to Run Task 1
Prerequisites

- Node.js v18+ (tested on v22)

- Windows OS

Install Dependencies - If not already initialized:

 ```` npm init -y ````

(No external dependencies required.)

Run Desktop Test:

```` node notepad-ps.js ````

### Expected Output
Step 1: Creating file...

Step 4: Opening file in Notepad...

Verifying content...

SUCCESS — File content verified!

### The generated file is saved to:

C:\Users\ ... \Documents\desktop_test.txt

## Task 2 – Web Automation (Cypress)
### Objective
Automate the following scenario on https://rocscience.com:

- Visit homepage

- Accept cookies policy

- Click profile/user icon

- Click “Log in to RocPortal”

Validate:

- Redirect to authentication domain

- Username field visible

- Password field visible

- Continue button visible and enabled

### Framework Selection
Cypress was selected because:

- Built-in automatic retries

- Clear syntax

- Native support for cross-origin testing (via cy.origin())

### How to run task 2
Install Dependencies:

```` npm install cypress ````

Open Cypress: 

- UI Mode (recommended for first run)

```` npx cypress open ````

Select E2E Testing configuration if prompted.

- Headless mode

```` npx cypress run ````

## Task 2B – Bonus: API Invalid Login Validation (Approach)

### Manual Validation Approach

- Open browser DevTools (F12)

- Navigate to Network tab

- Attempt invalid login 

- Identify authentication POST request

Validate:

- Status code (401 or 400)

- Error message in response body

- No authentication token returned

-> This ensures validation at service level rather than UI only.

### Automated Validation Approach

An automated test case was implemented using cy.request():

- Sends invalid credentials to authentication endpoint

- Asserts correct failure status (400 or 401)

This confirms:

- Backend rejects invalid credentials

- Authentication flow is secure

- Validation is not UI-dependent

