/**
 * Revenue Audit Bot
 * Report Engine
 */

class ReportEngine {

    constructor(logger) {
        this.logger = logger;
    }

    async openReport(){

    this.logger.info("Opening report...");

    const clicked = await AppSheet.clickReport();

    if(!clicked){

        this.logger.error("Report card not found");

        return false;

    }

    const loaded = await AppSheet.waitForReport();

    if(loaded){

        this.logger.success("Report Loaded");

        return true;

    }

    this.logger.error("Report Load Timeout");

    return false;

}
