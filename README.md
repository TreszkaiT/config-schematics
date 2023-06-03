# Getting Started With Schematics

This repository is a basic Config Schematic implementation that serves as a starting point to create and publish Schematics to NPM.

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with

```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

### Instructions

https://github.com/angular/angular-cli/blob/HEAD/packages/angular_devkit/schematics/README.md

- npm install -g @angular-devkit/schematics-cli  :::  Install schematics-cli as a global library

- schematics blank --name=new-project   ::: Generate a new schematics project

- npm run-script build  ::: Build this project

- schematics ./config-schematics:entity --debug false   :::  Go to another project and call this schematics

- schematics blank --name=entity-api   :::  Go to the project folder and run the same command with a new schematic name to create a new schema 