# UCD Marketing Policies and Procedure
UCD Marketing Policies and Procedure: [http://marketingtoolbox.ucdavis.edu/resources/policy-procedure.html](http://marketingtoolbox.ucdavis.edu/resources/policy-procedure.html)

All usage of UCD branding must abide by Policy 310-65:
[http://manuals.ucdavis.edu/ppm/310/310-65.pdf](http://manuals.ucdavis.edu/ppm/310/310-65.pdf)

## License for "Proxima Nova" web font

**WARNING!** Each instance will need to register their domain for the Proxima Nova font to render. The font is licensed through Typekit and will not work on a site without its domain added to a list of licensed domains.

To register your site, please contact Craig Farris <cfarris@ucdavis.edu> in [Strategic Communications](http://strategiccommunications.ucdavis.edu/about/web/farris.html).


# Getting Started

## Prerequisites 

If you are a Windows user then it is recommended you use [Git for Windows](http://git-for-windows.github.io/).

You'll need [node.js](http://nodejs.org).

After installing Node you should install Gulp and Bower globally

    $ sudo npm install --global gulp bower

## Install and setup
    
After cloning and changing into that directory, run this to install dependencies (you may need to use `sudo` if you get errors):

    $ npm install
    $ bower install

You may have to run that again for updates; so it may be wise to save this: `$ npm install && bower install`. **If you have any problems; this is the first thing to run.**

Finally, to do an initial build of the site and start watching for changes run `gulp`

    $ gulp

## Assets (CSS & JS)

To add either CSS or JS to Pattern Lab, use one of these methods:

### Bower

Bower is a package manager for the web. It is useful for adding third party libraries for both development and site inclusion.

Install any [Bower](http://bower.io) component with the `--save` or `--save-dev` flag. You can search for [anything that Bower can install](http://bower.io/search/) and run:

    $ bower install {thing} --save

Use `--save` when a package needs to be added as a dependency to the browser such as using [jQuery](https://jquery.com/). The js and css in these packages will automatically be compiled to the `scripts.js` and `vendor.css` files.

Use `--save-dev` when a package is specifically for development purposes like when using a Sass library such as [Breakpoint](http://breakpoint-sass.com/)

    
#### Bower Overrides

If a Bower package does not specify all the assets you need in its `"main"` property, then you can add or delete other assets it has packaged with an override. You can also remove any dependencies that it might want to include. This is useful if a package adds more files than you need or you want to use a different file they offer rather than the default.

Add overrides to the `bower.json` file.

```json
{
  "overrides": {
    "package-name": {
      "main": ["file-you-want-included.js"],
      "dependencies": {}
    }
  }
}
```

#### Bower Include Paths

If Bower is used to add dependencies and libraries for Sass then it is helpful to add it's `includePaths` to the `gulp-config.yml` file. This allows shorter import names to work in Sass files.

With an `includePaths` added to the `gulp-config.yml` file a simple `@import "breakpoint";` can be used instead of `@import "../bower_components/breakpoint-sass/stylesheets/breakpoint";"`.

This also helps with any dependencies that Bower package might rely on.

### Editing the head or foot partial

If you want to add custom scripts or tags into the header or footer then you can use these files:

- `pattern-lab/source/_patterns/00-atoms/00-meta/_00-head.mustache`
- `pattern-lab/source/_patterns/00-atoms/00-meta/_01-foot.mustache`

## About Gulp

Gulp is a task/build runner for development. It allows you to do a lot of stuff within your development workflow. You can compile sass files, uglify and compress js files and much more.

- [Gulp Website](http://gulpjs.com/)
- Article from CSS Tricks: [Gulp for Beginners](https://css-tricks.com/gulp-for-beginners/)

### Local Gulp Configuration

Gulp configuration can be customized to a local environment by creating a `gulp-config--custom.yml` file. Any custom config specific to a local setup can be placed in here and it will not be committed to Git.

Default configuration is found in `gulp-config.yml`. You can copy out config you want to change into your custom file.

### Gulp Tasks

There are 4 main gulp tasks you should be aware of. Just add `gulp` before each task like `$ gulp help`.

1. **Help** - Displays a list of all the available tasks with a brief discription of each
2. **Default** - Generate the entire site and start watching for changes to live reload in the browser
3. **Compile** - Generate the entire site with all assets such as css and js
4. **Validate** - Validate CSS and JS by linting

`$ gulp` is the one most often used and is the same as `$ gulp default`

### Using Gulp with PHPStorm

PHPStorm has [Gulp Tool Window](https://www.jetbrains.com/phpstorm/help/gulp-tool-window.html) for easy use of Gulp tasks.
Right-click on the `gulpfile.js` file and choose `Show Gulp Tasks` to open the window.

Double click `default` to start gulp and begin watching files for changes.

You can double click `help` to see descriptions of available tasks

### BrowserSync

BrowserSync is being used by Gulp to allow live reloading so that changes will be injected automatically into the site without having to reload.


# Export and Sync styles into a New Site

## New Site Starterkit

You can wire up a new site with all the styles, config, gulp tasks, and directory structure with a simple Gulp command. However, first you need to add some custom config so that it knows where to stick your new code.

1. Create a `gulp-config--custom.yml` file and add the following code with the `dest` set to the location for where you want the code to go:

```yaml
themeSync:
  enabled: true
  newsite: true
  dest: ~/location/to/stick/the/code
```
2. Now you can just run a simple Gulp command to generate all the starterkit code.

    $ gulp newsite

3. Finally, edit the `package.json` and `bower.json` files to customize to your site. As well, you can edit the `gulp-config.yml` file to your specs.

## Sync Pattern Lab styles into an external site's theme

1. Add the following code into a `gulp-config--custom.yml` file and set the `dest` to the location for where you want the code to go:

```yaml
themeSync:
  enabled: true
  dest: ~/location/to/stick/the/code
```
2. Run the theme sync gulp task:

    $ gulp themesync

# About Pattern Lab
- [Pattern Lab Website](http://patternlab.io/)
- [About Pattern Lab](http://patternlab.io/about.html)
- [Documentation](http://patternlab.io/docs/index.html)
- [Demo](http://demo.patternlab.io/)

The PHP version of Pattern Lab is, at its core, a static site generator. It combines platform-agnostic assets, like the [Mustache](http://mustache.github.io/)-based patterns and the JavaScript-based viewer, with a PHP-based "builder" that transforms and dynamically builds the Pattern Lab site. By making it a static site generator, Pattern Lab strongly separates patterns, data, and presentation from build logic. 

## Demo

You can play with a demo of the front-end of Pattern Lab at [demo.patternlab.io](http://demo.patternlab.io).

## Getting Started

* [Requirements](http://patternlab.io/docs/requirements.html)
* [Installing the PHP Version of Pattern Lab](http://patternlab.io/docs/installation.html)
* [Upgrading the PHP Version of Pattern Lab](http://patternlab.io/docs/upgrading.html)
* [Generating the Pattern Lab Website for the First Time](http://patternlab.io/docs/first-run.html)
* [Editing the Pattern Lab Website Source Files](http://patternlab.io/docs/editing-source-files.html)
* [Using the Command-line Options](http://patternlab.io/docs/command-line.html)
* [Command Prompt on Windows](http://patternlab.io/docs/command-prompt-windows.html)

## Working with Patterns

Patterns are the core element of Pattern Lab. Understanding how they work is the key to getting the most out of the system. Patterns use [Mustache](http://mustache.github.io/) so please read [Mustache's docs](http://mustache.github.io/mustache.5.html) as well.

* [How Patterns Are Organized](http://patternlab.io/docs/pattern-organization.html)
* [Adding New Patterns](http://patternlab.io/docs/pattern-add-new.html)
* [Reorganizing Patterns](http://patternlab.io/docs/pattern-reorganizing.html)
* [Including One Pattern Within Another via Partials](http://patternlab.io/docs/pattern-including.html)
* [Managing Assets for a Pattern: JavaScript, images, CSS, etc.](http://patternlab.io/docs/pattern-managing-assets.html)
* [Modifying the Pattern Header and Footer](http://patternlab.io/docs/pattern-header-footer.html)
* [Using Pseudo-Patterns](http://patternlab.io/docs/pattern-pseudo-patterns.html)
* [Using Pattern Parameters](http://patternlab.io/docs/pattern-parameters.html)
* [Using Pattern State](http://patternlab.io/docs/pattern-states.html)
* ["Hiding" Patterns in the Navigation](http://patternlab.io/docs/pattern-hiding.html)
* [Adding Annotations](http://patternlab.io/docs/pattern-adding-annotations.html)
* [Viewing Patterns on a Mobile Device](http://patternlab.io/docs/pattern-mobile-view.html)

## Creating & Working With Dynamic Data for a Pattern

The PHP version of Pattern Lab utilizes Mustache as the template language for patterns. In addition to allowing for the [inclusion of one pattern within another](http://patternlab.io/docs/pattern-including.html) it also gives pattern developers the ability to include variables. This means that attributes like image sources can be centralized in one file for easy modification across one or more patterns. The PHP version of Pattern Lab uses a JSON file, `source/_data/data.json`, to centralize many of these attributes.

* [Introduction to JSON & Mustache Variables](http://patternlab.io/docs/data-json-mustache.html)
* [Overriding the Central `data.json` Values with Pattern-specific Values](http://patternlab.io/docs/data-pattern-specific.html)
* [Linking to Patterns with Pattern Lab's Default `link` Variable](http://patternlab.io/docs/data-link-variable.html)
* [Creating Lists with Pattern Lab's Default `listItems` Variable](http://patternlab.io/docs/data-listitems.html)

## Using Pattern Lab's Advanced Features

By default, the Pattern Lab assets can be manually generated and the Pattern Lab site manually refreshed but who wants to waste time doing that? Here are some ways that Pattern Lab can make your development workflow a little smoother:

* [Watching for Changes and Auto-Regenerating Patterns](http://patternlab.io/docs/advanced-auto-regenerate.html)
* [Auto-Reloading the Browser Window When Changes Are Made](http://patternlab.io/docs/advanced-reload-browser.html)
* [Multi-browser & Multi-device Testing with Page Follow](http://patternlab.io/docs/advanced-page-follow.html)
* [Keyboard Shortcuts](http://patternlab.io/docs/advanced-keyboard-shortcuts.html)
* [Special Pattern Lab-specific Query String Variables ](http://patternlab.io/docs/pattern-linking.html)
* [Preventing the Cleaning of public/](http://patternlab.io/docs/advanced-clean-public.html)
* [Generating CSS](http://patternlab.io/docs/advanced-generating-css.html)
* [Modifying the Pattern Lab Nav](http://patternlab.io/docs/advanced-pattern-lab-nav.html)
* [Editing the config.ini Options](http://patternlab.io/docs/advanced-config-options.html)
* [Integration with Compass](http://patternlab.io/docs/advanced-integration-with-compass.html)