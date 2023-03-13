// pageloading.js

const site = {
  title: "Cameron Grigoriadis",
  email: "camgrigoriadis@gmail.com",
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

  document.querySelectorAll(".nav-link").forEach((e) => {
    e.addEventListener("mouseover", (e) => {
      console.log(e);
      let color = randomNavLinkHoverColor();
      console.log(color);
      e.target.style.color = color + "!important";
    });
  });

  document.getElementById("navbarLogo").innerHTML = site.title;

  navContainer.innerHTML += `
        <li class="nav-item nav-item-social d-flex align-items-center">
        <div class="nav-icon-container nav-icon-container-lg"></div>
        </li>`;
}

function buildFooter(site) {
  let copyright = "©2023 Cameron Grigoriadis";

  let footer = document.querySelector("footer");

  footer.innerHTML += copyright;
}

function randomNavLinkHoverColor() {
  const colors = [
    "rgb(11, 162, 94)",
    "rgb(186, 31, 79)",
    "rgb(209, 84, 27)",
    "rgb(159, 27, 159)",
    "#158065",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

buildNav(site);
buildFooter(site);

document.getElementById("contactFormEmailLabel").innerHTML = site.email;

document.querySelectorAll(".nav-icon-container").forEach((e) => {
  e.appendChild(
    document.getElementById("navSocialLinks").content.cloneNode(true)
  );
});
