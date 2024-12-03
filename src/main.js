// main.js
const { Terminal } = window.Terminal;

const term = new Terminal();
term.open(document.getElementById('terminal'));

// Welcome message
term.writeln('Welcome to the Web Terminal!');
term.prompt = () => {
  term.write('\r\n$ ');
};

term.prompt();

// Input handling
term.onKey((event) => {
  const char = event.key;

  if (char === '\r') {
    runCommand(command);
    command = '';
  } else if (char === '\u007F') {
    // Handle Backspace
    if (command.length > 0) {
      command = command.slice(0, -1);
      term.write('\b \b');
    }
  } else {
    command += char;
    term.write(char);
  }
});

let command = '';

async function runCommand(cmd) {
  const args = cmd.trim().split(' ');

  if (args[0] === 'git') {
    await runGitCommand(args.slice(1));
  } else if (args[0] === 'vim') {
    launchVim();
  } else {
    term.writeln(`\r\nCommand not found: ${cmd}`);
    term.prompt();
  }
}

async function runGitCommand(args) {
  term.writeln('\r\nExecuting git command...');

  try {
    // Example: Handle 'git --version'
    if (args[0] === '--version') {
      term.writeln('git version 1.0.0 (isomorphic-git)');
    } else {
      term.writeln('Git command execution is not fully implemented.');
    }
  } catch (error) {
    term.writeln(`Error: ${error.message}`);
  }
  term.prompt();
}
function launchVim() {
  term.writeln('\r\nLaunching vim...');

  // Placeholder for actual WASM vim integration
  // Since integrating WASM vim is complex, you might need to adapt the code
  // based on the specific WASM vim project you choose.

  // For example purposes, we'll just display a message
  term.writeln('vim is not fully integrated in this example.');
  term.prompt();
}