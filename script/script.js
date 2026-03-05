const lodeData = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displeyLesons(json.data));
};
const removeActiveClass =()=>{
  const allBtns=document.querySelectorAll(".all-Btn");
  allBtns.forEach(btn => btn.classList.remove("btn-active"));
  
}
const lodeLavelData =(id)=>{
  
  const url =`https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
  .then(res => res.json())
  .then((data) =>{
    removeActiveClass();
    const allBtns=document.querySelectorAll(".all-Btn");
    const lessonbbtn= document.getElementById(`lesson-btn-${id}`);
    // document.querySelectorAll(`lesson-btn-${id}`)
    // .forEach(btn => btn.classList.remove("btn-active"));
    //  lessonbbtn.classList.add("btn-active");

    // lessonbbtn.classList.remove("btn-active");
    lessonbbtn.classList.add("btn-active");
     displeylevelwoeds(data.data)
  });
}
const lodeWorld = async (id)=>{
  const url=`https://openapi.programming-hero.com/api/word/${id}`;
  console.log(url);
  
  const res = await fetch(url); 
  const detail = await res.json();
  displeyWordDetails(detail.data);
};
const displeyWordDetails = (word) =>{
console.log(word);
const ditilesContener = document.getElementById("ditiles-contener");
ditilesContener.innerHTML = `
 <div class="flex flex-col  space-y-5">
 ${word.word ? `<h3 class="text-lg font-bold">Word:<img class=" inline-block" src="./assets/Group 9.png" alt="">( ${word.word})</h3>` : ''}
 ${word.pronunciation ? `<h3 class="text-lg font-bold">Pronunciation: ${word.pronunciation}</h3>` : ''}
 ${word.meaning ? `<p class="py-4 font-bold">Meaning: ${word.meaning}</p>` : ''}
 ${word.partsOfSpeech ? `<p class="py-4 font-bold">Parts of Speech: ${word.partsOfSpeech}</p>` : ''}
 ${word.sentence ? `<p class="py-4 font-bold">Sentence: ${word.sentence}</p>` : ''}
 ${word.synonym ? `<p class="py-4">Synonym: ${word.synonym}</p>` : ''}
 </div>`;
document.getElementById("my_modal_5").showModal();


}
const displeylevelwoeds =(words)=>{
const wordContainer = document.getElementById("word-container");
wordContainer.innerHTML = "";
if (words.length==0) {
  wordContainer.innerHTML = `<div class=" text-center items-center justify-center col-span-full space-y-3 p-10">
         <img class="w-20 mx-auto" src="./assets/alert-error.png" alt="">
         <p class="font-bangla ">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
         <h1 class="text-4xl font-bold">নেক্সট Lesson এ যান</h1>

        </div>`;
  alert("No words found for this lesson.");
  return;
  
}
words.forEach(word => {
  
//    {
//     "id": 5,
//     "level": 1,
//     "word": "Eager",
//     "meaning": "আগ্রহী",
//     "pronunciation": "ইগার"
// }
  
 const card = document.createElement("div");
 card.innerHTML = `
 <div class=" bg-white rounded-xl shadow-sm text-center px-5 py-10 space-y-5">
        <h2>${word.word ? word.word : "Word not available"}</h2>
        <p>Meaning /Pronounciation</p>
        <div>${word.meaning ? word.meaning : "Sorry, meaning not available"} / ${word.pronunciation ? word.pronunciation : "Sorry, pronunciation not available"}</div>
        <div class=" flex justify-between items-center mt-5">
         <button onclick="lodeWorld(${word.id})" class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
         <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
        </div>
        
        </div>
 `
  wordContainer.append(card);
  
});
 
}
displeyLesons = (lesons) => {
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";
  for (let lesion of lesons) {
    console.log(lesion);

    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `<button id="lesson-btn-${lesion.level_no}" onclick="lodeLavelData(${lesion.level_no})" class="all-Btn btn btn-outline btn-primary mb-4">
                      <i class="fa-solid fa-book-open">
                      </i>Lesson - ${lesion.level_no}</button>`;
    levelContainer.appendChild(btnDiv);
    
  }
};

lodeData();
