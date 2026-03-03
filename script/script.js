const lodeData = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displeyLesons(json.data));
};
const lodeLavelData =(id)=>{
  
  const url =`https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
  .then(res => res.json())
  .then((data) => displeylevelwoeds(data.data));
}
const displeylevelwoeds =(words)=>{
const wordContainer = document.getElementById("word-container");
// wordContainer.innerHTML = "";
words.forEach(word => {
 const card = document.createElement("div");
 card.innerHTML = `
 <p class=""></p>
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
    btnDiv.innerHTML = `<button onclick="lodeLavelData(${lesion.level_no})" class=" btn btn-outline btn-primary mb-4">
                      <i class="fa-solid fa-book-open">
                      </i>Lesson - ${lesion.level_no}</button>`;
    levelContainer.appendChild(btnDiv);
  }
};

lodeData();
