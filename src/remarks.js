class RemarksEngine{

    constructor(logger, actions){

        this.logger = logger;
        this.actions = actions;

    }

    async process(){

        if(AppSheet.hasExistingRemarks()){

            this.logger.warning("Existing Remarks Found");

            await this.deleteRemarks();

        }else{

            this.logger.success("No Existing Remarks");

        }

    }

    async deleteRemarks(){

        this.logger.info("Deleting Existing Remarks...");

        await this.actions.click(
            AppSheet.deleteButton(),
            "Delete Button"
        );

        await this.actions.click(
            AppSheet.confirmDeleteButton(),
            "Confirm Delete"
        );

        await AppSheet.waitDialogClosed();

        this.logger.success("Remarks Deleted");

    }

}
