import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

const mockProducts = [
  { id: 1, title: 'Essence Mascara Lash Princess', price: 9.99, category: 'beauty', image: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp', rating: 2.56 },
  { id: 2, title: 'Eyeshadow Palette with Mirror', price: 19.99, category: 'beauty', image: 'https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp', rating: 2.86 },
  { id: 3, title: 'Powder Canister', price: 14.99, category: 'beauty', image: 'https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp', rating: 4.64 },
  { id: 4, title: 'Red Lipstick', price: 12.99, category: 'beauty', image: 'https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp', rating: 4.36 },
  { id: 5, title: 'Red Nail Polish', price: 8.99, category: 'beauty', image: 'https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp', rating: 4.32 },
  { id: 6, title: 'Calvin Klein CK One', price: 49.99, category: 'fragrances', image: 'https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp', rating: 4.37 },
  { id: 7, title: 'Chanel Coco Noir Eau De', price: 129.99, category: 'fragrances', image: 'https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp', rating: 4.26 },
  { id: 8, title: 'Dior J\'adore', price: 89.99, category: 'fragrances', image: "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp", rating: 3.8 },
  { id: 9, title: 'Dolce Shine Eau de', price: 69.99, category: 'fragrances', image: 'https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp', rating: 3.96 },
  { id: 10, title: 'Gucci Bloom Eau de', price: 79.99, category: 'fragrances', image: 'https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/thumbnail.webp', rating: 2.74 },
  { id: 11, title: 'Annibale Colombo Bed', price: 1899.99, category: 'furniture', image: 'https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp', rating: 4.77 },
  { id: 12, title: 'Annibale Colombo Sofa', price: 2499.99, category: 'furniture', image: 'https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp', rating: 3.92 },
  { id: 13, title: 'Bedside Table African Cherry', price: 299.99, category: 'furniture', image: 'https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/thumbnail.webp', rating: 2.87 },
  { id: 14, title: 'Knoll Saarinen Executive Conference Chair', price: 499.99, category: 'furniture', image: 'https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/thumbnail.webp', rating: 4.88 },
  { id: 15, title: 'Wooden Bathroom Sink With Mirror', price: 799.99, category: 'furniture', image: 'https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/thumbnail.webp', rating: 3.59 },
  { id: 16, title: 'Apple', price: 1.99, category: 'groceries', image: 'https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp', rating: 4.19 },
  { id: 17, title: 'Beef Steak', price: 12.99, category: 'groceries', image: 'https://cdn.dummyjson.com/product-images/groceries/beef-steak/thumbnail.webp', rating: 4.47 },
  { id: 18, title: 'Cat Food', price: 8.99, category: 'groceries', image: 'https://cdn.dummyjson.com/product-images/groceries/cat-food/thumbnail.webp', rating: 3.13 },
  { id: 19, title: 'Chicken Meat', price: 9.99, category: 'groceries', image: 'https://cdn.dummyjson.com/product-images/groceries/chicken-meat/thumbnail.webp', rating: 3.19 },
  { id: 20, title: 'Cooking Oil', price: 4.99, category: 'groceries', image: 'https://cdn.dummyjson.com/product-images/groceries/cooking-oil/thumbnail.webp', rating: 4.8 },
  { id: 21, title: 'Cucumber', price: 1.49, category: 'groceries', image: 'https://cdn.dummyjson.com/product-images/groceries/cucumber/thumbnail.webp', rating: 4.07 },
  { id: 22, title: 'Dog Food', price: 10.99, category: 'groceries', image: 'https://cdn.dummyjson.com/product-images/groceries/dog-food/thumbnail.webp', rating: 4.55 },
  { id: 23, title: 'Eggs', price: 2.99, category: 'groceries', image: 'https://cdn.dummyjson.com/product-images/groceries/eggs/thumbnail.webp', rating: 2.53 },
  { id: 24, title: 'Fish Steak', price: 14.99, category: 'groceries', image: 'https://cdn.dummyjson.com/product-images/groceries/fish-steak/thumbnail.webp', rating: 3.78 },
  { id: 25, title: 'Green Bell Pepper', price: 1.29, category: 'groceries', image: 'https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/thumbnail.webp', rating: 3.25 },
  { id: 26, title: 'Green Chili Pepper', price: 0.99, category: 'groceries', image: 'https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/thumbnail.webp', rating: 3.66 },
  { id: 27, title: 'Honey Jar', price: 6.99, category: 'groceries', image: 'https://cdn.dummyjson.com/product-images/groceries/honey-jar/thumbnail.webp', rating: 3.97 },
  { id: 28, title: 'Ice Cream', price: 5.49, category: 'groceries', image: 'https://cdn.dummyjson.com/product-images/groceries/ice-cream/thumbnail.webp', rating: 3.39 },
  { id: 29, title: 'Juice', price: 3.99, category: 'groceries', image: 'https://cdn.dummyjson.com/product-images/groceries/juice/thumbnail.webp', rating: 3.94 },
  { id: 30, title: 'Kiwi', price: 2.49, category: 'groceries', image: 'https://cdn.dummyjson.com/product-images/groceries/kiwi/thumbnail.webp', rating: 4.93 }
];

export const ProductProvider = ({ children }) => {
  const [products] = useState(mockProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...[...new Set(mockProducts.map(p => p.category))]];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <ProductContext.Provider value={{ products: filteredProducts, searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, categories }}>
      {children}
    </ProductContext.Provider>
  );
};
