// Import any CSS/SCSS files relevant to your module at the top of the js file
import './hero.scss';
// import ScrollMagic from 'scrollmagic'; // ScrollMagic
import { TimelineMax, Power2 } from 'gsap'; // GreenSock

const tl = new TimelineMax({ repeat: -1 });
const line = document.getElementsByClassName('hero-line');
const lineArray = Array.from(line);

console.log(Array.isArray(line));
console.log(lineArray);

lineArray.forEach(function runLines(element) {
  tl.to(element, 2, { opacity: 1 }).to(element, 2, { opacity: 0, ease: Power2.easeIn }, '+=1');
});
