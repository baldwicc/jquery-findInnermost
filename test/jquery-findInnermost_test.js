(function($) {
  module('jQuery#findInnermost', {
    setup: function() {
      this.elems = $('#qunit-fixture').children("#parent");
      this.parent = $('#parent');
      this.child = $('.child-4, .child-2');
    }
  });

  test('is chainable and finds innermost child', function() {
    expect(1);
    equal(this.elems.findInnermost('.child')[0], this.child[0], 'should be chainable and find both innermost child elems');
  });

}(jQuery));

