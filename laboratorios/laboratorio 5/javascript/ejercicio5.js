function palindrome(palabra){

  if(palabra==palabra.split("").reverse().join("")){
      console.log("es palindrome")
  }else{
      console.log("no es palindrome")
  }


}