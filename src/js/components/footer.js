export const useAccordionFooter = () => {
  const accordionLists = document.querySelectorAll('.footer__list');

  accordionLists.forEach((element) => {
    element.addEventListener('click', (event) => {
      const accordionControl = event.target.closest('.footer__control');
      if (!accordionControl) return;
      event.preventDefault();
      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;

      const accordionList = accordionItem.parentElement;
      const accordionOpenedItem = accordionList.querySelector('.footer__item--opened');
      const accordionOpenedContent = accordionList.querySelector(
        '.footer__item--opened .footer__sublist',
      );

      if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
        accordionOpenedItem.classList.remove('footer__item--opened');
        accordionOpenedContent.style.maxHeight = null;
      }

      accordionItem.classList.toggle('footer__item--opened');

      if (accordionItem.classList.contains('footer__item--opened')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = null;
      }
    });
  });
};
