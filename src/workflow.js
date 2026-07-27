/**
 * Revenue Audit Bot
 * Workflow Engine
 */

class Workflow {

    constructor(bot){

        this.bot = bot;

    }

    async processBL(bl){

        this.bot.logger.info("================================");
        this.bot.logger.info("Processing BL : " + bl);

        // STEP 1
        const result = await this.bot.search.searchBL(bl);

        if(result === "NOT_FOUND"){

            this.bot.logger.warning("BL Not Found");

            return "NOT_FOUND";

        }

        if(result !== "FOUND"){

            this.bot.logger.error("Search Failed");

            return "ERROR";

        }

        // STEP 2
        const opened = await this.bot.report.openReport();

        if(!opened){

            return "OPEN_FAILED";

        }

        // STEP 3
        const existing = await this.bot.remarks.hasExistingRemarks();

        if(existing){

            this.bot.logger.info("Delete workflow will execute.");

        }else{

            this.bot.logger.info("Add workflow will execute.");

        }

        return "READY";

    }

}
