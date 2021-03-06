'use strict';

/**
 * tests whether or not an object property exists; does not search the object prototype.
 *
 * @see http://stackoverflow.com/questions/2631001/javascript-test-for-existence-of-nested-object-key
 *
 * @param {Object} obj
 * @returns {boolean}
 */
module.exports = function objectPropertyExists( obj ) {
  var i;

  if ( !obj ) {
    return false;
  }

  for ( i = 1; i < arguments.length; i += 1 ) {
    if ( obj.hasOwnProperty( arguments[ i ] ) ) {
      obj = obj[ arguments[ i ] ];
    } else {
      return false;
    }
  }

  return true;
};