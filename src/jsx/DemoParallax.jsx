var React = require('react');
var {Parallax,Background} = require('react-parallax');

var DemoParallax = React.createClass({

	render: function() {

		let style = {
			backgroundColor: '#efefef',
			color: 'white',
			textAlign: 'center'
		};
		let fontStyle = {
			fontFamily: 'Helvetica Neue, Arial, sans-serif',
			textAlign: 'center',
			fontWeight: 100
		};
		let fontStyle2 = {
			fontFamily: 'Helvetica Neue, Arial, sans-serif',
			textAlign: 'center',
			fontWeight: 100,
			color: 'darkgrey'
		};

		return (
			<div style={style}>
				<div>
					<br/>
					<h1 style={fontStyle2}>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</h1>
					<h1 style={fontStyle2}>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</h1>
					<h1 style={fontStyle2}>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</h1>
					<br/>
				</div>
				<Parallax bgImage="www/assets/1.jpg" strength={400} log={true}>
					<br/>
					<br/>
					<br/>
					<h1 style={fontStyle}>...</h1>
					<h1 style={fontStyle2}>A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops</h1>
					<br/>
					<br/>
				</Parallax>
				<div>
					<br/>
					<h1 style={fontStyle2}>A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops</h1>
					<br/>
				</div>
				<Parallax strength={300}>
					<br />
					<br />
					<Background>
						<img src="http://www.fillmurray.com/400/300" alt="fill murray"/>
						<div style={{width: 800, height: 300, backgroundColor: '#450093'}}></div>
						<img src="http://www.fillmurray.com/500/300" alt="fill murray"/>
					</Background>
					<br />
					<h1 style={fontStyle2}>A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops</h1>
					<br />
					<br />
				</Parallax>

				<div>
					<br/>
					<h1 style={fontStyle2}>A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops</h1>
					<br/>
				</div>
			</div>
		);
	}

});

module.exports = DemoParallax;