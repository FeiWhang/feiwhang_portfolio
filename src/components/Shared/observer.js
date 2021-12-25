const mainThred = 0.25;
const headerMargin = "64px";

function observeAbout() {
  const about = document.querySelector("#about");
  const aboutCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const subtitle = document.getElementById("AboutSubtitle");
        const title = document.getElementById("AboutTitle");
        const text = document.getElementsByClassName("About__text")[0];
        subtitle.style.animation = "fadeUp 0.55s ease-in-out 0.123s forwards";
        title.style.animation = "fadeUp 0.55s ease-in-out 0.234s forwards";
        text.style.animation = "fadeUp 0.55s ease-in-out 0.456s forwards";
        observer.unobserve(about);
      }
    });
  };
  const aboutObserver = new IntersectionObserver(aboutCallback, {
    rootMargin: headerMargin,
    threshold: mainThred,
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
    rootMargin: headerMargin,
    threshold: mainThred,
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
    threshold: mainThred,
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
        const subtitle = document.getElementById("ProjectSubtitle");
        const title = document.getElementById("ProjectTitle");
        subtitle.style.animation = "fadeUp 0.55s ease-in-out 0.123s forwards";
        title.style.animation = "fadeUp 0.55s ease-in-out 0.234s forwards";
        observer.unobserve(project);
      }
    });
  };
  const projectObserver = new IntersectionObserver(projectCallback, {
    rootMargin: headerMargin,
    threshold: 0.25,
  });

  const item0 = document.getElementsByClassName("ProjectItem")[0];
  const item1 = document.getElementsByClassName("ProjectItem")[1];
  const item0Callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        item0.style.animation = "fadeUp 0.55s ease-in-out 0.234s forwards";
        observer.unobserve(item0);
      }
    });
  };
  const item1Callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        item1.style.animation = "fadeUp 0.55s ease-in-out 0.234s forwards";
        observer.unobserve(item1);
      }
    });
  };
  const item0Observer = new IntersectionObserver(item0Callback, {
    rootMargin: "48px",
    threshold: 0.88,
  });
  const item1Observer = new IntersectionObserver(item1Callback, {
    rootMargin: "48px",
    threshold: 0.88,
  });

  projectObserver.observe(project);
  item0Observer.observe(item0);
  item1Observer.observe(item1);
}

function observeContact() {
  const contact = document.querySelector("#contact");
  const contactCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const subtitle = document.getElementById("ContactSubtitle");
        const title = document.getElementById("ContactTitle");
        subtitle.style.animation = "fadeUp 0.55s ease-in-out 0.123s forwards";
        title.style.animation = "fadeUp 0.55s ease-in-out 0.234s forwards";
        observer.unobserve(contact);
      }
    });
  };
  const contactObserver = new IntersectionObserver(contactCallback, {
    rootMargin: headerMargin,
    threshold: mainThred,
  });

  contactObserver.observe(contact);
}
export { observeAbout, observeProject, observeContact };
