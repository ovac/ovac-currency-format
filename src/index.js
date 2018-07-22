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
 */

 const namespace = 'ovacCurrencyFormat'; export default namespace;

 angular.module( namespace , [])

    .filter(`${namespace}`, require('./currencyFormatFilter').default)

    .filter(`${namespace}Symbol`, require('./currencyFormatSymbol').default)

    .factory(`${namespace}Service`, require('./currencyFormatService').default)

    // Dependencies
    .value( `${namespace}CurrencyNumberFormat`, require('currency-number-format'))

    .value( `${namespace}CurrencyFormat`, require('currency-format'))
