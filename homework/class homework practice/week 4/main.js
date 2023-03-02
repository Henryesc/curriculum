const app = document.getElementById('app');
const header = document.createElement('header');

const navs = [
    {
        name: 'home',
        href: '/home'
    },
    {
        name: 'portfolio',
        href: '/portfolio'
    },
    {
        name: 'about',
        href: '/about'
    },
    {
        name: 'contact',
        href: '/contact'
    },
    {
        name: 'privacyPolicy',
        href: '/privacyPolicy'
    },


]


function createNav(name) {
    for (let i = 0; i < navs.length; i++) {
          app.appendChild(header)
          const nav = document.createElement('a');
          nav.innerText = navs[i].name;
          nav.href = navs[i].href;
          header.appendChild(nav);
    }
  }
createNav()
// app.appendChild(header)

// const home = document.createElement('a')
// home.innerText = 'Home'
// header.appendChild(home)

// const portfolio = document.createElement('a')
// portfolio.innerText = 'portfolio'
// header.appendChild(portfolio)

// const about = document.createElement('a')
// about.innerText = 'about'
// header.appendChild(about)

// const contact = document.createElement('a')
// contact.innerText = 'contact'
// header.appendChild(contact)

// const privacyPolicy = document.createElement('a')
// privacyPolicy.innerText = 'privacyPolicy'
// header.appendChild(privacyPolicy)


// const renderHome = (name) => {
//     const div = document.createElement('div');
//     div.innerText = `I am ${name}`;
//     app.append(div);
//   };