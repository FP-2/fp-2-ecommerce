import { removeDuplicateData } from '../utils';

// const API_KEY = '0a746e2759444e379c4631c053f07a60';
// const API_KEY = '271e7a0971194c9cb5ed330cc3d92bc2';

export const getStore = async () => {
  const itemsData = await fetch(
    `(https://fakestoreapi.com/products)`
    .then(res=>res.json())
    .then(json=>console.log(json)),
    { cache: 'no-store' }
  );
  return removeDuplicateData(await itemsData.json());
};
