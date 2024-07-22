export const useTheme = () => {
  const themeTarget = document.querySelector('[data-theme]');
  const themeSwitcher = document.querySelector('[data-theme-switcher]');
  const themeSwitcherText = document.querySelector('[data-theme-text]');
  const themeTargetDataset = themeTarget.dataset;

  const theme = localStorage.getItem('theme') || 'light';
  themeTargetDataset.theme = theme;

  if (theme === 'dark') {
    themeSwitcher.checked = true;
    themeSwitcherText.textContent = 'Dark';
    changeFavicon('./assets/icons/c-favicon-icon--dark.svg');
  } else {
    themeSwitcher.checked = false;
    themeSwitcherText.textContent = 'Light';
    changeFavicon('./assets/icons/c-favicon-icon--light.svg');
  }

  themeSwitcher.addEventListener('click', () => {
    if (themeTargetDataset.theme === 'light') {
      themeTargetDataset.theme = 'dark';
      themeSwitcherText.textContent = 'Dark';
      localStorage.setItem('theme', 'dark');
      changeFavicon('./assets/icons/c-favicon-icon--dark.svg');
      if (window.switchMapTheme) {
        window.switchMapTheme('dark');
      }
    } else {
      themeTargetDataset.theme = 'light';
      themeSwitcherText.textContent = 'Light';
      localStorage.setItem('theme', 'light');
      changeFavicon('./assets/icons/c-favicon-icon--light.svg');
      if (window.switchMapTheme) {
        window.switchMapTheme('light');
      }
    }
  });

  function changeFavicon(newFavicon) {
    let link = document.getElementById('favicon');
    link.href = newFavicon;
  }
};
