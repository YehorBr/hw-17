const API_KEY = '47938285-50ff160efc2f22283719f94fb';

const BASE_URL = 'pixabay.com';

const btn = document.querySelector('.btn-more')
const imgList = document.querySelector('.img-list')

let page = 1;

getDetails().then((res)=>{
    const imagesMarkup = createMarkup(res.hits)

    imgList.insertAdjacentHTML('beforeend', imagesMarkup);
})

function getDetails(){
    return fetch(`https://pixabay.com/api/?key=${API_KEY}&page=${page}`)
    .then(res=> res.json())
}

console.log(getDetails());


function createMarkup(hits){
    return hits.map((hit)=> {
        return`<li>
        <img src=${hit.previewURL}>
        </li>`
    }).join('')
}

btn.addEventListener('click', onClick)

function onClick(){
    page+=1

    getDetails(page)
    .then((res) => {
      const imagesMarkup = createMarkup(res.hits);
      imgList.insertAdjacentHTML('beforeend', imagesMarkup);
    })
    
}
