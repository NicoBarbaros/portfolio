// Import React to take advantage of JSX
import React from 'react';

// Links for footer
const footer = [
	{
		title: 'github',
		link: 'https://github.com/nicubarbaros'
	},

	{
		title: 'facebook',
		link: 'https://www.facebook.com/BarbarosNicolae'
	}
];

// Static text for Home page
const home = [
	<p>Hey, I am Nicholas<br/> Frontend Developer<br/> based in Chisinau Moldova</p>,
	<p>You are currently <br/> looking at <strong> my site</strong><br/> that is awesome.</p>,
	<p>This site uses React
		<br/>and something<br/>
		as content manager<br/>
		and some other stuff<br/>
		<em>react-router, babel, webpack, css-modules JSX es6</em>
	</p>,
	<p>Pretty cool, right?<br/>
		Drop me a line at<br/>
		<a href="mailto:nicholas.barbaros@gmail.com?Subject=Cheers" data-text="nicholas.barbaros@gmail.com">nicholas.barbaros@gmail.com</a>
	</p>
]

const homeTitle = {
	'title': 'Nicholas Barbaros',
	'qualities': [
		'Developer',
		'Frontend',
		'Traveler',
		'Tea lover',
		'Cocoa lover',
		'Books lover',
		'Adventurer'
	]
};

// Static text for Contact page
const contact = [
	<h1>Contact Me</h1>,
	<p>I am currently searching for a cool place to work.</p>,
	<p> So if you would like to work with me feel free to drop me a line.</p>,
	<p><a href="mailto:nicholas.barbaros@gmail.com?Subject=Cheers" data-text="nicholas.barbaros@gmail.com">nicholas.barbaros@gmail.com</a></p>
];

export { footer, home, contact, homeTitle };