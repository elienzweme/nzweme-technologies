"use strict";

/* =========================================================
   NZWEME TECHNOLOGIES
   Project Catalog, Rendering, Search, and Filtering
   ========================================================= */


/* =========================================================
   1. PROJECT DATA
   ========================================================= */

const projects = [
    {
        id: "active-directory-iam-automation-toolkit",

        title:
            "Active Directory Identity Lifecycle and Access Management Automation Toolkit",

        shortTitle:
            "Active Directory IAM Automation Toolkit",

        category:
            "Identity & Access Management",

        categories: [
            "Identity & Access Management",
            "Active Directory",
            "PowerShell",
            "Automation",
            "Security"
        ],

        status:
            "In Progress",

        featured:
            true,

        image:
            "assets/images/projects/active-directory-identity-lifecycle-and-access-management-automation-toolkit.png",

        imageAlt:
            "Active Directory Identity Lifecycle and Access Management Automation Toolkit project cover",

        description:
            "An enterprise identity and access management project that automates joiner, mover, and leaver workflows using Active Directory, PowerShell, RBAC mappings, audit logs, Jira workflows, Splunk monitoring, Group Policy, Windows LAPS, and secure file services.",

        technologies: [
            "Active Directory",
            "PowerShell",
            "Windows Server",
            "RBAC",
            "JML",
            "Splunk",
            "Jira",
            "Group Policy",
            "Windows LAPS"
        ],

        highlights: [
            "CSV-driven joiner, mover, and leaver workflows",
            "Department-based RBAC assignments",
            "Delegated administration and least privilege",
            "Automated identity lifecycle audit logging",
            "Splunk monitoring for identity events",
            "Jira ticketing and approval workflows"
        ],

        github:
            "https://github.com/elienzweme/Active-Directory-Identity-Lifecycle-and-Access-Management-Automation-Toolkit",

        liveUrl:
            "",

        detailsUrl:
            ""
    },

    {
        id:
            "cysa-practice-exam-app",

        title:
            "CompTIA CySA+ Practice Exam App",

        shortTitle:
            "CySA+ Practice Exam App",

        category:
            "Web Development",

        categories: [
            "Web Development",
            "Cybersecurity",
            "Education",
            "JavaScript",
            "Certification"
        ],

        status:
            "Completed",

        featured:
            true,

        image:
            "assets/images/projects/cysa.png",

        imageAlt:
            "CompTIA CySA Plus Practice Exam App project cover",

        description:
            "A browser-based cybersecurity learning application with more than 1,000 practice questions, an exam simulator, flashcards, instant feedback, domain filtering, search capabilities, and locally stored score tracking.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Local Storage",
            "CompTIA CySA+",
            "Responsive Design"
        ],

        highlights: [
            "More than 1,000 practice questions",
            "Practice mode with instant feedback",
            "Eighty-five-question exam simulation",
            "Flashcard learning mode",
            "Question search and domain filters",
            "Local score and progress tracking"
        ],

        github:
            "https://github.com/elienzweme/cysa-plus-practice-app",

        liveUrl:
            "https://elienzweme.github.io/cysa-plus-practice-app/",

        detailsUrl:
            ""
    },

    {
        id:
            "enterprise-endpoint-vulnerability-remediation",

        title:
            "Enterprise Endpoint Vulnerability Remediation Lab",

        shortTitle:
            "Endpoint Vulnerability Remediation Lab",

        category:
            "Vulnerability Management",

        categories: [
            "Vulnerability Management",
            "Cybersecurity",
            "Nessus",
            "Risk Management",
            "Windows"
        ],

        status:
            "Completed",

        featured:
            true,

        image:
            "assets/images/projects/enterprise-endpoint-vulnerability-remediation-lab.png",

        imageAlt:
            "Enterprise Endpoint Vulnerability Remediation Lab project cover",

        description:
            "A vulnerability management project using Nessus Essentials to discover assets, conduct network and credentialed scans, validate findings, prioritize risk, document remediation actions, and produce executive and technical reports.",

        technologies: [
            "Nessus Essentials",
            "Windows Server",
            "Windows 11",
            "Ubuntu",
            "VMware",
            "CVSS",
            "MITRE ATT&CK",
            "PowerShell"
        ],

        highlights: [
            "Host discovery and vulnerability scanning",
            "Credentialed patch and configuration auditing",
            "Finding validation and risk prioritization",
            "Documented remediation workflows",
            "Executive dashboard and risk matrix",
            "Technical and business-focused reporting"
        ],

        github:
            "https://github.com/elienzweme/-Enterprise-Endpoint-Vulnerability-Remediation-Lab",

        liveUrl:
            "",

        detailsUrl:
            ""
    },

    {
        id:
            "enterprise-iam-audit-compliance",

        title:
            "Enterprise IAM Audit and Compliance Reporting Lab",

        shortTitle:
            "IAM Audit and Compliance Lab",

        category:
            "Audit & Compliance",

        categories: [
            "Audit & Compliance",
            "Identity & Access Management",
            "Active Directory",
            "PowerShell",
            "Security"
        ],

        status:
            "Completed",

        featured:
            true,

        image:
            "assets/images/projects/enterprise-iam-audit-compliance-lab.png",

        imageAlt:
            "Enterprise IAM Audit and Compliance Reporting Lab project cover",

        description:
            "An Active Directory audit and reporting project that uses PowerShell to identify inactive, disabled, locked, privileged, and password-expiration-related accounts and generate review-ready compliance evidence.",

        technologies: [
            "Active Directory",
            "PowerShell",
            "Windows Event Logs",
            "CSV Reporting",
            "Access Reviews",
            "Audit",
            "RBAC"
        ],

        highlights: [
            "Inactive-user account reporting",
            "Disabled-account reporting",
            "Locked-account event analysis",
            "Password-expiration reporting",
            "Privileged-group membership reviews",
            "Exportable audit and compliance evidence"
        ],

        github:
            "https://github.com/elienzweme/Active-Directory-Identity-Lifecycle-and-Access-Management-Automation-Toolkit",

        liveUrl:
            "",

        detailsUrl:
            ""
    },

    {
        id:
            "enterprise-identity-endpoint-management",

        title:
            "Enterprise Identity and Endpoint Management Lab",

        shortTitle:
            "Identity and Endpoint Management Lab",

        category:
            "Microsoft Cloud",

        categories: [
            "Microsoft Cloud",
            "Identity & Access Management",
            "Endpoint Management",
            "Azure",
            "Security"
        ],

        status:
            "Completed",

        featured:
            true,

        image:
            "assets/images/projects/enterprise-identity-endpoint-management-lab.png",

        imageAlt:
            "Enterprise Identity and Endpoint Management Lab project cover",

        description:
            "A Microsoft enterprise administration lab focused on Microsoft Entra ID, Intune, Microsoft 365, cloud identity, endpoint management, role-based access, device security, and hybrid administration concepts.",

        technologies: [
            "Microsoft Entra ID",
            "Microsoft Intune",
            "Microsoft 365",
            "Azure",
            "Conditional Access",
            "MFA",
            "RBAC",
            "Windows"
        ],

        highlights: [
            "Cloud identity and user administration",
            "Endpoint enrollment and management",
            "Access-control policy implementation",
            "Microsoft 365 administration",
            "Role-based administrative access",
            "Enterprise troubleshooting documentation"
        ],

        github:
            "https://github.com/elienzweme/ENTERPRISE-IDENTITY-ENDPOINT-MANAGEMENT-LAB",

        liveUrl:
            "",

        detailsUrl:
            ""
    },

    {
        id:
            "enterprise-soc-lab",

        title:
            "Enterprise Security Operations Center Lab",

        shortTitle:
            "Enterprise SOC Lab",

        category:
            "SIEM & SOC",

        categories: [
            "SIEM & SOC",
            "Cybersecurity",
            "Splunk",
            "Threat Detection",
            "Incident Response"
        ],

        status:
            "Completed",

        featured:
            true,

        image:
            "assets/images/projects/enterprise-soc-lab.png",

        imageAlt:
            "Enterprise Security Operations Center Lab project cover",

        description:
            "A VMware-based enterprise security operations environment that collects Windows and Sysmon telemetry through Splunk Universal Forwarders and supports threat detection, investigation, dashboarding, and incident analysis.",

        technologies: [
            "Splunk Enterprise",
            "Splunk Universal Forwarder",
            "Sysmon",
            "Windows Event Logs",
            "Ubuntu",
            "Windows Server",
            "Kali Linux",
            "MITRE ATT&CK"
        ],

        highlights: [
            "Centralized Windows and Sysmon logging",
            "Custom Splunk dashboards",
            "Authentication activity monitoring",
            "PowerShell logging analysis",
            "MITRE ATT&CK mapping",
            "Documented incident investigations"
        ],

        github:
            "https://github.com/elienzweme/Enterprise-SOC-Lab",

        liveUrl:
            "https://www.youtube.com/watch?v=IM0pEu-1QiM",

        detailsUrl:
            ""
    },

    {
        id:
            "enterprise-soc-threat-detection",

        title:
            "Enterprise SOC Threat Detection and Investigation Lab",

        shortTitle:
            "SOC Threat Detection Lab",

        category:
            "Threat Detection",

        categories: [
            "Threat Detection",
            "SIEM & SOC",
            "Splunk",
            "Incident Response",
            "Cybersecurity"
        ],

        status:
            "Completed",

        featured:
            false,

        image:
            "assets/images/projects/enterprise-soc-threat-detection-lab.png",

        imageAlt:
            "Enterprise SOC Threat Detection and Investigation Lab project cover",

        description:
            "A security monitoring and detection project focused on analyzing Windows authentication, account management, PowerShell, process creation, service installation, and Sysmon events through Splunk.",

        technologies: [
            "Splunk",
            "SPL",
            "Sysmon",
            "Windows Event Logs",
            "PowerShell Logging",
            "MITRE ATT&CK",
            "Incident Response"
        ],

        highlights: [
            "Failed-login detection using event ID 4625",
            "New-user monitoring using event ID 4720",
            "PowerShell script-block monitoring",
            "Process-creation analysis",
            "Suspicious service-installation monitoring",
            "MITRE ATT&CK-aligned detection searches"
        ],

        github:
            "https://github.com/elienzweme/Enterprise-SOC-Lab",

        liveUrl:
            "https://www.youtube.com/watch?v=IM0pEu-1QiM",

        detailsUrl:
            ""
    },

    {
        id:
            "it-asset-recycling-scanner-automation",

        title:
            "IT Asset Recycling and Scanner Automation Toolkit",

        shortTitle:
            "IT Asset Scanner Automation Toolkit",

        category:
            "Automation",

        categories: [
            "Automation",
            "PowerShell",
            "Asset Management",
            "Technical Support",
            "Data Management"
        ],

        status:
            "Completed",

        featured:
            true,

        image:
            "assets/images/projects/it-asset-recycling-and-scanner-automation-toolkit.png",

        imageAlt:
            "IT Asset Recycling and Scanner Automation Toolkit project cover",

        description:
            "A PowerShell-based asset-management toolkit that records barcode, QR-code, or manually entered serial-number data, updates centralized inventory records, detects duplicates, and generates audit evidence.",

        technologies: [
            "PowerShell",
            "CSV",
            "Barcode Scanning",
            "QR Codes",
            "Asset Inventory",
            "Audit Logging",
            "Windows"
        ],

        highlights: [
            "Barcode and QR-code asset scanning",
            "Manual serial-number entry",
            "Duplicate asset detection",
            "Centralized inventory management",
            "Automatic audit-file generation",
            "Reusable operational workflow"
        ],

        github:
            "https://github.com/elienzweme/IT-Asset-Recycling-and-Scanner-Automation-Toolkit",

        liveUrl:
            "",

        detailsUrl:
            ""
    },

    {
        id:
            "linux-projects",

        title:
            "Linux Administration and Security Projects",

        shortTitle:
            "Linux Projects",

        category:
            "Linux",

        categories: [
            "Linux",
            "Systems Administration",
            "Security",
            "Networking",
            "Scripting"
        ],

        status:
            "Completed",

        featured:
            true,

        image:
            "assets/images/projects/linux-projects.png",

        imageAlt:
            "Linux Administration and Security Projects cover",

        description:
            "A collection of Linux administration, networking, security, permissions, process management, storage, service management, scripting, and troubleshooting exercises.",

        technologies: [
            "Linux",
            "Ubuntu",
            "Bash",
            "Networking",
            "Permissions",
            "Systemd",
            "Storage",
            "Security"
        ],

        highlights: [
            "User and group administration",
            "File and directory permissions",
            "Linux process management",
            "Service administration",
            "Networking and troubleshooting",
            "Storage and file-system management"
        ],

        github:
            "https://github.com/elienzweme/Linux_projects",

        liveUrl:
            "",

        detailsUrl:
            ""
    }
];


