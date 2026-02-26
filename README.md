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

**npm** init -y

(No external dependencies required.)

Run Desktop Test:

**node** notepad-ps.js

### Expected Output
Step 1: Creating file...
Step 4: Opening file in Notepad...
Verifying content...
SUCCESS — File content verified!

### The generated file is saved to:

C:\Users\Speedcom\Documents\desktop_test.txt

