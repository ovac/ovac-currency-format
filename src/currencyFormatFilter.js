/*
 * @package     @ovac/ng-currency-filter
 * @version     v1.0
 *
 * @author      Ariama O. Victor (ovac4u) <victorariama@qodehub.com>
 * @link        http://www.ovac4u.com
 *
 * @copyright   Copyright (c) 2018 Ariama O. Victor (ovac4u)
 * @license     https://github.com/qodehub/shapeshift-php/blob/master/LICENSE
 *              The MIT License (MIT)
 *
 * Use this directive to filter get currency symbols, names, etc.
 * https://ovac4u.github.io/ovac-currency-filter/
 */
function currencyFormatFilter($rootScope, $filter, ovacCurrencyFormatService) {

    return function(amount, currencyCode, html) {

        let fractionSize = arguments[2] !== (void 0) ? arguments[2] : null;
        let useUniqSymbol = arguments[3] !== (void 0) ? arguments[3] : true;
        let localeId = arguments[4] !== (void 0) ? arguments[4] : null;
        let onlyAmount = arguments[5] !== (void 0) ? arguments[5] : false;

        if (!currencyCode || Number(amount) != amount) return;

        let formattedCurrency,
            currency = ovacCurrencyFormatService.getByCode(currencyCode),
            formatedAmount = Math.abs(amount),
            signAmount = amount < 0 ? '-' : '',
            rtl = false;
        let currentFractionSize = currency.fractionSize;

        if (fractionSize !== null) currentFractionSize = fractionSize;

        formatedAmount = formatedAmount.toFixed(currentFractionSize);

        localeId = localeId ? localeId : ($rootScope.currencyLanguage || 'en_US');

        let languageOptions = ovacCurrencyFormatService.getLanguageByCode(localeId);

        formatedAmount = formatedAmount.split('.').join(languageOptions.decimal);
        formatedAmount = formatedAmount.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + languageOptions.thousands);

        if (onlyAmount) {
          formattedCurrency = signAmount + formatedAmount;
        }

        else if (!!currency && !useUniqSymbol && !!currency.symbol && !!currency.symbol.template) {
          formattedCurrency = currency.symbol.template.replace('1', formatedAmount);
          formattedCurrency = formattedCurrency.replace('$', currency.symbol.grapheme);
          formattedCurrency = signAmount + formattedCurrency;
          rtl = !!currency.symbol.rtl;
        }

        else if (!!currency && !!useUniqSymbol && !!currency.uniqSymbol && !!currency.uniqSymbol.template) {
          formattedCurrency = currency.uniqSymbol.template.replace('1', formatedAmount);
          formattedCurrency = formattedCurrency.replace('$', currency.uniqSymbol.grapheme);
          formattedCurrency = signAmount + formattedCurrency;
          rtl = !!currency.uniqSymbol.rtl;
        }

        else {
          formattedCurrency = signAmount + formatedAmount + ' ' + currencyCode;
        }

        return formattedCurrency;
    }
}

 currencyFormatFilter.$inject = ['$rootScope', '$filter', 'ovacCurrencyFormatService'];

 export default currencyFormatFilter; 
