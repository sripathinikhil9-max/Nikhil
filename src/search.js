/**
 * Revenue Audit Bot
 * Search Engine
 */

class SearchEngine {

    constructor(logger) {
        this.logger = logger;
    }

    async searchBL(bl) {

        this.logger.info("Searching : " + bl);

        const searchBox = AppSheet.getSearchBox();

        if (!searchBox) {

            this.logger.error("Search box not found");

            return "ERROR";

        }

        Utils.type(searchBox, bl);

        await Utils.sleep(1000);

        return await this.waitForResult();

    }

    async waitForResult(timeout = 8000) {

        const start = Date.now();

        while (Date.now() - start < timeout) {

            if (AppSheet.getEmptyView()) {

                this.logger.warning("BL Not Found");

                return "NOT_FOUND";

            }

            if (AppSheet.getReportCard()) {

                this.logger.success("BL Found");

                return "FOUND";

            }

            await Utils.sleep(200);

        }

        this.logger.error("Search Timeout");

        return "TIMEOUT";

    }

}
