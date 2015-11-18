# jquery-findall [![Build Status](https://travis-ci.org/baldwicc/jquery-findall.svg?branch=master)](https://travis-ci.org/baldwicc/jquery-findall)

> like $.find, but $.findAll

## Installation
```shell
bower install jquery-findall --save
```

## Usage
```javascript
var data = [
  '<div id="element">',
  '  <p id="child">',
  '    wheeee!'
  '  </p>',
  '</div>'
].join('\n');

// will return an empty collection 😦
$(data).find('#element');

// will return #element 😄
$(data).findAll('#element');

// and of course, it works in the dom
$('body').append(data);
$('#element').findAll('#element');
```

## Why?
Because nothing [on](http://stackoverflow.com/questions/3637298) [stackoverflow](http://stackoverflow.com/questions/17535631) [was available](https://github.com/ronen/jquery.findIncludeSelf) as an AMD-friendly plugin.

## License

MIT © baldwicc
