"Symbol"in self&&"iterator"in Symbol&&"function"==typeof Array.prototype[Symbol.iterator]?CreateMethodProperty(Array.prototype,"values",Array.prototype[Symbol.iterator]):CreateMethodProperty(Array.prototype,"values",function r(){var t=ToObject(this);return new ArrayIterator(t,"value")});