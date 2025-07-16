# 🧭 OS-Based Path Builder using Node.js

This project demonstrates how to build platform-specific file paths dynamically in Node.js using the built-in `path` and `os` modules.

---

## 📌 Objective

Different operating systems use different path separators:
- Windows → backslash (`\`)
- Linux/macOS → forward slash (`/`)

To ensure cross-platform compatibility, this script:
- Detects the current OS (`win32`, `linux`, `darwin`)
- Uses the appropriate path module (`path.win32` or `path.posix`)
- Builds relative paths using the correct separator
- Converts them to absolute paths using `path.resolve`

---

## 💡 Key Concepts

- **`process.platform`** — detects the operating system at runtime
- **`path.win32` / `path.posix`** — platform-specific path formatting
- **`path.join()`** — joins folder and file names using correct slashes
- **`path.resolve()`** — creates an absolute path based on current directory

---

## 📦 Modules Used

| Module  | Purpose                                  |
|---------|------------------------------------------|
| `path`  | For path formatting and file resolution  |
| `os`    | (Optional) System-level information      |
| `process` | Detecting current platform             |

---

## 🖥️ Sample Output

### On Windows:
- **Relative Path:** `projects\chatApp\server.js`
- **Absolute Path:** `C:\Users\YourName\...`

### On Linux/macOS:
- **Relative Path:** `projects/chatApp/server.js`
- **Absolute Path:** `/home/yourname/...`

---

## 🚀 How to Run

1. Ensure Node.js is installed.
2. Run the file using:

```bash
node osPathBuilder.js
