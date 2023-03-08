// pageloading.js

const site = {
  title: "Cameron Grigoriadis",
  sitemap: [
    { type: "link", title: "Home", href: "#" },
    {
      type: "group",
      title: "Apps",
      items: [
        { type: "link", title: "Service Day", href: "/serviceday" },
        { type: "link", title: "Meetings", href: "/meetings" },
      ],
    },
    {
      type: "group",
      title: "Portfolio",
      items: [
        {
          type: "link",
          title: "SoCal Counterworks",
          href: "/socal-counterworks",
        },
      ],
    },
    { type: "link", title: "Blog", href: "/blog" },
    { type: "link", title: "Contact", href: "#contact" },
  ],
};

function buildNavLink(item) {
  let linkElement = document
    .getElementById("navLinkTemplate")
    .content.cloneNode(true);
  linkElement.querySelector(".nav-link").innerHTML = item.title;
  linkElement.querySelector(".nav-link").href = item.href;

  return linkElement;
}

function buildDropdown(item) {
  let groupElement = document
    .getElementById("navDropdownTemplate")
    .content.cloneNode(true);
  groupElement.querySelector(".nav-link").innerHTML = item.title;
  groupElement.querySelector(".nav-link").href = item.href;
  let dropdown = groupElement.querySelector(".dropdown-menu");
  item.items.forEach((item) => {
    if (item.type == "link") {
      let listItem = document.createElement("li");
      listItem.innerHTML = `<li><a class="dropdown-item" href="${item.href}">${item.title}</a></li>`;
      dropdown.appendChild(listItem);
    }
  });

  return groupElement;
}

function buildNav(site) {
  let navContainer = document.querySelector(".navbar-nav");

  site.sitemap
    .map((item) => {
      if (item.type == "link") {
        return buildNavLink(item);
      } else if (item.type == "group") {
        return buildDropdown(item);
      }
    })
    .forEach((e) => {
      navContainer.appendChild(e);
    });

  document.getElementById("navbarLogo").innerHTML = site.title;

  navContainer.innerHTML += `
        <li class="nav-item nav-item-social d-flex d-md-none align-items-center">
        </li>`;

  document.querySelectorAll(".nav-icon-container").forEach((e) => {
    e.appendChild(
      document.getElementById("navSocialLinks").content.cloneNode(true)
    );
  });
}

buildNav(site);

function screenSizeListener(mediaQuery) {
  let socialContainer = document.createElement("div");
  socialContainer.classList.add("nav-icon-container");
  if (mediaQuery.matches) {
    document.querySelector(".navbar-collapse").after(socialContainer);
  } else {
    document.querySelector(".nav-item-social").appendChild(socialContainer);
  }
}

var x = window.matchMedia("(max-width: 992px)");
screenSizeListener(x); // Call listener function at run time
x.addListener(screenSizeListener); // Attach listener function on state changes
