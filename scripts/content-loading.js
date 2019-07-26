// profiles.js
// (c) 2019 Cameron Grigoriadis

var profileSectionId = 'profile-link-section'
var workSectionId = 'work-section-content'
var baseResourcePath = 'resources/icons/profiles/'

function loadProfiles() {
  var profiles = [
    [
      "gitHub-profile-link",
      "https://github.com/camgrigo",
      [baseResourcePath + "GitHub-Mark/PNG/GitHub-Mark-120px-plus.png", "View my Github Profile"]
    ],
    [
      "linkedIn-profile-link",
      "https://www.linkedin.com/in/cameron-grigoriadis-4a4119184",
      [baseResourcePath + "LinkedIn-Logos/LI-In-Bug.png", "View my LinkedIn® Profile"]
    ],
    [
      "instagram-profile-link",
      "https://www.instagram.com/servicedayapp/",
      [baseResourcePath + "GlyphLogo_May2016_Onlinev2/glyph-logo_May2016.png", "Visit the Service Day Instagram Profile"]
    ],
    [
      "twitter-profile-link",
      "https://twitter.com/camgrigo",
      [baseResourcePath + "Twitter Social Icons/Twitter Social Icons/Twitter_SocialIcon_Circle/Twitter_Social_Icon_Circle_Color.png", "View my Twitter Profile"]
    ],
    [
      "medium-profile-link",
      "https://medium.com/@camgrigo",
      [baseResourcePath + "medium-logos-master/monogram/Monogram.svg", "View my Medium Profile"]
    ]
  ]

  document.getElementById(profileSectionId).innerHTML = profiles
  .map(function(profile) {
    return '<div id="' + profile[0] + '" class="flex-column profile-link-sm">' +
    '<a href="' + profile[1] + '" target="_blank">' +
    '<img src="' + profile[2][0] + '" alt="' + profile[2][1] + '">' +
    '</a>' +
    '</div>'
  })
  .join('\n')
}

function loadWorkSection() {
  var content = [
    [
      '<img src="resources/icons/service-day-icon.png" alt="Service Day App Icon" style="max-width: 10rem;">',
      'Service Day',
      'An app for the ministry.',
      '<a href="https://apps.apple.com/us/app/service-day/id1204528942?mt=8" style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2019-03-06&kind=iossoftware&bubble=ios_apps) no-repeat;width:135px;height:40px;" target="_blank"></a>'
    ],
    [
      '<img src="" alt="Happy Yogurt" style="max-width: 10rem;">',
      'Happy Yogurt',
      'Employee, 2017 – 2018',
      ''
    ],
    [
      '',
      '3-Screens Studio',
      'Intern (Spring 2016)',
      ''
    ],
    [
      '<img src="" alt="SWINGy Box Screenshot">',
      'SWINGy Box',
      'A team project for my Java Graphic User Interface class final.',
      ''
    ]
  ]

  document.getElementById(workSectionId).innerHTML = content
  .map(function(item) {
    var hrWidth = 40

    return '<div class="row">' +
    '<div class="col-md-1"></div>' +
    '<div class="col-md-4">' + item[0] + '</div>' + // Image
    '<div class="col-md-1"></div>' +
    '<div class="col-md-5">' +
    '<div class="header">' +
    '<h3>' + item[1] + '</h3>' + // Title
    '<h6>' + item[2] + '</h6>' + // Tagline
    '</div>' +
    item[3] + // Call to action
    '</div>' +
    '</div>' +
    '<div class="col-md-1"></div>' +
    '<div class="row"><div class="col-12"><hr class="item-break"></div></div>'
  })
  .join('\n')
}
