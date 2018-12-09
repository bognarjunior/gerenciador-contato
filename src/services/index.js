import { KEYSTORAGE } from './../constants';

export const getList = () => {
  let storage = localStorage.getItem(KEYSTORAGE);
  storage = JSON.parse(storage);

  if (!localStorage.hasOwnProperty(KEYSTORAGE)) {
    return [];
  }
  
  return storage;
}

export const setList = (data) => {
  if (localStorage.hasOwnProperty(KEYSTORAGE)) {
    let storage = localStorage.getItem(KEYSTORAGE);
    storage = JSON.parse(storage);
    storage.push(data);
    localStorage.setItem(KEYSTORAGE, JSON.stringify(storage));
  } else {
    const contacts = [data];
    localStorage.setItem(KEYSTORAGE, JSON.stringify(contacts));
  }
}