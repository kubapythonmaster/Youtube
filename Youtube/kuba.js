const input = document.querySelector(".pole_do_szukania")
const liItems = document.querySelector("li")

const filterList = () => {
   liItems.forEach(( item =>{
      const match = new RegExp(input.value,"i").test(item.textContent)

      if(!match){
         item.style.dispaly = "none";
      }else{
         item.style.dispaly = "block";
      }
   }))


}

input.addEventListener("keyup",filterList)