
******************************************************************************************************************************
SCRIPTS IN PACKAGE.JSON
******************************************************************************************************************************
npm commands:
    npm init

    npm install babel --save-dev
    npm install babel-cli --save-dev
    npm install babel-core --save-dev
    npm install babel-loader --save-dev 
    npm install babel-preset-es2015 --save-dev
    npm install commonjs --save-dev 
    npm install typescript --save-dev
    npm install typescript -g               (needed for tsc command)  
    npm install rimraf
    npm install tslint --save-dev
    npm install webpack --save-dev  
    npm install uglifyjs --save-dev
    npm install bower --save-dev
    npm install bower -g
    npm install http-server --save-dev -g
    npm install typings --save-dev
    typings install dt~jquery --save --global

    npm install awesome-typescript-loader@0.17.0 --save-dev
    npm install webpack-merge@0.14.0 --save-dev
    npm install jquery@2.2.4 --save-dev
    npm install jquery@2.2.4 --save

    npm install bootstrap --save-dev
    npm install html-loader --save-dev
    npm install html-webpack-plugin --save-dev
    npm install css-loader style-loader url-loader file-loader  --save-dev




    npm install @angular/core --save-dev
    npm install rxjs --save-dev
    npm install zone.js --save-dev

    npm install @angular/common --save-dev
    npm install @angular/compiler --save-dev
    npm install @angular/http --save-dev
    npm install @angular/platform-browser --save-dev
    npm install @angular/platform-browser-dynamic --save-dev
    npm install @angular/router --save-dev
    npm install @angular/forms@2.4.1 --save-dev

    Note: the below dependencies get installed automatically - but check they are there...
    commonjs
    es6-shim
    reflect-metadata



    Note: If we are copying this file from Git to a new computer, just run npm install which will do everything for you...



******************************************************************************************************************************
DESCRIPTION OF SCRIPTS
******************************************************************************************************************************
package.json - scripts:

    1 npm run build:
        prebuild
            npm run tslint
                uses tslint to lint the app/greeter.ts file. If any errors found, it will terminate

            npm run rimraf
                deletes all files in ./js (ts to js), ./build (ES6 to ES5) and ./dist (bundled and minified)


        build
            tsc 
                - runs the typescript compiler
                - takes the files in the tsconfig.json, transpiles into js, and places them in the ./js folder

            npm run babel 
                - runs the babel compiler used for es2015 syntax (import export). 
                - This takes all the js transpiled files in the ./js folder and 
                  transpiles it into ECMAScript2015 code. This puts ES6 code into the ./build folder


        postbuild
            npm run bundle
                - uses the webpack.config.js file for the config settings
                - uses ./js/main.js file as an entry point. 
                - Note this is your bootstrap that contains all the modules in angular
                - because .js/main.js file has many dependencies it bundles these altogether 
                - dependencies include the es5 js files which have been transpiled: (ts to js, jsES6 to jsES5) and stored in the ./build
                - this means all dependencies for the .js/main.js file and the main.js file itself are bundled into one clean file
                - it spits the file into the output: path: ./dist, file: [name]-bundle.js
                - the Loaders are configured in the webpack.config.js
                    - the html-loader ensures webpack can read and bundle any HTML file (which helps bundle the Angular Templates)
                    - the babel-loader ensures webpack can read and bundle any ES2015 javascript file (js)
   
            npm run uglifyjs
                - note to make it easier, we have a preminify and a minify script. 
                - These do the same thing for different files that need to be minified.
                - minifies the two bundled files in the ./dist folder, main-bundle.js and vendor-bundle.js
                - uses the -m (mangle) and -c (compress)
                - finally -o outputs it to creates a new min.js file

    2 npm run start
        the index.html in the ./ (root directory) has references to the minified javascript files: ./dist/main-min.js and ./dist/vendor-min.js
        which will use those js files to run the code. Note the vendor must be loaded first as html has a top down loading style.
        Also note these js files are below the my-app directive
        vendor-min has all the dependencies, hence the main-min needs these dependencies to run.
        <base href="/"> is used by the Angular RouterModule and RouterModule
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet"> is needed for Twitter Bootstrap
        This script uses the http-server (installed by npm) and specifies the url is localhost:3000




******************************************************************************************************************************
ROOT FILES
******************************************************************************************************************************

