document.body.addEventListener("htmx:beforeRequest", (evt) => {
  // htmx has this cool thing where it has events for everything!! so we can manage the tab state with events :D
  const pth = evt.detail.pathInfo.finalRequestPath;
  switch(pth) {
    case "/hx/tts.html": {
      // document.getElementById("vts").classList.remove("active-tab");
      document.getElementById("ats").classList.remove("active-tab");
      document.getElementById("tts").classList.add("active-tab");
      break;
    }
    case "/hx/ats.html": {
      document.getElementById("tts").classList.remove("active-tab");
      // document.getElementById("vts").classList.remove("active-tab");
      document.getElementById("ats").classList.add("active-tab");
      break;
    }
  }
});

document.body.addEventListener("htmx:afterRequest", (evt) => {
  if(evt.detail.pathInfo.finalRequestPath === "/hx/ats.html") {
    const elem = document.querySelector("#input > form > label > input[type=file]");
    elem.checkValidity = () => {
      console.log(this);
      return false;
    };
  }
})

const mb = (size) => {
  return size * 1048576;
}

const sec = (length) => {
  return length * 1000;
}
