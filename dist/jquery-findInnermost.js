/*! jquery-findInnermost - v0.1.0 - 2015-11-18
* https://github.com/baldwicc/jquery-findInnermost#readme
* Copyright (c) 2015 ; Licensed MIT */
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

