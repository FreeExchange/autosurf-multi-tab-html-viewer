function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

//const htmlFiles = shuffleArray(Array.from({ length: 48 }, (_, i) => `https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page${i + 1}.html`));

/*
// Hardcoded array of HTML links
  const htmlFiles = [
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page1.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page2.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page3.html"
  ];
*/

 const htmlFiles1 = Array.from({ length: 48 }, (_, i) => `https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page${i + 1}.html`);
 const htmlFiles2 = Array.from({ length: 48 }, (_, i) => `https://FreeExchange.github.io/autosurf-multi-tab-html-viewer/pages/page${i + 1}.html`);

 const htmlFiles = htmlFiles1.concat(htmlFiles2);

 shuffleArray(htmlFiles);

const iframes = [];

for (let i = 0; i < 15; i++) {
  const iframe = document.createElement("iframe");
  iframe.classList.add("full-iframe", "loop", "hidden-iframe");
  //iframe.style.display = "none";
  document.body.appendChild(iframe);
  iframes.push(iframe);
}

function startIframeLoop() {
  if (!htmlFiles.length) {
    console.error("🚫 No HTML files found.");
    return;
  }

  for (const iframe of iframes) {
    function loadNext() {
      const htmlFile = htmlFiles[Math.floor(Math.random() * htmlFiles.length)];
      iframe.src = htmlFile;
    }

    iframe.onload = () => {
      setTimeout(loadNext, 15000);
    };

    loadNext();
  }
}

startIframeLoop();
