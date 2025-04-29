# My Portfolio Website

Welcome to my personal portfolio! You can view it live on GitHub Pages: https://angiokas.github.io/portfolio/

This portfolio webapp is a work in progress! Built with React and styled with vanilla CSS, practicing my skills in responsive design.

If you'd like to use this as a template for your own portfolio, feel free to clone it and customize it. All the information can be easily updated by editing the files in the data folder.

## Deployment to Github Pages

If you want to host your Vite project on Github Pages, you can just follow these next steps:

1. Configure `vite.config.js`
   In vite.config.js, add the base property to match your GitHub repository’s name (replace your-repo-name with your actual repo name):

```js
import { defineConfig } from "vite";

export default defineConfig({
  base: "/your-repo-name/",
});
```

2.  Update `package.json`
    Make sure your package.json has the homepage property set to the GitHub Pages URL and separately, we want to add a deploy script. I added a predeploy script so that it builds it automatically before deploying. This is what it should look like:

```json
{
  "name": "my-portfolio",
  "homepage": "https://your-username.github.io/your-repo-name",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Install `gh-pages`

```bash
npm install gh-pages
```

4. Deploy
   Now you can deploy by running the command:

```bash
npm run deploy
```

If there are no errors, you should be able to see your site live at:
https://your-username.github.io/your-repo-name/