/* =========================================================
   2. DOM REFERENCES
   ========================================================= */

const projectsContainer =
    document.querySelector("#projects-container");

const projectSearchInput =
    document.querySelector("#project-search");

const projectFilterContainer =
    document.querySelector("#project-filter-controls");

const projectResultsCount =
    document.querySelector("#project-results-count");

const projectResetButton =
    document.querySelector("#project-reset-button");

const featuredProjectsContainer =
    document.querySelector("#featured-projects-container");


/* =========================================================
   3. PROJECT FILTER STATE
   ========================================================= */

let activeProjectCategory = "All";
let projectSearchTerm = "";


/* =========================================================
   4. TEXT AND DATA HELPERS
   ========================================================= */

function normalizeText(value) {
    return String(value || "")
        .toLowerCase()
        .trim();
}

function escapeHtml(value) {
    return String(value || "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function getProjectCategories() {
    const categorySet = new Set();

    projects.forEach((project) => {
        project.categories.forEach((category) => {
            categorySet.add(category);
        });
    });

    const sortedCategories =
        Array.from(categorySet).sort((first, second) =>
            first.localeCompare(second)
        );

    return [
        "All",
        ...sortedCategories
    ];
}


/* =========================================================
   5. PROJECT FILTERING
   ========================================================= */

function projectMatchesSearch(project) {
    if (!projectSearchTerm) {
        return true;
    }

    const searchableContent = [
        project.title,
        project.shortTitle,
        project.category,
        project.status,
        project.description,
        ...project.categories,
        ...project.technologies,
        ...project.highlights
    ]
        .join(" ")
        .toLowerCase();

    return searchableContent.includes(projectSearchTerm);
}

function projectMatchesCategory(project) {
    if (activeProjectCategory === "All") {
        return true;
    }

    return project.categories.includes(
        activeProjectCategory
    );
}

function getFilteredProjects() {
    return projects.filter((project) => {
        return (
            projectMatchesSearch(project) &&
            projectMatchesCategory(project)
        );
    });
}


/* =========================================================
   6. PROJECT CARD COMPONENTS
   ========================================================= */

function createTechnologyTags(technologies) {
    return technologies
        .slice(0, 7)
        .map((technology) => {
            return `
                <span>
                    ${escapeHtml(technology)}
                </span>
            `;
        })
        .join("");
}

function createProjectHighlights(highlights) {
    return highlights
        .slice(0, 4)
        .map((highlight) => {
            return `
                <li>
                    ${escapeHtml(highlight)}
                </li>
            `;
        })
        .join("");
}

function createProjectButtons(project) {
    const buttons = [];

    if (project.github) {
        buttons.push(`
            <a
                class="button button-primary button-small"
                href="${escapeHtml(project.github)}"
                target="_blank"
                rel="noopener noreferrer"
            >
                View GitHub
            </a>
        `);
    }

    if (project.liveUrl) {
        buttons.push(`
            <a
                class="button button-secondary button-small"
                href="${escapeHtml(project.liveUrl)}"
                target="_blank"
                rel="noopener noreferrer"
            >
                View Demo
            </a>
        `);
    }

    if (project.detailsUrl) {
        buttons.push(`
            <a
                class="button button-secondary button-small"
                href="${escapeHtml(project.detailsUrl)}"
            >
                Project Details
            </a>
        `);
    }

    if (!buttons.length) {
        buttons.push(`
            <span
                class="button button-secondary button-small"
                aria-disabled="true"
            >
                Documentation Coming Soon
            </span>
        `);
    }

    return buttons.join("");
}

function createProjectCard(project) {
    const statusClass =
        project.status === "Completed"
            ? "access-free"
            : "access-freemium";

    return `
        <article
            class="project-card reveal visible"
            data-project-id="${escapeHtml(project.id)}"
        >
            <div class="project-card-image">
                <img
                    src="${escapeHtml(project.image)}"
                    alt="${escapeHtml(project.imageAlt)}"
                    loading="lazy"
                >
            </div>

            <div class="project-card-content">
                <div class="learning-meta">
                    <span>
                        ${escapeHtml(project.category)}
                    </span>

                    <span class="${statusClass}">
                        ${escapeHtml(project.status)}
                    </span>
                </div>

                <h3>
                    ${escapeHtml(project.shortTitle)}
                </h3>

                <p>
                    ${escapeHtml(project.description)}
                </p>

                <div class="project-meta">
                    ${createTechnologyTags(
                        project.technologies
                    )}
                </div>

                <div class="resume-recommended">
                    <strong>
                        Key project outcomes
                    </strong>

                    <ul>
                        ${createProjectHighlights(
                            project.highlights
                        )}
                    </ul>
                </div>

                <div class="project-card-footer">
                    ${createProjectButtons(project)}
                </div>
            </div>
        </article>
    `;
}


/* =========================================================
   7. CATEGORY FILTER BUTTONS
   ========================================================= */

function renderProjectFilters() {
    if (!projectFilterContainer) {
        return;
    }

    const categories = getProjectCategories();

    projectFilterContainer.innerHTML = categories
        .map((category) => {
            const isActive =
                category === activeProjectCategory;

            return `
                <button
                    class="filter-button ${
                        isActive ? "active" : ""
                    }"
                    type="button"
                    data-project-category="${escapeHtml(category)}"
                    aria-pressed="${isActive}"
                >
                    ${escapeHtml(category)}
                </button>
            `;
        })
        .join("");

    const filterButtons =
        projectFilterContainer.querySelectorAll(
            "[data-project-category]"
        );

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            activeProjectCategory =
                button.dataset.projectCategory || "All";

            renderProjectFilters();
            renderProjects();
        });
    });
}


