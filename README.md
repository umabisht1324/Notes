# Notes Taking App 📝

Welcome to the **Notes Taking App**, a simple and intuitive app for managing your tasks and notes. This app uses **Node.js** for the backend and **EJS** with **Tailwind CSS** for the frontend. It does not use a database yet, as data is stored in files.

## 🚀 Features

- **Create Notes:** Add your notes with a title and description.
- **View Notes:** Access saved notes through a simple UI.
- **Edit Notes:** Modify existing notes.
- **Delete Notes:** Remove notes when no longer needed.

## 🛠️ Technologies Used

- **Node.js**: Backend runtime for handling requests and saving notes.
- **EJS**: Template engine for rendering views.
- **Tailwind CSS**: For styling the frontend.

## 📝 How It Works

1. **Add a Note:** Use the form to input a title and description.
2. **Store Notes:** Notes are saved as files in a folder.
3. **Manage Notes:** View, edit, and delete notes through the app.

## 📂 Folder Structure
```
root/
├── views/             # EJS templates for rendering frontend
│   ├── delete.ejs     # For deleting a File
│   ├── edit.ejs       # For editing the File title
│   ├── index.ejs      # Main page for notes
│   ├── content.ejs    # Page to view individual notes
├── public/            # Static files (CSS, JS, etc.)
│   ├── stylesheets/   # Tailwind CSS styles
│   └── javascripts/   # JavaScript files
├── files/             # Folder to store notes as text files
├── index.js             # Main server file
└── README.md          # Project documentation
```

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/umabisht1324/notes.git
   ```

2. Navigate to the project directory:
   ```bash
   cd notes
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   node index.js
   ```

5. Open the app in your browser:
   ```
   http://localhost:3000
   ```



## 🔧 Future Improvements

- Add a database for persistent storage.
- Implement search functionality.
- Add filters to categorize tasks.


---

**Developed with ❤️ by [Uma Bisht](https://github.com/umabisht1324)**
