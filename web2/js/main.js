document.body.addEventListener("htmx:beforeRequest", (evt) => {
  // htmx has this cool thing where it has events for everything!! so we can manage the tab state with events :D
  const pth = evt.detail.pathInfo.finalRequestPath;
  switch(pth) {
    case "/hx/tts.html": {
      document.getElementById("vts").classList.remove("active-tab");
      document.getElementById("ats").classList.remove("active-tab");
      document.getElementById("tts").classList.add("active-tab");
      break;
    }
    case "/hx/vts.html": {
      document.getElementById("tts").classList.remove("active-tab");
      document.getElementById("ats").classList.remove("active-tab");
      document.getElementById("vts").classList.add("active-tab");
      break;
    }
    case "/hx/ats.html": {
      document.getElementById("tts").classList.remove("active-tab");
      document.getElementById("vts").classList.remove("active-tab");
      document.getElementById("ats").classList.add("active-tab");
      break;
    }
  }
});
