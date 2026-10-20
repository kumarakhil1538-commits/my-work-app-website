
/* =====================================
   MY WORK APP — WEBSITE JAVASCRIPT
===================================== */

/* 1. CURRENT YEAR IN FOOTER */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* 2. SMOOTH NAVIGATION */

const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        const targetId = link.getAttribute("href");

        if (targetId && targetId.startsWith("#")) {
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    });
});


/* 3. NAVBAR SCROLL EFFECT */

const navbar = document.querySelector(".navbar");

function updateNavbar() {
    if (!navbar) return;

    if (window.scrollY > 30) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
}

window.addEventListener("scroll", updateNavbar, {
    passive: true
});

updateNavbar();


/* 4. SCROLL REVEAL ANIMATION */

const revealElements = document.querySelectorAll(
    ".hero-content, .hero-visual, .section-heading, .feature-card, .download-card"
);

revealElements.forEach(function (element) {
    element.classList.add("reveal");
});

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("revealed");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });
} else {
    revealElements.forEach(function (element) {
        element.classList.add("revealed");
    });
}


/* 5. DOWNLOAD BUTTONS */

const windowsButton = document.getElementById("windows-download");
const androidButton = document.getElementById("android-download");

/*
  IMPORTANT:
  Replace these placeholder URLs with real download links.
  A placeholder (#) is not a real download link.
*/

const downloadLinks = {
    windows: "https://github.com/kumarakhil1538-commits/my-work-app/releases/download/v1.0.0/My.Work.App.Setup.1.0.0.exe",
    android: "https://github.com/kumarakhil1538-commits/my-work-app/releases/download/v1.0.0/app-debug.apk"
};

function setupDownloadButton(button, url, platformName) {
    if (!button) return;

    if (url) {
        button.href = url;
        button.setAttribute("download", "");
        button.removeAttribute("aria-disabled");
    } else {
        button.href = "#";
        button.setAttribute("aria-disabled", "true");

        button.addEventListener("click", function (event) {
            event.preventDefault();

            alert(
                platformName +
                " download is not available yet. Please add the real download link first."
            );
        });
    }
}

setupDownloadButton(
    windowsButton,
    downloadLinks.windows,
    "Windows"
);

setupDownloadButton(
    androidButton,
    downloadLinks.android,
    "Android APK"
);


/* 6. BUTTON HOVER POINTER EFFECT */

const interactiveCards = document.querySelectorAll(
    ".feature-card, .download-card"
);

interactiveCards.forEach(function (card) {
    card.addEventListener("pointermove", function (event) {
        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        card.style.setProperty("--mouse-x", x + "px");
        card.style.setProperty("--mouse-y", y + "px");
    });
});


/* 7. BACK TO TOP */

const backToTopLink = document.querySelector('a[href="#top"]');

if (backToTopLink) {
    backToTopLink.addEventListener("click", function (event) {
        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


/* 8. CONSOLE MESSAGE */

console.log("My Work App website loaded successfully!");
