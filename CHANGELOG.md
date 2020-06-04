# 1.0.2 (2020-06-04)

## [FIX] document.body is undefined (sometimes)

CGI apps (cdn-cgi/apps) are loaded in the document's head. In large documents this may mean the document body is not yet accessible when this script runs. This retry system will exit only after the body is accessible.

# 1.0.1 (2020-03-02)

## Remove input default value

Remove default value of GTM container ID. The default value was (sometimes) being concatenated with the input value. By clearing the input's initial value I remove the chance of this happening to users.
