// TODO: Set item in localStorage
localStorage.setItem('skill', 'JavaScript');

// TODO: Get item from localStorage
const skill = localStorage.getItem('skill');
console.log("Getting item from localstorage: ",skill);

// TODO: Remove item from localStorage
localStorage.removeItem('skill');

// TODO: Clear all items from localStorage
localStorage.clear();

// TODO: Add an object to localStorage
localStorage.setItem('developer', JSON.stringify({skill: 'React', experience: 2}));

// TODO: Get an object from localStorage
const developer = JSON.parse(localStorage.getItem('developer'));
console.log("Getting object from localstorage: ",developer);

// TODO: Set item in sessionStorage
sessionStorage.setItem('skill', 'JavaScript');

// TODO: Get item from sessionStorage
const sessionSkill = sessionStorage.getItem('skill');
console.log("Getting item from sessionStorage: ",sessionSkill);

// TODO: Remove item from sessionStorage
sessionStorage.removeItem('skill');


// TODO: Clear all items from sessionStorage
sessionStorage.clear();

// TODO: Add an object to sessionStorage
sessionStorage.setItem('developer', JSON.stringify({skill: 'React', experience: 2}));

// TODO: Get an object from sessionStorage
const sessionDeveloper = JSON.parse(sessionStorage.getItem('developer'));
console.log("Getting object from sessionStorage: ",sessionDeveloper);
