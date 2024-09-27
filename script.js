
let butonsDOM = document.querySelector('.btn-container')
let footsDOM = document.querySelector('.section-center')
butonsDOM.addEventListener('click', secildi)

function secildi(e){
   
   if(e.target.id === 'all'){
     
     let selectedItem = document.querySelectorAll('#id1, #id2, #id3, #id4, #id5, #id6, #id7, #id8, #id9');
     selectedItem.forEach(don)
     function don(item){
      item.classList.remove('display')
       
     }
   }
   
   
   else if(e.target.id === 'korea'){
      let secilen = document.querySelectorAll('#id1, #id3, #id7');
      let selectedItem = document.querySelectorAll('#id2, #id4, #id5, #id6, #id8, #id9');
      
      secilen.forEach(del)
      selectedItem.forEach(add)
   }
   
   else if(e.target.id === 'japan'){
      let secilen = document.querySelectorAll('#id2, #id6, #id9');
      let selectedItem = document.querySelectorAll('#id1, #id3, #id4, #id5, #id7, #id8');
      
      secilen.forEach(del)
      selectedItem.forEach(add)
     
   }
   
   else if(e.target.id === 'china'){
      let secilen = document.querySelectorAll('#id4, #id5, #id8');
      let selectedItem = document.querySelectorAll('#id1, #id2, #id3, #id6, #id7, #id9');
      
      secilen.forEach(del)
      selectedItem.forEach(add)
     }
   

   function del(item){
      item.classList.remove('display')
      }

      function add(item){
      item.classList.add('display')
      }

}