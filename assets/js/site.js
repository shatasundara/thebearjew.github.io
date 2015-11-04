(function (){
  var themeToggle = document.getElementById('theme-toggle')
  // Grabs document.cookie with name "dark" 
  // To see if the user has selected the dark theme
  var darkThemeCookie = Cookies.get('dark')
  var isDarkTheme = false
  // Enable dark theme if the user has already selected
  if (darkThemeCookie) {
    isDarkTheme = true
    enableDarkTheme()
  }

  if (themeToggle) themeToggle.addEventListener('click', switchTheme)

  function switchTheme(e) {
    e.preventDefault()
    if (!isDarkTheme) enableDarkTheme()
    else disableDarkTheme()
  }
  function enableDarkTheme () {
    isDarkTheme = true
    Cookies.set('dark', 'true', {expiration: 90, path: '/'})
    document.body.classList.add('dark-background')
    document.body.classList.add('dark-text-color')
  }
  function disableDarkTheme () {
    isDarkTheme = false
    Cookies.remove('dark')
    document.body.className = ''
  }
})()