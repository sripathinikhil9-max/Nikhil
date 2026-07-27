/**
 * Revenue Audit Bot
 * Utils Module
 */

class Utils {

    static sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    static async waitForElement(selector, timeout = 10000) {

        const start = Date.now();

        while (Date.now() - start < timeout) {

            const element = document.querySelector(selector);

            if (element) {
                return element;
            }

            await Utils.sleep(100);

        }

        return null;

    }

    static async waitUntil(condition, timeout = 10000) {

        const start = Date.now();

        while (Date.now() - start < timeout) {

            if (condition()) {
                return true;
            }

            await Utils.sleep(100);

        }

        return false;

    }

    static click(element) {

        if (!element) return false;

        element.dispatchEvent(
            new MouseEvent("click", {
                bubbles: true,
                cancelable: true
            })
        );

        return true;

    }

    static type(element, value) {

        if (!element) return;

        element.focus();

        element.value = "";

        element.dispatchEvent(new Event("input", { bubbles: true }));

        element.value = value;

        element.dispatchEvent(new Event("input", { bubbles: true }));

        element.dispatchEvent(new Event("change", { bubbles: true }));

    }

}
