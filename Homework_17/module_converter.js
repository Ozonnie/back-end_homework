class Converter {
    constructor(baseCurrencyUs, baseCurrencyEur, baseCurrencyRub) {
        this.baseCurrencyUs = baseCurrencyUs;
        this.baseCurrencyEur = baseCurrencyEur;
        this.baseCurrencyRub = baseCurrencyRub;
    }

    roundTwoDecimal(amount) {
        return Math.round(amount * 100) / 100;
    }

    convertToUa(currency) {
        return this.roundTwoDecimal(currency * this.baseCurrencyUs);
    }

    convertToUs(currency) {
        return this.roundTwoDecimal(currency / this.baseCurrencyUs);
    }

    convertToEur(currency) {
        return this.roundTwoDecimal(currency * this.baseCurrencyUs);
    }

    convertToRub(currency) {
        return this.roundTwoDecimal(currency * this.baseCurrencyUs);
    }
}

module.exports = Converter;