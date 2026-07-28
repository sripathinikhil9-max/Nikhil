/**
 * Revenue Audit Bot
 * AppSheet Automation Layer
 */

class AppSheet {

    // ----------------------------
    // ELEMENTS
    // ----------------------------

    static searchBox() {
        return document.querySelector('#ReactRoot input');
    }

    static reportCard() {
        return document.querySelector('[data-testid="base-type-display"]');
    }

    static emptyView() {
        return document.querySelector('[data-testid="empty-view"]');
    }

    static remarksSection() {
        return document.querySelector('[data-testid="Related Offshore Remarks"]');
    }

    // ----------------------------
    // ACTIONS
    // ----------------------------

    static async searchBL(bl){

        const box=this.searchBox();

        if(!box) return false;

        box.focus();

        box.value="";

        box.dispatchEvent(new Event("input",{bubbles:true}));

        box.value=bl;

        box.dispatchEvent(new Event("input",{bubbles:true}));

        box.dispatchEvent(new Event("change",{bubbles:true}));

        return true;

    }

    static async clickReport(){

        const report=this.reportCard();

        if(!report) return false;

        report.click();

        return true;

    }

}
