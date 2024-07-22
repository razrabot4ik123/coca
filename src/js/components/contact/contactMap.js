export const useMap = () => {
  const themeTarget = document.querySelector('[data-theme]');
  const theme = localStorage.getItem('theme') || 'light';

  const themeTargetDataset = themeTarget.dataset;
  themeTargetDataset.theme = theme;

  async function initMap() {
    await ymaps3.ready;

    const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3;

    const map = new YMap(document.getElementById('map'), {
      location: {
        center: [110, 1],
        zoom: 2,
      },
    });

    const featuresLayer = new YMapDefaultFeaturesLayer();
    map.addChild(featuresLayer);

    function layerDark() {
      const layerDark = new YMapDefaultSchemeLayer({
        customization: [
          {
            tags: {
              all: ['water'],
            },
            stylers: [
              {
                color: '#1d1e25',
              },
            ],
          },
          {
            elements: 'label',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            tags: {
              all: ['landscape'],
            },
            stylers: [
              {
                color: '#acacb9',
              },
            ],
          },
        ],
      });
      map.addChild(layerDark);
      window.layerDark = layerDark;
    }

    function layerLight() {
      const layerLight = new YMapDefaultSchemeLayer({
        customization: [
          {
            tags: {
              all: ['water'],
            },
            stylers: [
              {
                color: '#FFF',
              },
            ],
          },
          {
            elements: 'label',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            tags: {
              all: ['landscape'],
            },
            stylers: [
              {
                color: '#acacb9',
              },
            ],
          },
        ],
      });
      map.addChild(layerLight);
      window.layerLight = layerLight;
    }

    function removeLayers() {
      if (window.layerDark) {
        map.removeChild(window.layerDark);
        window.layerDark = null;
      }
      if (window.layerLight) {
        map.removeChild(window.layerLight);
        window.layerLight = null;
      }
    }

    function removeLayers() {
      if (window.layerDark) {
        map.removeChild(window.layerDark);
        window.layerDark = null;
      }
      if (window.layerLight) {
        map.removeChild(window.layerLight);
        window.layerLight = null;
      }
    }

    function switchMapTheme(newTheme) {
      removeLayers();
      if (newTheme === 'dark') {
        layerDark();
      } else {
        layerLight();
      }
    }

    if (theme === 'dark') {
      layerDark();
    } else {
      layerLight();
    }

    window.YMapDefaultSchemeLayer = YMapDefaultSchemeLayer;
    window.map = map;
    window.removeLayers = removeLayers;
    window.switchMapTheme = switchMapTheme;
  }

  initMap();
};
