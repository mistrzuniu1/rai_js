import _ from 'lodash'
import Library from "./Library"
import Book from "./Book"
import Person from "./Person"
import Borrowing from "./Borrowing"

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());