/* State */
// Here, we define variables for the data that our program needs to remember.
// We call this data "state" because it represents the state of our program.

// TODO: Add support for more colors
const names = ["Alice", "Bob", "Carol","Hannah", "John", "Anthony"];
const occupations = ["Writer", "Teacher", "Programmer", "Designer","Illustrations"];
const startPrices = [30, 50, 70];
//let avergeStarting = 30;

const maxName = 20;
const freelancers = [
  {
    name: "alice",
    occupation: "writer",
    price: 30,
  },
  {
    name: "bob",
    occupation: "teacher",
    price: 50,
  },

  {
    name: "carrol",
    occupation: "programmer",
    price: 70,
  },
    ];

// `setInterval` will call `addPerson` every 1000 milliseconds (1 second)
// and return an interval ID that we can use to stop the interval later.
// Calling `clearInterval(addShapeIntervalId)` will stop the interval.
const addPersonIntervalId = setInterval(addPerson, 1000);

render(); // We call this function once to render the initial state

/**
 * Update the DOM to reflect the current state.
 * The term "render" is often used to describe this process.
 */
function render() {
  // Render the freelancers
  const freelancerElement = document.querySelector("#freelancers");

  const freelancerElements = freelancers.map((item) => {
    const element = document.createElement("li");
    element.innerHTML = `
    <div> ${item.name} </div>
    <div>${item.occupation} </div>
    <div> ${item.price}</div>
    `
    element.className = 'freelancer'
    return element;
  });
  freelancerElement.replaceChildren(...freelancerElements);
  let newAverage = calcAverage();
  document.querySelector("#avgPrice").innerText = `The average starting price is $${newAverage}`;
}

/**
 * Add a random person to the `freelancers` array
 */
function addPerson() {
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation = occupations[Math.floor(Math.random() * occupations.length)];
  const price = startPrices[Math.floor(Math.random() * startPrices.length)];

  freelancers.push({name, occupation, price});

  render();

  // TODO: Stop adding person if we've reached the maximum number of people
  if (freelancers.length >= maxName)
  clearInterval(addNameIntervalId);
}

function calcAverage() {
  let average = 0;
  for (let i = 0; i < freelancers.length; i++) {
    average += freelancers[i].price;
  }
  return average/freelancers.length;
}