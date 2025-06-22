import type { BakeryTemplateData } from '../templates/BakeryTemplate';

export const bakeryDemoData: BakeryTemplateData = {
  global: {
    bakeryName: 'Phlox Candy',
    logoUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', 
    primaryColor: 'orange',
    font: 'playfair',
  },
  header: {
    phone: '+1 86.36.166',
    email: 'contact@yourdomain.com',
    navLinks: [
      { title: 'Home', href: '#' },
      { title: 'About', href: '#' },
      { title: 'Shop', href: '#' },
      { title: 'Blog', href: '#' },
      { title: 'Contact', href: '#' },
    ],
  },
  hero: {
    preHeading: 'Confectionery',
    mainHeading: 'Make Your Baking Better Tasting',
    featuredProduct: {
      name: 'Chocolate Cake',
      description: 'The quick, brown fox jumps over a lazy dog.',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    },
    primaryCtaText: 'Shop Now',
    secondaryCtaText: 'Custom Order',
    backgroundImage: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80',
  },
  categories: [
      { title: 'Local Donuts', description: 'The quick, brown fox jumps over by when.', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80' },
      { title: 'Chocolate Cake', description: 'The quick, brown fox jumps over a lazy dog.', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80' },
      { title: 'Choco Cherry', description: 'The quick, brown fox jumps over a lazy dog.', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80' },
  ],
  bestSellers: [
    { id: 'p1', name: 'Chocolate Cake', price: 21.00, rating: 4, image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80' },
    { id: 'p2', name: 'Cupcake Basket', price: 32.00, rating: 5, image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80' },
    { id: 'p3', name: 'Choco Cherry', price: 28.00, rating: 5, image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80' },
    { id: 'p4', name: 'Party Cake', price: 42.00, rating: 3, image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80' },
    { id: 'p5', name: 'Cream Cookies', price: 34.00, rating: 5, image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80' },
    { id: 'p6', name: 'Fruit Cherry', price: 23.00, rating: 5, image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80' },
    { id: 'p7', name: 'Cereal Donut', price: 16.00, rating: 4, sale: true, image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80' },
    { id: 'p8', name: 'Tiramisu Cake', price: 37.00, rating: 5, image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80' },
  ],
  fullWidthCta: {
      preHeading: 'Shop Confectionery',
      heading: 'Raspberry French Macaron Cake',
      image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80',
  },
  testimonials: [
      { name: 'Bruce Hardy', company: 'Paypal Inc.', quote: 'When, while lovely valley teems with vapour around meand meridian sun strikes.', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80' },
      { name: 'Mark Smith', company: 'Google Inc.', quote: 'When, while lovely valley teems with vapour around meand meridian sun strikes the upper.', image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80' },
      { name: 'Vera Duncan', company: 'Amazon Inc.', quote: 'When, while lovely valley teems with vapour around meand meridian sun strikes.', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80' },
  ],
  emailCta: {
      preHeading: 'Get Started',
      heading: 'Great Customers Are Using The Confectionery Shop',
      backgroundImage: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80',
  },
};