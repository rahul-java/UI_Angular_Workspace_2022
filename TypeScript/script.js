console.log("This is script file.")

const toggleSidebar = () => {
	
    if($(".sidebar").is(":visible"))
      {
        $(".sidebar").css("display", "none");
        $(".content").css("margin-left", "0%");
      }
     else
       {
         $(".sidebar").css("display", "block");
         $(".content").css("margin-left" ,"20%");   
       }
};

const search=()=>{
  //console.log("searching....");
let query=$("#search-input").val();
if(query=="")
{
  $(".search-result").hide();
}
else{
  //sending req to server.
	
	let url=`http://localhost:8888/search/${query}`;
  fetch(url).then((response)=>{
   return response.json();
  })
  .then((data)=>{
    //access data
    console.log(data);

  });
     $(".search-result").show();
}
};