typescript:
    .vscode/tasks.json
        settings for the ts compiler eg:
        to run the typescript compiler use the command: tsc. This is specified in the command attribute

    tsconfig.json
        Once tasks.json is set up, we use the tsconfig.json file to add settings for the tsc command
        This includes:
            ECMAScript version
            outDir specifies where to put the transpiled js code - in the ./js folder
            module loader = commonjs
            specifies a js sourceMap
            exclude - all the files that the compiler shouldn't transpile. 
                Note: the files[] caused problems as typings index.d.ts files such as angular wouldn't compile
            experimentalDecorators - stops errors in component ts files
            moduleResolution - resolves all the typings (these typings are stored in the typings.json file)
                Note: there are now no globals as moduleResolution handles the jquery, core-js and node typings.

    tslint.json
        config file for tslint. To create this file, need to run the command:
            npm run tslintInitial
        "tslintInitial": "tslint --init" only ever needs to be run once to create a tslint.json file
        This sets all the default settings
    
    webpack.config.js
        This is the configuration file for webpack.
        Specifies the two entry files (js/main.js & js/vendor.js).
        These are the trasnpiled ts and es2015 files:
            main.js = bootstrapping that handles all the global Angular Modules.  
            vendor.js = the third party dependencies, eg angular and jquery
        This then specifies where to put the output of these bundle.js files - ./dist/[name]-bundle.js (eg app-bundle.js or vendor-bundle.js)
        Specifies the two loaders:
            1 babel module loader:
                the babel-loader ensures webpack can read and bundle any ES2015 javascript file (js)
                the presets is very important for the babel to work. without this, we would have to have a require statement in our entry point:
                require('babel-register')({ "presets": ["es2015"]}); and have a npm install babel-register --save-dev
            2 the html-loader:
                the html-loader ensures webpack can read and bundle any HTML file (which helps bundle the Angular Templates)
                the html-webpack-plugin (dev dependencies in package.json) assist with bundling the within the [name]-bundle.js.
                In other words all components have a template (html). 


    .bowerrc
        tells bower where to save the bower_components - configured to app/bower_components
        bower_components is like node_modules this is where the bower dependencies are stored

    
    bower.json
        to create one, run:
            bower init --config.interactive
        this then asks to fill in details.
        lists the dependencies. very like npm, when you bower install the dependencies get added here


    typings.json
        after running the command: 
                                    npm install typings 
        you can add d.ts files via the typings commands, these commands are above. 
        This adds two things: a typings folder and a typings.json file.
        It then adds an index.d.ts file in the typings folder, which is a bunch of namespaces (///<reference path="">)
        When you run a typings command it does two things:
            1 This automatically adds these typings to the root typings.json file.
            2 It adds the definition to the typings/globals - including another index.d.ts and typings.json file in this folder.


    app.component.ts
        AppComponent specifies the selector which is referenced in the index.html
        The Template then can have any directives it wants which will be put ontop of each other.
        The only mandatory one is <router-outlet> which is just an Angular name for the SPA.
        In this case, we have added a navigationBar directive above it.
        This means every page within the app will have the navbar with the component selected
        navigationBar.html has on important line: <a routerLink="/path" routerLinkActive="active">
        note the path is specified in the app.module.ts which is broken below.


    app.module.ts
        Every Angular Module must have @NgModule which specifies what the Module contains.
        Imports:
            As this is the Module for the whole application, this will only ever get bigger.
            In @NgModule, we have:
                imports -      imports all modules (Angular and bespoke) (example of bespoke is showHideModule)
                providers -    imports all services
                declarations - imports all components
        Routing:
            An array is created to hold all the paths. The path is specified for the user to enter and is linked to a component.
            Paths Array is then passed into RouterModule()
            Routing can be created in the other modules, because this module imports all other modules in the imports
            NavigationBar.component.ts
        Bootstrapping:
            This tells Angular that app.component.ts is the main component.
            This app.module.ts file is then passed into the main.ts to complete the bootstrapping
        
        
******************************************************************************************************************************
HOW IT WORKS
******************************************************************************************************************************

    ts in ./app gets transpiled to ./js file as js. (tsc)
    ES2015 js in ./js gets transpiled to ./build file as ECMAScript5. (babel)
    ECMAScript5 js in ./build gets bundled in ./dist (webpack)
    Bundles get minified in ./dist (webpack)
    index.html is main entry point which has the directive = my-app (defined in app.component.ts - selector) and the minified scripts under the body
    vendor.ts imports all the client side third party dependencies such as @angular/core (and dependencies) and jquery
    app.module.ts contains the NgModule for the particular angular component.
    main.ts is the bootstrapper that imports all the bespoke angular modules needed for the application. 
    Each folder within app will be a component (template, controller) and services




******************************************************************************************************************************        
GIT
******************************************************************************************************************************

SET UP GIT FOR FIRST TIME:

1 add a .gitignore to the root directory
    go to: https://www.gitignore.io/
    type in node and generate
    this generates a .gitignore file for you...
    copy and paste this into the .gitignore file in your root directory.
    this ignores stuff like node_modules folder which is useless...


2 Go to github and sign in - create a new repository.

Run these commands:
    git init
    git status (notice everything in red)
    git add --all
    git status (notice everything in green)
    git commit -m "description"
    git status (notice now says nothing to commit - your code is safe)
    (the next step depends on the generated url)
    git remote add origin https://github.com/...
    git push -u origin master


PUSHING CHANGES:

change file
git status (to see what is outstanding - notice it is red)
git add --all
git status (notice it is green)
git commit -m "description"
git status (notice now says nothing to commit - your code is safe)
git push -u origin master

******************************************************************************************************************************



******************************************************************************************************************************
SET UP
******************************************************************************************************************************

To set me up:

git -c http.sslVerify=false clone https://github.com/lbelfield/angular2-skeleton.git

npm install
(may need to delete rimraf from the package.json on first attempt?)


To make the app run
    npm run build
    npm run start
    localhost:3000

******************************************************************************************************************************

todo - less
todo - component-based architecture example, custom pipes
