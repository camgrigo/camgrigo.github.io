// profiles.js
// (c) 2019 Cameron Grigoriadis

var profileSectionId = 'profile-links'
var workSectionId = 'work'
var baseResourcePath = 'resources/icons/profiles/'

var profiles = [
  {
    id: "gitHub-profile-link",
    href: "https://github.com/camgrigo",
    image: {src: baseResourcePath + "GitHub-Mark/PNG/GitHub-Mark-120px-plus.png", alt: "View my Github Profile"}
  },
  {
    id: "linkedIn-profile-link",
    href: "https://www.linkedin.com/in/cameron-grigoriadis-4a4119184",
    image: {src: baseResourcePath + "LinkedIn-Logos/LI-In-Bug.png", alt: "View my LinkedIn® Profile"}
  },
  {
    id: "instagram-profile-link",
    href: "https://www.instagram.com/servicedayapp/",
    image: {src: baseResourcePath + "GlyphLogo_May2016_Onlinev2/glyph-logo_May2016.png", alt: "Visit the Service Day Instagram Profile"}
  },
  {
    id: "twitter-profile-link",
    href: "https://twitter.com/camgrigo",
    image: {src: baseResourcePath + "Twitter Social Icons/Twitter Social Icons/Twitter_SocialIcon_Circle/Twitter_Social_Icon_Circle_Color.png", alt: "View my Twitter Profile"}
  },
  {
    id: "medium-profile-link",
    href: "https://medium.com/@camgrigo",
    image: {src: baseResourcePath + "medium-logos-master/monogram/Monogram.svg", alt: "View my Medium Profile"}
  }
]

var workSectionContent = [
  {
    image: {src: "resources/icons/service-day-icon.png", alt: "Service Day App Icon", style: "max-height: 10rem;"},
    title: 'Service Day',
    description: "<p>An iOS app for Jehovah's Witnesses that lets you keep track of people you meet and note what you discussed when visiting them.</p>",
    callToAction: '<a href="https://apps.apple.com/us/app/service-day/id1204528942?mt=8" style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2019-03-06&kind=iossoftware&bubble=ios_apps) no-repeat;width:135px;height:40px;" target="_blank"></a>'
  },
  {
    image: {src: "resources/images/happy_yogurt_toppings.jpeg", alt: "Happy Yogurt", style: "width:20rem;", class: "rounded"},
    title: 'Happy Yogurt',
    description: '<h6>Employee, 2017 – 2018</h6><p>I really enjoyed my summers at Happy Yogurt. It is a local treasure, and I got the opportunity to join the small team after the shop experienced a big move and change in ownership. I learned many things, including how to manage multiple tasks over the course of each day, the value of word-of-mouth advertising, and, most importantly, the necessity to show up with a warm smile on your face for our customers and my workmates.</p>',
    callToAction: "Visit Happy Yogurt's " + '<a href="https://www.facebook.com/happy.yogurt.esco/" target="_blank">Facebook page</a> or the <a href="https://www.instagram.com/happy.yogurt.esco/" target="_blank">Instagram Profile</a> I used to contribute to.'
  },
  {
    image: {src: "resources/images/grand_ave_night.jpg", alt: "Escondido's Historic Grand Ave at Night", style: "max-width:20rem;", class: "rounded"},
    title: '3-Screens Studio',
    description: '<h6>Intern (Spring 2016)</h6><p>At this local software development company I learned Bootstrap, received advice from an experienced iOS developer, and got to see a development team in action.</p>',
    callToAction: '<a href="https://medium.com/@camgrigo/interning-at-3-screens-b550c03cb515" target="_blank">Read more about my experiences on Medium. <svg class="icon-sm feather feather-external-link" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:0.3rem;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>'
  }
]

function loadProfiles() {
  var profileSection = document.getElementById(profileSectionId)

  profileSection.innerHTML = profiles
  .map(function(profile) {
    return '<a href="' + profile.href + '" target="_blank">' +
        '<img src="' + profile.image.src + '" alt="' + profile.image.alt + '">' +
      '</a>'
  })
  .join('\n')
}

function workSectionRow(item) {
  var row = '<div class="row">' +
  '<div class="col-md-1"></div>' +
  '<div class="col-md-5">'

  if (item.image !== null) {
    row += '<img class="mx-auto my-5 my-md-auto d-block float-md-right'
    if (item.image.class !== null) {
      row += ' ' + item.image.class
    }
    row += '"'
    if (item.image.src !== null) {
      row += ' src="' + item.image.src + '"'
    }

    if (item.image.alt !== null) {
      row += ' alt="' + item.image.alt + '"'
    }

    row += ' style="margin-right:2rem;'

    if (item.image.style !== null) {
      row += item.image.style
    }

    row += '">'
  }

  row += '</div>' +
  '<div class="col-md-4">' +
  '<div style="margin-bottom:2rem;">' +
  '<h3>' + item.title + '</h3>' +
  item.description +
  '</div>'

  if (item.callToAction !== null) {
    row += item.callToAction
  }

  row += '</div><div class="col-md-1"></div>' +
  '</div>'

  return row
}

function loadWorkSection() {
  document.getElementById(workSectionId).innerHTML = workSectionContent
  .map(function(item) {
    var row = workSectionRow(item)

    if (item !== workSectionContent[workSectionContent.length - 1]) {
      row += '<div class="row"><div class="col-12"><hr class="item-break"></div></div>'
    }

    return row
  })
  .join('\n')
}
