const name = { firstName: "Philip", lastName: "Fry" };
const details = {
  job: "Delivery Boy",
  employer: "Planet Express",
};

let main_object = {
  ...name,
  ...details,
};

console.log(main_object);