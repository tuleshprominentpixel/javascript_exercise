var library = [ 
{
    title: 'Tulesh',
    author: 'The Road Ahead',
    readingStatus: true
},
{
    title: 'Steve Jobs',
    author: 'Apple',
    readingStatus: true
},
{
    title: 'Bill',
    author: 'Microsoft',
    readingStatus: false
}];

for (var i = 0; i < library.length; i++) 
   {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log("Already read " + book);
    } else
    {
     console.log("You still need to read " + book);
    }
   }