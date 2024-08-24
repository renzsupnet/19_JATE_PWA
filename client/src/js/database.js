import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('Post to the database');

  // Create a connection to the database database and version we want to use.
  console.log('PUT to the database');
  const jateDb = await openDB('jate', 1);
  const jateTransaction = jateDb.transaction('jate', 'readwrite');
  const store = jateTransaction.objectStore('jate');
  const request = store.put({ content: content });
  const result = await request;
  console.log('Data saved to the database', result);
}
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  
    console.log('GET all from the database');
  
    // Create a connection to the database database and version we want to use.
    const jateDb = await openDB('jate', 1);
  
    // Create a new transaction and specify the database and data privileges.
    const jateTransaction = jateDb.transaction('jate', 'readonly');
  
    // Open up the desired object store.
    const jate = jateTransaction.objectStore('jate');
  
    // Use the .getAll() method to get all data in the database.
    const request = jate.getAll();
  
    // Get confirmation of the request.
    const result = await request;
    console.log('result.value', result);
    return result;
  
}

initdb();
