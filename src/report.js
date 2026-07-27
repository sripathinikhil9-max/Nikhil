/**
 * Revenue Audit Bot
 * Report Engine
 */

class ReportEngine {

    constructor(logger) {
        this.logger = logger;
    }

    async openReport() {

        this.logger.info("Opening report...");

        const report = AppSheet.getReportCard();

        if (!report) {

            this.logger.error("Report card not found");

            return false;

        }

        Utils.click(report);

        const loaded = await this.waitForReportPage();

        if (loaded) {

            this.logger.success("Report opened");

            return true;

        }

        this.logger.error("Report failed to open");

        return false;

    }

    async waitForReportPage(timeout = 10000) {

        const start = Date.now();

        while (Date.now() - start < timeout) {

            const remarksSection = document.querySelector('[data-testid="Related Offshore Remarks"]');

            if (remarksSection) {
                return true;
            }

            await Utils.sleep(200);

        }

        return false;

    }

}
