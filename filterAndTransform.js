// 3. Filter and Transform an Array of Objects (filter + map)

// Filter out products with price < $20 and get their names in uppercase.

const products = [
    { name: 'Shoes', price: 30 },
    { name: 'Socks', price: 10 },
    { name: 'Shirt', price: 25 },
  ];

  const result = products.filter((product) => product.price < 20 )
    .map(product => product.name.toUpperCase());

  console.log(result);  // {name: "Socks", price: 10}