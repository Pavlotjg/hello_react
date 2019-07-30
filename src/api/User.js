import { getDataBase, saveDataBase } from './database';

export function getCurrentUser() {
    return new Promise(resolve => {
        const dataBase = getDataBase().then(user => {
            resolve(user);
        });
    });
}
