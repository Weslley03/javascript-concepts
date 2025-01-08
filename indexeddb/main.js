const button = document.querySelector('#submitButton');

button.addEventListener('click', () => {
  const input_name = document.querySelector('#inputName').value;

  const request = indexedDB.open('databaseTest', 2);
 
  request.onupgradeneeded = (event) => {
    const db = event.target.result;

    const objectStore = db.createObjectStore('users', { keyPath: 'id' });
    objectStore.createIndex('email', 'email', { unique: true });
  };

  request.onsuccess = (event) => {
    const db = event.target.result;
    console.log(`banco aberto com sucesso`);

    const transaction = db.transaction('users', 'readwrite');
    const store = transaction.objectStore('users');

    store.add({ id: 1, nome: input_name, email: 'weslley@email.com' });
    store.add({ id: 2, nome: 'latera', email: 'latera@email.com' });
  
    transaction.oncomplete = () => {
      console.log('dados adicionados com sucesso!');
    };
  };

  request.onerror = (event) => {
    console.error('Erro ao abrir o banco de dados:', event.target.error);
  };
});