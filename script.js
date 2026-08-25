const rabbitHoles = [
    {
        id: "voynich",
        title: "The Voynich Manuscript",
        category: "history",
        level: [
            {
                title: "The Hook",
                content: "A 600 years old manuscript exists with hundreds of pages of strange illustrations and a script that nobody has confidently deciphered yet."
            },
            {
                title: "what is this shit???",
                content: "The manuscript is a real historical object, probably created in the early 15th century. It contains unusual drawings, diagrams, plants, and an unknown writing system. Since 1969 it has been held at Yale University's Beinecke Rare Book & Manuscript Library (cataloged as Beinecke MS 408)."
            },
            {
                title: "now comes the weird part",
                content: "The Voynich manuscript is not just unreadable; its text, images, and statistical behavior together look unlike any other known medieval book. It contains impossible or unidentifiable plants, the bathing women section, and strange zodiac and cosmic diagrams."
            },
            {
                title: "go deeper",
                content: "Explore its history, the major attempts to decipher it, and the different theories surrounding its origin."
            }
        ]
    },
    {
        id: "alexandria",
        title: "the library of alexandria",
        category: "history",
        level: [
            {
                title: "The Hook",
                content: "One of the most famous libraries in history became a symbol of knowledge, mystery, and the fear of losing information forever."
            },
            {
                title: "what is this shit???",
                content: "The library of Alexandria was associated with the ancient city of Alexandria in Egypt and was part of a larger scholarly institution."
            },
            {
                title: "The weird part",
                content: "Its legend is far more dramatic and specific than the actual evidence, so much of what everyone knows is probably myth, exaggeration, or later propaganda rather than solid history."
            },
            {
                title: "go deeper",
                content: "Learn about ancient Alexandria, the Ptolemies, the scholars who worked there, and the competing theories about the library's decline."
            }
        ]
    }
];

let selectedHole = null;
let currentLevel = 0;
const surpriseButton = document.querySelector(".surprise-button");
const rabbitResult = document.querySelector("#rabbit-result");

function showLevel() {
    const level = selectedHole.level[currentLevel];
    const isLastLevel = currentLevel === selectedHole.level.length - 1;

    rabbitResult.innerHTML = `
        <h2>${selectedHole.title}</h2>
        <div class="level-box">
            <div class="level-header">
                <h3>LEVEL ${currentLevel + 1}</h3>
                <a href="#" class="level-link">KNOW MORE ↗</a>
            </div>
            <div class="level-content">
                <h4>${level.title}</h4>
                <p>${level.content}</p>
            </div>
            <label class="explore-check">
                <input type="checkbox" id="level-complete">
                I've explored this
            </label>
            ${isLastLevel ? "" : `<button class="next-button" id="next-level" disabled>
                LEVEL ${currentLevel + 2} →
            </button>`}
        </div>`;

    const levelCheckbox = document.querySelector("#level-complete");
    const nextButton = document.querySelector("#next-level");

    levelCheckbox.addEventListener("change", function () {
        if (nextButton) {
            nextButton.disabled = !levelCheckbox.checked;
        }
    });

    if (nextButton) {
        nextButton.addEventListener("click", function () {
            currentLevel++;
            showLevel();
        });
    }
}

surpriseButton.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * rabbitHoles.length);
    selectedHole = rabbitHoles[randomIndex];
    currentLevel = 0;
    showLevel();
});
