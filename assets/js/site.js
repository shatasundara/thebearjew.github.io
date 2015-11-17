/*global location Cookies*/
(function () {
  handleTheme()
  handleExternalLinks()
})()

function handleTheme () {
  var themeToggle = document.getElementById('theme-toggle')
  var codeFences = document.getElementsByClassName('highlight')
  var codeBlocks = document.getElementsByTagName('code')
  console.log(codeBlocks)
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
    themeToggle.innerHTML = 'Light Theme'
    if (codeFences) {
      forEach(codeFences, function (elem, index) {
        elem.classList.toggle('dark-code-background')
      })
    }
    if (codeBlocks) {
      forEach(codeBlocks, function (elem, index) {
        if (!elem.classList.contains('language')) {
          elem.classList.toggle('dark-code-background')
        }
      })
    }
  }
  function disableDarkTheme () {
    isDarkTheme = false
    Cookies.remove('dark')
    document.body.className = ''
    themeToggle.innerHTML = 'Dark Theme'
    if (codeFences) {
      forEach(codeFences, function (elem, index) {
        elem.classList.toggle('dark-code-background')
      })
    }
    if (codeBlocks) {
      forEach(codeBlocks, function (elem, index) {
        if (!elem.classList.contains('language')) {
          elem.classList.toggle('dark-code-background')
        }
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
