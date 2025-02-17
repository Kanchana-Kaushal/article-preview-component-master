document.querySelector(".js-share-btn").addEventListener("click", () => {
    const socialListElem = document.querySelector(".js-social-links");
    socialListElem.classList.toggle("hidden");
    socialListElem.classList.toggle("flex");

    const profileSection = document.querySelector(".js-profile-section");
    profileSection.classList.toggle("hidden");

    const profileSectionBg = document.querySelector(".js-share-section");
    profileSectionBg.classList.toggle("bg-Very-Dark-Grayish-Blue");
});
