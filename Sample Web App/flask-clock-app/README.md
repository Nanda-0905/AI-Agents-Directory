# Flask Clock App

This repository contains a small Flask app with a clock and a CSV analyzer.

Quick local run (Windows PowerShell):

```powershell
cd "Sample Web App/flask-clock-app"
venv\Scripts\Activate.ps1
python src\app.py
```

Or with `flask run`:

```powershell
cd "Sample Web App/flask-clock-app"
set FLASK_APP=src.app
flask run
```

Prepare for GitHub
- Add these files to your repository root (they're already present): `.gitignore`, `requirements.txt`, `Procfile`, `README.md`.
- Commit and push to your GitHub remote:

```bash
git init
git add .
git commit -m "Initial commit: Flask clock app"
git branch -M main
git remote add origin <your-git-remote-url>
git push -u origin main
```

Hosting notes
- GitHub itself does not run Python apps. To host the running application, use a platform like Heroku, Render, Fly, or a VPS. The included `Procfile` and `requirements.txt` make deploying to Heroku or similar services straightforward (`web: gunicorn src.app:app`).
# Flask Clock App

This project is a simple web application that displays a real-time clock using Flask, HTML, CSS, and JavaScript.

## Project Structure

```
flask-clock-app
├── src
│   ├── app.py                # Main application file
│   ├── templates
│   │   └── index.html        # HTML structure for the web page
│   └── static
│       ├── css
│       │   └── styles.css    # CSS styles for the web page
│       └── js
│           └── clock.js      # JavaScript for updating the clock
├── tests
│   └── test_app.py           # Unit tests for the Flask application
├── requirements.txt           # Project dependencies
├── pyproject.toml            # Project configuration and metadata
├── .gitignore                 # Files to ignore in version control
└── README.md                  # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd flask-clock-app
   ```

2. Create a virtual environment:
   ```
   python -m venv venv
   ```

3. Activate the virtual environment:
   - On Windows:
     ```
   # Flask Clock App

   This repository contains a small Flask app (server) and a static client version suitable for hosting on GitHub Pages.

   What changed for GitHub Pages
   - A static site has been added under the `docs/` folder. It includes:
     - `docs/index.html` — clock page
     - `docs/csv_analyzer.html` — client-side CSV analyzer (parses files in the browser using PapaParse)
     - `docs/css/styles.css` and `docs/js/*` — styles and scripts

   If you want to host the static site on GitHub Pages, use the `docs/` folder deployment option.

   Deploy to GitHub Pages (docs folder)

   1. Ensure the repository is committed and on the `main` branch.

   ```bash
   git add .
   git commit -m "Add docs static site for GitHub Pages"
   git push origin main
   ```

   2. In your GitHub repository settings -> Pages, choose:
      - Source: Branch `main` and folder `/docs` and save.

   3. GitHub Pages will publish the site at `https://<your-username>.github.io/<repo-name>/`.

   Notes
   - The static CSV analyzer is client-side only and does not send files to any server — parsing is done in the browser using PapaParse.
   - If you still want the Flask server version, it's left intact under `src/` and can be deployed to platforms like Heroku or Render (see `Procfile` and `requirements.txt`).

   Local dev (Flask server)

   ```powershell
   cd "Sample Web App/flask-clock-app"
   venv\Scripts\Activate.ps1
   python src\app.py
   ```

   Or with `flask run`:

   ```powershell
   set FLASK_APP=src.app
   flask run
   ```
