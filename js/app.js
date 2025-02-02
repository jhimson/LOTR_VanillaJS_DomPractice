console.log('Linked.');

// Dramatis Personae
const hobbits = [
  `Frodo Baggins`,
  `Samwise "Sam" Gamgee`,
  `Meriadoc "Merry" Brandybuck`,
  `Peregrin "Pippin" Took`,
];

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir'];

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs'];

const lands = ['The-Shire', 'Rivendell', 'Mordor'];

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
  console.log('1: makeMiddleEarth');

  // 1. create a section tag with an id of middle-earth
  const middleEarth = document.createElement('section');
  middleEarth.id = 'middle-earth';

  for (let i = 0; i < lands.length; i++) {
    // 2. use a for loop to iterate over the lands array that does the following:

    //   2a. creates an article tag (there should be one for each land when the loop is done)
    let article = document.createElement(`article`);

    //   2b. gives each land article an `id` tag of the corresponding land name
    // Sets the id of each of the article to be the elements of the array lands based on the index using i
    article.setAttribute('id', lands[i]);

    //   2c. includes an h1 with the name of the land inside each land article
    let h1 = document.createElement(`h1`);
    // Sets the inner text of each h1 inside the article to be the elements of the array lands based on the index using i
    h1.innerText = lands[i];
    // Appends each of the h1 tags inside the article tag.
    article.appendChild(h1);
    //   2d. appends each land to the middle-earth section
    // Appends the article tags inside the section 'middle-earth'
    middleEarth.appendChild(article);
    // 3. append the section to the body of the DOM.
  }
  // Adds the section with the id middle-earth inside the body tag.
  document.body.append(middleEarth);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
  console.log('2: makeHobbits');

  // display an `unordered list` of hobbits in the shire

  // hint: create a 'ul' outside the loop into which to append the 'li's

  // hint: get 'The-Shire' by using its id
  let hobbitsList = document.createElement('ul');
  hobbitsList.id = 'hobbits';
  // Looping through each elements of the array hobbits using forEach iterator.
  hobbits.forEach((hobbit) => {
    // Creates an li tag and stores it to the variable called listItem for each iteration of the elements of the hobbits array.
    let listItem = document.createElement('li');
    // Adds an name attribute if the hobbit element is equals to 'Frodo Baggins'.
    if (hobbit === 'Frodo Baggins') {
      listItem.setAttribute('name', 'Frodo');
    } else if (hobbit === 'Samwise "Sam" Gamgee') {
      listItem.setAttribute('name', 'Sam');
    }
    // Adds each hobbit a class of `hobbit`
    listItem.setAttribute('class', 'hobbit');
    listItem.id = hobbit;
    // Sets the inner text of each hobbit list item the value of the elements in the hobbits array.
    listItem.innerText = hobbit;
    // Appends all the list item inside the ul tag called hobbitsList.
    hobbitsList.appendChild(listItem);
  });
  let theShire = document.getElementById('The-Shire');
  theShire.appendChild(hobbitsList);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
  console.log('3: keepItSecretKeepItSafe');

  // create a div with an id of `'the-ring'`
  let theRing = document.createElement('div');
  // Adds an id attribute to the div element called theRing.
  theRing.setAttribute('id', 'the-ring');
  // give the div a class of `'magic-imbued-jewelry'`
  theRing.setAttribute('class', 'magic-imbued-jewelry');

  // add the ring as a child of `Frodo`
  // Getting the element with the name 'Frodo'.
  let Frodo = document.getElementsByName('Frodo');
  // Appending the div tag called theRing to 'Frodo'
  Frodo[0].append(theRing);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
  console.log('4: makeBaddies');

  // display an unordered list of baddies in Mordor
  // give each of the baddies a class of "baddy"

  // remember to append them to Mordor
  // Creates an unorderedList element tag  and storing it inside the variable baddiesList
  let baddiesList = document.createElement('ul');
  baddiesList.id = 'baddies';

  // Looping through the array of baddies using forEach iterator
  baddies.forEach((baddy) => {
    // Create an li tag for each iteration and storing it in the baddyItem variable.
    let baddyItem = document.createElement('li');
    // Add a class baddy to each of the li item.
    baddyItem.setAttribute('class', 'baddy');
    //   Sets the inner text of each baddy li element into the value of each element of the array baddies.
    baddyItem.innerText = baddy;
    // Appends each of the li item into the unordered list tag called baddiesList
    baddiesList.appendChild(baddyItem);
  });
  let Mordor = document.getElementById('Mordor');
  Mordor.appendChild(baddiesList);
  // document.body.append(baddiesList)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
  console.log('5: makeBuddies');
  // create an `aside` tag
  let buddiesAside = document.createElement('aside');

  // put an `unordered list` of the `'buddies'` in the aside
  // Creates an unordered list element.
  let buddiesList = document.createElement('ul');
  buddiesList.id = 'buddies';

  // insert your aside as a child element of `rivendell`
  // Loops through the array of buddies using forEach iterator.
  buddies.forEach((buddy) => {
    // Creates a li tag element every iteration.
    let buddiesItem = document.createElement('li');
    buddiesItem.classList.add('buddy');
    buddiesItem.id = buddy;
    // Sets the element value as the inner text of the li item.
    buddiesItem.innerText = buddy;
    buddiesList.appendChild(buddiesItem);
  });
  buddiesAside.appendChild(buddiesList);
  let rivendell = document.getElementById('Rivendell');
  rivendell.appendChild(buddiesAside);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
  console.log('6: leaveTheShire');

  // assemble the `hobbits` and move them to `rivendell`
  let theShire = document.getElementById('The-Shire');
  let theShireUListChild = document.getElementById('The-Shire').children[1];
  theShire.removeChild(theShireUListChild);

  // Adding the 'hobbits' to rivendell <aside />
  document
    .getElementById('Rivendell')
    .children[1].appendChild(theShireUListChild);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
  console.log('7: beautifulStranger');
  // change the `'Strider'` text to `'Aragorn'`
  document.getElementById("Strider").innerText = 'Aragorn';
  
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
  console.log('8: forgeTheFellowShip');
  // create a new div called `'the-fellowship'` within `rivendell`
  let theFellowship = document.createElement('div');
  theFellowship.id = 'the-fellowship';
  let theFellowshipList = document.createElement('ul');
  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
  // Get the elements with the class name "hobbit" and store it as an array.
  let hobbitsList = [...document.getElementsByClassName('hobbit')];
  // Get the elements with the class name "buddy" and store it as an array.
  let buddiesList = [...document.getElementsByClassName('buddy')];

  for (let i = 0; i < hobbitsList.length; i++) {
    theFellowshipList.appendChild(hobbitsList[i]);
    alert(`${hobbitsList[i].innerText} joined your party`);
  }

  for (let i = 0; i < buddiesList.length; i++) {
    theFellowshipList.appendChild(buddiesList[i]);
    alert(`${buddiesList[i].innerText} joined your party`);
  }
  theFellowship.appendChild(theFellowshipList);
  // after each character is added make an alert that they // have joined your party
  document.getElementById('Rivendell').appendChild(theFellowship);
  // NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
  console.log('9: theBalrog');
  // change the `'Gandalf'` text to `'Gandalf the White'`
  // apply the following style to the element, make the // background 'white', add a grey border
  let gandalf = document.getElementById('Gandalf the Grey');
  gandalf.innerText = 'Gandalf the White';
  gandalf.style.background = 'white';
  gandalf.style.border = '2px solid grey';
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
  console.log('10: hornOfGondor');
  // pop up an alert that the horn of gondor has been blown
  alert('The horn of gondor has been blown');
  let boromir = document.getElementById('Boromir');

  // Boromir's been killed by the Uruk-hai!
  alert(`Boromir's been killed by the Uruk-hai!`);
  // Remove `Boromir` from the Fellowship
  boromir.remove();
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
  console.log('11: itsDangerousToGoAlone');
  let frodo = [...document.getElementsByName('Frodo')];
  let sam = [...document.getElementsByName('Sam')];
  // console.log(mordor.children[0].innerHTML);

  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
  let modor = document.getElementById('Mordor');
  let mordorList = document.getElementById('baddies');
  mordorList.appendChild(frodo[0]);
  mordorList.appendChild(sam[0]);
  modor.appendChild(mordorList);

  // add a div with an id of `'mount-doom'` to `Mordor`
  let mountDoom = document.createElement('div');
  mountDoom.setAttribute('id', 'mount-doom');
  modor.appendChild(mountDoom);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
  console.log('12: weWantsIt');
  // Create a div with an id of `'gollum'` and add it to Mordor
  let gollum = document.createElement('div');
  gollum.id = 'gollum';
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  let theRing = document.getElementById('the-ring');
  gollum.appendChild(theRing);

  // Move Gollum into Mount Doom
  let mountDoom = document.getElementById('mount-doom');
  mountDoom.appendChild(gollum);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain');
	// remove `Gollum` and `the Ring` from the document
	let gollum = document.getElementById("gollum");
	gollum.remove();
	// Move all the `hobbits` back to `the shire`
	let hobbits = document.querySelectorAll('.hobbit');
	let theShire = document.getElementById('The-Shire');
	let theShireList = document.createElement('ul');
	// console.log();
	hobbits.forEach((hobbit) => {
		theShireList.appendChild(hobbit);
	});

	theShire.appendChild(theShireList);

  }

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth);
document.getElementById('chapter-2').addEventListener('click', makeHobbits);
document
  .getElementById('chapter-3')
  .addEventListener('click', keepItSecretKeepItSafe);
document.getElementById('chapter-4').addEventListener('click', makeBaddies);
document.getElementById('chapter-5').addEventListener('click', makeBuddies);
document.getElementById('chapter-6').addEventListener('click', leaveTheShire);
document
  .getElementById('chapter-7')
  .addEventListener('click', beautifulStranger);
document
  .getElementById('chapter-8')
  .addEventListener('click', forgeTheFellowShip);
document.getElementById('chapter-9').addEventListener('click', theBalrog);
document.getElementById('chapter-10').addEventListener('click', hornOfGondor);
document
  .getElementById('chapter-11')
  .addEventListener('click', itsDangerousToGoAlone);
document.getElementById('chapter-12').addEventListener('click', weWantsIt);
document
  .getElementById('chapter-13')
  .addEventListener('click', thereAndBackAgain);
document.getElementById('all-chapters').addEventListener('click', () => {
  makeMiddleEarth();
  makeHobbits();
  keepItSecretKeepItSafe();
  makeBaddies();
  makeBuddies();
  leaveTheShire();
  beautifulStranger();
  forgeTheFellowShip();
  theBalrog();
  hornOfGondor();
  itsDangerousToGoAlone();
  weWantsIt();
  thereAndBackAgain();
});
