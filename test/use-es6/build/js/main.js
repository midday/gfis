'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var arr = [1, 2, 3];
var temp = [];
arr.map(function (item) {
  return item + 1;
});

var Animal = (function () {
  // 构造方法，实例化的时候将会被调用，如果不指定，那么会有一个不带参数的默认构造函数.

  function Animal(name, color) {
    _classCallCheck(this, Animal);

    this.name = name;
    this.color = color;
  }

  // toString 是原型对象上的属性

  _createClass(Animal, [{
    key: 'toString',
    value: function toString() {
      console.log('name:' + this.name + ',color:' + this.color);
    }
  }]);

  return Animal;
})();