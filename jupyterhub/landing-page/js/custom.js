document.addEventListener('DOMContentLoaded', function() {

function classToggle() {
	var menuContainer = document.querySelector('.AiHeader_NavListContainer')
		if ( menuContainer.classList.contains('ContainerHidden') ) {
			console.log('true')
			menuContainer.classList.remove('ContainerHidden');
			console.log(' class removed')
			} else {
			menuContainer.classList.add('ContainerHidden');
			console.log(' class added');
			}
	};


 document.querySelector('#AiHeader_MobileMenuIcon ').addEventListener('click', classToggle);

var S0 = "ai/imandra> ";
var S1 = "#about";
var S2 = "\n\nImandra is \n\n - AI for algorithms, scaled to the cloud;\n - a powerful new foundation for formally verified functional programming;\n - powering a new generation of tools for ensuring the safety, fairness,\n   transparency and correctness of complex algorithms.";
var S3 = "\n\nImandra's Reasoning as a Service APIs democratise access to deep advances\nin automated reasoning, bringing the power of tools traditionally reserved\nto institutions like NASA to algorithm development at large.";
var S4 = "\n\nDisclaimer: Imandra stores normalised representations of user definitions,\nqueries, counterexamples and proofs to improve future performance.";
var S5 = "\n\nPress here to consent and continue";

	var Description = document.getElementById('Try_Terminal');
	var typewriter = new Typewriter( Description, {
		    loop: true,
		    cursor: '',
		    animateCursor: true,
		    blinkSpeed: 0,
		    typingSpeed: 0,
		    deleteSpeed: 1,
		    charSpanClassName: 'BasicTypewriter',
		    devMode: false
	});

	typewriter.typeString(S0)
		.pauseFor(500)
		.changeSettings({typingSpeed: 550})
		.typeString(S1)
		.pauseFor(1000)
		.changeSettings({typingSpeed: 0})
		.typeWords(S2)
		.pauseFor(300)
		.typeWords(S3)
		.pauseFor(300)
		.typeWords(S4)
		.pauseFor(300)
		.changeSettings({charSpanClassName: 'BasicTypewriterBlue'})
		.typeString(S5)
		.changeSettings({blinkSpeed: 50})
		.pauseFor(11000)
		.pulseEffect('Pulse')
		.pauseFor(666)
		.changeSettings({blinkSpeed: 0})
		.clearAll()
		.start()

});
