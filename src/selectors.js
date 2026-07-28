const Selectors = {

    searchInput: () =>
        document.querySelector("input[type='search']"),

    reportCard: () =>
        document.querySelector(".TableView__row"),

    deleteButton: () =>
        document.querySelector("#navbar-Offshore\\ Remarks-Delete"),

    addButton: () =>
        document.querySelector("#navbar-Offshore\\ Remarks-Add"),

    confirmDelete: () =>
        [...document.querySelectorAll("button")]
            .find(b => b.textContent.trim() === "Delete"),

    saveButton: () =>
        [...document.querySelectorAll("button")]
            .find(b => b.textContent.trim() === "Save")

};

window.Selectors = Selectors;
