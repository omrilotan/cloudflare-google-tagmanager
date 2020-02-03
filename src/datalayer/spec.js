const { expect } = require("chai");

describe(
    "dataLayer",
    () => {
        beforeEach(() => {
            global.window = {};
        });
        afterEach(() => {
            delete global.INSTALL_OPTIONS;
            delete global.window;
            delete require.cache[require.resolve(".")];
        });

        it(
            "should create and fill dataLayer",
            () => {
                require(".");
                expect(global.window.dataLayer).to.be.an("array");
                expect(global.window.dataLayer).to.have.lengthOf(1);

                const [gtm] = global.window.dataLayer;
                expect(gtm["gtm.start"]).to.be.a("number");
                expect(gtm.event).to.equal("gtm.js");
            }
        );
    }
);
