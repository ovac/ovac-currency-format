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
 * https://ovac4u.github.io/ov-currency-filter/
 *
 * @ngInject
 */
 export default function currencyFormatService(ovacCurrencyFormatCurrencyFormat, ovacCurrencyFormatCurrencyNumberFormat){

    let currencies = ovacCurrencyFormatCurrencyFormat;

    let languages = ovacCurrencyFormatCurrencyNumberFormat;

    function getByCode(code) {

      if (!code) return;

      let currency = currencies[code.toUpperCase()];

      if (!currency) {
        currency = {
          "name": code,
          "fractionSize": 2,
          "symbol": {
            "grapheme": code,
            "template": null,
            "rtl": false
          },
          "uniqSymbol": null
        };
      }

      return currency;
    }

    function getCurrencies(){
      return currencies;
    }

    function getLanguageByCode(code){
      if (!code) return;

      code = [code.substr(0, 2).toLowerCase(), code.substr(3, 2).toUpperCase()].join('_');
      return languages[code] || languages['en_US'];
    }

    function getLanguages() {
      return languages;
    }

    return {
      getByCode,
      getLanguages,
      getCurrencies,
      getLanguageByCode,
    }
}
