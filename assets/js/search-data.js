// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/bdbd-2025-website/";
    },
  },{id: "nav-program",
          title: "Program",
          description: "Program overview of the Bavarian Database Day 2025.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/bdbd-2025-website/program/";
          },
        },{id: "nav-participation",
          title: "Participation",
          description: "Information on how to smoothly and successfully participate at the Bavarian Database Day 2025 in Nuremberg.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/bdbd-2025-website/participation/";
          },
        },{id: "news-website-went-live",
          title: 'Website went live.',
          description: "",
          section: "News",},];
