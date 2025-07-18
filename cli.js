// ======== Select Elements ========
const input = document.getElementById("commandInput");
const output = document.getElementById("output");

// ======== Your Fake File System ========
const fileSystem = {
  "/": ["about", "projects", "contact"],
  "/projects": ["api-vuln-report.txt", "idor-exploit.md", "xss-script.py"],
  "/about": ["about.txt"],
  "/contact": ["contact.txt"],
  content: {
    "about.txt": "I’m Alok Shrestha, an aspiring cybersecurity specialist...",
    "contact.txt": `
      Email: alokshrestha12386@gmail.com
      GitHub: github.com/alokshresthadev
      Instagram: instagram.com/aroku998
    `,
    "api-vuln-report.txt": "API vulnerability report details...",
    "idor-exploit.md": "IDOR exploit writeup...",
    "xss-script.py": "print('XSS PoC script')"
  }
};

let currentDir = "/";
let history = [];
let historyIndex = -1;

// ======== Focus input always ========
window.addEventListener("click", () => input.focus());

// ======== Handle Enter & Arrow Keys ========
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const command = input.value.trim();
    if (command) {
      history.push(command);
      historyIndex = history.length;
      runCommand(command);
    }
    input.value = "";
  } else if (event.key === "ArrowUp") {
    if (historyIndex > 0) {
      historyIndex--;
      input.value = history[historyIndex];
    }
  } else if (event.key === "ArrowDown") {
    if (historyIndex < history.length - 1) {
      historyIndex++;
      input.value = history[historyIndex];
    } else {
      input.value = "";
    }
  }
});

// ======== Core Command Runner ========
function runCommand(cmd) {
  addLine(`$ ${cmd}`);
  const [base, ...args] = cmd.split(" ");
  const arg = args.join(" ");

  switch (base) {
    case "ls":
      listFiles();
      break;
    case "cd":
      changeDir(arg);
      break;
    case "cat":
      catFile(arg);
      break;
    case "help":
      showHelp();
      break;
    case "whoami":
      addLine("Alok Shrestha — Aspiring Cybersecurity Specialist");
      break;
    case "clear":
      output.innerHTML = "";
      break;
    case "banner":
      showBanner();
      break;
    default:
      addLine(`Command not found: ${base}`);
  }
}

// ======== Command Implementations ========

function listFiles() {
  const files = fileSystem[currentDir];
  if (files && files.length) {
    addLine(files.join("  "));
  } else {
    addLine("Nothing to list here.");
  }
}

function changeDir(dir) {
  if (dir === "..") {
    if (currentDir !== "/") {
      currentDir = "/";
    }
  } else {
    const target = currentDir === "/" ? `/${dir}` : `${currentDir}/${dir}`;
    if (fileSystem[target]) {
      currentDir = target;
    } else {
      addLine(`No such directory: ${dir}`);
    }
  }
}

function catFile(file) {
  if (fileSystem[currentDir] && fileSystem[currentDir].includes(file)) {
    addLine(fileSystem.content[file] || "(empty file)");
  } else {
    addLine(`Cannot cat ${file}`);
  }
}

function showHelp() {
  addLine("Available commands:\nls, cd <dir>, cat <file>, whoami, help, clear, banner");
}

function showBanner() {
  addLine(`
  ____  _       _         ____  _               _           
 |  _ \\(_) __ _| |__     |  _ \\| |__   ___  ___| | ___  ___ 
 | | | | |/ _\` | '_ \\____| |_) | '_ \\ / _ \\/ __| |/ _ \\/ __|
 | |_| | | (_| | | | |____|  __/| | | |  __/ (__| |  __/\\__ \\
 |____/|_|\\__, |_| |_|    |_|   |_| |_|\\___|\\___|_|\\___||___/
          |___/                                              
  `);
}

function addLine(text) {
  const line = document.createElement("pre");
  line.textContent = text;
  output.appendChild(line);
  window.scrollTo(0, document.body.scrollHeight);
}
