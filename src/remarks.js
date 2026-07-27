/**
 * Revenue Audit Bot
 * Remarks Engine
 */

class RemarksEngine {

    constructor(logger) {
        this.logger = logger;
    }

    async hasExistingRemarks() {

        const deleteButton = AppSheet.getDeleteButton();

        if (deleteButton) {

            this.logger.warning("Existing remarks found");

            return true;

        }

        this.logger.info("No existing remarks");

        return false;

    }

}
