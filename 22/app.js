/* for cooie store */
const storeBtncookie = document.getElementById('store-btn-cookie');
const retrBtncookie = document.getElementById('retrieve-btn-cookie');

storeBtncookie.addEventListener('click', () => {
  const studid = 's123';
  const studinfo = {name: 'Tulesh', age: 20};
  document.cookie = `studentid=${studid}; `;
  document.cookie = `studentinfo=${JSON.stringify(studinfo)}`;
});

retrBtncookie.addEventListener('click', () => {
  console.log(document.cookie);
  const cookieData = document.cookie.split(';');
  const data = cookieData.map(i => {
    return i.trim();
  });
  console.log(data[1].split('=')[1]); // user value
});


/*   -local stroage           */
const storeBtnLocal = document.getElementById('store-btn-local');
const retrBtnLocal = document.getElementById('retrieve-btn-local');

storeBtnLocal.addEventListener('click',() =>{
    const studid = 's123';
    const studinfo = {name: 'Tulesh', age: 20};
    localStorage.setItem('studid', studid);
    localStorage.setItem('studinfo', JSON.stringify(studinfo));
});

retrBtnLocal.addEventListener('click',()=>{
    const getstudId = localStorage.getItem('studid');
    const getstudinfo = JSON.parse(localStorage.getItem('studinfo'));
    console.log(getstudinfo);
    if (getstudId) {
        console.log('Got the id - ' + getstudId);
    } else {
        console.log('Could not find id.');
    }
});

/* for session*/
const storeBtnSession = document.getElementById('store-btn-session');
const retrBtnSession = document.getElementById('retrieve-btn-session');

storeBtnSession.addEventListener('click',() =>{
    const studid = 's123';
    const studinfo = {name: 'Tulesh', age: 20};
    sessionStorage.setItem('studid', studid);
    sessionStorage.setItem('studinfo', JSON.stringify(studinfo));
    
});

retrBtnSession.addEventListener('click',()=>{
    const getstudId = sessionStorage.getItem('studid');
    const getstudinfo = JSON.parse(sessionStorage.getItem('studinfo'));
     console.log(getstudinfo);
    if (getstudId) {
        console.log('Got the id - ' + getstudId);
    } else {
        console.log('Could not find id.');
    }
});


/*      indexdb     */
/*const storeBtnIndexdb = document.getElementById('store-btn-indexdb');
const retrBtnIndexdb = document.getElementById('retrieve-btn-indexdb');

let db;

const dbRequest = indexedDB.open('databaseFirst', 1);
//alert(db);

dbRequest.onsuccess = function(event) {
    db = event.target.result;
  };

  

dbRequest.onupgradeneeded = function(event) {
    db = event.target.result;

    const objStore = db.createObjectStore('students', { keyPath: 'id' });

    objStore.transaction.oncomplete = function(event) {
        const studStore = db
        .transaction('students', 'readwrite')
        .objectStore('students');
        studStore.add({
        id: 's',
        name: 'Virat',
        subject: ['SS', 'G.K.']
        });
    };
};

dbRequest.onerror = function(event) {
    console.log('ERROR!');
  };

storeBtnIndexdb.addEventListener('click', () => {
    if (!db) {
        return;
    }
    const studStore = db
        .transaction('students', 'readwrite')
        .objectStore('students');
        studStore.add({
        id: 's1',
        name: 'Tulesh Ghelani',
        subject: ['Maths', 'Science']
    });
});*/



/*----------------------*/
const storeBtnindexdb = document.getElementById('store-btn-indexdb');
const retrBtnindexdb = document.getElementById('retrieve-btn-indexdb');

let db;

const dbRequest = indexedDB.open('Database', 1);

dbRequest.onsuccess = function(event) {
  db = event.target.result;
};

dbRequest.onupgradeneeded = function(event) {
  db = event.target.result;

  const objStore = db.createObjectStore('students', { keyPath: 'id' });

  objStore.transaction.oncomplete = function(event) {
    const studsStore = db
      .transaction('students', 'readwrite')
      .objectStore('students');
      studsStore.add({
      id: 's1',
      name: 'Tulesh Ghelani',
      subject: ['G.K.', 'S.S.']
    });
  };
};

dbRequest.onerror = function(event) {
  console.log('ERROR!');
};

storeBtnindexdb.addEventListener('click', () => {
  if (!db) {
    return;
  }
  const studsStore = db
    .transaction('students', 'readwrite')
    .objectStore('students');
    studsStore.add({
    id: 's2',
    name: 'Virat kohali',
    subject: ['Maths', 'Science']
  });
});

retrBtnindexdb.addEventListener('click', () => {
  const studsStore = db
    .transaction('students', 'readwrite')
    .objectStore('students');
  const request = studsStore.get('s2');

  request.onsuccess = function() {
    console.log(request.result);
  }
});

