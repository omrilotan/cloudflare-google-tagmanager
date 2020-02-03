var script = document.createElement("script");

script.src = "https://www.googletagmanager.com/gtm.js?id=" + INSTALL_OPTIONS.container_id;
script.async = 1;
(
    document.body || document.querySelector("body")
).appendChild(script);
