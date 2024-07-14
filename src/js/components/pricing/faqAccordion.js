export const useAccordionFaq = () => {
  const accordionLists = document.querySelectorAll('.faq__list');

  accordionLists.forEach((element) => {
    element.addEventListener('click', (event) => {
      const accordionControl = event.target.closest('.faq__control');
      if (!accordionControl) return;
      event.preventDefault();
      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;

      const accordionList = accordionItem.parentElement;
      const accordionOpenedItem = accordionList.querySelector('.faq__item--opened');
      const accordionOpenedContent = accordionList.querySelector(
        '.faq__item--opened .faq__content',
      );

      if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
        accordionOpenedItem.classList.remove('faq__item--opened');
        accordionOpenedContent.style.maxHeight = null;
      }

      accordionItem.classList.toggle('faq__item--opened');

      if (accordionItem.classList.contains('faq__item--opened')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = null;
      }
    });
  });
};
