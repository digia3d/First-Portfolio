const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const projectDetailsButtons = document.querySelectorAll('.detailsButton');
const popup = document.querySelector('#popup');
const projects = {
  1: {
    name: 'First',
    imageSrc: 'img/popup/Snapshoot-Portfolio.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting ever since the 1500s, when an unknown printer took a galley of type  veris lapoa todoe.',
    languages: ['html', 'Ruby on rails', 'css'],
  },
  2: {
    name: 'Second',
    imageSrc: '',
    description: '',
    languages: ['html', 'php', 'css'],
  },
  3: {
    name: 'Third',
    imageSrc: '',
    description: '',
    languages: ['html', 'javascript', 'css'],
  },
  4: {
    name: 'Fourth',
    imageSrc: '',
    description: '',
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
    popup.classList.remove('d-none');
  });
});
