# Front-end Starter

Front-end tools (powered by webpack 5) to make your development easier.

- Dev server
- Babel
- SCSS with autoprefixing
- Build for production

To start run `npm install` on the root of this folder.

Then start the development server with: `npm run dev`

To build for production run: `npm run build`

## Config files

- Webpack Development: `webpack.development.config.js`
- Webpack Production: `webpack.production.config.js`
- Babel: `babel.config.json`
- PostCSS: `postcss.config.js`

## Webpack

- `webpack` - Module and assets bundler
- `webpack-cli` - Command line interface for webpack
- `webpack-dev-server` - Development server for webpack

## Plugins

- `clean-webpack-plugin` - Remove/clean build folders from old data
- `html-webpack-plugin` - Generates an HTML file from a template
- `mini-css-extract-plugin` - extraction of css for production build

## Loaders

### SCSS and autoprefixing

- `style-loader` - for loading the stylesheet in the DOM
- `css-loader` - for loading CSS files as modules
- `sass-loader` - for loading SASS files with `import`
- `sass` - the sass core library
- `postcss-loader`, `postcss-preset-env` - automatically handles vendor prefixing and CSS reset

### Babel

- `@babel/core` - the actual engine
- `babel-loader` - loader for webpack
- `@babel/preset-env` - for compiling modern Javascript down to ES5
