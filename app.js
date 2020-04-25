const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const resetButton = document.querySelector('#reset')
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration = 0;

const timer = new Timer(durationInput, startButton, pauseButton, resetButton, {
	onStart(totalDuration) {
		duration = totalDuration;
	},
	onTick(timeRemaining) {
    circle.setAttribute('stroke-dashoffset',
       (perimeter * timeRemaining) / duration - perimeter
    );
	},
	onComplete() {
    circle.setAttribute('stroke-dashoffset', 0);
    circle.setAttribute('stroke', 'red');

  },
  onReset() {
    circle.setAttribute('stroke-dashoffset', 0);
    circle.setAttribute('stroke', 'green');
  }
});
