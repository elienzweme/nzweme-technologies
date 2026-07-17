"use strict";

/* =========================================================
   NZWEME TECHNOLOGIES
   Shared Website JavaScript

   Supports:
   - Current year
   - Sticky header
   - Mobile navigation
   - Reveal animations
   - Dynamically generated project and learning cards
   - Smooth same-page navigation
   - External-link accessibility
   - Contact-form mailto workflow
   - Active navigation
   - Clickable cards
   - Copy buttons
   - Image and logo fallbacks
   - Dynamic-content observation
   ========================================================= */


/* =========================================================
   1. GLOBAL DOM REFERENCES
   ========================================================= */

const siteHeader = document.querySelector(".site-header");

const mobileMenuButton = document.querySelector(
    ".mobile-menu-button"
);

const primaryNavigation = document.querySelector(
    ".primary-navigation"
);

const navigationLinks = document.querySelectorAll(
    ".primary-navigation a"
);

const currentYearElements = document.querySelectorAll(
    "#current-year"
);

const contactForm = document.querySelector(
    "#contact-form"
);

const formStatus = document.querySelector(
    "#form-status"
);


/* =========================================================
   2. CURRENT YEAR
   ========================================================= */

function updateCurrentYear() {
    const currentYear = new Date().getFullYear();

    currentYearElements.forEach((element) => {
        element.textContent = String(currentYear);
    });
}

updateCurrentYear();


/* =========================================================
   3. STICKY HEADER SCROLL STATE
   ========================================================= */

function updateHeaderOnScroll() {
    if (!siteHeader) {
        return;
    }

    siteHeader.classList.toggle(
        "scrolled",
        window.scrollY > 20
    );
}

updateHeaderOnScroll();

window.addEventListener(
    "scroll",
    updateHeaderOnScroll,
    {
        passive: true
    }
);


/* =========================================================
   4. MOBILE NAVIGATION
   ========================================================= */

function openMobileMenu() {
    if (!mobileMenuButton || !primaryNavigation) {
        return;
    }

    mobileMenuButton.setAttribute(
        "aria-expanded",
        "true"
    );

    mobileMenuButton.setAttribute(
        "aria-label",
        "Close navigation menu"
    );

    primaryNavigation.classList.add("open");
    document.body.classList.add("menu-open");
}


function closeMobileMenu() {
    if (!mobileMenuButton || !primaryNavigation) {
        return;
    }

    mobileMenuButton.setAttribute(
        "aria-expanded",
        "false"
    );

    mobileMenuButton.setAttribute(
        "aria-label",
        "Open navigation menu"
    );

    primaryNavigation.classList.remove("open");
    document.body.classList.remove("menu-open");
}


function toggleMobileMenu() {
    if (!mobileMenuButton) {
        return;
    }

    const isExpanded =
        mobileMenuButton.getAttribute(
            "aria-expanded"
        ) === "true";

    if (isExpanded) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}


if (mobileMenuButton && primaryNavigation) {
    mobileMenuButton.addEventListener(
        "click",
        toggleMobileMenu
    );

    navigationLinks.forEach((link) => {
        link.addEventListener(
            "click",
            closeMobileMenu
        );
    });

    document.addEventListener(
        "click",
        (event) => {
            if (
                !primaryNavigation.classList.contains(
                    "open"
                )
            ) {
                return;
            }

            const clickedInsideNavigation =
                primaryNavigation.contains(
                    event.target
                );

            const clickedMenuButton =
                mobileMenuButton.contains(
                    event.target
                );

            if (
                !clickedInsideNavigation &&
                !clickedMenuButton
            ) {
                closeMobileMenu();
            }
        }
    );

    document.addEventListener(
        "keydown",
        (event) => {
            if (event.key === "Escape") {
                closeMobileMenu();
            }
        }
    );

    window.addEventListener(
        "resize",
        () => {
            if (window.innerWidth > 900) {
                closeMobileMenu();
            }
        }
    );
}


/* =========================================================
   5. REVEAL ANIMATIONS
   ========================================================= */

const prefersReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

let revealObserver = null;


function showRevealElement(element) {
    if (!(element instanceof HTMLElement)) {
        return;
    }

    element.classList.add("visible");
}


function createRevealObserver() {
    if (
        prefersReducedMotion ||
        !("IntersectionObserver" in window)
    ) {
        return null;
    }

    return new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                showRevealElement(entry.target);
                observer.unobserve(entry.target);
            });
        },
        {
            root: null,
            threshold: 0.08,
            rootMargin: "0px 0px -30px 0px"
        }
    );
}


