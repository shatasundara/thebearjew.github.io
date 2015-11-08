/*global location Cookies*/
(function () {
  handleTheme()
  handleExternalLinks()
})()

function handleTheme () {
  var themeToggle = document.getElementById('theme-toggle')
  var codeBlocks = document.getElementsByClassName('highlight')
  // Grabs document.cookie with name "dark" using the Cookie.js library
  // https://github.com/js-cookie/js-cookie
  var darkThemeCookie = Cookies.get('dark')
  var isDarkTheme = false
  // Enable dark theme if the user has already selected
  if (darkThemeCookie) {
    isDarkTheme = true
    enableDarkTheme()
  }

  if (themeToggle) themeToggle.addEventListener('click', switchTheme)

  function switchTheme (e) {
    e.preventDefault()
    if (!isDarkTheme) enableDarkTheme()
    else disableDarkTheme()
  }
  function enableDarkTheme () {
    isDarkTheme = true
    Cookies.set('dark', 'true', {expiration: 90, path: '/'})
    document.body.classList.add('dark-background')
    document.body.classList.add('dark-text-color')
    if (codeBlocks) {
      forEach(codeBlocks, function (elem, index) {
        elem.classList.add('dark-code-background')
      })
    }
  }
  function disableDarkTheme () {
    isDarkTheme = false
    Cookies.remove('dark')
    document.body.className = ''
    if (codeBlocks) {
      forEach(codeBlocks, function (elem, index) {
        elem.classList.remove('dark-code-background')
      })
    }
  }
}

// Adds attribute "target=_blank" to links to all external sites
function handleExternalLinks () {
  var host = location.host
  var allLinks = document.querySelectorAll('a')
  forEach(allLinks, function (elem, index) {
    checkExternalLink(elem, host)
  })
}

function checkExternalLink (item, hostName) {
  var href = item.href
  var itemHost = href.replace(/https?:\/\/([^\/]+)(.*)/, '$1')
  if (itemHost !== '' && itemHost !== hostName) {
    // console.log('Changing ' + item + ' to target=_blank')
    item.target = '_blank'
  }
}

// NodeList forEach function
function forEach (array, callback, scope) {
  for (var i = 0; i < array.length; ++i) {
    callback.call(scope, array[i], i)
  }
}
