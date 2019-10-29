// Import any CSS/SCSS files relevant to your module at the top of the js file
import './stats.scss';
import ScrollMagic from 'scrollmagic'; // ScrollMagic
import { TweenMax, TimelineLite, TimelineMax, Power2 } from 'gsap'; // GreenSock

const statOne = document.getElementById('stat-1');
const statOneText = statOne.innerHTML;
const statTwo = document.getElementById('stat-2');
const statTwoText = statTwo.innerHTML;
const statThree = document.getElementById('stat-3');
const statThreeText = statThree.innerHTML;
const counter = { var: 0 };
const counterTwo = { var: 0 };
const counterThree = { var: 0 };

// Get the Div for Targeting
const start = document.querySelector('.iran-stats-array');
console.log(start);

// Get it's position in the viewport
// const bounding = start.getBoundingClientRect();
// console.log(bounding);

// Create Helper Function
const isInViewport = function(elem) {
  const bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

function countUpOne() {
  statOne.innerHTML = Math.ceil(counter.var);
}
function countUpTwo() {
  statTwo.innerHTML = Math.ceil(counterTwo.var);
}
function countUpThree() {
  statThree.innerHTML = Math.ceil(counterThree.var);
}

function runTime() {
  const tl = new TimelineMax(); // Set Up New Timeline for Tweens

  tl.to(counter, 5, {
    var: statOneText,
    onUpdate: countUpOne,
    ease: Power2.easeOut
  })
    .to(
      counterTwo,
      5,
      {
        var: statTwoText,
        onUpdate: countUpTwo,
        ease: Power2.easeOut
      },
      0 // Start without delay
    )
    .to(
      counterThree,
      5,
      {
        var: statThreeText,
        onUpdate: countUpThree,
        ease: Power2.easeOut
      },
      0 // Start without Delay
    );
}

window.addEventListener(
  'scroll',
  function(event) {
    if (isInViewport(start)) {
      runTime();
    } else {
      console.log('Nope...');
    }
  },
  false
);
