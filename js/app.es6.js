import $ from './jquery-1.11.2.min';
import InlineVideo from './InlineVideo.es6';
import VideoHero from './VideoHero.es6';
import Article from './Article.es6';
import Exhibit from './Exhibit.es6';
import Podcast from './Podcast.es6';
import Main from './Main.es6';

let app = new Main($, [
	VideoHero, 
	Article, 
	InlineVideo, 
	Exhibit,
	Podcast
], $('[data-module]'));

app.init();