import _ from 'lodash'
import './style.css'
import printMe from './print.js'
import { cube } from './math.js'

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello123', 'webpack' + cube(5)], ' ');

  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('accepting the updated printme module');
    printMe();
  })
}