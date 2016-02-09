# Contributing

Contributors are welcome.
Please read the [source](http://github.com/gramener/gitbook-plugin-googledocs),
raise [issues](http://github.com/gramener/gitbook-plugin-googledocs/issues),
and submit pull requests on [Github](http://github.com/gramener/gitbook-plugin-googledocs).

## Release process

Fork and clone the repository locally. For example, the Gramener team would use:

    git clone git://github.com/gramener/gitbook-plugin-googledocs.git

Make your changes on a separate branch and send a pull request.

Once changes are merged, update the version by running:

    npm version patch       # Replace patch with minor / major based on upgrade
    npm publish
