function observeAnimated(element, margin, threshold, delay) {
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        element.style.animation =
          "fadeUp 0.55s ease-in-out " + delay + "s forwards";
        observer.unobserve(element);
      }
    });
  };
  const elementObserver = new IntersectionObserver(callback, {
    rootMargin: margin,
    threshold: threshold,
  });

  elementObserver.observe(element);
}

function observeAbout() {
  const subtitle = document.getElementById("AboutSubtitle");
  const title = document.getElementById("AboutTitle");
  const text = document.getElementsByClassName("About__text")[0];
  const profile = document.getElementById("profile");
  const tech = document.getElementsByClassName("Tech")[0];
  observeAnimated(subtitle, "32px", 0.25, 0.123);
  observeAnimated(title, "32px", 0.25, 0.234);
  observeAnimated(text, "32px", 0.25, 0.456);
  observeAnimated(profile, "32px", 0.25, 0.123);
  observeAnimated(tech, "32px", 0.25, 0.69);
}

function observeProject() {
  const subtitle = document.getElementById("ProjectSubtitle");
  const title = document.getElementById("ProjectTitle");
  const item0 = document.getElementsByClassName("ProjectItem")[0];
  const item1 = document.getElementsByClassName("ProjectItem")[1];
  const item2 = document.getElementsByClassName("ProjectItem")[2];
  observeAnimated(subtitle, "32px", 0.25, 0.123);
  observeAnimated(title, "32px", 0.25, 0.234);
  observeAnimated(item0, "32px", 0.25, 0.234);
  observeAnimated(item1, "32px", 0.25, 0.234);
  observeAnimated(item2, "32px", 0.25, 0.234);
}

function observeContact() {
  const subtitle = document.getElementById("ContactSubtitle");
  const title = document.getElementById("ContactTitle");
  const items = document.getElementsByClassName("Contact__items")[0];
  const socials = document.getElementsByClassName("Contact__socials")[0];
  const form = document.getElementsByClassName("ContactForm")[0];
  observeAnimated(subtitle, "32px", 0.25, 0.123);
  observeAnimated(title, "32px", 0.25, 0.234);
  observeAnimated(items, "32px", 0.25, 0.234);
  observeAnimated(socials, "32px", 0.25, 0.234);
  observeAnimated(form, "32px", 0.25, 0.456);
}

export { observeAbout, observeProject, observeContact };
