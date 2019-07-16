// profiles.js
// (c) 2019 Cameron Grigoriadis

var profiles = [
  [
    "gitHub-profile-link",
    "https://github.com/camgrigo",
    ["resources/images/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png", "View my Github Profile"]
  ],
  [
    "linkedIn-profile-link",
    "https://www.linkedin.com/in/cameron-grigoriadis-4a4119184",
    ["resources/images/LinkedIn-Logos/LI-In-Bug.png", "View my LinkedIn® Profile"]
  ],
  [
    "twitter-profile-link",
    "https://twitter.com/camgrigo",
    ["resources/images/Twitter Social Icons/Twitter Social Icons/Twitter_SocialIcon_Circle/Twitter_Social_Icon_Circle_Color.png", "View my Twitter Profile"]
  ],
]

document.getElementById('profile-link-section').innerHTML = profiles
.map(function(profile) {
  return '<div id="' + profile[0] + '" class="profile-link-sm">' +
  '<a href="' + profile[1] + '" target="_blank">' +
  '<img class="link-img-center" src="' + profile[2][0] + '" alt="' + profile[2][1] + '">' +
  '</a>' +
  '</div>'
})
.join('\n')
