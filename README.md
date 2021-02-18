# NDS Sandbox

> This is a starter kit for creating simple front-end sandboxes using @nulogy/components. See [http://nulogy.design](http://nulogy.design) for component usage instructions.

## Getting started

- `git clone https://github.com/nulogy/nds-sandbox YourAppName`
- `cd YourAppNAme`
- `yarn` to install dependencies

## Starting the server

- `yarn start`

## Adding a component

- `yarn generate:component`

## Adding a page

### Creating the page

- `yarn generate:page`

### Adding to navbar

- To add the new page to the navigation menu, see `/data/menuData.js`

### Deploying to GitHub Pages

- to update github pages run: `yarn deploy`
- if you have forked the repo update the homepage field in package.json to use your new repo name: `"homepage": "https://nulogy.github.io/{your-repo}"`
