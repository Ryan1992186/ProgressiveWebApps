const indexedDB =
    window.indexedDB ||
    window.mozIndexDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB ||
    window.shimIndexedDB;

let db;
const request = indexedDB.open('budgetApplication', 1)

request.onupgradeneeded = ({ target }) => {
    let db = target.result;
    db.createObjectStore('pending', {
        autoIncrement: true
    })
};

request.onsuccess = ({ target }) => {
    db = target.result;

    if (navigator.onLine) {
        checkDatabase()
    }
}

request.onerror = function(event){
    console.log('something broke.', event.target.errorCode)
}