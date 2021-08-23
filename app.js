const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "Male",
    lookingfor: "Female",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/men/82.jpg",
  },
  {
    name: "Jen Smith",
    age: 25,
    gender: "Female",
    lookingfor: "Male",
    location: "Miami FL",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    name: "William Johnson",
    age: 30,
    gender: "Male",
    lookingfor: "Female",
    location: "Lynn MA",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Gregor Mary",
    age: 29,
    gender: "Female",
    lookingfor: "Male",
    location: "Florida",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    name: "James Micheal",
    age: 27,
    gender: "Male",
    lookingfor: "Female",
    location: "Washington DC",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    name: "Zack Ann",
    age: 26,
    gender: "Female",
    lookingfor: "Male",
    location: "Carlifornia",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

const profiles = profileIterator(data);

// Next event
document.getElementById("next").addEventListener("click", nextProfile);

// Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.querySelector(".profileDisplay").innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>
    `;

    document.querySelector('.imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    // No more profile
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