function initializeRevealElement(element) {
    if (
        !(element instanceof HTMLElement) ||
        !element.classList.contains("reveal")
    ) {
        return;
    }

    if (
        prefersReducedMotion ||
        !revealObserver
    ) {
        showRevealElement(element);
        return;
    }

    if (element.dataset.revealInitialized === "true") {
        return;
    }

    element.dataset.revealInitialized = "true";

    revealObserver.observe(element);
}


function initializeRevealAnimations(root = document) {
    const revealElements = [];

    if (
        root instanceof HTMLElement &&
        root.classList.contains("reveal")
    ) {
        revealElements.push(root);
    }

    if (
        root instanceof Document ||
        root instanceof DocumentFragment ||
        root instanceof HTMLElement
    ) {
        revealElements.push(
            ...root.querySelectorAll(".reveal")
        );
    }

    revealElements.forEach(
        initializeRevealElement
    );
}


revealObserver = createRevealObserver();

initializeRevealAnimations();


/* =========================================================
   6. SMOOTH SAME-PAGE ANCHOR LINKS
   ========================================================= */

document.addEventListener(
    "click",
    (event) => {
        const link = event.target.closest(
            'a[href^="#"]:not([href="#"])'
        );

        if (!link) {
            return;
        }

        const targetId = link.getAttribute("href");

        if (!targetId) {
            return;
        }

        let targetElement = null;

        try {
            targetElement =
                document.querySelector(targetId);
        } catch (error) {
            return;
        }

        if (!targetElement) {
            return;
        }

        event.preventDefault();

        targetElement.scrollIntoView({
            behavior: prefersReducedMotion
                ? "auto"
                : "smooth",
            block: "start"
        });

        if (
            window.history &&
            typeof window.history.pushState ===
                "function"
        ) {
            window.history.pushState(
                null,
                "",
                targetId
            );
        }
    }
);


/* =========================================================
   7. EXTERNAL LINK ACCESSIBILITY
   ========================================================= */

function initializeExternalLink(link) {
    if (
        !(link instanceof HTMLAnchorElement) ||
        link.target !== "_blank"
    ) {
        return;
    }

    if (
        link.dataset.externalInitialized ===
        "true"
    ) {
        return;
    }

    link.dataset.externalInitialized = "true";

    const existingRel =
        link.getAttribute("rel") || "";

    const relValues = new Set(
        existingRel
            .split(/\s+/)
            .filter(Boolean)
    );

    relValues.add("noopener");
    relValues.add("noreferrer");

    link.setAttribute(
        "rel",
        Array.from(relValues).join(" ")
    );

    const existingLabel =
        link.getAttribute("aria-label") ||
        link.textContent.trim();

    if (
        existingLabel &&
        !existingLabel
            .toLowerCase()
            .includes("new tab")
    ) {
        link.setAttribute(
            "aria-label",
            `${existingLabel} — opens in a new tab`
        );
    }
}


function initializeExternalLinks(root = document) {
    const links = [];

    if (
        root instanceof HTMLAnchorElement &&
        root.target === "_blank"
    ) {
        links.push(root);
    }

    if (
        root instanceof Document ||
        root instanceof DocumentFragment ||
        root instanceof HTMLElement
    ) {
        links.push(
            ...root.querySelectorAll(
                'a[target="_blank"]'
            )
        );
    }

    links.forEach(initializeExternalLink);
}


initializeExternalLinks();


/* =========================================================
   8. CONTACT FORM
   ========================================================= */

function showFormStatus(message, type) {
    if (!formStatus) {
        return;
    }

    formStatus.textContent = message;
    formStatus.className =
        `form-status ${type}`;
}


function clearFormStatus() {
    if (!formStatus) {
        return;
    }

    formStatus.textContent = "";
    formStatus.className = "form-status";
}


function getFormFieldValue(
    formData,
    fieldName
) {
    const value = formData.get(fieldName);

    if (typeof value !== "string") {
        return "";
    }

    return value.trim();
}


function validateContactForm(formData) {
    const name = getFormFieldValue(
        formData,
        "name"
    );

    const email = getFormFieldValue(
        formData,
        "email"
    );

    const subject = getFormFieldValue(
        formData,
        "subject"
    );

    const message = getFormFieldValue(
        formData,
        "message"
    );

    if (
        !name ||
        !email ||
        !subject ||
        !message
    ) {
        return {
            valid: false,
            message:
                "Please complete all required fields."
        };
    }

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        return {
            valid: false,
            message:
                "Please enter a valid email address."
        };
    }

    if (message.length < 20) {
        return {
            valid: false,
            message:
                "Please provide a little more detail in your message."
        };
    }

    return {
        valid: true,
        message: ""
    };
}


