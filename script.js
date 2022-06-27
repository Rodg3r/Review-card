const reviews = [{
    id: 1,
    name: 'Alex',
    job: 'Web Developer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
},{
    id: 2,
    name: 'Peter',
    job: 'Web Designer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.'
},{
    id: 3,
    name: 'Anna',
    job: 'Intern',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.'
}]

const author = document.getElementById('author')
const picture = document.getElementById('image')
const position = document.getElementById('position')
const info = document.getElementById('info')
const buttons = document.querySelectorAll('button')

let currItem = 0

window.addEventListener('DOMContentLoaded', ()=> {
    const currPerson = reviews[currItem]
    picture.src = currPerson.img
    author.innerHTML = currPerson.name
    position.innerHTML = currPerson.job
    info.innerHTML = currPerson.text
})

const showPerson = (person) => {
    const item = reviews[person]
    picture.src = item.img
    author.innerHTML = item.name
    position.innerHTML = item.job
    info.innerHTML = item.text
}

//Before button
buttons[0].addEventListener('click', () => {
    currItem--
    if(currItem < 0){
        currItem = reviews.length - 1
    }
    showPerson(currItem)
})

//after button
buttons[1].addEventListener('click', () => {
    currItem++
    if(currItem > reviews.length - 1){
        currItem = 0
    }
    showPerson(currItem)
})

//random button
buttons[2].addEventListener('click', () => {
    const currItem = Math.floor(Math.random() * reviews.length)
    showPerson(currItem)
})