/**
 * Revenue Audit Bot
 * AppSheet Selectors
 */

class AppSheet {

    static getSearchBox() {
        return document.querySelector('#ReactRoot input');
    }

    static getEmptyView() {
        return document.querySelector('[data-testid="empty-view"]');
    }

    static getReportCard() {
        return document.querySelector('[data-testid="base-type-display"]');
    }

    static getSaveButton() {
        return [...document.querySelectorAll("button")]
            .find(btn => btn.textContent.trim() === "Save");
    }

    static getSettledButton() {
        return document.querySelector('[data-testid="button-select-button"]');
    }

}