function buildMailtoLink(formData) {
    const name = getFormFieldValue(
        formData,
        "name"
    );

    const email = getFormFieldValue(
        formData,
        "email"
    );

    const company = getFormFieldValue(
        formData,
        "company"
    );

    const subject = getFormFieldValue(
        formData,
        "subject"
    );

    const message = getFormFieldValue(
        formData,
        "message"
    );

    const recipient =
        "contact@elienzweme.com";

    const emailSubject =
        `[Nzweme Technologies] ${subject}`;

    const emailBody = [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company or organization: ${
            company || "Not provided"
        }`,
        "",
        "Message:",
        message
    ].join("\n");

    return (
        `mailto:${recipient}` +
        `?subject=${encodeURIComponent(
            emailSubject
        )}` +
        `&body=${encodeURIComponent(
            emailBody
        )}`
    );
}


if (contactForm) {
    contactForm.addEventListener(
        "input",
        clearFormStatus
    );

    contactForm.addEventListener(
        "submit",
        (event) => {
            event.preventDefault();

            clearFormStatus();

            const formData =
                new FormData(contactForm);

            const validationResult =
                validateContactForm(formData);

            if (!validationResult.valid) {
                showFormStatus(
                    validationResult.message,
                    "error"
                );

                return;
            }

            showFormStatus(
                "Your email application is opening with the message prepared.",
                "success"
            );

            window.location.href =
                buildMailtoLink(formData);
        }
    );
}


/* =========================================================
   9. ACTIVE NAVIGATION
   ========================================================= */

function normalizePageName(pathname) {
    const segments = pathname.split("/");

    const finalSegment =
        segments[segments.length - 1] || "";

    const pageName = finalSegment
        .split("?")[0]
        .split("#")[0];

    return pageName || "index.html";
}


function updateActiveNavigation() {
    const currentPage = normalizePageName(
        window.location.pathname
    );

    navigationLinks.forEach((link) => {
        const linkHref =
            link.getAttribute("href");

        if (
            !linkHref ||
            linkHref.startsWith("#") ||
            linkHref.startsWith("mailto:") ||
            linkHref.startsWith("tel:")
        ) {
            return;
        }

        const linkPage =
            normalizePageName(linkHref);

        const isCurrentPage =
            linkPage === currentPage;

        if (isCurrentPage) {
            link.classList.add("active");

            link.setAttribute(
                "aria-current",
                "page"
            );
        } else if (
            !link.hasAttribute(
                "data-keep-active"
            )
        ) {
            link.classList.remove("active");
            link.removeAttribute("aria-current");
        }
    });
}


updateActiveNavigation();


/* =========================================================
   10. CLICKABLE CARDS
   ========================================================= */

function initializeClickableCard(card) {
    if (
        !(card instanceof HTMLElement) ||
        !card.hasAttribute("data-card-link")
    ) {
        return;
    }

    if (
        card.dataset.cardLinkInitialized ===
        "true"
    ) {
        return;
    }

    const destination =
        card.getAttribute("data-card-link");

    if (!destination) {
        return;
    }

    card.dataset.cardLinkInitialized = "true";

    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "link");

    card.addEventListener(
        "click",
        (event) => {
            const clickedInteractiveElement =
                event.target.closest(
                    "a, button, input, select, textarea, label"
                );

            if (clickedInteractiveElement) {
                return;
            }

            openCardDestination(destination);
        }
    );

    card.addEventListener(
        "keydown",
        (event) => {
            if (
                event.key !== "Enter" &&
                event.key !== " "
            ) {
                return;
            }

            event.preventDefault();

            openCardDestination(destination);
        }
    );
}


function openCardDestination(destination) {
    if (
        destination.startsWith("http://") ||
        destination.startsWith("https://")
    ) {
        window.open(
            destination,
            "_blank",
            "noopener,noreferrer"
        );

        return;
    }

    window.location.href = destination;
}


function initializeClickableCards(root = document) {
    const cards = [];

    if (
        root instanceof HTMLElement &&
        root.hasAttribute("data-card-link")
    ) {
        cards.push(root);
    }

    if (
        root instanceof Document ||
        root instanceof DocumentFragment ||
        root instanceof HTMLElement
    ) {
        cards.push(
            ...root.querySelectorAll(
                "[data-card-link]"
            )
        );
    }

    cards.forEach(initializeClickableCard);
}


initializeClickableCards();


/* =========================================================
   11. COPY-TO-CLIPBOARD BUTTONS
   ========================================================= */

document.addEventListener(
    "click",
    async (event) => {
        const button = event.target.closest(
            "[data-copy-text]"
        );

        if (!button) {
            return;
        }

        const textToCopy =
            button.getAttribute(
                "data-copy-text"
            );

        if (!textToCopy) {
            return;
        }

        const originalText =
            button.textContent;

        try {
            await navigator.clipboard.writeText(
                textToCopy
            );

            button.textContent = "Copied";

            window.setTimeout(() => {
                button.textContent =
                    originalText;
            }, 1800);
        } catch (error) {
            console.error(
                "Unable to copy text:",
                error
            );

            button.textContent =
                "Copy failed";

            window.setTimeout(() => {
                button.textContent =
                    originalText;
            }, 1800);
        }
    }
);


/* =========================================================
   12. IMAGE AND LOGO FALLBACKS
   ========================================================= */

function handleImageError(image) {
    if (!(image instanceof HTMLImageElement)) {
        return;
    }

    const fallbackSource =
        image.getAttribute("data-fallback");

    if (
        fallbackSource &&
        image.dataset.fallbackApplied !==
            "true"
    ) {
        image.dataset.fallbackApplied = "true";
        image.src = fallbackSource;

        return;
    }

    const logoWrapper = image.closest(
        ".learning-logo-wrapper"
    );

    if (logoWrapper) {
        logoWrapper.classList.add(
            "logo-error"
        );
    }
}


function initializeImageFallback(image) {
    if (!(image instanceof HTMLImageElement)) {
        return;
    }

    if (
        image.dataset.imageFallbackInitialized ===
        "true"
    ) {
        return;
    }

    image.dataset.imageFallbackInitialized =
        "true";

    image.addEventListener(
        "error",
        () => {
            handleImageError(image);
        }
    );

    if (
        image.complete &&
        image.naturalWidth === 0
    ) {
        handleImageError(image);
    }
}


function initializeImageFallbacks(root = document) {
    const images = [];

    if (root instanceof HTMLImageElement) {
        images.push(root);
    }

    if (
        root instanceof Document ||
        root instanceof DocumentFragment ||
        root instanceof HTMLElement
    ) {
        images.push(
            ...root.querySelectorAll("img")
        );
    }

    images.forEach(
        initializeImageFallback
    );
}


initializeImageFallbacks();


/* =========================================================
   13. PLACEHOLDER LINKS
   ========================================================= */

function initializePlaceholderLink(link) {
    if (!(link instanceof HTMLAnchorElement)) {
        return;
    }

    const href =
        link.getAttribute("href");

    const isPlaceholder =
        href === "#" ||
        href === "" ||
        href === "javascript:void(0)";

    if (!isPlaceholder) {
        return;
    }

    if (
        link.dataset.placeholderInitialized ===
        "true"
    ) {
        return;
    }

    link.dataset.placeholderInitialized =
        "true";

    link.setAttribute(
        "aria-disabled",
        "true"
    );

    link.addEventListener(
        "click",
        (event) => {
            event.preventDefault();
        }
    );
}


function initializePlaceholderLinks(root = document) {
    const links = [];

    if (root instanceof HTMLAnchorElement) {
        links.push(root);
    }

    if (
        root instanceof Document ||
        root instanceof DocumentFragment ||
        root instanceof HTMLElement
    ) {
        links.push(
            ...root.querySelectorAll("a")
        );
    }

    links.forEach(
        initializePlaceholderLink
    );
}


initializePlaceholderLinks();


/* =========================================================
   14. DYNAMIC CONTENT INITIALIZATION
   ========================================================= */

function initializeDynamicContent(root) {
    initializeRevealAnimations(root);
    initializeExternalLinks(root);
    initializeClickableCards(root);
    initializeImageFallbacks(root);
    initializePlaceholderLinks(root);
}


/*
   Projects.js and learning.js create cards after the initial
   page load. This observer automatically initializes those
   newly generated elements.
*/

if ("MutationObserver" in window) {
    const dynamicContentObserver =
        new MutationObserver(
            (mutations) => {
                mutations.forEach(
                    (mutation) => {
                        mutation.addedNodes.forEach(
                            (node) => {
                                if (
                                    node instanceof
                                    HTMLElement
                                ) {
                                    initializeDynamicContent(
                                        node
                                    );
                                }
                            }
                        );
                    }
                );
            }
        );

    dynamicContentObserver.observe(
        document.body,
        {
            childList: true,
            subtree: true
        }
    );
}


/* =========================================================
   15. PUBLIC REFRESH EVENT
   ========================================================= */

/*
   learning.js or projects.js may dispatch this event after
   rendering content:

   document.dispatchEvent(
       new CustomEvent("nzweme:content-rendered")
   );
*/

document.addEventListener(
    "nzweme:content-rendered",
    () => {
        initializeDynamicContent(document);
    }
);


/* =========================================================
   16. INITIAL PAGE READY STATE
   ========================================================= */

function handlePageReady() {
    initializeDynamicContent(document);

    document.documentElement.classList.add(
        "js-ready"
    );
}


if (
    document.readyState === "loading"
) {
    document.addEventListener(
        "DOMContentLoaded",
        handlePageReady,
        {
            once: true
        }
    );
} else {
    handlePageReady();
}