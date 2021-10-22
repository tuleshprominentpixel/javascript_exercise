


class startsecondfile
{
    //secondfile()
    static secondfile() 
    {
        const secondf = document.createElement('script');
        secondf.src = '11.js';
        secondf.defer = true;
        document.head.append(secondf);
    }
    //setTimeout(secondfile, 3000);
}
startsecondfile.secondfile();

console.log("first javascipt file load");

