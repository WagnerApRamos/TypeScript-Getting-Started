class Utility {
    static getInputValue(elementID: string): string {
        const inputElement = <HTMLInputElement>document.getElementById(elementID);
        return inputElement.value;
    }
}