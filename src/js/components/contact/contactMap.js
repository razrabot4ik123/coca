export const useMap = () => {
  async function initMap() {
    await ymaps3.ready;

    const { YMap, YMapDefaultSchemeLayer } = ymaps3;

    const map = new YMap(document.getElementById('map'), {
      location: {
        center: [60, 28],
        zoom: 2,
      },
    });

    map.addChild(new YMapDefaultSchemeLayer());
  }
  initMap();
};
