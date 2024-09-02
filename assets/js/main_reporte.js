const listUser=async()=>{
   try{
      const response=await fetch("https://jsonplaceholder.typicode.com/users");
      const users= await response.json();
      
      let content='';
      users.array.forEach(user,index => {
        content+=
        <tr>
            <td>${index+1}</td>
        </tr>
      });
   }catch(ex){
      alert(ex)
   }
};

window.addEventListener("load",async()=>{
  await listUser();
})