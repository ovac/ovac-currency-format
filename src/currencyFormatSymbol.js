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
function currencyFormatSymbol($rootScope, $filter, ovacCurrencyFormatService) {

    return function(currencyCode) {

        if (!currencyCode) return;

        let currency = ovacCurrencyFormatService.getByCode(currencyCode);

        return !(currency && currency.uniqSymbol ) || currency.uniqSymbol.grapheme;
    }
}

 currencyFormatService.$inject = ['$rootScope', '$filter', 'ovacCurrencyFormatService'];

export default currencyFormatSymbol;
