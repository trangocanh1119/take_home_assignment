const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const FILE_NAME = "desktop_test.txt";
const SAVE_PATH = path.join(process.env.USERPROFILE, "Documents", FILE_NAME);

const INITIAL_TEXT = "Desktop automation test";
const FINAL_TEXT = INITIAL_TEXT + " – completed";

async function runTest() {
  try {
    console.log("Step 1: Creating file...");

    // Step 2 & 3: Write and append text
    fs.writeFileSync(SAVE_PATH, INITIAL_TEXT);
    fs.appendFileSync(SAVE_PATH, " – completed");

    console.log("Step 4: Opening file in Notepad...");
    exec(`start notepad "${SAVE_PATH}"`);

    console.log("Verifying content...");

    const content = fs.readFileSync(SAVE_PATH, "utf8");

    if (content.trim() === FINAL_TEXT) {
      console.log("SUCCESS — File content verified!");
    } else {
      console.log("Content mismatch.");
    }

  } catch (error) {
    console.error("Test failed:", error);
  }
}

runTest();