
const giftIds = [2, 1, 3, 5, 3, 2]
function findFirstRepeated(giftIds) {
   return giftIds.filter((num,index)=>giftIds.lastIndexOf(num) !== (index))
  }
   
   const resultado=findFirstRepeated(giftIds)
   console.log(resultado)
  