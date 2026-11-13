document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("mobileMenu");
    const side = document.querySelector(".sidebar");

    if (menu && side) {
        menu.addEventListener("click", () => {
            side.classList.toggle("open");
        });

        document.addEventListener("click", (event) => {
            if (
                side.classList.contains("open") &&
                !side.contains(event.target) &&
                event.target !== menu
            ) {
                side.classList.remove("open");
            }
        });
    }

    // Live dashboard greeting and local clock on the overview page.
    const greeting = document.getElementById("greeting");
    const liveClock = document.getElementById("liveClock");
    const updateDashboardClock = () => {
        const now = new Date();
        if (greeting) {
            const hour = now.getHours();
            greeting.textContent = hour < 12 ? "Good morning, visitor." : hour < 17 ? "Good afternoon, visitor." : "Good evening, visitor.";
        }
        if (liveClock) {
            liveClock.textContent = now.toLocaleString([], { weekday: "short", day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }).toUpperCase();
        }
    };
    updateDashboardClock();
    if (liveClock || greeting) setInterval(updateDashboardClock, 30000);

    const year = document.getElementById("year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    const progress = document.getElementById("scrollProgress");
    const updateProgress = () => {
        if (progress) {
            const maxScroll = document.documentElement.scrollHeight - innerHeight;
            const percentage = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;
            progress.style.width = percentage + "%";
        }
    };

    updateProgress();
    addEventListener("scroll", updateProgress, { passive: true });

    // Gentle reveal-on-scroll, with a safe fallback for older browsers.
    const revealItems = document.querySelectorAll(".section, .project-card, .tile, .certificate-card, .timeline, .education-card, .contact-card, .stats article");
    revealItems.forEach((item) => item.classList.add("reveal"));
    if ("IntersectionObserver" in window) {
        document.body.classList.add("reveal-ready");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        revealItems.forEach((item) => observer.observe(item));
    }

    // Rotating homepage tagline.
    const role = document.getElementById("typedRole");
    if (role && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        const roles = ["Curious mind. Thoughtful builder.", "Turning data into useful insights.", "Learning AI. Building with purpose."];
        let roleIndex = 0;
        setInterval(() => {
            roleIndex = (roleIndex + 1) % roles.length;
            role.textContent = roles[roleIndex];
        }, 3200);
    }
});

const terminalForm = document.getElementById("terminalForm");

if (terminalForm) {
    const input = document.getElementById("terminalInput");
    const output = document.getElementById("terminalOutput");

    const routes = {
        home: "index.html",
        overview: "index.html",
        about: "about.html",
        skills: "skills.html",
        toolkit: "skills.html",
        projects: "projects.html",
        experience: "experience.html",
        education: "experience.html",
        certificates: "certificates.html",
        certificate: "certificates.html",
        contact: "contact.html"
    };

    const print = (message, kind = "") => {
        const row = document.createElement("div");
        if (kind) {
            row.className = kind;
        }
        row.textContent = message;
        output.appendChild(row);
        output.scrollTop = output.scrollHeight;
    };

    terminalForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const raw = input.value.trim().toLowerCase();
        if (!raw) {
            return;
        }

        print("visitor@shraddha:~$ " + raw);
        input.value = "";

        const parts = raw.split(/\s+/);
        const command = parts[0];
        const target = parts[1] || command;

        if (command === "help" || command === "ls") {
            print(
                "Available pages: home, about, skills, projects, experience, certificates, contact",
                "success"
            );
            print("Extra commands: whoami, stack, date, email, surprise, ping, hire, clear");
            print("Navigation: go <page>  |  cd <page>");
            return;
        }

        if (command === "clear") {
            output.innerHTML = "";
            return;
        }

        if (command === "whoami") {
            print("Shraddha Nayak | AI & Data Science Engineering Student", "success");
            print("Curious about data, AI and practical problem solving.");
            return;
        }
        if (command === "stack") {
            print("Python · C · C++ · Java · SQL · HTML · CSS · JavaScript", "success");
            print("Tools: GitHub · VS Code · MATLAB · LeetCode · HackerRank");
            return;
        }
        if (command === "date") {
            print(new Date().toLocaleString(), "success");
            return;
        }
        if (command === "ping") {
            print("PONG! Connection to Shraddha's portfolio is alive.", "success");
            return;
        }
        if (command === "surprise") {
            const notes = [
                "Small steps. Strong foundations. Big possibilities.",
                "Currently turning curiosity into code and data into insight.",
                "Fun fact: every great project starts with a question.",
                "Status: learning, building, improving. Repeat."
            ];
            print(notes[Math.floor(Math.random() * notes.length)], "success");
            return;
        }
        if (command === "hire") {
            print("Great things start with a conversation. Opening contact...", "success");
            setTimeout(() => { location.href = "contact.html"; }, 350);
            return;
        }
        if (command === "email") {
            print("Opening email composer...", "success");
            location.href = "mailto:shraddhanayak159@gmail.com";
            return;
        }

        const page = command === "go" || command === "cd" ? target : command;
        if (routes[page]) {
            print("Opening " + page + "...", "success");
            setTimeout(() => {
                location.href = routes[page];
            }, 180);
            return;
        }

        print(
            "Command not found: " + raw + ". Type help for available commands.",
            "error"
        );
    });
}

// Contact dialog: the form uses FormSubmit's standard HTML POST endpoint.
// This avoids browser CORS/AJAX issues. FormSubmit may require one-time
// activation by the mailbox owner after the first successful submission.
const messageDialog = document.getElementById("messageDialog");
const openMessageDialog = document.getElementById("openMessageDialog");
const closeMessageDialog = document.getElementById("closeMessageDialog");

if (messageDialog && openMessageDialog && closeMessageDialog) {
    openMessageDialog.addEventListener("click", () => messageDialog.showModal());
    closeMessageDialog.addEventListener("click", () => messageDialog.close());

    messageDialog.addEventListener("click", (event) => {
        if (event.target === messageDialog) messageDialog.close();
    });
}
