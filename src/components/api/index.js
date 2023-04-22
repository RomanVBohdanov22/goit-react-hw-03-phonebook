const STORAGE_KEY = "items";

const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export function getData() {
  try {
    const dataJson = localStorage.getItem(STORAGE_KEY);
    return dataJson ? JSON.parse(dataJson) : initialContacts;
  } catch (error) {
    console.log(error);
  }
}
export function saveData(dataArr=[])
{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataArr));
}