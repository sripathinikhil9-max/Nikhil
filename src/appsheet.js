/**
 * Revenue Audit Bot
 * AppSheet Automation Layer
 */

class AppSheet {

    // ----------------------------
// REMARKS
// ----------------------------

static deleteButton() {
    return document.querySelector('#navbar-Offshore\\ Remarks-Delete');
}

static addButton() {

    const section = this.remarksSection();

    if (!section) return null;

    return section.querySelector("span");

}

static hasExistingRemarks() {

    return this.deleteButton() !== null;

}

    // ---------- WAIT HELPERS ----------

static async waitForReport(timeout = 10000) {

    const start = Date.now();

    while (Date.now() - start < timeout) {

        if (this.remarksSection()) {
            return true;
        }

        await Utils.sleep(200);
    }

    return false;
}

static async waitForSearchResult(timeout = 8000) {

    const start = Date.now();

    while (Date.now() - start < timeout) {

        if (this.emptyView()) {
            return "NOT_FOUND";
        }

        if (this.reportCard()) {
            return "FOUND";
        }

        await Utils.sleep(200);
    }

    return "TIMEOUT";
}
