require(["gitbook", "jquery"], function(gitbook, $) {
  var config

  gitbook.events.bind("page.change", function() {
    $("a").each(function() {
      var $this = $(this),
        href = $this.attr("href") || "",
        title = $this.attr("title")

      // Ignore links whose title match the noembed parameter
      if (title && config.noembed && config.noembed.exec(title))
        return

      if (href.match("//docs.google.com/") || href.match("//spreadsheets.google.com/")) {
        // Add ?rm=... as a URL argument
        if (href.match(/\?/))
          href = href.replace("?", "?rm=" + config.rm + "&")
        else if (href.match(/#/))
          href = href.replace("#", "?rm=" + config.rm + "#")
        else
          return

        var $iframe = $("<iframe>").attr({
          width: config.width || "100%",
          height: config.height || "500px",
          frameborder: config.frameborder || "0",
          src: href
        })
        var $block_parent = $(this).parents("blockquote, dt, dd, div, form, header, footer, hgroup, li, nav, p, pre, table").eq(0)
        $block_parent.append($iframe)
      }
    })
  })

  gitbook.events.bind("start", function(e, plugin_config) {
    // Save the plugin configuration
    plugin_config = plugin_config || {}
    config = plugin_config.googledocs || {}
    // The noembed parameter must be treated as a case-insensitive regex
    config.noembed = new RegExp(config.noembed || "new window", "i")
  })
})
