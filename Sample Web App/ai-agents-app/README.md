# Top 10 AI Applications & Agents Directory

A comprehensive, searchable directory of the top 10 AI tools across 8+ categories. Browse cutting-edge AI agents and applications for LLMs, code assistants, image generation, data analysis, voice tech, video, and automation.

## Features

✨ **70 AI Tools & Agents** across 8 categories
🔍 **Search** by name, description, or features
📁 **Category Filtering** for quick discovery
🎨 **Modern, Responsive Design** for all devices
⚡ **Client-side Only** (no backend required)
🌐 **Perfect for GitHub Pages Hosting**

## Categories

- **LLMs & Chatbots** (10 tools) — ChatGPT, Claude 3.5, Gemini, Llama 3, etc.
- **Code Assistants** (10 tools) — GitHub Copilot, Cursor, Tabnine, Replit Agent, etc.
- **Image Generation** (10 tools) — DALL-E 3, Midjourney, Stable Diffusion, Leonardo.ai, etc.
- **Data Analysis & ML** (10 tools) — AutoML, BigQuery ML, DataRobot, H2O.ai, etc.
- **Voice & Speech** (10 tools) — Eleven Labs, Google Speech, Whisper, Descript, etc.
- **Video & Media** (10 tools) — Runway, Synthesia, Pika Labs, Opus Clip, etc.
- **Automation & RPA** (10 tools) — Make, Zapier, Power Automate, UiPath, n8n, etc.

## File Structure

```
ai-agents-app/
├── index.html          # Main page with category filters and search
├── css/
│   └── styles.css      # Modern, responsive styling
├── js/
│   └── app.js          # AI tools database and filtering logic
└── README.md           # This file
```

## Local Preview

Serve files locally using Python's built-in server:

```bash
cd ai-agents-app
python -m http.server 8000
# Visit http://localhost:8000
```

Or with Node.js:

```bash
cd ai-agents-app
npx http-server
# Visit http://localhost:8080
```

## Deploy to GitHub Pages

1. **Add this folder to your repo**, if not already there.

2. **Commit and push** to your `main` branch:
   ```bash
   git add .
   git commit -m "Add AI applications directory"
   git push origin main
   ```

3. **Enable GitHub Pages**:
   - Go to **Settings** → **Pages**
   - Set **Source** to Branch: `main`, Folder: `/docs` (if you move the app there) or root
   - Save

4. **Visit** `https://<username>.github.io/<repo>/ai-agents-app/`

## Customization

### Add More Tools

Edit `js/app.js` and add entries to the `aiTools` array:

```javascript
{
    id: 999,
    name: 'Your Tool',
    category: 'llm', // or 'code', 'image', 'data', 'voice', 'video', 'automation'
    emoji: '🎯',
    description: 'Brief description...',
    features: ['Feature 1', 'Feature 2'],
    pricing: 'Pricing info',
    useCases: 'Use cases',
    link: 'https://example.com'
}
```

### Customize Styling

Edit `css/styles.css` to change colors, fonts, layout, etc. Key CSS variables:

```css
--primary-color: #667eea;
--secondary-color: #764ba2;
--dark-bg: #1a1a2e;
```

## Data Source

All tool information is current as of **February 2026**. Links point to official websites. Prices and features are subject to change—always verify on the official sites.

## License

Free to use and modify. If hosted publicly, a link back to the repo is appreciated!

## Contact & Contributions

Found an outdated tool or want to suggest a new one? Feel free to open an issue or PR.

---

**Enjoy exploring the AI landscape! 🚀**
