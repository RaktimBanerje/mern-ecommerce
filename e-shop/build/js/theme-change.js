const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        $('a.btn-customized-dark').click();
    }
    else {        
          document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
          $('a.btn-customized-light').click();
    }    
}