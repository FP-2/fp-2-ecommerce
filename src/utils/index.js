export const removeDuplicateData = (item) => {
    const randomItem = item.item;
    const filteritem = randomItem.filter((article) => article.source.id !== null);
    return filteritem;
  };
  
  export const formatDateToLocale = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('id', options);
  };  