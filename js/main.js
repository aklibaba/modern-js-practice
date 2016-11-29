var modernJs = {


    objectKeysMethod: function ()
    {
        var dictionary = {
            'smart': 'good looking',
            'hype': 'buzz',
            'azonto': 'type of dance'
        };

        var dictionaryKeys = Object.keys(dictionary);

        var upperKeys = dictionaryKeys.map(function (key, i, arr)
        {
            return key.toUpperCase();
        });

        return upperKeys.join(' ');
    },

    classroom: {
        'stud1': 'Alex',
        'stud2': 'Peter',
        'stud3': 'Lynda'
    },


    traditionalIteration: function ()
    {

        var studentsArray = [];

        for (var student in this.classroom) {
            if (this.classroom.hasOwnProperty(student)) {
                studentsArray.push(this.classroom[student])
            }
        }

        return studentsArray.join(' ; ');
    },

    modernIteration: function ()
    {
        var classRoomKeys = Object.keys(this.classroom);

        var that = this;
        var studentsArray = classRoomKeys.map(function (key)
        {
            return that.classroom[key];
        });


        return studentsArray.join(' ; ');
    },

    letScoping: function ()
    {
        let someStr = 'Hi';

        if (someStr === 'Hi') {
            const someStr = 'Bye';
        }

        someStr = 'sth else'

        return someStr;

    },

    arrowFunctions: function ()
    {

        let companyData = {
            employees: ['Lukasz', 'Piotrek', 'Maciek', 'Dana'],
            domain: 'direktpoint.com',
            generateEmailAddresses: function ()
            {

                let mapEmailsFunction = function (item)
                {
                    return item.toLowerCase() + '@' + this.domain;

                }.bind(this);

                let arrayOfEmails = this.employees.map(mapEmailsFunction);

                return arrayOfEmails.join('<br>');
            }
        };

        return companyData.generateEmailAddresses();

    },

    defaultParams: (name, surname = 'Moloniewicz') =>
    {
        console.log(`My name is ${name} ${surname}`);
    },

    es6Objects: {
        cat: {
            miau(times)
            {
                console.log('miau '.repeat(times));
            },
            dap(times)
            {
                console.log(Array(times + 1).join('dap'));
            },
            hophop: function (times)
            {
                console.log(Array(times + 1).join('hophop'));
            }


        }
    },

    destructuringArrays() {
        var [first,,, fourth] = ['Poznan', 'Krakow', 'Warszawa', 'Gdansk', 'Szczecin'];

        return `${first} ${fourth}`;
    },

    destructuringObjects(){
        var {name, height} = {
            name: 'crataegus monogyna',
            height: 'max 3m.',
            genus: ' crataefus',
            fruits: 'red, small, oval'
        };

        return `the ${name} has a height of ${height}`;
    },

    destructuringObjectsForArgs() {
        var aDance = {
            name: 'makossa',
            origin: 'benin',
            tempo: 'fast',
            mainInstrument: 'drum'
        };

        function showADance({name, tempo, origin}) {
            return `${name} is a ${tempo} dance, that comes from ${origin}, and is popular in clubs today`;
        }

        return showADance(aDance);

    },

    generators() {
        function* directions() {
            yield 'North';
            yield 'West';
            yield 'South';
            yield 'East';
        }

        var direction = directions();

        console.log(direction.next());
        console.log(direction.next());
        console.log(direction.next());
        console.log(direction.next());
        console.log(direction.next());
    },

    generators2() {
        function* eachItem(arr) {
            for(var i = 0; i <arr.length; i++) {
                yield arr[i];
            }
        }

        var wyliczanka = eachItem(['ene', 'duo', 'like', 'fake']);

        var wyliczam = setInterval(function ()
        {
            var haslo = wyliczanka.next();
            if(haslo.done) {
                clearInterval(wyliczam);
                console.log('Skonczylem!');
            } else {
                console.log(haslo.value);
            }
        }, 600);
    }


};

modernJs.generators2();

modernJs.generators();
modernJs.es6Objects.cat.miau(5);

$('#testdiv').html(modernJs.destructuringObjectsForArgs());

