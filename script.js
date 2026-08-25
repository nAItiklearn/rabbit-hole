
const rabbitHoles=[
    {
        id:"voynich",
        title:"The Voynich Manuscript",
        category:"history",

        level:[
            {
                title:"The Hook",
                content:
                       "A 600 years old manuscript exists with hundreds of pages of strange illustrations and a script that nobdy has confidently deciphered yet"
            },
            {
                title:"what is this shit??? ",
                content:"the manuscript is a real historical object, probably created in the early 15th century . It contains unusal, drawings, diagrams, plant and unknown writing system, Since 1969 it has been held at Yale University’s Beinecke Rare Book & Manuscript Library (cataloged as Beinecke MS 408)."

            },
            {
                title:"now comes the weird part",
                content:" Voynich manuscript aren’t just that it’s unreadable; they’re in the combination of its text, images, and statistical behavior, which together look unlike any other known medieval book.it contains things like ~ Impossible or unidentifiable plants,The “bathing women” section(lol),Strange zodiac and cosmic diagrams"
            },
            {
                title:"go deeper",
                content:"now go and exlore it more deeper its history, the major attempts to decipher it, and the different theories surrounding its origin. YOU CAN USE THE ATTACHED LINKS TO KNOW EVERYTHING ABOUT THIS SCRIPT "

            }
        ]

    },
    {
        id:"alexandria",
        title:"the library of alexandria",
        category:"history",

        levels:[
            {
                title:"The Hook",
                content:"one of the most famous libraries in history became a symbol of knowledge, mystory and the fear of losing infomation forever"

            },
            {
                title:"what is this shit???",
                content:
                "the library of alexandria was associated with the ancient city of Alexandia in Egypt and was part of a larger schorly institution"
            },
            {
                title:"The weird part",
                content:" its legend is far more dramatic and specific than the actual evidence, so much of what “everyone knows” is probably myth, exaggeration, or later propaganda rather than solid history. 1. No one can point to its exact ruins .2. It didn’t die in one epic fire3. The “Arabs burned it to heat baths” story is probably fake,4. The “all human knowledge” claim is overblown5. A policy that sounds like fiction but is probably real "

            },
            {
                title:"go deeper",
                content:
                 "learn about ancient Alexandria, The ptolemies, scholers who worked there, and the competing theories about the library's declines.YOU CAN USE THE ATTACHED LINKS TO KNOW EVERYTHING ABOUT THIS SCRIPT "
            }

        ]
    }
];
let selectedHole= null;
let currentLevel=0;
const surpriseButton=document.querySelector(".surprise-button");
surpriseButton.addEventListener("click", function (){
       const randomIndex=Math.floor(Math.random()*rabbitHoles.length);
       const selectedHole=rabbitHoles[randomIndex];
        currentLevel=0;
        showLevel();
    // const firstLevel=selectedHole.level || selectedHole.levels;
       rabbitResult.innerHTML=
       `
       <h2>${selectedHole.title}</h2>
       <div class="level-box">
             <div class="level-header">
                 <h3> LEVEL 1 </h3>
                 <a href="#" class="level-link">
                   LEARN MORE 
                 </a>
             </div>
             <div class="level-content">
                 <h4>${firstLevel[0].title}</h4>
                 <p>${firstLevel[0].content}</p>
             </div>
             <lebel class="explore-check">
                  <input type="checkbox" id="level-complete">
                  i've explored this
             </label
             <button class="next-button" id=next-level" disabled>
               LEVEL 2 →
             </button>
        </div>
             `
    const level1checkbox=document.querySelector("#level-complete");
    const nextButton=document.querySelector("#next-level");
    level1checkbox.addEventListener("change", function (){
        if(level1checkbox.checked){
            nextButton.disabled=false;}
            else{
                nextButton.disabled=true;
            }

        });
        function showLevel(){
            const level = selectedHole.levels[currentLevel];
            const isLastLevel=currentLevel=== selectedHole.levels.length -1;
            rabbitResult.innerHTML=
            `<h2>${selectedHole.title}</h2>
            <div class="level-box">
              <div class="level-header">
                  <h3>LEVEL ${currentLevel+1}</h3>
                  <a href="#" class="level-link">
                     KNOW MORE ↗</a>
               </div>
               <div class="level-content">
                  <h4>${level.title}</h4>
                  <p>${level.content}</p>
                </div>
                <label class="explore-check">
                   <input type="checkbox" id="level-complete">
                   i've explored this
                </label>
                ${
                    isLastLevel
                    ? ""
                    : `<button class="next-button" id="next-level" disabled>
                        LEVEL ${currentLevel +2} →
                        </button>`
                }
            </div>`;
            const levelCheckbox= document.querySelector("#level-complete");
            levelCheckbox.addEventListener("change", function () {
                const nextButton= document.querySelector("#next-level");
                if(nextButton){
                    nextButton.disabled =!level1checkbox.checked;
                }
            
            });
            const nextButton=document.querySelector("#next-level");
             if (nextButton){
                nextButton.addEventListener("click", function () {
                    currentLevel++;
                    showLevel();

                });
            }
        };

                           

           
            
            
         
    }
);
const rabbitResult=document.querySelector("#rabbit-result");
console.log(rabbitHoles);