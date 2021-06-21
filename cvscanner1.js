

console.log("This is my index.js");
// Data is an array of objects which contains information about the candidates
const data = [
    { 
        name : "Damon Salvatore",
        age : "178 years old",
        speciality: "can drive you crazy only with his killer smile",
        place: "Covington, Louisiana, U.S.",
        image:"Damon1.jpeg"
          },

    {
        name: "Jimin",
        age: "25 years old",
        speciality: 'melodious voice',
        place: 'South Korea',
        image: 'jimin.jpeg'
    },

    {
        name: 'Yang Yang',
        age: 29,
        speciality: 'As hot as fire ,As cold as ice',
        place: 'China',
        image: 'Yang.jpeg'
    },

    {
        name: 'Mr Grey',
        age: 27,
        speciality: 'Red Room',
        place: 'Seattle',
        image: 'grey2.jpeg'
    },

    {
        name: 'Jon Snow',
        age: "14-year-old",
        speciality: ` owner of Iron throne and the stealer of our shanu's hearts `,
        place: 'North of Westeros',
        image: 'jon.jpeg'
    }
]


// CV Iterator
function cvIterator(profiles){
    let nextIndex=0;
    return {
        next: function(){
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
}
const candidates = cvIterator(data);

nextCV();
// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV(){
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.image}' class="center">`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item" >Name: ${currentCandidate.name}</li>
    <li class="list-group-item" >Age: ${currentCandidate.age} years old</li>
    <li class="list-group-item" >Lives in ${currentCandidate.place}</li>
    <li class="list-group-item" >Speciality: ${currentCandidate.speciality}</li>
  </ul>`;
    }
    else{
        alert('Ye kam h kya .. chup chap inme se hi koi pasand kr le aur whatsapp pr bta hume');
        window.location.reload();
    }

}
