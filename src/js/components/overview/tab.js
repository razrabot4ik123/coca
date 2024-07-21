export const useSwitchTabs = () => {
  const tabControls = document.querySelector('.hero__tabs-list');

  tabControls.addEventListener('click', toggleTab);

  function toggleTab(event) {
    const tabControl = event.target.closest('.hero__tabs-link');
    if (!tabControl) return;
    event.preventDefault();

    const activeControl = document.querySelector('.hero__tabs-link--active');
    if (activeControl) {
      activeControl.classList.remove('hero__tabs-link--active');
    }
    tabControl.classList.add('hero__tabs-link--active');
  }

  const items = document.querySelectorAll('.hero__slider-item');

  function filterTabs() {
    tabControls.addEventListener('click', (e) => {
      let target = e.target;

      while (target && target !== tabControls && !target.dataset.id) {
        target = target.parentElement;
      }

      if (target && target.dataset.id) {
        const itemId = target.dataset.id;

        switch (itemId) {
          case 'all-Tab':
            getItems(itemId);
            break;
          case 'design-Tab':
            getItems(itemId);
            break;
          case 'articles-Tab':
            getItems(itemId);
            break;
          case 'product-Tab':
            getItems(itemId);
            break;
          case 'software-development-Tab':
            getItems(itemId);
            break;
          case 'customer-success-Tab':
            getItems(itemId);
            break;
        }
      }
    });
  }
  filterTabs();

  function getItems(tabName) {
    items.forEach((item) => {
      if (item.classList.contains(tabName)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
};
