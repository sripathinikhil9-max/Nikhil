class SaveEngine {

    async complete(){

        await this.clickSettled();

        await this.clickSave();

        await this.waitForSave();

    }

}
