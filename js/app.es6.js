import $ from './lib/jquery-1.11.2.min';
import Sample from './Sample.es6';
import Main from './Main.es6';

let app = new Main($, [
	Sample
], $('[data-module]'));

app.init();
