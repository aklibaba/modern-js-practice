window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange

if (!window.indexedDB) {
    window.alert("Your browser doesn't support a stable version of IndexedDB.")
}

const employeeData = [
    { id: "01", name: "Gopal K Varma", age: 35, email: "contact@tutorialspoint.com" },
    { id: "02", name: "Prasad", age: 24, email: "prasad@tutorialspoint.com" }
];

