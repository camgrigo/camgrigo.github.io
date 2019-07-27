// profiles.js
// (c) 2019 Cameron Grigoriadis

var profileSectionId = 'profile-link-section'
var workSectionId = 'work-section-content'
var baseResourcePath = 'resources/icons/profiles/'

var workSectionContent = [
  {
    image: {src: "resources/icons/service-day-icon.png", alt: "Service Day App Icon", style: "max-height: 10rem;"},
    title: 'Service Day',
    description: "An iOS app for Jehovah's Witnesses that lets you keep track of people you meet and note what you discussed when visiting them.",
    callToAction: '<a href="https://apps.apple.com/us/app/service-day/id1204528942?mt=8" style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2019-03-06&kind=iossoftware&bubble=ios_apps) no-repeat;width:135px;height:40px;" target="_blank"></a>'
  },
  {
    image: {src: "resources/images/happy_yogurt_toppings.jpeg", alt: "Happy Yogurt", style: "width:20rem;", class: "rounded"},
    title: 'Happy Yogurt',
    description: 'Employee, 2017 – 2018'
  },
  {
    image: {src: "resources/images/grand_ave_night.jpg", alt: "Escondido's Historic Grand Ave at Night", style: "max-width:20rem;", class: "rounded"},
    title: '3-Screens Studio',
    description: 'Intern (Spring 2016)'
  }
]

function loadProfiles() {
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

  document.getElementById(profileSectionId).innerHTML = profiles
  .map(function(profile) {
    return '<div id="' + profile.id + '" class="flex-column profile-link-sm">' +
    '<a href="' + profile.href + '" target="_blank">' +
    '<img src="' + profile.image.src + '" alt="' + profile.image.alt + '">' +
    '</a>' +
    '</div>'
  })
  .join('\n')
}

function workSectionRow(item) {
  var row = '<div class="row">' +
  '<div class="col-md-1"></div>' +
  '<div class="col-md-5">'

  if (item.image != null) {
    row += '<img class="mx-auto d-block float-md-right '
    if (item.image.class != null) {
      row += item.image.class
    }
    row += '"'
    if (item.image.src != null) {
      row += ' src="' + item.image.src + '"'
    }

    if (item.image.alt != null) {
      row += ' alt="' + item.image.alt + '"'
    }

    row += ' style="margin-right:2rem;'

    if (item.image.style != null) {
      row += item.image.style
    }

    row += '">'
  }

  row += '</div>' +
  '<div class="col-md-4">' +
  '<div style="margin-bottom:2rem;">' +
  '<h3>' + item.title + '</h3>' +
  '<p>' + item.description + '</p>' +
  '</div>'

  if (item.callToAction != null) {
    row += item.callToAction
  }

  row += '</div><div class="col-md-1"></div>' +
  '</div>' +
  '<div class="row"><div class="col-12"><hr class="item-break"></div></div>'

  return row
}

function loadWorkSection() {
  document.getElementById(workSectionId).innerHTML = workSectionContent
  .map(function(item) { return workSectionRow(item) })
  .join('\n')
}
