# jquery-findInnermost [![Build Status](https://travis-ci.org/baldwicc/jquery-findInnermost.svg?branch=master)](https://travis-ci.org/baldwicc/jquery-findInnermost)

> like $.find, but $.findInnermost

## Installation
```shell
bower install jquery-findInnermost --save
```

## Usage
```javascript
var data = [
'      <div id="parent">',
'        <div class="child child-1">',
'          <div class="child child-2">',
'            whoaa!',
'          </div>',
'          <div class="child child-3">',
'            <div class="child child-4">',
'              whee!',
'            </div>',
'          </div>',
'        </div>',
'      </div>',
].join('\n');

// will return 4 elems 😦
$(data).find('.child');

// will return 2 elems - child-2 and child-4 😄
$(data).findInnermost('.child');

// and of course, it works in the dom
$('body').append(data);
$('#element').findInnermost('.child');
```

## License

MIT © baldwicc
