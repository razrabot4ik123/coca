export const useHeader = () => {
  const header = document.querySelector('.header');
  const main = document.querySelector('.main');

  if (!header) return;
  if (!main) return;

  function fixedHeader() {
    header.classList.add('header--fixed');
    main.style.marginTop = header.offsetHeight + 'px';
  }
  fixedHeader();

  document.addEventListener('DOMContentLoaded', function checkScroll() {
    if (window.pageYOffset > 0) {
      header.classList.remove('header--background-transparent');
    }
  });

  let lastPageYOffset = window.pageYOffset;

  window.addEventListener('scroll', toggleHeader);

  function toggleHeader() {
    const newPageYOffset = window.pageYOffset;

    if (newPageYOffset < header.offsetHeight) {
      header.classList.add('header--show');
      if (newPageYOffset < header.offsetHeight / 2) {
        header.classList.add('header--background-transparent');
      }
    }

    if (newPageYOffset < lastPageYOffset) {
      header.classList.add('header--show');
    } else {
      header.classList.remove('header--show');
      header.classList.remove('header--background-transparent');
    }

    lastPageYOffset = newPageYOffset;
  }
};
