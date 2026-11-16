"use strict";

const projects = {
  guidelines: {
    path: "01-cli-design-guidelines",
    category: "01 / Systems thinking",
    title: "CLI design guidelines",
    intro: "CLI design guidelines that bring a human-centered lens to a text-first experience.",
    sections: [
      ["The challenge", "A command-line experience is made of small decisions: how a command is named, what a prompt asks, and what happens when something goes wrong. Those details need a shared design language."],
      ["The design approach", "Bring CLI design decisions into a set of guidelines that designers and engineers can reference. The focus is the experience behind the text, not just how the output looks."],
      ["The intended impact", "A consistent foundation for CLI experiences, with clearer design intent and a shared reference for discussing quality."],
    ],
  },
  azd: {
    path: "02-azd-design-as-code",
    category: "02 / Design × engineering",
    title: "azd design guidelines for AI agents",
    intro: "I created Markdown design guidance for Azure Developer CLI (azd), bringing UX principles into the repo where engineers and AI agents can use them.",
    sections: [
      ["The challenge", "Design intent needs to stay useful when implementation begins. A handoff is only the start; engineers need guidance they can check while making day-to-day decisions, and design review can’t be in every pull request."],
      ["The design approach", "Capture the azd experience as design-as-code: guiding principles, a core style guide, a new-command guide, agentic UX guidance, and responsive layout rules, all as Markdown in the azure-dev repo, right next to the code."],
      ["Copilot as a design reviewer", "The guidelines are used by GitHub Copilot during pull request check-ins. When a change violates the user experience, such as an inconsistent prompt, an unclear error, or off-pattern output, Copilot flags it before it ships."],
      ["Living guidelines", "The guidelines aren’t static. As new design patterns are implemented in azd, the style guides are automatically updated, so the source of truth keeps pace with the product."],
      ["The impact", "Design quality scales with the team. PR reviews can surface UX concerns in the engineering workflow, while shared guidance keeps design decisions consistent as azd evolves."],
    ],
  },
  survey: {
    path: "03-listening-in-the-terminal",
    category: "03 / Feedback & research",
    title: "Listen where the work happens.",
    intro: "An intercept survey experience for Azure CLI and PowerShell, designed around the place developers are already working.",
    sections: [
      ["The challenge", "Asking for feedback inside a developer tool is a design problem of its own. The invitation needs to make sense in a command-line workflow without competing with the task at hand."],
      ["The design focus", "Shape the survey invitation as part of the CLI experience. Balance a clear invitation to share feedback with respect for the developer’s attention and current task."],
      ["The intended impact", "A way to hear from developers in context and bring their experience into future design decisions. Research outcomes and supporting artifacts will be added to the full case study."],
    ],
  },
};

const caseDialog = document.querySelector("#case-dialog");
let lastDialogTrigger = null;

function openProject(key, trigger) {
  if (!Object.hasOwn(projects, key)) {
    console.error(`Unknown project: ${key}`);
    return;
  }
  const project = projects[key];
  document.querySelector("#case-path").textContent = `~/selected-work/${project.path}`;
  document.querySelector("#case-category").textContent = project.category;
  document.querySelector("#case-title").textContent = project.title;
  document.querySelector("#case-intro").textContent = project.intro;
  document.querySelector("#guidelines-link").hidden = key !== "guidelines";
  document.querySelector("#azd-files").hidden = key !== "azd";
  document.querySelector("#case-note").hidden = key === "guidelines";
  const sections = document.querySelector("#case-sections");
  sections.replaceChildren();
  for (const [heading, text] of project.sections) {
    const section = document.createElement("section");
    const title = document.createElement("h3");
    title.textContent = heading;
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    section.append(title, paragraph);
    sections.append(section);
  }
  lastDialogTrigger = trigger;
  caseDialog.showModal();
  caseDialog.scrollTop = 0;
}

document.querySelectorAll("[data-project]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    openProject(link.dataset.project, link);
  });
});

document.querySelectorAll("[data-close]").forEach((button) => {
  button.addEventListener("click", () => document.getElementById(button.dataset.close).close());
});

caseDialog.addEventListener("click", (event) => {
  if (event.target !== caseDialog) return;
  const bounds = caseDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
    caseDialog.close();
  }
});

caseDialog.addEventListener("close", () => {
  if (lastDialogTrigger instanceof HTMLElement) lastDialogTrigger.focus({ preventScroll: true });
  lastDialogTrigger = null;
});

document.querySelector("#year").textContent = new Date().getFullYear();
