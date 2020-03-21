# Angular Boilerplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

## 📋 Workflow

### Development

1. Creat an own branch based on `develop` with the `feature/` prefix
2. Develop in your branch, you do not need to follow the conventional commits guidelines.
3. If necessary rebase from `develop`
4. Run lint and tests
5. Merge in develop with the `squash commit` setting. Here your commit message must follow the conventional commits guidelines.

### Release

1. Merge from `develop` into `master` (do not push)
2. Run the package.json `release` script



## 🛠 Package.json Scripts

### Development server

Run `start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Run `start:prod` to serve a production build of the application. 

### Build

Run `build` to build the project. The build artifacts will be stored in the `dist/` directory.
Run `build:prod` for a production build.
Run `build:report` to build the project with a webpack stats.json file and show it with the webpack-bundle-analyzer.
Run `build:clean` to remove the dist directory.

### Running unit tests

Run `test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Run `test:ci` to execute the unit tests once and get a depending exit code.

### Running end-to-end tests

Run `e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Running lint tests

Run `lint` to execute the typescript linter and stylelint.
Run `lint:ts` to execute typescript linter. It uses the standard angular tsconfig.
Run `lint:scss` to execute stylelint. Uses a lot of the recommendations from [SASS Guidelines](https://sass-guidelin.es/).

### Release a new Version

Run `release` to release a new application version with [standard-version](https://github.com/conventional-changelog/standard-version).
It does the following:

1. runs the lint and test tasks
2. bumps the version in package.json
3. uses conventional-changelog to update CHANGELOG.md
4. commits package.json and CHANGELOG.md
5. tags a new release
6. pushes the release commit and tag

### Build the documentation

Run `document` to build the angular documentation with [compodoc](https://compodoc.app/) and the scss documentation with [sassdoc](http://sassdoc.com/). The angular documentation will be stored in the `documentation/` directory, the scss documentation in the `sassdoc/` directory.
Run `document:clean` to remove the `documentation/` and `sassdoc/` directory.



## 🤖 CI / CD

⚠ **Warning** ⚠ The use of tags triggers a release build and a manual job to upload the build. Do not create tags manual only by standard-version / the release script.

This project has a `.gitlab-ci.yml` config with the following jobs:

### lint
Runs the `lint` command for all commits.

### unit test
Runs the `test:ci` command for all commits. The `coverage` folder and the karma `test-results.xml` are saved as artifact.

### e2e test
Runs the `e2e` command for all commits.

### build staging
Runs the `build:prod` command. The `dist` folder is saved as artifact for 3 days for all commits except taged commits inside the master branch.

### build release
Write the package.json.version, commit hash and date in a `meta.json`. Runs the `build:prod` and `document` command. The `dist` folder, the `documentation` folder, the `sassdoc` folder and the `meta.json` are saved as artifact for 30 days. Runs only for tagged commits.

### deploy staging
Uploads the `dist` folder of a build staging job to a FTP-Server. Please set `$FTP_STAGING_HOST`, `$FTP_STAGING_USER`, `$FTP_STAGING_PASS` in your environment vars. Runs only for commits inside the develop branch.

### deploy release
Uploads the `dist` folder of a build release job to a FTP-Server. Please set `$FTP_PROD_HOST`, `$FTP_PROD_USER`, `$FTP_PROD_PASS` in your environment vars. Can be manually triggered for tagged commits.

### pages (deactivated)
Creates a artifact with the content of the `documentation` and `sassdoc` folder of a `build release` job inside a `public` folder. Gitlab automatical picks it up and publishes it as [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/).



## 🔏 Conventional Commits

This project uses [Conventional Commits](https://www.conventionalcommits.org/). These are automatically checked in the `develop` and `master` branch with [commitlint](https://conventional-changelog.github.io/commitlint/#/).
The configuration is taken from [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional) and [conventional-changelog-angular](https://www.npmjs.com/package/conventional-changelog-angular).

A commit message should be structured as follows:

`<type>[optional scope]: <description>`

#### Type

What is the nature of these changes? Commits of the type `feat`, `fix` und `perf` are included in the changelog.

- `feat`: A new feature
- `fix`: A bugfix
- `docs`: Only changes to the documentation
- `style`: Changes that do not affect the meaning of the code (spaces, format, etc.)
- `refactor`: A code change that neither fixes an error nor adds a function
- `perf`: A code change that improves performance
- `test`: Add missing tests or correct existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to CI configuration files and scripts
- `chore`: Other changes that do not change src or test files
- `revert`: Resets a previous commit



## 🎀 SCSS

This project uses parts of [Sass Guidelines](https://sass-guidelin.es). These are automatically checked with [stylelint](https://stylelint.io/).
The configuration is taken from [stylelint-config-sass-guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines).

#### styles.scss and _component.scss

The `styles.css` is the main file for the global scss. The `_component.scss` is the starting point for every angular component scss file. This file should not contain anything but `@import` and comments.

#### Abstracts

The `abstracts/` folder gathers all Sass tools and helpers used across the project. Every global variable, function, mixin and placeholder should be put in here.
The rule of thumb for this folder is that it should not output a single line of CSS when compiled on its own. These are nothing but Sass helpers.

Reference: [Sass Guidelines](http://sass-guidelin.es/) > [Architecture](http://sass-guidelin.es/#architecture) > [Abstracts folder](http://sass-guidelin.es/#abstracts-folder)

#### Vendors

The `vendors/` folder containing all the CSS files from external libraries and frameworks – Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered, and so on.

Reference: [Sass Guidelines](http://sass-guidelin.es/) > [Architecture](http://sass-guidelin.es/#architecture) > [Vendors folder](http://sass-guidelin.es/#vendors-folder)

#### Base

The `base/` folder holds what might be called the boilerplate code for the project. In there are some typographic rules, fonts and a stylesheet `_base.scss` defining some standard styles for commonly used HTML elements.

Reference: [Sass Guidelines](http://sass-guidelin.es/) > [Architecture](http://sass-guidelin.es/#architecture) > [Base folder](http://sass-guidelin.es/#base-folder)

#### Elements

This is different than the [Sass Guidelines](http://sass-guidelin.es/). Inside the `elements/` folder are files for every element. A Part that is reused inside multiple components.
The rule of thumb for this folder is that it should not output a single line of CSS when compiled on its own.

#### Global

The `global/` folder contains everything that must be in the global styles of the application. This folder could have stylesheets for the main parts of the site (header, footer, navigation, sidebar…), the grid system or even CSS styles for all the forms.
The name is changed from layout to account better for angulars needs.

Reference: [Sass Guidelines](http://sass-guidelin.es/) > [Architecture](http://sass-guidelin.es/#architecture) > [Layout folder](http://sass-guidelin.es/#layout-folder)
