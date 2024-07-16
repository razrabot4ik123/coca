export const usePriceSwitcher = () => {
  const switcher = document.querySelector('[data-price="switcher"]');
  const starterPrice = document.querySelector('[data-price="starter"]');
  const popularPrice = document.querySelector('[data-price="popular"]');
  const enterprisePrice = document.querySelector('[data-price="enterprise"]');

  const numStarterPrice = starterPrice.textContent.replace(/[^0-9.]/g, '');
  const numPopularPrice = popularPrice.textContent.replace(/[^0-9.]/g, '');
  const numEnterprisePrice = enterprisePrice.textContent.replace(/[^0-9.]/g, '');

  const calculateDiscountedPrice = (price) => {
    const noneDiscountedPrice = price * 1.2 / 30;
    return Math.trunc(noneDiscountedPrice);
  };

  const starterNoneDiscountedPrice = calculateDiscountedPrice(numStarterPrice);
  const popularNoneDiscountedPrice = calculateDiscountedPrice(numPopularPrice);
  const enterpriseNoneDiscountedPrice = calculateDiscountedPrice(numEnterprisePrice);

  const priceList = {
    starter: {
      default: '$' + starterNoneDiscountedPrice,
      withSale: '$' + numStarterPrice,
    },
    popular: {
      default: '$' + popularNoneDiscountedPrice,
      withSale: '$' + numPopularPrice,
    },
    enterprise: {
      default: '$' + enterpriseNoneDiscountedPrice,
      withSale: '$' + numEnterprisePrice,
    },
  };

  const setPricesWithSale = () => {
    starterPrice.textContent = priceList.starter.withSale;
    popularPrice.textContent = priceList.popular.withSale;
    enterprisePrice.textContent = priceList.enterprise.withSale;
  };

  const setDefaultPrices = () => {
    starterPrice.textContent = priceList.starter.default;
    popularPrice.textContent = priceList.popular.default;
    enterprisePrice.textContent = priceList.enterprise.default;
  };

  switcher.checked = true;
  setPricesWithSale();

  const timeInterval = document.querySelectorAll('[data-price="mo"]');

  switcher.addEventListener('click', () => {
    if (switcher.checked) {
      setPricesWithSale();
      timeInterval.forEach((e) => {
        e.textContent = '/mo';
      });
    } else {
      setDefaultPrices();
      timeInterval.forEach((e) => {
        e.textContent = '/day';
      });
    }
  });
};
