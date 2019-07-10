/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function createMenu(menuItems){
  
  //Creating elements for Menu
  const menuButton = document.querySelector('.menu-button')
  const header = document.querySelector('.header')
  const menu = document.createElement('div')
  const list = document.createElement('ul')
  const menuitem = menuItems.map(item => {
  let thing = document.createElement('li')
  thing.textContent = item
  list.appendChild(thing)
  //console.log(thing)
  //return thing
  }
  )
  
  //Attaching elements to appropriate place of Menu button
  header.appendChild(menu)
  menu.appendChild(list)

  console.log(list)

  //Setting class names

  menu.classList.add('menu')

  //Setting text content


  //Button functionality 

  menuButton.addEventListener('click', event => menu.classList.toggle('menu--open'))
  
  return menu
}

createMenu(menuItems)
