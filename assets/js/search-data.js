// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-call-for-abstracts",
          title: "Call for Abstracts",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/call-for-abstracts/";
          },
        },{id: "nav-program",
          title: "Program",
          description: "Program overview of the Bavarian Database Day 2025.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/program/";
          },
        },{id: "nav-participation",
          title: "Participation",
          description: "Information on how to smoothly and successfully participate at the Bavarian Database Day 2025 in Nuremberg.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/participation/";
          },
        },{id: "news-website-went-live",
          title: 'Website went live.',
          description: "",
          section: "News",},];
