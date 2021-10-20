var str="teuleshpatel";
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
            
        });
        /*arr1.forEach(myFunction);
         
        function myFunction(item, index) 
        {
            if(item=='e')
            {   
                text += count  + item + "\n"; 
                str2.push(count  + item);
                count++;
            }
        }*/
        /*for(var i=0;i<arr1.length;i++)
        {
            if(arr1[i]=='e')
            {   
                var c=count+'e';
                str2.push(c);
                console.log(c);
                count++;
            }
        }*/
        console.log(str2);
        console.log(text);