function observeAbout() {
  const about = document.querySelector("#about");
  const aboutCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const subtitle = document.getElementsByClassName("About__subtitle")[0];
        const title = document.getElementsByClassName("About__title")[0];
        const text = document.getElementsByClassName("About__text")[0];
        subtitle.style.animation = "fadeUp 0.55s ease-in-out 0.123s forwards";
        title.style.animation = "fadeUp 0.55s ease-in-out 0.234s forwards";
        text.style.animation = "fadeUp 0.55s ease-in-out 0.456s forwards";
        observer.unobserve(about);
      }
    });
  };
  const aboutObserver = new IntersectionObserver(aboutCallback, {
    rootMargin: "0px",
    threshold: 0.123,
  });
  // profile, tech is a special case
  // for mobile these sections are in the bottom
  // need to wait for it into viewport sep.
  const profile = document.getElementById("profile");
  const profileCallBack = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        profile.style.animation = "fadeUp 0.55s ease-in-out 0.69s forwards";
        observer.unobserve(profile);
      }
    });
  };
  const profileObserver = new IntersectionObserver(profileCallBack, {
    rootMargin: "64px",
    threshold: 0.123,
  });
  const tech = document.getElementsByClassName("Tech")[0];
  const techCallBack = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        tech.style.animation = "fadeUp 0.55s ease-in-out 0.69s forwards";
        observer.unobserve(profile);
      }
    });
  };
  const techObserver = new IntersectionObserver(techCallBack, {
    rootMargin: "0px",
    threshold: 0.088,
  });

  aboutObserver.observe(about);
  profileObserver.observe(profile);
  techObserver.observe(tech);
}

function observeProject() {
  const project = document.querySelector("#project");
  const projectCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const subtitle =
          document.getElementsByClassName("Project__subtitle")[0];
        const title = document.getElementsByClassName("Project__title")[0];
        subtitle.style.animation = "fadeUp 0.55s ease-in-out 0.123s forwards";
        title.style.animation = "fadeUp 0.55s ease-in-out 0.234s forwards";
        observer.unobserve(project);
      }
    });
  };
  const projectObserver = new IntersectionObserver(projectCallback, {
    rootMargin: "0px",
    threshold: 0.123,
  });

  projectObserver.observe(project);
}
export { observeAbout, observeProject };
