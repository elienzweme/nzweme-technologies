"use strict";

/* =========================================================
   NZWEME TECHNOLOGIES
   Learning Hub

   Features:
   - Detailed external learning-resource cards
   - Logo.dev provider logos
   - Provider and resource descriptions
   - Categories
   - Skill levels
   - Free, freemium, and paid indicators
   - Recommended use cases
   - Search
   - Category filters
   - Result count
   - Empty-state handling
   - Clickable cards
   - Visit Website buttons
   ========================================================= */


/* =========================================================
   1. LOGO.DEV CONFIGURATION
   ========================================================= */

const LOGO_DEV_TOKEN =
    "pk_F-swxiPtRR-4i_ao8yP4rg";


function getLogoUrl(domain) {
    const cleanDomain = String(domain || "")
        .trim()
        .replace(/^https?:\/\//i, "")
        .replace(/^www\./i, "")
        .split("/")[0];

    return (
        `https://img.logo.dev/${encodeURIComponent(cleanDomain)}` +
        `?token=${encodeURIComponent(LOGO_DEV_TOKEN)}` +
        `&size=128` +
        `&format=png` +
        `&retina=true`
    );
}


/* =========================================================
   2. LEARNING RESOURCE DATA
   ========================================================= */

const learningResources = [

    /* =====================================================
       CYBERSECURITY AND PENETRATION TESTING
       ===================================================== */

    {
        id: "tryhackme",

        title: "TryHackMe",

        provider: "TryHackMe",

        domain: "tryhackme.com",

        categories: [
            "Cybersecurity",
            "Penetration Testing",
            "Threat Detection"
        ],

        level: "Beginner to Advanced",

        access: "Freemium",

        description:
            "An interactive cybersecurity training platform with guided learning paths, browser-based labs, virtual machines, offensive-security exercises, defensive-security rooms, and career-focused training.",

        bestFor: [
            "Cybersecurity beginners",
            "Hands-on security labs",
            "SOC analyst training",
            "Penetration-testing fundamentals",
            "Guided learning paths"
        ],

        url: "https://tryhackme.com"
    },

    {
        id: "hack-the-box-academy",

        title: "Hack The Box Academy",

        provider: "Hack The Box",

        domain: "hackthebox.com",

        categories: [
            "Cybersecurity",
            "Penetration Testing",
            "Threat Detection"
        ],

        level: "Beginner to Advanced",

        access: "Freemium",

        description:
            "A hands-on cybersecurity learning platform offering structured modules, realistic lab environments, offensive-security exercises, defensive-security content, and practical skill assessments.",

        bestFor: [
            "Penetration testing",
            "Security skill development",
            "Red-team fundamentals",
            "Blue-team fundamentals",
            "Realistic technical labs"
        ],

        url: "https://academy.hackthebox.com"
    },

    {
        id: "portswigger-web-security-academy",

        title: "PortSwigger Web Security Academy",

        provider: "PortSwigger",

        domain: "portswigger.net",

        categories: [
            "Cybersecurity",
            "Penetration Testing",
            "Programming"
        ],

        level: "Beginner to Advanced",

        access: "Free",

        description:
            "A free web-application security training platform with detailed learning materials and interactive labs covering common vulnerabilities and modern web-attack techniques.",

        bestFor: [
            "Web application security",
            "Burp Suite practice",
            "OWASP vulnerabilities",
            "SQL injection",
            "Authentication testing"
        ],

        url: "https://portswigger.net/web-security"
    },

    {
        id: "security-blue-team",

        title: "Security Blue Team",

        provider: "Security Blue Team",

        domain: "securityblue.team",

        categories: [
            "Cybersecurity",
            "SIEM & SOC",
            "Threat Detection",
            "Incident Response"
        ],

        level: "Beginner to Advanced",

        access: "Freemium",

        description:
            "A defensive-security training platform focused on security operations, threat detection, incident response, digital forensics, phishing analysis, and blue-team career skills.",

        bestFor: [
            "SOC analyst skills",
            "Blue-team training",
            "Incident response",
            "Threat detection",
            "Defensive security"
        ],

        url: "https://www.securityblue.team"
    },

    {
        id: "letsdefend",

        title: "LetsDefend",

        provider: "LetsDefend",

        domain: "letsdefend.io",

        categories: [
            "Cybersecurity",
            "SIEM & SOC",
            "Threat Detection",
            "Incident Response"
        ],

        level: "Beginner to Intermediate",

        access: "Freemium",

        description:
            "A simulated Security Operations Center platform where learners investigate alerts, analyze logs, inspect suspicious activity, and practice incident-response workflows.",

        bestFor: [
            "SOC simulations",
            "Alert investigation",
            "Log analysis",
            "Incident triage",
            "Blue-team practice"
        ],

        url: "https://letsdefend.io"
    },

    {
        id: "owasp",

        title: "OWASP",

        provider:
            "Open Worldwide Application Security Project",

        domain: "owasp.org",

        categories: [
            "Cybersecurity",
            "Penetration Testing",
            "Documentation",
            "Security Frameworks & Compliance"
        ],

        level: "All Levels",

        access: "Free",

        description:
            "A global nonprofit community providing free application-security standards, projects, testing guides, secure-development resources, and vulnerability references.",

        bestFor: [
            "OWASP Top 10",
            "Web security standards",
            "Secure development",
            "Application testing",
            "Security documentation"
        ],

        url: "https://owasp.org"
    },


    /* =====================================================
       IDENTITY AND ACCESS MANAGEMENT
       ===================================================== */

    {
        id: "microsoft-entra-documentation",

        title: "Microsoft Entra Documentation",

        provider: "Microsoft",

        domain: "microsoft.com",

        categories: [
            "Identity & Access Management",
            "Microsoft",
            "Microsoft Security",
            "Documentation"
        ],

        level: "Beginner to Advanced",

        access: "Free",

        description:
            "Official Microsoft documentation for Entra ID, authentication, multifactor authentication, Conditional Access, identity protection, identity governance, enterprise applications, and privileged identity management.",

        bestFor: [
            "Microsoft Entra ID",
            "Conditional Access",
            "Multifactor authentication",
            "Identity Governance",
            "Privileged Identity Management"
        ],

        url: "https://learn.microsoft.com/entra"
    },

    {
        id: "microsoft-learn",

        title: "Microsoft Learn",

        provider: "Microsoft",

        domain: "microsoft.com",

        categories: [
            "Microsoft",
            "Identity & Access Management",
            "Microsoft Security",
            "Azure",
            "Certification Resources"
        ],

        level: "Beginner to Advanced",

        access: "Free",

        description:
            "Microsoft's official learning platform with modules, learning paths, labs, documentation, and certification preparation across Azure, security, identity, Microsoft 365, PowerShell, data, and development.",

        bestFor: [
            "Microsoft certifications",
            "Azure learning",
            "Security learning paths",
            "Identity training",
            "Microsoft 365 skills"
        ],

        url: "https://learn.microsoft.com"
    },

    {
        id: "microsoft-learn-labs",

        title: "Microsoft Learn Labs",

        provider: "Microsoft",

        domain: "github.com",

        categories: [
            "Microsoft",
            "Azure",
            "Identity & Access Management",
            "Microsoft Security"
        ],

        level: "Intermediate",

        access: "Free",

        description:
            "Hands-on lab repositories maintained for Microsoft certification courses and technical training, including Azure administration, security, identity, Microsoft 365, and cloud architecture.",

        bestFor: [
            "Hands-on Microsoft labs",
            "Azure practice",
            "Certification preparation",
            "Microsoft security labs",
            "Identity administration labs"
        ],

        url: "https://github.com/MicrosoftLearning"
    },

    {
        id: "sailpoint-documentation",

        title: "SailPoint Documentation",

        provider: "SailPoint",

        domain: "sailpoint.com",

        categories: [
            "Identity & Access Management",
            "Documentation"
        ],

        level: "Intermediate to Advanced",

        access: "Free",

        description:
            "Official documentation for SailPoint identity-governance products, including identity lifecycle management, access requests, certifications, roles, connectors, policies, and governance workflows.",

        bestFor: [
            "Identity governance",
            "Access certifications",
            "Role management",
            "Lifecycle management",
            "SailPoint administration"
        ],

        url: "https://documentation.sailpoint.com"
    },

    {
        id: "okta-developer",

        title: "Okta Developer",

        provider: "Okta",

        domain: "okta.com",

        categories: [
            "Identity & Access Management",
            "Documentation",
            "Programming"
        ],

        level: "Beginner to Advanced",

        access: "Free",

        description:
            "Developer documentation and learning resources for Okta authentication, authorization, identity APIs, OAuth 2.0, OpenID Connect, application integration, and identity workflows.",

        bestFor: [
            "Okta development",
            "OAuth 2.0",
            "OpenID Connect",
            "Application integrations",
            "Identity APIs"
        ],

        url: "https://developer.okta.com"
    },

    {
        id: "ping-identity-documentation",

        title: "Ping Identity Documentation",

        provider: "Ping Identity",

        domain: "pingidentity.com",

        categories: [
            "Identity & Access Management",
            "Documentation"
        ],

        level: "Intermediate to Advanced",

        access: "Free",

        description:
            "Official documentation for Ping Identity products covering identity federation, authentication, access management, single sign-on, directory services, and identity security.",

        bestFor: [
            "Single sign-on",
            "Identity federation",
            "Access management",
            "Authentication",
            "Ping Identity administration"
        ],

        url: "https://docs.pingidentity.com"
    },

    {
        id: "cyberark-documentation",

        title: "CyberArk Documentation",

        provider: "CyberArk",

        domain: "cyberark.com",

        categories: [
            "Identity & Access Management",
            "Microsoft Security",
            "Documentation"
        ],

        level: "Intermediate to Advanced",

        access: "Free",

        description:
            "Official CyberArk product documentation focused on privileged-access management, credential protection, session monitoring, identity security, secrets management, and endpoint privilege controls.",

        bestFor: [
            "Privileged Access Management",
            "Credential security",
            "Session monitoring",
            "Secrets management",
            "Identity security"
        ],

        url: "https://docs.cyberark.com"
    },

    {
        id: "beyondtrust-resources",

        title: "BeyondTrust Resources",

        provider: "BeyondTrust",

        domain: "beyondtrust.com",

        categories: [
            "Identity & Access Management",
            "Microsoft Security",
            "Documentation"
        ],

        level: "Intermediate to Advanced",

        access: "Free",

        description:
            "Product resources and security guidance for privileged-access management, remote support, endpoint privilege management, password security, and identity-based access controls.",

        bestFor: [
            "Privileged access",
            "Remote support security",
            "Endpoint privilege management",
            "Password management",
            "Identity security"
        ],

        url: "https://www.beyondtrust.com/resources"
    },


    /* =====================================================
       MICROSOFT SECURITY AND AZURE
       ===================================================== */

    {
        id: "microsoft-security-learn",

        title: "Microsoft Security Learn",

        provider: "Microsoft",

        domain: "microsoft.com",

        categories: [
            "Microsoft",
            "Microsoft Security",
            "Cybersecurity",
            "Certification Resources"
        ],

        level: "Beginner to Advanced",

        access: "Free",

        description:
            "Official Microsoft security training and documentation covering identity, compliance, Microsoft Defender, Microsoft Sentinel, Zero Trust, cloud security, and security operations.",

        bestFor: [
            "Microsoft security training",
            "Zero Trust",
            "Defender products",
            "Sentinel",
            "Security certifications"
        ],

        url: "https://learn.microsoft.com/security"
    },

    {
        id: "microsoft-defender",

        title: "Microsoft Defender Documentation",

        provider: "Microsoft",

        domain: "microsoft.com",

        categories: [
            "Microsoft Security",
            "Cybersecurity",
            "Threat Detection",
            "SIEM & SOC"
        ],

        level: "Intermediate to Advanced",

        access: "Free",

        description:
            "Official documentation for Microsoft Defender products, including endpoint protection, identity protection, cloud-app security, threat intelligence, vulnerability management, and extended detection and response.",

        bestFor: [
            "Endpoint security",
            "Microsoft Defender XDR",
            "Threat detection",
            "Vulnerability management",
            "Security operations"
        ],

        url: "https://learn.microsoft.com/defender"
    },

    {
        id: "microsoft-sentinel",

        title: "Microsoft Sentinel Documentation",

        provider: "Microsoft",

        domain: "microsoft.com",

        categories: [
            "Microsoft Security",
            "SIEM & SOC",
            "Threat Detection",
            "Incident Response"
        ],

        level: "Intermediate to Advanced",

        access: "Free",

        description:
            "Official documentation for Microsoft Sentinel, including data connectors, analytics rules, incidents, automation, workbooks, threat hunting, KQL, and SIEM architecture.",

        bestFor: [
            "Cloud SIEM",
            "KQL",
            "Analytics rules",
            "Threat hunting",
            "Incident automation"
        ],

        url: "https://learn.microsoft.com/azure/sentinel"
    },

    {
        id: "microsoft-intune",

        title: "Microsoft Intune Documentation",

        provider: "Microsoft",

        domain: "microsoft.com",

        categories: [
            "Microsoft",
            "Microsoft Security",
            "Identity & Access Management",
            "Documentation"
        ],

        level: "Beginner to Advanced",

        access: "Free",

        description:
            "Official documentation for Microsoft Intune device enrollment, configuration profiles, compliance policies, application management, endpoint security, updates, and mobile-device administration.",

        bestFor: [
            "Endpoint management",
            "Device compliance",
            "Application deployment",
            "Security baselines",
            "Mobile device management"
        ],

        url: "https://learn.microsoft.com/mem/intune"
    },

    {
        id: "microsoft-azure-training",

        title: "Microsoft Learn Azure Training",

        provider: "Microsoft",

        domain: "microsoft.com",

        categories: [
            "Azure",
            "Cloud Security",
            "Microsoft",
            "Certification Resources"
        ],

        level: "Beginner to Advanced",

        access: "Free",

        description:
            "Official Azure learning paths and modules for cloud fundamentals, administration, networking, identity, governance, architecture, security, development, and certification preparation.",

        bestFor: [
            "AZ-900",
            "AZ-104",
            "AZ-500",
            "Azure administration",
            "Cloud security"
        ],

        url: "https://learn.microsoft.com/training/azure/"
    },

    {
        id: "azure-architecture-center",

        title: "Azure Architecture Center",

        provider: "Microsoft",

        domain: "microsoft.com",

        categories: [
            "Azure",
            "Cloud Security",
            "Documentation"
        ],

        level: "Intermediate to Advanced",

        access: "Free",

        description:
            "Microsoft architecture guidance, reference architectures, design patterns, decision guides, reliability recommendations, and cloud-adoption practices for Azure environments.",

        bestFor: [
            "Enterprise architecture",
            "Cloud design patterns",
            "Reference architectures",
            "Azure security design",
            "Reliability planning"
        ],

        url: "https://learn.microsoft.com/azure/architecture/"
    },


    /* =====================================================
       CLOUD SECURITY
       ===================================================== */

    {
        id: "aws-skill-builder",

        title: "AWS Skill Builder",

        provider: "Amazon Web Services",

        domain: "aws.amazon.com",

        categories: [
            "Cloud Security",
            "Certification Resources",
            "Documentation"
        ],

        level: "Beginner to Advanced",

        access: "Freemium",

        description:
            "AWS training platform providing digital courses, learning plans, cloud labs, certification preparation, architecture training, security content, and role-based cloud learning.",

        bestFor: [
            "AWS certifications",
            "Cloud fundamentals",
            "AWS security",
            "Cloud architecture",
            "Hands-on AWS labs"
        ],

        url: "https://explore.skillbuilder.aws"
    },

    {
        id: "aws-documentation",

        title: "AWS Documentation",

        provider: "Amazon Web Services",

        domain: "aws.amazon.com",

        categories: [
            "Cloud Security",
            "Documentation"
        ],

        level: "Beginner to Advanced",

        access: "Free",

        description:
            "Official technical documentation for AWS services, architecture, identity, networking, security, monitoring, automation, storage, computing, and cloud governance.",

        bestFor: [
            "AWS services",
            "IAM documentation",
            "Cloud architecture",
            "AWS security",
            "Technical reference"
        ],

        url: "https://docs.aws.amazon.com"
    },

    {
        id: "google-cloud-skills-boost",

        title: "Google Cloud Skills Boost",

        provider: "Google Cloud",

        domain: "cloud.google.com",

        categories: [
            "Cloud Security",
            "Certification Resources"
        ],

        level: "Beginner to Advanced",

        access: "Freemium",

        description:
            "Google Cloud learning platform offering courses, hands-on labs, skill badges, learning paths, cloud-security training, data content, and certification preparation.",

        bestFor: [
            "Google Cloud labs",
            "Cloud certifications",
            "Security training",
            "Skill badges",
            "Cloud administration"
        ],

        url: "https://www.cloudskillsboost.google"
    },

    {
        id: "google-cloud-documentation",

        title: "Google Cloud Documentation",

        provider: "Google Cloud",

        domain: "cloud.google.com",

        categories: [
            "Cloud Security",
            "Documentation"
        ],

        level: "Beginner to Advanced",

        access: "Free",

        description:
            "Official documentation for Google Cloud products covering computing, storage, networking, identity, security, monitoring, Kubernetes, automation, and cloud architecture.",

        bestFor: [
            "Google Cloud services",
            "Cloud IAM",
            "Cloud security",
            "Architecture",
            "Technical reference"
        ],

        url: "https://cloud.google.com/docs"
    },


    /* =====================================================
       VULNERABILITY MANAGEMENT
       ===================================================== */

    {
        id: "nessus",

        title: "Nessus by Tenable",

        provider: "Tenable",

        domain: "tenable.com",

        categories: [
            "Vulnerability Management",
            "Cybersecurity"
        ],

        level: "Beginner to Advanced",

        access: "Freemium",

        description:
            "A widely used vulnerability-assessment platform for discovering security weaknesses, performing credentialed scans, evaluating CVEs, auditing configurations, and prioritizing risk across enterprise systems.",

        bestFor: [
            "Vulnerability scanning",
            "Credentialed scans",
            "Compliance audits",
            "CVE analysis",
            "Risk scoring"
        ],

        url: "https://www.tenable.com/products/nessus"
    },

    {
        id: "tenable-documentation",

        title: "Tenable Documentation",

        provider: "Tenable",

        domain: "tenable.com",

        categories: [
            "Vulnerability Management",
            "Documentation"
        ],

        level: "Beginner to Advanced",

        access: "Free",

        description:
            "Official technical documentation for Nessus and other Tenable products, including installation, scan configuration, credentials, plugins, policies, compliance, reporting, and troubleshooting.",

        bestFor: [
            "Nessus configuration",
            "Credentialed scanning",
            "Scan policies",
            "Compliance assessments",
            "Troubleshooting"
        ],

        url: "https://docs.tenable.com"
    },

    {
        id: "greenbone-openvas",

        title: "Greenbone / OpenVAS",

        provider: "Greenbone",

        domain: "greenbone.net",

        categories: [
            "Vulnerability Management",
            "Cybersecurity"
        ],

        level: "Intermediate",

        access: "Freemium",

        description:
            "An open vulnerability-management ecosystem built around Greenbone and OpenVAS technologies for network vulnerability scanning, security testing, risk analysis, and vulnerability reporting.",

        bestFor: [
            "Open-source vulnerability scanning",
            "Network assessments",
            "Security testing",
            "Risk analysis",
            "Vulnerability reporting"
        ],

        url: "https://greenbone.net"
    },


    /* =====================================================
       SIEM AND LOGGING
       ===================================================== */

    {
        id: "splunk-education",

        title: "Splunk Education",

        provider: "Splunk",

        domain: "splunk.com",

        categories: [
            "SIEM & SOC",
            "Threat Detection",
            "Certification Resources"
        ],

        level: "Beginner to Advanced",

        access: "Freemium",

        description:
            "Official Splunk training platform with courses for searching, reporting, dashboards, administration, security monitoring, data analysis, and certification preparation.",

        bestFor: [
            "SPL training",
            "Splunk certifications",
            "Dashboard development",
            "Security monitoring",
            "Splunk administration"
        ],

        url: "https://education.splunk.com"
    },

    {
        id: "splunk-documentation",

        title: "Splunk Documentation",

        provider: "Splunk",

        domain: "splunk.com",

        categories: [
            "SIEM & SOC",
            "Documentation",
            "Threat Detection"
        ],

        level: "Beginner to Advanced",

        access: "Free",

        description:
            "Official Splunk documentation covering installation, data ingestion, SPL, dashboards, alerts, security content, administration, troubleshooting, and application development.",

        bestFor: [
            "Splunk configuration",
            "SPL reference",
            "Data onboarding",
            "Alert creation",
            "Administration"
        ],

        url: "https://docs.splunk.com"
    },

    {
        id: "splunk-lantern",

        title: "Splunk Lantern",

        provider: "Splunk",

        domain: "splunk.com",

        categories: [
            "SIEM & SOC",
            "Threat Detection",
            "Incident Response"
        ],

        level: "Intermediate to Advanced",

        access: "Free",

        description:
            "A practical library of Splunk use cases, security examples, operational guidance, detection ideas, implementation patterns, and real-world solutions.",

        bestFor: [
            "Security use cases",
            "Detection ideas",
            "Operational dashboards",
            "Splunk implementation",
            "Real-world examples"
        ],

        url: "https://lantern.splunk.com"
    },

    {
        id: "elastic-security",

        title: "Elastic Security",

        provider: "Elastic",

        domain: "elastic.co",

        categories: [
            "SIEM & SOC",
            "Threat Detection",
            "Cybersecurity"
        ],

        level: "Intermediate to Advanced",

        access: "Freemium",

        description:
            "A security platform combining SIEM, endpoint protection, threat hunting, detection rules, search, analytics, and observability using the Elastic Stack.",

        bestFor: [
            "Elastic SIEM",
            "Threat hunting",
            "Detection rules",
            "Endpoint security",
            "Log analytics"
        ],

        url: "https://www.elastic.co/security"
    },

    {
        id: "wazuh-documentation",

        title: "Wazuh Documentation",

        provider: "Wazuh",

        domain: "wazuh.com",

        categories: [
            "SIEM & SOC",
            "Threat Detection",
            "Vulnerability Management",
            "Documentation"
        ],

        level: "Intermediate to Advanced",

        access: "Free",

        description:
            "Official documentation for the Wazuh open-source security platform, including agent deployment, log analysis, file-integrity monitoring, vulnerability detection, compliance, and SIEM integrations.",

        bestFor: [
            "Open-source SIEM",
            "File-integrity monitoring",
            "Vulnerability detection",
            "Compliance monitoring",
            "Endpoint telemetry"
        ],

        url: "https://documentation.wazuh.com"
    },


    /* =====================================================
       THREAT DETECTION
       ===================================================== */

    {
        id: "mitre-attack",

        title: "MITRE ATT&CK",

        provider: "MITRE",

        domain: "mitre.org",

        categories: [
            "Threat Detection",
            "SIEM & SOC",
            "Incident Response",
            "Cybersecurity"
        ],

        level: "Intermediate to Advanced",

        access: "Free",

        description:
            "A globally used knowledge base of adversary tactics, techniques, and procedures that helps security teams understand attacker behavior, map detections, and improve defensive coverage.",

        bestFor: [
            "Adversary behavior",
            "Detection mapping",
            "Threat hunting",
            "Incident analysis",
            "Security control assessment"
        ],

        url: "https://attack.mitre.org"
    },

    {
        id: "mitre-d3fend",

        title: "MITRE D3FEND",

        provider: "MITRE",

        domain: "mitre.org",

        categories: [
            "Threat Detection",
            "Incident Response",
            "Cybersecurity"
        ],

        level: "Intermediate to Advanced",

        access: "Free",

        description:
            "A cybersecurity knowledge graph describing defensive techniques and how they relate to adversary behaviors, security controls, digital artifacts, and defensive technologies.",

        bestFor: [
            "Defensive techniques",
            "Security-control mapping",
            "Detection engineering",
            "Threat mitigation",
            "Blue-team research"
        ],

        url: "https://d3fend.mitre.org"
    },

    {
        id: "sigma-rules",

        title: "Sigma Rules",

        provider: "SigmaHQ",

        domain: "github.com",

        categories: [
            "Threat Detection",
            "SIEM & SOC",
            "Programming"
        ],

        level: "Intermediate to Advanced",

        access: "Free",

        description:
            "An open and vendor-neutral detection-rule format that allows analysts to describe log-based detections and convert them for different SIEM platforms.",

        bestFor: [
            "Detection engineering",
            "SIEM rules",
            "Log-based detections",
            "Threat hunting",
            "Cross-platform analytics"
        ],

        url: "https://github.com/SigmaHQ/sigma"
    },

    {
        id: "yara-documentation",

        title: "YARA Documentation",

        provider: "YARA",

        domain: "readthedocs.io",

        categories: [
            "Threat Detection",
            "Malware Analysis",
            "Documentation"
        ],

        level: "Intermediate to Advanced",

        access: "Free",

        description:
            "Official documentation for YARA, a pattern-matching tool used to identify and classify malware, suspicious files, memory artifacts, and digital evidence.",

        bestFor: [
            "Malware detection",
            "File classification",
            "Threat hunting",
            "Pattern matching",
            "Digital forensics"
        ],

        url: "https://yara.readthedocs.io"
    },


    /* =====================================================
       THREAT INTELLIGENCE AND MALWARE ANALYSIS
       ===================================================== */

    {
        id: "virustotal",

        title: "VirusTotal",

        provider: "Google",

        domain: "virustotal.com",

        categories: [
            "Threat Intelligence",
            "Malware Analysis",
            "Incident Response"
        ],

        level: "All Levels",

        access: "Freemium",

        description:
            "A threat-intelligence and file-analysis platform that checks files, URLs, domains, IP addresses, and hashes against multiple security engines and intelligence sources.",

        bestFor: [
            "File reputation",
            "URL analysis",
            "Hash searches",
            "Domain investigation",
            "Threat intelligence"
        ],

        url: "https://www.virustotal.com"
    },

    {
        id: "any-run",

        title: "ANY.RUN",

        provider: "ANY.RUN",

        domain: "any.run",

        categories: [
            "Malware Analysis",
            "Threat Intelligence",
            "Incident Response"
        ],

        level: "Intermediate to Advanced",

        access: "Freemium",

        description:
            "An interactive malware-analysis sandbox that allows analysts to observe processes, network traffic, registry changes, files, and attacker behavior in a controlled environment.",

        bestFor: [
            "Interactive malware analysis",
            "Process analysis",
            "Network behavior",
            "Incident investigation",
            "Suspicious file analysis"
        ],

        url: "https://any.run"
    },

    {
        id: "abuseipdb",

        title: "AbuseIPDB",

        provider: "AbuseIPDB",

        domain: "abuseipdb.com",

        categories: [
            "Threat Intelligence",
            "Incident Response"
        ],

        level: "All Levels",

        access: "Freemium",

        description:
            "A community-powered database for checking and reporting malicious IP addresses associated with abuse, scanning, attacks, spam, and suspicious network activity.",

        bestFor: [
            "IP reputation",
            "Threat investigation",
            "Network abuse analysis",
            "Incident triage",
            "Blocking decisions"
        ],

        url: "https://www.abuseipdb.com"
    },

    {
        id: "alienvault-otx",

        title: "AlienVault Open Threat Exchange",

        provider: "LevelBlue",

        domain: "otx.alienvault.com",

        categories: [
            "Threat Intelligence",
            "Threat Detection",
            "Incident Response"
        ],

        level: "Intermediate",

        access: "Free",

        description:
            "A collaborative threat-intelligence platform where security professionals share indicators, threat pulses, malicious infrastructure, malware intelligence, and investigation data.",

        bestFor: [
            "Indicators of compromise",
            "Threat pulses",
            "Malware intelligence",
            "Domain and IP research",
            "Community intelligence"
        ],

        url: "https://otx.alienvault.com"
    },


    /* =====================================================
       DIGITAL FORENSICS
       ===================================================== */

    {
        id: "autopsy",

        title: "Autopsy",

        provider: "Sleuth Kit Labs",

        domain: "autopsy.com",

        categories: [
            "Digital Forensics",
            "Incident Response"
        ],

        level: "Intermediate to Advanced",

        access: "Free",

        description:
            "A digital-forensics platform for examining disks, file systems, deleted files, timelines, browser artifacts, communications, and other evidence during investigations.",

        bestFor: [
            "Disk forensics",
            "File-system analysis",
            "Deleted-file recovery",
            "Timeline analysis",
            "Incident investigations"
        ],

        url: "https://www.autopsy.com"
    },

    {
        id: "volatility",

        title: "Volatility",

        provider: "Volatility Foundation",

        domain: "volatilityfoundation.org",

        categories: [
            "Digital Forensics",
            "Malware Analysis",
            "Incident Response"
        ],

        level: "Advanced",

        access: "Free",

        description:
            "An open-source memory-forensics framework used to analyze RAM captures, processes, network connections, injected code, malware artifacts, and operating-system activity.",

        bestFor: [
            "Memory forensics",
            "Malware investigation",
            "Process analysis",
            "RAM analysis",
            "Incident response"
        ],

        url: "https://www.volatilityfoundation.org"
    },

    {
        id: "ftk-imager",

        title: "FTK Imager",

        provider: "Exterro",

        domain: "exterro.com",

        categories: [
            "Digital Forensics",
            "Incident Response"
        ],

        level: "Intermediate",

        access: "Free",

        description:
            "A forensic imaging and preview tool used to create evidence copies, examine disks and files, calculate hashes, mount images, and preserve digital evidence.",

        bestFor: [
            "Forensic imaging",
            "Evidence preservation",
            "Disk preview",
            "File-system examination",
            "Incident investigations"
        ],

        url: "https://www.exterro.com/ftk-product-downloads/ftk-imager-version-4-7-1"
    },


    /* =====================================================
       INCIDENT RESPONSE
       ===================================================== */

    {
        id: "cisa",

        title: "CISA",

        provider:
            "Cybersecurity and Infrastructure Security Agency",

        domain: "cisa.gov",

        categories: [
            "Incident Response",
            "Cybersecurity News",
            "Security Frameworks & Compliance",
            "Threat Intelligence"
        ],

        level: "All Levels",

        access: "Free",

        description:
            "Official U.S. cybersecurity alerts, advisories, guidance, vulnerability information, incident-response resources, defensive recommendations, and known-exploited-vulnerability information.",

        bestFor: [
            "Cybersecurity alerts",
            "Incident response",
            "Known exploited vulnerabilities",
            "Security guidance",
            "Threat advisories"
        ],

        url: "https://www.cisa.gov"
    },

    {
        id: "first",

        title: "FIRST",

        provider:
            "Forum of Incident Response and Security Teams",

        domain: "first.org",

        categories: [
            "Incident Response",
            "Threat Intelligence",
            "Cybersecurity"
        ],

        level: "Intermediate to Advanced",

        access: "Free",

        description:
            "A global community and resource center for incident-response teams, vulnerability coordination, security standards, response practices, and trust-based collaboration.",

        bestFor: [
            "Incident response teams",
            "CVSS",
            "Vulnerability coordination",
            "Security standards",
            "Global response collaboration"
        ],

        url: "https://www.first.org"
    },


    /* =====================================================
       SECURITY FRAMEWORKS AND COMPLIANCE
       ===================================================== */

    {
        id: "nist-cybersecurity-framework",

        title: "NIST Cybersecurity Framework",

        provider:
            "National Institute of Standards and Technology",

        domain: "nist.gov",

        categories: [
            "Security Frameworks & Compliance",
            "Cybersecurity",
            "Documentation"
        ],

        level: "Beginner to Advanced",

        access: "Free",

        description:
            "A widely used cybersecurity risk-management framework organized around governance, identification, protection, detection, response, and recovery activities.",

        bestFor: [
            "Cybersecurity programs",
            "Risk management",
            "Security-control planning",
            "Governance",
            "Security assessments"
        ],

        url: "https://www.nist.gov/cyberframework"
    },

    {
        id: "nist-special-publications",

        title: "NIST Special Publications",

        provider:
            "National Institute of Standards and Technology",

        domain: "nist.gov",

        categories: [
            "Security Frameworks & Compliance",
            "Documentation",
            "Identity & Access Management",
            "Incident Response"
        ],

        level: "Intermediate to Advanced",

        access: "Free",

        description:
            "Official cybersecurity, privacy, identity, incident-response, risk-management, Zero Trust, and security-control publications issued by NIST.",

        bestFor: [
            "SP 800-53 — Security Controls",
            "SP 800-61 — Incident Response",
            "SP 800-171 — Protecting CUI",
            "SP 800-63 — Digital Identity",
            "SP 800-207 — Zero Trust"
        ],

        url: "https://csrc.nist.gov/publications/sp"
    },

    {
        id: "pci-security-standards",

        title: "PCI Security Standards Council",

        provider:
            "PCI Security Standards Council",

        domain: "pcisecuritystandards.org",

        categories: [
            "Security Frameworks & Compliance",
            "Documentation"
        ],

        level: "Intermediate to Advanced",

        access: "Free",

        description:
            "The official source for Payment Card Industry security standards, PCI DSS requirements, self-assessment questionnaires, compliance guidance, and payment-card security resources.",

        bestFor: [
            "PCI DSS 4.0",
            "Payment-card security",
            "Self-assessment questionnaires",
            "Compliance requirements",
            "Security standards"
        ],

        url: "https://www.pcisecuritystandards.org"
    },

    {
        id: "sec",

        title: "U.S. Securities and Exchange Commission",

        provider:
            "U.S. Securities and Exchange Commission",

        domain: "sec.gov",

        categories: [
            "Security Frameworks & Compliance",
            "Documentation"
        ],

        level: "Intermediate to Advanced",

        access: "Free",

        description:
            "Official U.S. regulatory information relevant to publicly traded organizations, financial reporting, cybersecurity disclosures, governance, and Sarbanes-Oxley compliance.",

        bestFor: [
            "SOX requirements",
            "Cybersecurity disclosures",
            "Financial reporting",
            "Governance",
            "Regulatory research"
        ],

        url: "https://www.sec.gov"
    },

    {
        id: "pcaob",

        title: "PCAOB",

        provider:
            "Public Company Accounting Oversight Board",

        domain: "pcaobus.org",

        categories: [
            "Security Frameworks & Compliance",
            "Documentation"
        ],

        level: "Advanced",

        access: "Free",

        description:
            "Official standards, inspection information, guidance, and regulatory resources related to auditing public companies and evaluating internal controls over financial reporting.",

        bestFor: [
            "SOX auditing",
            "Internal controls",
            "IT General Controls",
            "Audit standards",
            "Financial compliance"
        ],

        url: "https://pcaobus.org"
    },

    {
        id: "hipaa",

        title: "HHS HIPAA Resources",

        provider:
            "U.S. Department of Health and Human Services",

        domain: "hhs.gov",

        categories: [
            "Security Frameworks & Compliance",
            "Cybersecurity",
            "Documentation"
        ],

        level: "Beginner to Advanced",

        access: "Free",

        description:
            "Official HIPAA information covering the Privacy Rule, Security Rule, breach notification, protected health information, administrative safeguards, and healthcare compliance.",

        bestFor: [
            "Healthcare cybersecurity",
            "HIPAA Security Rule",
            "Patient-data protection",
            "Administrative safeguards",
            "Healthcare compliance"
        ],

        url: "https://www.hhs.gov/hipaa"
    },

    {
        id: "iso-27001",

        title: "ISO/IEC 27001",

        provider:
            "International Organization for Standardization",

        domain: "iso.org",

        categories: [
            "Security Frameworks & Compliance",
            "Cybersecurity"
        ],

        level: "Intermediate to Advanced",

        access: "Freemium",

        description:
            "An international standard for establishing, implementing, maintaining, and continually improving an Information Security Management System.",

        bestFor: [
            "Information Security Management",
            "ISMS implementation",
            "Risk management",
            "Security governance",
            "Certification planning"
        ],

        url: "https://www.iso.org/isoiec-27001-information-security.html"
    },

    {
        id: "cis-controls",

        title: "CIS Controls",

        provider:
            "Center for Internet Security",

        domain: "cisecurity.org",

        categories: [
            "Security Frameworks & Compliance",
            "Cybersecurity",
            "Vulnerability Management"
        ],

        level: "Beginner to Advanced",

        access: "Free",

        description:
            "A prioritized set of cybersecurity safeguards designed to help organizations reduce common risks, harden systems, manage vulnerabilities, protect accounts, and improve security operations.",

        bestFor: [
            "Security hardening",
            "Prioritized safeguards",
            "Asset management",
            "Account security",
            "Vulnerability reduction"
        ],

        url: "https://www.cisecurity.org/controls"
    },

    {
        id: "cobit",

        title: "COBIT",

        provider: "ISACA",

        domain: "isaca.org",

        categories: [
            "Security Frameworks & Compliance",
            "Documentation"
        ],

        level: "Intermediate to Advanced",

        access: "Freemium",

        description:
            "An IT governance framework used to align technology with business objectives, manage risk, measure performance, define controls, and support enterprise governance.",

        bestFor: [
            "IT governance",
            "Risk management",
            "Control objectives",
            "Business alignment",
            "Audit planning"
        ],

        url: "https://www.isaca.org/resources/cobit"
    },

    {
        id: "soc-2-aicpa",

        title: "SOC 2 Resources",

        provider: "AICPA & CIMA",

        domain: "aicpa-cima.com",

        categories: [
            "Security Frameworks & Compliance",
            "Cloud Security"
        ],

        level: "Intermediate to Advanced",

        access: "Freemium",

        description:
            "Official resources related to System and Organization Controls reporting and the Trust Services Criteria for security, availability, processing integrity, confidentiality, and privacy.",

        bestFor: [
            "SOC 2 compliance",
            "Cloud-service assurance",
            "Trust Services Criteria",
            "Vendor assessments",
            "Audit readiness"
        ],

        url: "https://www.aicpa-cima.com"
    },

    {
        id: "fedramp",

        title: "FedRAMP",

        provider:
            "Federal Risk and Authorization Management Program",

        domain: "fedramp.gov",

        categories: [
            "Security Frameworks & Compliance",
            "Cloud Security",
            "Documentation"
        ],

        level: "Advanced",

        access: "Free",

        description:
            "The U.S. government program providing standardized security assessment, authorization, and continuous-monitoring requirements for cloud products and services.",

        bestFor: [
            "Government cloud security",
            "Cloud authorization",
            "NIST controls",
            "Continuous monitoring",
            "Federal compliance"
        ],

        url: "https://www.fedramp.gov"
    },


    /* =====================================================
       PYTHON AND PROGRAMMING
       ===================================================== */

    {
        id: "automate-the-boring-stuff",

        title: "Automate the Boring Stuff with Python",

        provider: "Al Sweigart",

        domain: "automatetheboringstuff.com",

        categories: [
            "Python",
            "Programming",
            "Automation",
            "Books"
        ],

        level: "Beginner to Intermediate",

        access: "Free",

        description:
            "A practical Python book and learning resource focused on automating everyday tasks involving files, spreadsheets, PDFs, CSV data, emails, web content, and repetitive workflows.",

        bestFor: [
            "File automation",
            "Excel automation",
            "PDF processing",
            "CSV processing",
            "Email automation"
        ],

        url: "https://automatetheboringstuff.com"
    },

    {
        id: "python-tutorial",

        title: "Python Tutorial",

        provider:
            "Python Software Foundation",

        domain: "python.org",

        categories: [
            "Python",
            "Programming",
            "Documentation"
        ],

        level: "Beginner to Intermediate",

        access: "Free",

        description:
            "The official Python tutorial introducing the language, syntax, data structures, control flow, functions, modules, classes, errors, and standard programming concepts.",

        bestFor: [
            "Python beginners",
            "Official language tutorial",
            "Core syntax",
            "Functions and modules",
            "Programming fundamentals"
        ],

        url: "https://docs.python.org/3/tutorial/"
    },

    {
        id: "python-documentation",

        title: "Python Documentation",

        provider:
            "Python Software Foundation",

        domain: "python.org",

        categories: [
            "Python",
            "Programming",
            "Documentation"
        ],

        level: "Beginner to Advanced",

        access: "Free",

        description:
            "Official Python language and standard-library documentation, including tutorials, references, modules, installation guidance, and language specifications.",

        bestFor: [
            "Python reference",
            "Standard library",
            "Language documentation",
            "Module research",
            "Advanced Python"
        ],

        url: "https://docs.python.org"
    },

    {
        id: "w3schools-python",

        title: "W3Schools Python",

        provider: "W3Schools",

        domain: "w3schools.com",

        categories: [
            "Python",
            "Programming"
        ],

        level: "Beginner",

        access: "Free",

        description:
            "A beginner-friendly Python learning site with short explanations, code examples, exercises, quizzes, and an online editor for quick practice.",

        bestFor: [
            "Quick Python practice",
            "Beginners",
            "Syntax examples",
            "Interactive exercises",
            "Reference review"
        ],

        url: "https://www.w3schools.com/python/"
    },

    {
        id: "freecodecamp",

        title: "freeCodeCamp",

        provider: "freeCodeCamp",

        domain: "freecodecamp.org",

        categories: [
            "Programming",
            "Python",
            "Certification Resources"
        ],

        level: "Beginner to Advanced",

        access: "Free",

        description:
            "A nonprofit learning platform offering free programming courses, certifications, long-form tutorials, projects, and technical articles across software development and data technologies.",

        bestFor: [
            "Programming fundamentals",
            "Python tutorials",
            "Web development",
            "Free certifications",
            "Project-based learning"
        ],

        url: "https://www.freecodecamp.org"
    },

    {
        id: "freecodecamp-python",

        title: "freeCodeCamp Python Tutorials",

        provider: "freeCodeCamp",

        domain: "freecodecamp.org",

        categories: [
            "Python",
            "Programming",
            "Automation"
        ],

        level: "Beginner to Advanced",

        access: "Free",

        description:
            "A large collection of free Python tutorials, guides, projects, automation examples, programming explanations, and learning resources.",

        bestFor: [
            "Python tutorials",
            "Project examples",
            "Automation",
            "Programming practice",
            "Data structures"
        ],

        url: "https://www.freecodecamp.org/news/tag/python/"
    },

    {
        id: "geeksforgeeks",

        title: "GeeksforGeeks",

        provider: "GeeksforGeeks",

        domain: "geeksforgeeks.org",

        categories: [
            "Programming",
            "Python",
            "Certification Resources"
        ],

        level: "Beginner to Advanced",

        access: "Freemium",

        description:
            "A technical learning platform with programming tutorials, data structures, algorithms, interview preparation, computer-science explanations, and code examples.",

        bestFor: [
            "Programming practice",
            "Python examples",
            "Algorithms",
            "Data structures",
            "Technical interviews"
        ],

        url: "https://www.geeksforgeeks.org"
    },

    {
        id: "codecademy",

        title: "Codecademy",

        provider: "Codecademy",

        domain: "codecademy.com",

        categories: [
            "Programming",
            "Python"
        ],

        level: "Beginner to Intermediate",

        access: "Freemium",

        description:
            "An interactive coding platform offering guided lessons, exercises, projects, and career paths for Python, web development, data, cloud, and software engineering.",

        bestFor: [
            "Interactive coding",
            "Python beginners",
            "Guided exercises",
            "Programming fundamentals",
            "Career paths"
        ],

        url: "https://www.codecademy.com"
    },


    /* =====================================================
       POWERSHELL
       ===================================================== */

    {
        id: "microsoft-powershell",

        title: "Microsoft Learn PowerShell",

        provider: "Microsoft",

        domain: "microsoft.com",

        categories: [
            "PowerShell",
            "Programming",
            "Automation",
            "Microsoft"
        ],

        level: "Beginner to Advanced",

        access: "Free",

        description:
            "Microsoft's official PowerShell learning and documentation portal covering commands, modules, scripting, remoting, automation, administration, and cross-platform usage.",

        bestFor: [
            "PowerShell fundamentals",
            "System administration",
            "Automation",
            "Microsoft administration",
            "Scripting"
        ],

        url: "https://learn.microsoft.com/powershell/"
    },

    {
        id: "powershell-scripting-documentation",

        title: "PowerShell Scripting Documentation",

        provider: "Microsoft",

        domain: "microsoft.com",

        categories: [
            "PowerShell",
            "Programming",
            "Automation",
            "Documentation"
        ],

        level: "Beginner to Advanced",

        access: "Free",

        description:
            "Official scripting documentation covering PowerShell syntax, variables, functions, modules, error handling, remoting, security, debugging, and automation practices.",

        bestFor: [
            "PowerShell scripts",
            "Functions and modules",
            "Error handling",
            "Remote administration",
            "Automation design"
        ],

        url: "https://learn.microsoft.com/powershell/scripting/"
    },

    {
        id: "powershell-gallery",

        title: "PowerShell Gallery",

        provider: "Microsoft",

        domain: "powershellgallery.com",

        categories: [
            "PowerShell",
            "Automation",
            "Programming"
        ],

        level: "Intermediate to Advanced",

        access: "Free",

        description:
            "The central repository for discovering and downloading PowerShell modules, scripts, desired-state configurations, and automation packages published by Microsoft and the community.",

        bestFor: [
            "PowerShell modules",
            "Automation packages",
            "Community scripts",
            "Module installation",
            "Administrative tools"
        ],

        url: "https://www.powershellgallery.com"
    },


    /* =====================================================
       LINUX
       ===================================================== */

    {
        id: "linux-journey",

        title: "Linux Journey",

        provider: "Linux Journey",

        domain: "linuxjourney.com",

        categories: [
            "Linux",
            "Networking"
        ],

        level: "Beginner to Intermediate",

        access: "Free",

        description:
            "A beginner-friendly Linux learning site covering command-line skills, file systems, permissions, processes, networking, services, packages, and system administration.",

        bestFor: [
            "Linux beginners",
            "Command-line fundamentals",
            "Permissions",
            "Linux networking",
            "System administration"
        ],

        url: "https://linuxjourney.com"
    },

    {
        id: "linux-foundation",

        title: "Linux Foundation Training",

        provider: "Linux Foundation",

        domain: "linuxfoundation.org",

        categories: [
            "Linux",
            "DevOps",
            "Certification Resources"
        ],

        level: "Beginner to Advanced",

        access: "Freemium",

        description:
            "Training and certification resources for Linux, cloud-native technologies, Kubernetes, DevOps, open-source software, security, and enterprise infrastructure.",

        bestFor: [
            "Linux administration",
            "Linux certifications",
            "Kubernetes",
            "Cloud-native technologies",
            "Open-source skills"
        ],

        url: "https://training.linuxfoundation.org"
    },

    {
        id: "red-hat-developers",

        title: "Red Hat Developers",

        provider: "Red Hat",

        domain: "redhat.com",

        categories: [
            "Linux",
            "DevOps",
            "Programming"
        ],

        level: "Beginner to Advanced",

        access: "Free",

        description:
            "Developer and technical resources for Red Hat Enterprise Linux, containers, OpenShift, automation, Ansible, cloud-native development, and enterprise open-source technologies.",

        bestFor: [
            "Red Hat Enterprise Linux",
            "OpenShift",
            "Ansible",
            "Containers",
            "Enterprise Linux"
        ],

        url: "https://developers.redhat.com"
    },

    {
        id: "ubuntu-tutorials",

        title: "Ubuntu Tutorials",

        provider: "Canonical",

        domain: "ubuntu.com",

        categories: [
            "Linux",
            "Documentation"
        ],

        level: "Beginner to Advanced",

        access: "Free",

        description:
            "Official Ubuntu tutorials covering installation, server administration, command-line tools, networking, containers, cloud services, development, and security.",

        bestFor: [
            "Ubuntu administration",
            "Linux servers",
            "Command-line practice",
            "Containers",
            "Cloud deployment"
        ],

        url: "https://ubuntu.com/tutorials"
    },


    /* =====================================================
       NETWORKING
       ===================================================== */

    {
        id: "cisco-skills-for-all",

        title: "Cisco Skills for All",

        provider: "Cisco",

        domain: "cisco.com",

        categories: [
            "Networking",
            "Cybersecurity",
            "Python",
            "Linux",
            "Certification Resources"
        ],

        level: "Beginner to Intermediate",

        access: "Free",

        description:
            "Cisco's free learning platform providing courses in networking, cybersecurity, Python, Linux, Internet of Things, data science, and Packet Tracer-based practice.",

        bestFor: [
            "Networking fundamentals",
            "Cisco learning",
            "Cybersecurity basics",
            "Packet Tracer",
            "Python and Linux"
        ],

        url: "https://skillsforall.com"
    },

    {
        id: "packet-tracer-downloads",

        title: "Cisco Packet Tracer Downloads",

        provider: "Cisco",

        domain: "cisco.com",

        categories: [
            "Networking",
            "Certification Resources"
        ],

        level: "Beginner to Intermediate",

        access: "Free",

        description:
            "Official access to Cisco Packet Tracer, a network-simulation tool used to build, configure, test, and troubleshoot virtual networking environments.",

        bestFor: [
            "Network simulation",
            "Cisco labs",
            "Routing practice",
            "Switching practice",
            "CCNA preparation"
        ],

        url: "https://skillsforall.com/resources/lab-downloads"
    },

    {
        id: "juniper-learning",

        title: "Juniper Learning Portal",

        provider: "Juniper Networks",

        domain: "juniper.net",

        categories: [
            "Networking",
            "Certification Resources"
        ],

        level: "Beginner to Advanced",

        access: "Freemium",

        description:
            "Official Juniper training, documentation, learning paths, labs, and certification resources covering routing, switching, security, automation, and enterprise networking.",

        bestFor: [
            "Juniper networking",
            "Routing and switching",
            "Network security",
            "Juniper certifications",
            "Network automation"
        ],

        url: "https://learningportal.juniper.net"
    },

    {
        id: "wireshark",

        title: "Wireshark",

        provider: "Wireshark Foundation",

        domain: "wireshark.org",

        categories: [
            "Networking",
            "Threat Detection",
            "Incident Response"
        ],

        level: "Beginner to Advanced",

        access: "Free",

        description:
            "A widely used network-protocol analyzer for capturing and examining packets, troubleshooting network problems, analyzing protocols, and investigating suspicious traffic.",

        bestFor: [
            "Packet analysis",
            "Network troubleshooting",
            "Protocol analysis",
            "Incident investigation",
            "Traffic inspection"
        ],

        url: "https://www.wireshark.org"
    },

    {
        id: "packetlife",

        title: "PacketLife",

        provider: "PacketLife",

        domain: "packetlife.net",

        categories: [
            "Networking",
            "Documentation"
        ],

        level: "Beginner to Advanced",

        access: "Free",

        description:
            "A networking reference site known for concise protocol cheat sheets, technical articles, packet captures, and practical network-engineering resources.",

        bestFor: [
            "Networking cheat sheets",
            "Protocol reference",
            "Packet captures",
            "Routing concepts",
            "Quick technical review"
        ],

        url: "https://packetlife.net"
    },


    /* =====================================================
       DEVOPS
       ===================================================== */

    {
        id: "docker",

        title: "Docker",

        provider: "Docker",

        domain: "docker.com",

        categories: [
            "DevOps",
            "Cloud Security",
            "Programming"
        ],

        level: "Beginner to Advanced",

        access: "Freemium",

        description:
            "Official resources for containers, Docker Desktop, images, registries, Compose, application packaging, security, and container-based development workflows.",

        bestFor: [
            "Containers",
            "Docker Compose",
            "Application packaging",
            "Development environments",
            "DevOps workflows"
        ],

        url: "https://www.docker.com"
    },

    {
        id: "kubernetes",

        title: "Kubernetes Documentation",

        provider: "Kubernetes",

        domain: "kubernetes.io",

        categories: [
            "DevOps",
            "Cloud Security",
            "Documentation"
        ],

        level: "Intermediate to Advanced",

        access: "Free",

        description:
            "Official Kubernetes documentation covering clusters, workloads, services, storage, configuration, administration, networking, security, and cloud-native operations.",

        bestFor: [
            "Container orchestration",
            "Clusters",
            "Deployments",
            "Cloud-native infrastructure",
            "Kubernetes administration"
        ],

        url: "https://kubernetes.io"
    },

    {
        id: "terraform",

        title: "Terraform",

        provider: "HashiCorp",

        domain: "hashicorp.com",

        categories: [
            "DevOps",
            "Cloud Security",
            "Automation"
        ],

        level: "Intermediate to Advanced",

        access: "Freemium",

        description:
            "Infrastructure-as-code resources for defining, provisioning, and managing cloud, networking, identity, security, and platform infrastructure through repeatable configuration.",

        bestFor: [
            "Infrastructure as Code",
            "Cloud provisioning",
            "Repeatable deployments",
            "Automation",
            "Multi-cloud infrastructure"
        ],

        url: "https://developer.hashicorp.com/terraform"
    },

    {
        id: "github-skills",

        title: "GitHub Skills",

        provider: "GitHub",

        domain: "github.com",

        categories: [
            "DevOps",
            "Programming",
            "Automation"
        ],

        level: "Beginner to Intermediate",

        access: "Free",

        description:
            "Interactive courses that teach GitHub repositories, branches, pull requests, GitHub Actions, collaboration, security, and automation through guided exercises.",

        bestFor: [
            "GitHub fundamentals",
            "Version control",
            "Pull requests",
            "GitHub Actions",
            "Developer collaboration"
        ],

        url: "https://skills.github.com"
    },


    /* =====================================================
       CERTIFICATION RESOURCES
       ===================================================== */

    {
        id: "comptia",

        title: "CompTIA Certifications",

        provider: "CompTIA",

        domain: "comptia.org",

        categories: [
            "Certification Resources",
            "Cybersecurity",
            "Networking"
        ],

        level: "Beginner to Advanced",

        access: "Freemium",

        description:
            "Official certification information, exam objectives, training options, renewal guidance, and career resources for CompTIA IT, networking, cloud, and cybersecurity certifications.",

        bestFor: [
            "Security+",
            "Network+",
            "CySA+",
            "Certification objectives",
            "Exam information"
        ],

        url: "https://www.comptia.org"
    },

    {
        id: "isc2",

        title: "ISC2",

        provider: "ISC2",

        domain: "isc2.org",

        categories: [
            "Certification Resources",
            "Cybersecurity"
        ],

        level: "Beginner to Advanced",

        access: "Freemium",

        description:
            "Cybersecurity certification and professional-development resources covering entry-level security, governance, cloud security, security architecture, and advanced security leadership.",

        bestFor: [
            "Certified in Cybersecurity",
            "CISSP",
            "CCSP",
            "Security careers",
            "Continuing education"
        ],

        url: "https://www.isc2.org"
    },

    {
        id: "isaca",

        title: "ISACA",

        provider: "ISACA",

        domain: "isaca.org",

        categories: [
            "Certification Resources",
            "Security Frameworks & Compliance",
            "Identity & Access Management"
        ],

        level: "Intermediate to Advanced",

        access: "Freemium",

        description:
            "Professional resources, certifications, research, frameworks, and training for cybersecurity, audit, risk, governance, privacy, identity, and emerging technologies.",

        bestFor: [
            "CISA",
            "CISM",
            "CRISC",
            "COBIT",
            "IT governance"
        ],

        url: "https://www.isaca.org"
    },

    {
        id: "ec-council",

        title: "EC-Council",

        provider: "EC-Council",

        domain: "eccouncil.org",

        categories: [
            "Certification Resources",
            "Cybersecurity",
            "Penetration Testing"
        ],

        level: "Beginner to Advanced",

        access: "Paid",

        description:
            "Cybersecurity certification and training provider offering programs in ethical hacking, incident handling, penetration testing, digital forensics, and security operations.",

        bestFor: [
            "Ethical hacking",
            "Penetration testing",
            "Incident handling",
            "Digital forensics",
            "Security certifications"
        ],

        url: "https://www.eccouncil.org"
    },


    /* =====================================================
       CYBERSECURITY NEWS
       ===================================================== */

    {
        id: "the-hacker-news",

        title: "The Hacker News",

        provider: "The Hacker News",

        domain: "thehackernews.com",

        categories: [
            "Cybersecurity News",
            "Threat Intelligence"
        ],

        level: "All Levels",

        access: "Free",

        description:
            "Cybersecurity news site covering vulnerabilities, malware, data breaches, threat actors, cloud security, enterprise attacks, security research, and industry developments.",

        bestFor: [
            "Cybersecurity news",
            "Vulnerability updates",
            "Threat-actor activity",
            "Data breaches",
            "Security research"
        ],

        url: "https://thehackernews.com"
    },

    {
        id: "bleepingcomputer",

        title: "BleepingComputer",

        provider: "BleepingComputer",

        domain: "bleepingcomputer.com",

        categories: [
            "Cybersecurity News",
            "Threat Intelligence",
            "Malware Analysis"
        ],

        level: "All Levels",

        access: "Free",

        description:
            "Technology and cybersecurity news site covering ransomware, vulnerabilities, malware, operating-system updates, threat actors, data breaches, and technical support.",

        bestFor: [
            "Ransomware news",
            "Malware updates",
            "Security incidents",
            "Windows security",
            "Technical news"
        ],

        url: "https://www.bleepingcomputer.com"
    },

    {
        id: "krebs-on-security",

        title: "Krebs on Security",

        provider: "Brian Krebs",

        domain: "krebsonsecurity.com",

        categories: [
            "Cybersecurity News",
            "Threat Intelligence"
        ],

        level: "All Levels",

        access: "Free",

        description:
            "Investigative cybersecurity journalism focused on cybercrime, fraud, data breaches, underground markets, identity theft, security failures, and threat actors.",

        bestFor: [
            "Cybercrime investigations",
            "Fraud research",
            "Data-breach analysis",
            "Threat actors",
            "Security journalism"
        ],

        url: "https://krebsonsecurity.com"
    },


    /* =====================================================
       BOOKS
       ===================================================== */

    {
        id: "open-library",

        title: "Open Library",

        provider: "Internet Archive",

        domain: "openlibrary.org",

        categories: [
            "Books",
            "Documentation"
        ],

        level: "All Levels",

        access: "Free",

        description:
            "An online library catalog providing access to millions of books, including technical, historical, educational, programming, computing, and professional-development titles.",

        bestFor: [
            "Technical books",
            "Research",
            "Borrowing digital books",
            "Educational reading",
            "Reference material"
        ],

        url: "https://openlibrary.org"
    },

    {
        id: "project-gutenberg",

        title: "Project Gutenberg",

        provider: "Project Gutenberg",

        domain: "gutenberg.org",

        categories: [
            "Books",
            "Documentation"
        ],

        level: "All Levels",

        access: "Free",

        description:
            "A free digital library offering public-domain books in multiple formats for online reading or download.",

        bestFor: [
            "Free public-domain books",
            "Historical texts",
            "Research",
            "Reading resources",
            "Digital books"
        ],

        url: "https://gutenberg.org"
    }
];


/* =========================================================
   3. DOM REFERENCES
   ========================================================= */

const learningContainer =
    document.querySelector("#learning-grid");

const learningSearchInput =
    document.querySelector("#learning-search");

const learningFilterContainer =
    document.querySelector("#learning-filters");

const learningEmptyState =
    document.querySelector(
        "#learning-empty-state"
    );


/* =========================================================
   4. FILTER STATE
   ========================================================= */

let activeLearningCategory = "All";
let learningSearchTerm = "";


/* =========================================================
   5. HELPER FUNCTIONS
   ========================================================= */

function normalizeLearningText(value) {
    return String(value || "")
        .toLowerCase()
        .trim();
}


function escapeLearningHtml(value) {
    return String(value || "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


function getProviderInitials(provider) {
    const ignoredWords = new Set([
        "and",
        "the",
        "of",
        "&"
    ]);

    const words = String(provider || "")
        .trim()
        .split(/\s+/)
        .filter((word) => {
            return !ignoredWords.has(
                word.toLowerCase()
            );
        });

    if (!words.length) {
        return "LR";
    }

    return words
        .slice(0, 2)
        .map((word) => {
            return word.charAt(0);
        })
        .join("")
        .toUpperCase();
}


function getAccessClass(access) {
    const normalizedAccess =
        normalizeLearningText(access);

    if (normalizedAccess === "free") {
        return "access-free";
    }

    if (normalizedAccess === "paid") {
        return "access-paid";
    }

    return "access-freemium";
}


/* =========================================================
   6. CATEGORY MANAGEMENT
   ========================================================= */

const preferredLearningCategories = [
    "All",
    "Cybersecurity",
    "Identity & Access Management",
    "Microsoft",
    "Microsoft Security",
    "Cloud Security",
    "Azure",
    "Networking",
    "Linux",
    "Python",
    "PowerShell",
    "Programming",
    "SIEM & SOC",
    "Threat Detection",
    "Threat Intelligence",
    "Vulnerability Management",
    "Penetration Testing",
    "Malware Analysis",
    "Digital Forensics",
    "Incident Response",
    "DevOps",
    "Security Frameworks & Compliance",
    "Documentation",
    "Certification Resources",
    "Cybersecurity News",
    "Books"
];


function getAvailableLearningCategories() {
    const categorySet = new Set();

    learningResources.forEach((resource) => {
        resource.categories.forEach(
            (category) => {
                categorySet.add(category);
            }
        );
    });

    return preferredLearningCategories.filter(
        (category) => {
            return (
                category === "All" ||
                categorySet.has(category)
            );
        }
    );
}


/* =========================================================
   7. SEARCH AND FILTERING
   ========================================================= */

function learningResourceMatchesSearch(resource) {
    if (!learningSearchTerm) {
        return true;
    }

    const searchableContent = [
        resource.title,
        resource.provider,
        resource.description,
        resource.level,
        resource.access,
        ...resource.categories,
        ...resource.bestFor
    ]
        .join(" ")
        .toLowerCase();

    return searchableContent.includes(
        learningSearchTerm
    );
}


function learningResourceMatchesCategory(resource) {
    if (activeLearningCategory === "All") {
        return true;
    }

    return resource.categories.includes(
        activeLearningCategory
    );
}


function getFilteredLearningResources() {
    return learningResources.filter(
        (resource) => {
            return (
                learningResourceMatchesSearch(
                    resource
                ) &&
                learningResourceMatchesCategory(
                    resource
                )
            );
        }
    );
}


/* =========================================================
   8. CARD CONTENT
   ========================================================= */

function createLearningTags(categories) {
    return categories
        .slice(0, 4)
        .map((category) => {
            return `
                <span>
                    ${escapeLearningHtml(category)}
                </span>
            `;
        })
        .join("");
}


function createBestForItems(items) {
    return items
        .slice(0, 5)
        .map((item) => {
            return `
                <li>
                    ${escapeLearningHtml(item)}
                </li>
            `;
        })
        .join("");
}


function createLearningCard(resource) {
    const initials = getProviderInitials(
        resource.provider
    );

    const logoUrl = getLogoUrl(
        resource.domain
    );

    return `
        <article
            class="learning-card reveal"
            data-learning-id="${escapeLearningHtml(
                resource.id
            )}"
            data-card-link="${escapeLearningHtml(
                resource.url
            )}"
        >

            <div class="learning-card-header">

                <div class="learning-logo-wrapper">

                    <img
                        class="learning-card-logo"
                        src="${escapeLearningHtml(
                            logoUrl
                        )}"
                        alt="${escapeLearningHtml(
                            resource.provider
                        )} logo"
                        loading="lazy"
                        referrerpolicy="origin"
                        data-learning-logo
                    >

                    <span
                        class="learning-logo-fallback"
                        aria-hidden="true"
                    >
                        ${escapeLearningHtml(
                            initials
                        )}
                    </span>

                </div>


                <div>

                    <p class="learning-provider">
                        ${escapeLearningHtml(
                            resource.provider
                        )}
                    </p>

                    <h3>
                        ${escapeLearningHtml(
                            resource.title
                        )}
                    </h3>

                </div>

            </div>


            <div class="learning-meta">

                <span>
                    ${escapeLearningHtml(
                        resource.level
                    )}
                </span>

                <span
                    class="${getAccessClass(
                        resource.access
                    )}"
                >
                    ${escapeLearningHtml(
                        resource.access
                    )}
                </span>

            </div>


            <p class="learning-card-description">
                ${escapeLearningHtml(
                    resource.description
                )}
            </p>


            <div class="learning-tags">
                ${createLearningTags(
                    resource.categories
                )}
            </div>


            <div class="learning-best-for">

                <strong>
                    Best for
                </strong>

                <ul>
                    ${createBestForItems(
                        resource.bestFor
                    )}
                </ul>

            </div>


            <p class="logo-attribution">
                External resource. Opens in a new tab.
            </p>


            <div class="learning-card-actions">

                <a
                    class="button button-primary button-small"
                    href="${escapeLearningHtml(
                        resource.url
                    )}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit Website
                </a>

            </div>

        </article>
    `;
}


/* =========================================================
   9. LOGO FALLBACKS
   ========================================================= */

function handleLearningLogoError(image) {
    if (!(image instanceof HTMLImageElement)) {
        return;
    }

    const wrapper = image.closest(
        ".learning-logo-wrapper"
    );

    if (!wrapper) {
        return;
    }

    wrapper.classList.add("logo-error");
}


function initializeLearningLogoFallbacks() {
    const logoImages =
        document.querySelectorAll(
            "[data-learning-logo]"
        );

    logoImages.forEach((image) => {
        if (
            image.dataset.learningFallbackReady ===
            "true"
        ) {
            return;
        }

        image.dataset.learningFallbackReady =
            "true";

        image.addEventListener(
            "error",
            () => {
                handleLearningLogoError(image);
            }
        );

        if (
            image.complete &&
            image.naturalWidth === 0
        ) {
            handleLearningLogoError(image);
        }
    });
}


/* =========================================================
   10. CATEGORY BUTTONS
   ========================================================= */

function renderLearningCategoryButtons() {
    if (!learningFilterContainer) {
        return;
    }

    const categories =
        getAvailableLearningCategories();

    learningFilterContainer.innerHTML =
        categories
            .map((category) => {
                const isActive =
                    category ===
                    activeLearningCategory;

                return `
                    <button
                        class="filter-button ${
                            isActive ? "active" : ""
                        }"
                        type="button"
                        data-learning-category="${escapeLearningHtml(
                            category
                        )}"
                        aria-pressed="${String(
                            isActive
                        )}"
                    >
                        ${escapeLearningHtml(
                            category
                        )}
                    </button>
                `;
            })
            .join("");
}


/* =========================================================
   11. RESULT COUNT
   ========================================================= */

function getOrCreateResultsWrapper() {
    let wrapper = document.querySelector(
        "#learning-results-wrapper"
    );

    if (wrapper) {
        return wrapper;
    }

    if (!learningContainer) {
        return null;
    }

    wrapper = document.createElement("div");

    wrapper.id =
        "learning-results-wrapper";

    learningContainer.insertAdjacentElement(
        "beforebegin",
        wrapper
    );

    return wrapper;
}


function updateLearningResultsCount(count) {
    const wrapper =
        getOrCreateResultsWrapper();

    if (!wrapper) {
        return;
    }

    const label =
        count === 1
            ? "resource"
            : "resources";

    wrapper.innerHTML = `
        <div
            class="learning-results-bar"
            aria-live="polite"
        >

            <p>
                <strong>
                    ${count}
                </strong>
                ${label} found
            </p>

            <button
                id="learning-reset-button"
                class="learning-reset-button"
                type="button"
            >
                Reset filters
            </button>

        </div>
    `;
}


/* =========================================================
   12. EMPTY STATE
   ========================================================= */

function updateLearningEmptyState(count) {
    if (!learningEmptyState) {
        return;
    }

    learningEmptyState.hidden =
        count !== 0;
}


/* =========================================================
   13. RENDER RESOURCES
   ========================================================= */

function renderLearningResources() {
    if (!learningContainer) {
        console.error(
            "Learning Hub error: #learning-grid was not found."
        );

        return;
    }

    const filteredResources =
        getFilteredLearningResources();

    learningContainer.innerHTML =
        filteredResources
            .map(createLearningCard)
            .join("");

    updateLearningResultsCount(
        filteredResources.length
    );

    updateLearningEmptyState(
        filteredResources.length
    );

    initializeLearningLogoFallbacks();

    document.dispatchEvent(
        new CustomEvent(
            "nzweme:content-rendered"
        )
    );
}


/* =========================================================
   14. SEARCH EVENTS
   ========================================================= */

function initializeLearningSearch() {
    if (!learningSearchInput) {
        console.warn(
            "Learning Hub warning: #learning-search was not found."
        );

        return;
    }

    learningSearchInput.addEventListener(
        "input",
        (event) => {
            learningSearchTerm =
                normalizeLearningText(
                    event.target.value
                );

            renderLearningResources();
        }
    );
}


/* =========================================================
   15. CATEGORY EVENTS
   ========================================================= */

function initializeLearningCategoryEvents() {
    if (!learningFilterContainer) {
        return;
    }

    learningFilterContainer.addEventListener(
        "click",
        (event) => {
            const button = event.target.closest(
                "[data-learning-category]"
            );

            if (!button) {
                return;
            }

            activeLearningCategory =
                button.dataset
                    .learningCategory ||
                "All";

            renderLearningCategoryButtons();
            renderLearningResources();
        }
    );
}


/* =========================================================
   16. RESET FILTERS
   ========================================================= */

function resetLearningFilters() {
    activeLearningCategory = "All";
    learningSearchTerm = "";

    if (learningSearchInput) {
        learningSearchInput.value = "";
    }

    renderLearningCategoryButtons();
    renderLearningResources();
}


function initializeLearningResetEvents() {
    document.addEventListener(
        "click",
        (event) => {
            const resetButton =
                event.target.closest(
                    "#learning-reset-button"
                );

            if (!resetButton) {
                return;
            }

            resetLearningFilters();
        }
    );
}


/* =========================================================
   17. CATEGORY FROM URL
   ========================================================= */

function initializeLearningCategoryFromUrl() {
    const urlParameters =
        new URLSearchParams(
            window.location.search
        );

    const requestedCategory =
        urlParameters.get("category");

    if (!requestedCategory) {
        return;
    }

    const matchedCategory =
        getAvailableLearningCategories()
            .find((category) => {
                return (
                    normalizeLearningText(
                        category
                    ) ===
                    normalizeLearningText(
                        requestedCategory
                    )
                );
            });

    if (matchedCategory) {
        activeLearningCategory =
            matchedCategory;
    }
}


/* =========================================================
   18. RESOURCE VALIDATION
   ========================================================= */

function validateLearningResources() {
    learningResources.forEach(
        (resource, index) => {
            const isValid =
                resource &&
                resource.id &&
                resource.title &&
                resource.provider &&
                resource.domain &&
                resource.url &&
                resource.description &&
                resource.level &&
                resource.access &&
                Array.isArray(
                    resource.categories
                ) &&
                Array.isArray(
                    resource.bestFor
                );

            if (!isValid) {
                console.warn(
                    `Invalid Learning Hub resource at index ${index}:`,
                    resource
                );
            }
        }
    );
}


/* =========================================================
   19. INITIALIZATION
   ========================================================= */

function initializeLearningHub() {
    if (!learningContainer) {
        console.error(
            "Learning Hub could not initialize because #learning-grid is missing."
        );

        return;
    }

    validateLearningResources();
    initializeLearningCategoryFromUrl();
    renderLearningCategoryButtons();
    initializeLearningSearch();
    initializeLearningCategoryEvents();
    initializeLearningResetEvents();
    renderLearningResources();
}


if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        initializeLearningHub,
        {
            once: true
        }
    );
} else {
    initializeLearningHub();
}