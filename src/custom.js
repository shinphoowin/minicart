export const handleFilter = (type, arr, stateFun) => {
  switch (type) {
    case "price- Low to High":
      let result = arr.sort((a, b) => a.price - b.price);
      return stateFun([...result]);
    case "price- High to Low":
      let result2 = arr.sort((a, b) => b.price - a.price);
      return stateFun([...result2]);
    default:
      return arr;
  }
};
