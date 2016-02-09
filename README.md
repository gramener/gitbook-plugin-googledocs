# GitBook Google Docs plugin

This plugin replaces links to [Google Docs](https://docs.google.com/) with the embedded content.

Add this plugin to your `book.json` file. All configurations are optional. The default values are shown below.

    {
        "plugins": ["googledocs"],
        "pluginsConfig": {
            "googledocs": {
                "rm": "minimal",
                "frameborder": "0",
                "width": "100%",
                "height": "500px",
                "noembed": "new window"
            }
        }
    }

## Parameters

- `rm=` sets the [render mode](http://stackoverflow.com/a/33693135/100904) of the Google document. It can be `full`, `minimal`, `embedded` or `demo`.
- `frameborder=` sets the frameborder attribute for the IFRAME. `"0"` removes the border.
- `width=` sets the width of the IFRAME. `"100%"` makes the IFRAME occupy the full width of the screen.
- `"height="` sets the height of the IFRAME.
- `"noembed="`. If a link's title has this string, it will **not** be embedded.

## How it works

Google Docs URLs can be of this form:

    http://spreadsheets.google.com/ccc?key={key}&hl=en
    https://docs.google.com/spreadsheets/d/{key}/edit#gid=0

This plugin replaces all links to URLs on `docs.google.com` or `spreadsheets.google.com` with an `<iframe>`. It also adds a `?rm=minimal` option by default to remove controls ([reference](http://stackoverflow.com/a/33693135/100904)). You can configure this as part of the plugin configuration.

If the link has a title with the words "new window", it does not embed the iframe. For example:

    [Non-embedded spreadsheet](http://spreadsheets.google.com/ccc?key={key}&hl=en "Open in new window")

... will not embed the spreadsheet.

(You can change the string to look for by changing the `noembed=` parameter. The match is case-insensitive.)

## LICENSE

[Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0) -- same as
[gitbook](https://github.com/GitbookIO/gitbook/blob/master/LICENSE)
