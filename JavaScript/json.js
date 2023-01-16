let arr1=[
          { 
             id     : 101,
            "name" : "Rahul",
            "add"  : "Alld"
          },
          { 
            id     : 102,
           "name" : "Amit",
           "add"  : "BLP"
         },
         { 
            id     : 103,
           "name" : "Tamhid",
           "add"  : "PTN"
         },
         { 
            id     : 104,
           "name" : "Gaurav",
           "add"  : "GWL"
         }
        ];

        console.log(arr1);
        arr1.splice(arr1.findIndex((element,index)=>{
            return element.id===103;
        }),1);
        console.log(arr1);
        arr1.splice(arr1.findIndex((element,index)=>{
            return element.add==="Alld";
        }),1);
        console.log(arr1);