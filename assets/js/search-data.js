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
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/program/";
          },
        },{id: "nav-participation",
          title: "Participation",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/participation/";
          },
        },{id: "news-our-website-is-now-live",
          title: 'Our website is now live.',
          description: "",
          section: "News",},{id: "news-we-are-excited-to-announce-that-peter-boncz-cwi-will-deliver-the-opening-keynote",
          title: 'We are excited to announce that Peter Boncz (CWI) will deliver the opening...',
          description: "",
          section: "News",},{id: "news-the-call-for-abstracts-is-now-open-we-welcome-submissions-from-researchers-and-practitioners",
          title: 'The Call for Abstracts is now open. We welcome submissions from researchers and...',
          description: "",
          section: "News",},];
