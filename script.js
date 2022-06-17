const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const projectDetailsButtons = document.querySelectorAll('.detailsButton');
const popup = document.querySelector('#popup');
const closeButtonsIcon = document.querySelector('.close-button');
const projects = {
  1: {
    name: 'Multi - Post stories',
    imageSrc: 'img/popup/Snapshoot-Portfolio.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting ever since the 1500s, when an unknown printer took a galley of type  veris lapoa todoe.',
    languages: ['html', 'Ruby on rails', 'css'],
  },
  2: {
    name: 'Multi - Post stories',
    imageSrc: '',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting ever since the 1500s, when an unknown printer took a galley of type  veris lapoa todoe.',
    languages: ['html', 'php', 'css'],
  },
  3: {
    name: 'Multi - Post stories',
    imageSrc: '',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting ever since the 1500s, when an unknown printer took a galley of type  veris lapoa todoe.',
    languages: ['html', 'javascript', 'css'],
  },
  4: {
    name: 'Multi - Post stories',
    imageSrc: '',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting ever since the 1500s, when an unknown printer took a galley of type  veris lapoa todoe.',
    languages: ['html', 'java', 'css'],
  },
};
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

function setValue(target, value) {
  target.innerHTML = value;
}

function setTitle(target, value) {
  setValue(target, value);
}

function setImageSrc(target, src) {
  target.attributes.src = src;
}

function setDescription(target, value) {
  setValue(target, value);
}

function setLanguages(target, value) {
  const list = value.map((item) => ` <li class="popup-li"> ${item} </li> `);
  let listContent = '';
  list.forEach((item) => {
    listContent += item;
  });
  setValue(target, listContent);
}

function setPopupData(project) {
  const projectTitle = document.querySelector('.popup-title');
  const projectSnapshot = document.querySelector('.popup-image');
  const projectDescription = document.querySelector('.popup-description');
  const projectLanguages = document.querySelector('.popup-languages');
  setTitle(projectTitle, project.name);
  setImageSrc(projectSnapshot, project.imageSrc);
  setDescription(projectDescription, project.description);
  setLanguages(projectLanguages, project.languages);
}

projectDetailsButtons.forEach((btn) => {
  btn.addEventListener('click', (ev) => {
    setPopupData(projects[ev.target.attributes.id.value]);
    document.querySelector('header').classList.add('blur');
    document.querySelectorAll('section').forEach((item) => item.classList.add('blur'));
    popup.classList.remove('d-none');
    window.scrollTo(0, 0);
  });
});

closeButtonsIcon.addEventListener('click', () => {
  document.querySelector('header').classList.remove('blur');
  document.querySelectorAll('section').forEach((item) => item.classList.remove('blur'));
  popup.classList.add('d-none');
});

const form = document.getElementById('contact-form');
const email = form.element('email');
const fullName = form.element('fullName');
const message = form.element('msg');

function setData() {
  localStorage.setItem('form', contactForm.value);
  localStorage.setItem('email', contactEmail.value);
  localStorage.setItem('fullName', contactFullName.value);
  localStorage.setItem('message', contactMessage.value);
}

function getData() {
  localStorage.getItem('contact-form');
  localStorage.getItem('email');
  localStorage.getItem('fullName');
  localStorage.getItem('message');
}

function populateStorage() {
  localStorage.setItem('form', contactForm.value);
  localStorage.setItem('email', contactEmail.value);
  localStorage.setItem('message', contactMessage.value);
}

if (!localStorage.getItem('fullName')) {
  populateStorage();
} else {
  setData();
}

Name.onchange = populateStorage;
email.onchange = populateStorage;
message.onchange = populateStorage;