const rabbitHoles = [
    {
        id: "voynich",
        title: "The Voynich Manuscript",
        category: "history",
        level: [
            {
                title: "The Hook",
                content: "A 600 years old manuscript exists with hundreds of pages of strange illustrations and a script that nobody has confidently deciphered yet.",
                link: "https://en.wikipedia.org/wiki/Voynich_manuscript"
            },
            {
                title: "what is this shit???",
               content: "The manuscript is a real historical object, probably created in the early 15th century. It contains unusual drawings, diagrams, plants, and an unknown writing system. Since 1969 it has been held at Yale University's Beinecke Rare Book & Manuscript Library (cataloged as Beinecke MS 408).",
               link: "https://www.britannica.com/topic/Voynich-manuscript"
            },
            {
                title: "now comes the weird part",
                content: "The Voynich manuscript is not just unreadable; its text, images, and statistical behavior together look unlike any other known medieval book. It contains impossible or unidentifiable plants, the bathing women section, and strange zodiac and cosmic diagrams.",
                link: "https://www.voynich.ninja/"
            },
            {
                title: "go deeper",
                content:"Explore the high-resolution scans at Yale's Beinecke Library, read about the latest AI-powered decipherment attempts, or dive into theories linking it to Roger Bacon, John Dee, or Aztec languages. The manuscript has inspired novels, games, and even a metal album.",
                link:"https://beinecke.library.yale.edu/collections/highlights/voynich-manuscript"

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
                content: "One of the most famous libraries in history became a symbol of knowledge, mystery, and the fear of losing information forever.",
                link:"https://www.britannica.com/topic/Library-of-Alexandria"
                
            },
            {
                title: "what is this shit???",
                content: "The library of Alexandria was associated with the ancient city of Alexandria in Egypt and was part of a larger scholarly institution.",
                link:"https://www.open.edu/openlearn/history-the-arts/library-of-alexandria/content-section-3"
            },
            {
                title: "The weird part",
                content: "Its legend is far more dramatic and specific than the actual evidence, so much of what everyone knows is probably myth, exaggeration, or later propaganda rather than solid history.",
                link:"https://historyforatheists.com/2017/07/the-destruction-of-the-great-library-of-alexandria/"
            },
            {
                title: "go deeper",
                content: "Read reassessments of the destruction timeline, explore what texts might have survived, or investigate how the library's legacy influenced modern information systems. Some scholars argue the 'loss of knowledge' narrative is exaggerated—many works existed in multiple copies across the Mediterranean.",
                link: "https://www.britannica.com/topic/Library-of-Alexandria"
            }
        ]
    },
    {
        id:"indus",
        title:"Indus Valley Script",
        category:"history",
        level:[
            {
                title:"the hook",
                content:"one of the world's oldest civilizations left behind thousands of inscriptions but no one can read them. A milion-doller challenge remains unclaimed. It is a language, a code, or just symbols??",
                link: "https://en.wikipedia.org/wiki/Indus_script"
            },
            {
                title:"what is this shit??",
                content:"the Indus Valley civilization (3300-1300BCE) spanned mordern Pakistan and northwest India. Over 4000 inscribed objects have been found, mostly seals with short texts(average 5 symbols). The script is likely logo-syllabic, written right to left, with 400 distinct signs. No bilingual text(like Rosetta Stone) has been discovered.",
                link:"https://asi.nic.in/admin/whatsnew/download/771"
            },
            {
                title:"the weird part",
                content:"Computational linguistics and machine learning are now being used to crack it. Some  researchers claim it encodes Dravidian languages; others say Sanskrit or even Sumerian. A 2025 claim by cryptographer 'Yajnavedam' says he decoded it as Sanskrit—but mainstream scholars remain unconvinced. The script may not be writing at all, but political or religious symbols.",
                link:"https://www.bbc.com/news/articles/c70q44zn18wo"
            },
            {
                title:"go deeper",
                content:"Explore the corpus of inscriptions, read about computational decipherment attempts, or investigate connections to later Brahmi script. The Archaeological Survey of India offers a $1.4 million reward for a successful decipherment",
                link:"https://www.reddit.com/r/Dravidiology/comments/1gc5aj7/indus_valley_script_deciphered_opinions/"
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
