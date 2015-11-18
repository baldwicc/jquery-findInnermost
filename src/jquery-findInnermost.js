/* global define:false */

/*
 *
 * Copyright (c) 2015 baldwicc
 * Licensed under the MIT license.
 */
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else {
    factory(jQuery);
  }
}(function($) {

  $.fn.findInnermost = function(selector) {
    return $(this).find(selector).filter(function() {
      return $(this).closest(selector).length && !$(this).children(selector).length;
    });
  };

  return $;
}));

