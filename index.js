import {modernJs} from './js/main.js';
import $ from 'jquery';
import './js/modules/async.js';
import './js/modules/indexeddb';

modernJs.generators2();

modernJs.generators();
modernJs.es6Objects.cat.miau(5);

$('#testdiv').html(modernJs.classes());
// $('#testdiv').html('works without js');



