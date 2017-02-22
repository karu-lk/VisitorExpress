# VisitorExpress
##Visitor Registration Application with Angular 2 front end & ASP.NET Core backend

## Introduction
Welcome to Visitor Express!

### What's included?
* [npm](https://www.npmjs.com/) for package manager
* [TypeScript](http://www.typescriptlang.org/) for the base language
  * with [Typings](https://github.com/typings/typings) for TypeScript definition manager
* [Gulp](http://gulpjs.com/) for workflow (from *serve*, *watch*, *compile*, *test* to *build*)
* [Browsersync](https://www.browsersync.io/) for development server & reload capability
* [SystemJS](https://github.com/systemjs/systemjs) for module loader
* [Codelyzer](https://github.com/mgechev/codelyzer) for static code analyzer
* [Karma](http://karma-runner.github.io/) for test-runner
* [Jasmine](http://jasmine.github.io/) for test framework
* [Istanbul](https://github.com/gotwarlost/istanbul) for test coverage
  * with [Remap Istanbul](https://github.com/SitePen/remap-istanbul) for remapping Javascript to TypeScript coverage
* [SystemJS Builder](https://github.com/systemjs/builder) or [Webpack](https://webpack.github.io/) for module bundling in production
* ASP.NET Core

## Prerequisites
You need to have [Node.js and npm](https://nodejs.org/en/)
- Support Node v4 - latest
- Support npm v3 - latest
- Visual Studio 2015 for the API project

[Global Gulp CLI](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) is not required, since you can map them to npm scripts, but a nice to have for development purpose.

## Installation
Clone the project

Go to the root directory and install the packages:
```bash
npm install
```

## Start
Let's start up the front end Angular 2 app:
```bash
npm start
```

Then start the back end ASP.NET Core WebAPI app:
```bash
dotnet run
```

and done! The browser will popup and you can start trying Angular 2!
Every changes to the file will refresh the browser automatically
and it'll also compile your changed TypeScripts files to Javascript files.

## Testing
This project comes with testing gulp workflow

### Unit testing
Just run
```bash
npm test
```
and it'll compile all TypeScript files, start Karma, then remap Istanbul coverage so that it shows TypeScript coverage, not the transpiled JavaScript coverage.

### E2E testing
Firstly start the server:
```bash
npm start
```
To begin testing, run:
```bash
npm run e2e
```
and it'll compile all E2E spec files in `/src/test/e2e/*.spec.ts`, boot up Selenium server then launches Chrome browser.

## Production
> All build tasks will run the `gulp test`, the bundle will only be created if the test passed.

You can create production build by running:
```bash
npm run build
```
or you can create production build and then serve it using Browsersync by running:
```bash
npm run serve-build
```
## Extension
You can extend this project with many extensions built by the community.

## Reference articles
* http://blog.angular-university.io/introduction-to-angular-2-forms-template-driven-vs-model-driven/
* http://blog.angular-university.io/angular2-ngmodule/com/mgechev/angular2-seed
* Angular 2: HTTP, Observables, and concurrent data loading https://www.metaltoad.com/blog/angular-2-http-observables-and-concurrent-data-loading

## License
MIT
