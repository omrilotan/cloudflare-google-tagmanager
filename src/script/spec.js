const { expect } = require("chai");
let script = null;

describe(
    "script tag",
    () => {
        beforeEach(() => {
            global.INSTALL_OPTIONS = { container_id: "GTM-ABCDEFG" };
            global.document = {
                createElement: tagName => ({ tagName }),
                body: {
                    appendChild: arg => { script = arg; }
                },
                querySelector: () => ({
                    appendChild: arg => { script = arg; }
                })
            };
        });
        afterEach(() => {
            delete global.INSTALL_OPTIONS;
            delete global.document;
            script = null;
            delete require.cache[require.resolve(".")];
        });

        it(
            "should create an async script with googletagmanager as source and append it to body",
            () => {
                require(".");
                expect(script).to.be.an("object");
                expect(script.tagName).to.equal("script");
                expect(script.src).to.equal("https://www.googletagmanager.com/gtm.js?id=GTM-ABCDEFG");
                expect(script.async).to.equal(1);
            }
        );

        it(
            "should fall back from using document body to querySelector",
            () => {
                delete global.document.body;
                require(".");
                expect(script).to.be.an("object");
            }
        );
    }
);
