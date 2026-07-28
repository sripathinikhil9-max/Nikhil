/**
 * Revenue Audit Bot
 * Action Library
 */

class Actions {

    constructor(logger) {
        this.logger = logger;
    }

    async click(element, name = "Element") {

        if (!element) {

            this.logger.error(name + " not found");

            return false;

        }

        element.click();

        this.logger.info(name + " clicked");

        await Utils.sleep(CONFIG.CLICK_DELAY);

        return true;

    }

    async type(element, value, name = "Field") {

        if (!element) {

            this.logger.error(name + " not found");

            return false;

        }

        element.focus();

        element.value = "";

        element.dispatchEvent(new Event("input", { bubbles: true }));

        element.value = value;

        element.dispatchEvent(new Event("input", { bubbles: true }));

        element.dispatchEvent(new Event("change", { bubbles: true }));

        this.logger.info(name + " updated");

        await Utils.sleep(CONFIG.TYPE_DELAY);

        return true;

    }

}
