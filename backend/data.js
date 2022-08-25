import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'PaolaC',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Paola',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
    {
      name: 'Paola1',
      email: 'paola1@gmail.com',
      password: bcrypt.hashSync('paola1'),
      isAdmin: false,
    },
    {
      name: 'Paola2',
      email: 'paola2@gmail.com',
      password: bcrypt.hashSync('paola2'),
      isAdmin: false,
    },
    {
      name: 'Paola3',
      email: 'paola3@gmail.com',
      password: bcrypt.hashSync('paola3'),
      isAdmin: false,
    }
  ],
  products: [
    {
      // _id: '1',
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg', 
      price: 120,
      countInStock: 1,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 1,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 1,
      description: 'high quality product',
    },
    {
      // _id: '3',
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 25,
      countInStock: 1,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 1,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 1,
      description: 'high quality product',
    },
    
  ],
};
export default data;
