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
    },
    {
      name: 'Paola4',
      email: 'paola4@gmail.com',
      password: bcrypt.hashSync('paola4'),
      isAdmin: false,
    }
  ],
  products: [
    {
      
      name: '4000lm Full HD Network Business Projector',
      slug: 'Full HD 1080p Resolution',
      category: 'Monitora/Projektora',
      image: '/images/p13.jpg', 
      price: 899,
      countInStock: 5,
      brand: 'Dell',
      rating: 4.5,
      numReviews: 2,
      description: 'USB Reader for PC-Less Presentations & Networked Presentation',
    },
    {
     
      name: 'smartphone Acer',
      slug: 'Z150',
      category: 'Telefona',
      image: '/images/p10.jpg',
      price: 250,
      countInStock: 0,
      brand: 'Acer',
      rating: 4.0,
      numReviews: 1,
      description: '32 GB RAM',
    },
    {
      name: 'Mac Book Pro 2022',
      slug: '13-inch MacBook Pro with M2',
      category: 'Laptop',
      image: '/images/p9.jpg',
      price: 2000,
      countInStock: 5,
      brand: 'Apple',
      rating: 4.5,
      numReviews: 1,
      description: 'macOS Ventura ',
    },
    {
      name: 'Smartphone Samsung',
      slug: 'Samsung Galaxy 21 Ultra',
      category: 'Telefona',
      image: '/images/p6.jpg',
      price: 980,
      countInStock: 4,
      brand: 'Samsung',
      rating: 4.5,
      numReviews: 1,
      description: '256 GB ',
    },
    
  ],
};
export default data;
