// step 1= create product item
const productSection=document.querySelector('#products')
//create product itemDiv and set CSSCLASS
const productItem= document.createElement('div')
productItem.classList.add('productItem')

//create product thumbnail & append to mainDiv 
const productThumb=document.createElement('img')
productThumb.setAttribute('src','images/fox-solider.png')
productItem.appendChild(productThumb)
//create project title & append to mainDiv
const productTitle=document.createElement('span')
productTitle.innerText='foxi'
productItem.appendChild(productTitle)
//create product descriptioin & append to mainDiv
const productDesc=document.createElement('h6');
productItem.appendChild(productDesc)
productDesc.innerText='he is the most powerful foxhuman in the galaxy'
//create product price element & append to mainDiv
const productPrice=document.createElement('p')
productPrice.innerText='234$'
productItem.appendChild(productPrice)

productSection.appendChild(productItem)