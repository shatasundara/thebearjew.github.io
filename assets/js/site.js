(function(){
  var themeToggle = document.getElementById('theme-toggle');
  var darkThemeCookie = Cookies.get('dark');
  var isDarkTheme = false;
    // If the use has enabled the dark theme
  if(darkThemeCookie) {
    isDarkTheme = true;
    enableDarkTheme();
  }

  themeToggle.addEventListener('click', switchTheme);
  function switchTheme(e) {
    e.preventDefault();
    if(!isDarkTheme) {
      enableDarkTheme();
    }
    else {
      disableDarkTheme();
    }
  }
  function enableDarkTheme() {
    isDarkTheme = true;
    Cookies.set('dark', 'true', {expiration: 90, path: '/'});
    // themeToggle.innerHTML = 'light-theme';
    document.body.classList.add('dark-background');
    document.body.classList.add('dark-text-color');
  }
  function disableDarkTheme() {
    isDarkTheme = false;
    Cookies.remove('dark');
    // themeToggle.innerHTML = 'dark-theme';
    document.body.className = '';
  }
})();