/* =========================================================
   8. PROJECT RESULTS COUNT
   ========================================================= */

function updateProjectResultsCount(count) {
    if (!projectResultsCount) {
        return;
    }

    const projectLabel =
        count === 1
            ? "project"
            : "projects";

    projectResultsCount.textContent =
        `${count} ${projectLabel} found`;
}


/* =========================================================
   9. EMPTY RESULTS MESSAGE
   ========================================================= */

function createNoProjectResults() {
    return `
        <div class="no-results">
            <h3>
                No projects found
            </h3>

            <p>
                Try another keyword or select a different
                project category.
            </p>
        </div>
    `;
}


/* =========================================================
   10. RENDER ALL PROJECTS
   ========================================================= */

function renderProjects() {
    if (!projectsContainer) {
        return;
    }

    const filteredProjects =
        getFilteredProjects();

    updateProjectResultsCount(
        filteredProjects.length
    );

    if (!filteredProjects.length) {
        projectsContainer.innerHTML =
            createNoProjectResults();

        return;
    }

    projectsContainer.innerHTML =
        filteredProjects
            .map(createProjectCard)
            .join("");
}


/* =========================================================
   11. RENDER FEATURED PROJECTS
   ========================================================= */

function renderFeaturedProjects() {
    if (!featuredProjectsContainer) {
        return;
    }

    const featuredProjects = projects
        .filter((project) => project.featured)
        .slice(0, 6);

    featuredProjectsContainer.innerHTML =
        featuredProjects
            .map(createProjectCard)
            .join("");
}


