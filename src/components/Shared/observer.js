function observeAbout() {
  const about = document.querySelector("#about");
  const aboutCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const subtitle = entry.target.querySelector(".About__subtitle");
        const title = entry.target.querySelector(".About__title");
        const text = entry.target.querySelector(".About__text");
        subtitle.classList.add("About__subtitle--animated");
        title.classList.add("About__title--animated");
        text.classList.add("About__text--animated");
        observer.unobserve(about);
        console.log("reach about");
      }
    });
  };
  const aboutObserver = new IntersectionObserver(aboutCallback, {
    rootMargin: "0px",
    threshold: 0.123,
  });
  // profile is a special case
  // for mobile this section is in the bottom
  // need to wait for it into viewport sep.
  const profile = document.querySelector("#profile");
  console.log(profile);
  const profileCallBack = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        profile.classList.add("About__profile--animated");
        observer.unobserve(profile);
        console.log("reach profile");
      }
    });
  };
  const profileObserver = new IntersectionObserver(profileCallBack, {
    rootMargin: "64px",
    threshold: 0.123,
  });

  aboutObserver.observe(about);
  profileObserver.observe(profile);
}

export { observeAbout };
