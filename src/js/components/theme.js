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
  } else {
    themeSwitcher.checked = false;
    themeSwitcherText.textContent = 'Light';
  }

  themeSwitcher.addEventListener('click', () => {
    if (themeTargetDataset.theme === 'light') {
      themeTargetDataset.theme = 'dark';
      themeSwitcherText.textContent = 'Dark';
      localStorage.setItem('theme', 'dark');
    } else {
      themeTargetDataset.theme = 'light';
      themeSwitcherText.textContent = 'Light';
      localStorage.setItem('theme', 'light');
    }
  });
};