/* =========================================================
   12. PROJECT SEARCH
   ========================================================= */

function initializeProjectSearch() {
    if (!projectSearchInput) {
        return;
    }

    projectSearchInput.addEventListener(
        "input",
        (event) => {
            projectSearchTerm =
                normalizeText(event.target.value);

            renderProjects();
        }
    );
}


/* =========================================================
   13. RESET PROJECT FILTERS
   ========================================================= */

function resetProjectFilters() {
    activeProjectCategory = "All";
    projectSearchTerm = "";

    if (projectSearchInput) {
        projectSearchInput.value = "";
    }

    renderProjectFilters();
    renderProjects();
}

function initializeProjectResetButton() {
    if (!projectResetButton) {
        return;
    }

    projectResetButton.addEventListener(
        "click",
        resetProjectFilters
    );
}


/* =========================================================
   14. CATEGORY FILTER FROM URL
   ========================================================= */

function initializeCategoryFromUrl() {
    const urlParameters =
        new URLSearchParams(
            window.location.search
        );

    const requestedCategory =
        urlParameters.get("category");

    if (!requestedCategory) {
        return;
    }

    const matchingCategory =
        getProjectCategories().find((category) => {
            return (
                normalizeText(category) ===
                normalizeText(requestedCategory)
            );
        });

    if (matchingCategory) {
        activeProjectCategory =
            matchingCategory;
    }
}


/* =========================================================
   15. INITIALIZE PROJECT FUNCTIONALITY
   ========================================================= */

function initializeProjects() {
    initializeCategoryFromUrl();
    renderProjectFilters();
    renderProjects();
    renderFeaturedProjects();
    initializeProjectSearch();
    initializeProjectResetButton();
}

initializeProjects();