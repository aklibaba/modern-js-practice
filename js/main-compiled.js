'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var modernJs = {

    objectKeysMethod: function objectKeysMethod() {
        var dictionary = {
            'smart': 'good looking',
            'hype': 'buzz',
            'azonto': 'type of dance'
        };

        var dictionaryKeys = Object.keys(dictionary);

        var upperKeys = dictionaryKeys.map(function (key, i, arr) {
            return key.toUpperCase();
        });

        return upperKeys.join(' ');
    },

    classroom: {
        'stud1': 'Alex',
        'stud2': 'Peter',
        'stud3': 'Lynda'
    },

    traditionalIteration: function traditionalIteration() {

        var studentsArray = [];

        for (var student in this.classroom) {
            if (this.classroom.hasOwnProperty(student)) {
                studentsArray.push(this.classroom[student]);
            }
        }

        return studentsArray.join(' ; ');
    },

    modernIteration: function modernIteration() {
        var classRoomKeys = Object.keys(this.classroom);

        var that = this;
        var studentsArray = classRoomKeys.map(function (key) {
            return that.classroom[key];
        });

        return studentsArray.join(' ; ');
    },

    letScoping: function letScoping() {
        var someStr = 'Hi';

        if (someStr === 'Hi') {
            var _someStr = 'Bye';
        }

        someStr = 'sth else';

        return someStr;
    },

    arrowFunctions: function arrowFunctions() {

        var companyData = {
            employees: ['Lukasz', 'Piotrek', 'Maciek', 'Dana'],
            domain: 'direktpoint.com',
            generateEmailAddresses: function generateEmailAddresses() {

                var mapEmailsFunction = function (item) {
                    return item.toLowerCase() + '@' + this.domain;
                }.bind(this);

                var arrayOfEmails = this.employees.map(mapEmailsFunction);

                return arrayOfEmails.join('<br>');
            }
        };

        return companyData.generateEmailAddresses();
    },

    defaultParams: function defaultParams(name) {
        var surname = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Moloniewicz';

        console.log('My name is ' + name + ' ' + surname);
    },

    es6Objects: {
        cat: {
            miau: function miau(times) {
                console.log('miau '.repeat(times));
            },
            dap: function dap(times) {
                console.log(Array(times + 1).join('dap'));
            },

            hophop: function hophop(times) {
                console.log(Array(times + 1).join('hophop'));
            }

        }
    },

    destructuringArrays: function destructuringArrays() {
        var _ref = ['Poznan', 'Krakow', 'Warszawa', 'Gdansk', 'Szczecin'],
            first = _ref[0],
            fourth = _ref[3];


        return first + ' ' + fourth;
    },
    destructuringObjects: function destructuringObjects() {
        var _name$height$genus$fr = {
            name: 'crataegus monogyna',
            height: 'max 3m.',
            genus: ' crataefus',
            fruits: 'red, small, oval'
        },
            name = _name$height$genus$fr.name,
            height = _name$height$genus$fr.height;


        return 'the ' + name + ' has a height of ' + height;
    },
    destructuringObjectsForArgs: function destructuringObjectsForArgs() {
        var aDance = {
            name: 'makossa',
            origin: 'benin',
            tempo: 'fast',
            mainInstrument: 'drum'
        };

        function showADance(_ref2) {
            var name = _ref2.name,
                tempo = _ref2.tempo,
                origin = _ref2.origin;

            return name + ' is a ' + tempo + ' dance, that comes from ' + origin + ', and is popular in clubs today';
        }

        return showADance(aDance);
    },
    generators: function generators() {
        var _marked = [directions].map(regeneratorRuntime.mark);

        function directions() {
            return regeneratorRuntime.wrap(function directions$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return 'North';

                        case 2:
                            _context.next = 4;
                            return 'West';

                        case 4:
                            _context.next = 6;
                            return 'South';

                        case 6:
                            _context.next = 8;
                            return 'East';

                        case 8:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _marked[0], this);
        }

        var direction = directions();

        console.log(direction.next());
        console.log(direction.next());
        console.log(direction.next());
        console.log(direction.next());
        console.log(direction.next());
    },
    generators2: function generators2() {
        var _marked2 = [eachItem].map(regeneratorRuntime.mark);

        function eachItem(arr) {
            var i;
            return regeneratorRuntime.wrap(function eachItem$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            i = 0;

                        case 1:
                            if (!(i < arr.length)) {
                                _context2.next = 7;
                                break;
                            }

                            _context2.next = 4;
                            return arr[i];

                        case 4:
                            i++;
                            _context2.next = 1;
                            break;

                        case 7:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _marked2[0], this);
        }

        var wyliczanka = eachItem(['ene', 'duo', 'like', 'fake']);

        var wyliczam = setInterval(function () {
            var haslo = wyliczanka.next();
            if (haslo.done) {
                clearInterval(wyliczam);
                console.log('Skonczylem!');
            } else {
                console.log(haslo.value);
            }
        }, 600);
    },
    wyjmuje: function wyjmuje() {
        var rectangle = {
            x: 5,
            y: 4
        };

        function cubeArea(_ref3) {
            var x = _ref3.x,
                y = _ref3.y,
                _ref3$z = _ref3.z,
                z = _ref3$z === undefined ? 10 : _ref3$z;

            return x * y * z;
        }

        return cubeArea(rectangle);
    },
    reszta: function reszta() {
        function goShopping(prefix) {
            var list = '<ul>';

            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            args.forEach(function (elem) {
                list += '<li>' + prefix + ': ' + elem.item + '</li>';
            });

            list += '</ul>';

            return list;
        }

        return goShopping('kup', { item: 'bulka' }, { item: 'salata' }, { item: 'soczewica' });
    },
    spread: function spread() {
        var details = ['now', 'run', 'in company'];

        function activity(when, what, withWho) {
            return when + ' I am going to ' + what + ' ' + withWho;
        }

        return activity.apply(undefined, details);
    },
    spreadOld: function spreadOld() {
        var details = ['now', 'run', 'in company'];

        function activity(when, what, withWho) {
            return when + ' I am going to ' + what + ' ' + withWho;
        }

        // debugger;
        return activity.apply(this, details);
    },
    classes: function classes() {
        var Tree = function () {
            function Tree(name, height, bark, leafColor) {
                _classCallCheck(this, Tree);

                this.name = name;
                this.height = height;
                this.bark = bark;
                this.leafColor = leafColor;
            }

            _createClass(Tree, [{
                key: 'grow',
                value: function grow() {
                    this.height += 1;
                }
            }, {
                key: 'florish',
                value: function florish() {
                    if (this.leafColor === 'green') this.leafColor = 'greener:';else this.leafColor = 'green';
                }
            }]);

            return Tree;
        }();

        var Country = function () {
            function Country(name, continent) {
                _classCallCheck(this, Country);

                this.name = name;
                this.continent = continent;
            }

            _createClass(Country, [{
                key: 'describeYourself',
                value: function describeYourself(options) {
                    switch (options.speed) {
                        case 'fast':
                            return 'I am ' + this.name + ' from ' + this.continent;
                        // break;

                        case 'slow':
                            return 'I am ' + this.name + ', a very nice place to go in ' + this.continent;
                        // break;

                        default:
                            return 'I am ' + this.name;
                        // break;

                    }
                }
            }]);

            return Country;
        }();

        // debugger;

        var maple = new Tree('acer', '5', 'smoothly ribbed');

        var vietnam = new Country('Vietnam', 'Asia');

        console.log(Object.keys(maple));
        console.log(vietnam.describeYourself({}));
    },
    enhancedKeys: function enhancedKeys() {
        var category = 'players';

        var obj = _defineProperty({
            'name': 'Zito'
        }, '\n                        ' + category + '\n                        _id', 23);

        return Object.keys(obj).join('<br>');
    }
};

modernJs.generators2();

modernJs.generators();
modernJs.es6Objects.cat.miau(5);

$('#testdiv').html(modernJs.classes());

//# sourceMappingURL=main-compiled.js.map