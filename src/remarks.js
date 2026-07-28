class RemarksEngine{

    constructor(logger){

        this.logger=logger;

    }

    async process(){

        if(AppSheet.hasExistingRemarks()){

            this.logger.warning("Existing Remarks Detected");

            return "DELETE";

        }

        this.logger.success("No Existing Remarks");

        return "ADD";

    }

}
