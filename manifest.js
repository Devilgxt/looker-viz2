const manifest = {
  "name": "My Custom Viz",
  "description": "Visualizzazione personalizzata per Looker Studio",
  "style": "index.css",
  "script": "index.js",
  "data": {
    "url": "index.html"
  },
  "icon": "https://lookerstudio.google.com/images/visualization.svg"
};

if (typeof module !== "undefined") {
  module.exports = manifest;  // Export for use in other modules
}
