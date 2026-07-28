/**
 * Revenue Audit Bot
 * AppSheet Automation Layer
 */

class AppSheet {

    // ----------------------------
// DELETE DIALOG
// ----------------------------

static confirmationDialog() {

    return Selectors.searchInput('[role="dialog"]');

}

static confirmDeleteButton() {

    const buttons = [...document.querySelectorAll("button")];

    return buttons.find(btn =>
        btn.textContent.trim() === "Delete"
    );

}

static cancelDeleteButton() {

    const buttons = [...document.querySelectorAll("button")];

    return buttons.find(btn =>
        btn.textContent.trim() === "No"
    );

}

static async waitDialogClosed(timeout = 5000){

    const start = Date.now();

    while(Date.now() - start < timeout){

        if(!this.confirmationDialog()){

            return true;

        }

        await Utils.sleep(100);

    }

    return false;

}
    
    // ----------------------------
// REMARKS
// ----------------------------

static deleteButton() {
    return Selectors.searchInput('#navbar-Offshore\\ Remarks-Delete');
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
