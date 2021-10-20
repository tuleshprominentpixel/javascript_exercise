/*var str="teuleshpatel";
        var arr1=[];
        var str2=[];
        var c,text="";
        var count=0;
        arr1=str.split('');
        console.log(arr1);

        const srefere= arr1.map(member => {
            if(member=='e')
            {
                text += count  + member + "\n"; 
                str2.push(count  + member);
                count++;
            }
            
        });*/
        //let user = new Object(); // "object constructor" syntax
        let user = {     // an object
            name: "tulesh_ghelani",  // by key "name" store value "John"
            age: 30,
            height:5.6 ,
            hobbies:['sports','travelling']       // by key "age" store value 30
          };
          const key = Object.keys(user)[0];
          const key3=Object.keys(user)[2];
          const key4=Object.keys(user)[3];
          //const sampleObj = { [key] : user[key] }
          //console.log(sampleObj)
        let user1={ [key] : user[key] };
        let user2={...user};
        let user3={...user,age :50,hobbies:[...user.hobbies]};
        let user4={ [key3] : user[key3] , [key4] : user[key4] }
        user.hobbies.push('cricket');
        user.height=5.2;
        //let user = {};
        console.log(user);
        console.log(user1);
        //console.log(user2);
        //console.log(user3);
        console.log(user4);
        /*console.log(text);*/