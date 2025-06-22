import type { SiteData } from '../types/page-builder';
import { v4 as uuidv4 } from 'uuid';

export const initialSiteData: SiteData = {
  global: {
    bakeryName: 'Phlox Candy',
    logoUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80',
    primaryColor: 'orange',
    font: 'playfair',
  },
  header: {
    id: uuidv4(),
    type: 'Header',
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
  page: [
    {
      id: uuidv4(),
      type: 'Hero',
      preHeading: 'Confectionery',
      mainHeading: 'Make Your Baking Better Tasting',
      featuredProduct: {
        name: 'Chocolate Cake',
        description: 'The quick, brown fox jumps over a lazy dog.',
        image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80',
      },
      primaryCtaText: 'Shop Now',
      secondaryCtaText: 'Custom Order',
      backgroundImage: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80',
    },
    {
      id: uuidv4(),
      type: 'CategoryShowcase',
      preHeading: 'Which One',
      heading: 'Shop By Category',
      categories: [
        { tag: 'Coffee', title: 'Local Donuts', description: 'The quick, brown fox jumps over by when.', image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { tag: 'Breakfast', title: 'Chocolate Cake', description: 'The quick, brown fox jumps over a lazy dog.', image: 'https://images.pexels.com/photos/2067433/pexels-photo-2067433.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { tag: 'Choco Cherry', title: 'Choco Cherry', description: 'The quick, brown fox jumps over a lazy dog.', image: 'https://images.pexels.com/photos/1400172/pexels-photo-1400172.jpeg?auto=compress&cs=tinysrgb&w=600' },
      ],
    },
    {
      id: uuidv4(),
      type: 'BestSellers',
      preHeading: 'Best Seller',
      heading: 'This Week!',
      products: [
        { id: 'p1', name: 'Chocolate Cake', price: 21.00, rating: 4, image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80' },
        { id: 'p2', name: 'Cupcake Basket', price: 32.00, rating: 5, image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80' },
        { id: 'p3', name: 'Choco Cherry', price: 28.00, rating: 5, image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80' },
        { id: 'p4', name: 'Party Cake', price: 42.00, rating: 3, image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80' },
        { id: 'p5', name: 'Cream Cookies', price: 34.00, rating: 5, image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80' },
        { id: 'p6', name: 'Fruit Cherry', price: 23.00, rating: 5, image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80' },
        { id: 'p7', name: 'Cereal Donut', price: 16.00, rating: 4, sale: true, image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80' },
        { id: 'p8', name: 'Tiramisu Cake', price: 37.00, rating: 5, image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80' },
      ],
    },
    {
      id: uuidv4(),
      type: 'FullWidthCta',
      preHeading: 'Cup Cake',
      heading: 'Unique Sweets For Lovers',
      image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80',
    },
    {
      id: uuidv4(),
      type: 'Testimonials',
      preHeading: 'Testimonial',
      heading: 'We Care About Our Customers Experience Too',
      testimonials: [
        { name: 'Bruce Hardy', company: 'Paypal Inc.', quote: 'When, while lovely valley teems with vapour around meand meridian sun strikes.', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80' },
        { name: 'Mark Smith', company: 'Google Inc.', quote: 'When, while lovely valley teems with vapour around meand meridian sun strikes the upper.', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=800' },
        { name: 'Vera Duncan', company: 'Amazon Inc.', quote: 'When, while lovely valley teems with vapour around meand meridian sun strikes.', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80' },
      ],
    },
    
 
    
  ],
   footer: {
    id: uuidv4(),
    type: 'Footer',
    copyrightText: `Copyright © ${new Date().getFullYear()} Phlox Candy. All Rights Reserved.`,
  }
};