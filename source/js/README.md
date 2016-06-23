# Javascript

Each file in the **/source/js** directory will be concatenated into a single **/public/js/scripts.js** file.

Please use multiple files rather than stuffing all javascript into a single file.


## Validation

[ESLint](http://eslint.org/) is being used to validate javascript.

The gulp task `gulp validate:js` can be used to easily validate all javascript.

By default, any javascript files in the `vendor` directory will not be validated since they will come from third parties.

## Vendor directory

The `vendor` directory can be used to add third party libraries that have not already been added via Bower. It is preferable to use Bower if at all possible.

`modernizr-custom.js` is added in this directory because it is a custom build from the [Modernizr website](https://modernizr.com/). You can make your own build specific to your site.

## Useful Articles and Links

* [Drual JS Coding Standards](https://www.drupal.org/node/172169)
* [jQuery Coding Standards](https://www.drupal.org/node/1720586)