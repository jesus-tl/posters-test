const config = {
  "lang": "es",
  "localPort": "5173",
  "base": "https://jesus-tl.github.io",
  "baseurl": "/posters-test",
  "title": "Posters",
  "subtitle": "Coleccion Personal",
  "credits": "(por Jesus M. Torres Luquis)",
  "copyright": "Todos los derechos reservados, 2026",
  "pages": {
    "iiifViewer": true,
    "metadataToShow": [
      {
        "key": "label",
        "label": "Label",
        "type": "text"
      },
      {
        "key": "autor",
        "label": "Autor",
        "type": "text"
      },
      {
        "key": "fecha",
        "label": "Fecha",
        "type": "text"
      }
    ],
    "metadataToIndex": [
      "label",
      "autor",
      "fecha"
    ]
  }
};
export default config;