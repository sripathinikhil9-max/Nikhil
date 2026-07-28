/**
 * Revenue Audit Bot
 * Search Engine
 */

class SearchEngine {

    constructor(logger) {
        this.logger = logger;
    }

    async searchBL(bl){

    this.logger.info("Searching : " + bl);

    const ok = await AppSheet.searchBL(bl);

    if(!ok){

        this.logger.error("Search box not found");

        return "ERROR";

    }

    const result = await AppSheet.waitForSearchResult();

    switch(result){

        case "FOUND":
            this.logger.success("BL Found");
            break;

        case "NOT_FOUND":
            this.logger.warning("BL Not Found");
            break;

        case "TIMEOUT":
            this.logger.error("Search Timeout");
            break;
    }

    return result;
}
