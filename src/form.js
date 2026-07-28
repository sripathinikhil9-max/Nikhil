class FormEngine {

    async fill(data){

        await this.fillRAPIC(data.raPic);

        await this.fillAuditorRemarks(data.auditorRemarks);

        await this.fillClosureRemarks(data.closureRemarks);

    }

}
