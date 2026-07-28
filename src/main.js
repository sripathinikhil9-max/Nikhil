/**
 * Revenue Audit Bot
 * Main Controller
 */

class RevenueAuditBot {

    constructor() {

        this.logger = null;
        this.search = null;
        this.report = null;
        this.remarks = null;
        this.workflow = null;
        this.actions = null;

        this.running = false;

    }

    initialize(logElement) {

        this.logger = new Logger(logElement);

        this.search = new SearchEngine(this.logger);

        this.report = new ReportEngine(this.logger);

        this.remarks = new RemarksEngine(     
            this.logger,     
            this.actions 
        );

        this.workflow = new Workflow(this);

        this.actions = new Actions(this.logger);

        this.logger.success("Revenue Audit Bot Initialized");

    }

    async processSingleBL(bl){

        if(!bl){

            this.logger.warning("BL is empty");

            return;

        }

        await this.workflow.processBL(bl);

    }

}

window.RevenueAuditBot = RevenueAuditBot;
