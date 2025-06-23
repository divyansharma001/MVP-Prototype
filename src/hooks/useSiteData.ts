import { useState, useEffect } from 'react';
import type { SiteData, PageComponent } from '../types/page-builder';
import { initialSiteData } from '../data/initialSiteData';
import { v4 as uuidv4 } from 'uuid';

export const useSiteData = () => {
    const [siteData, setSiteData] = useState<SiteData>(() => {
        try {
            const savedData = localStorage.getItem('webcraft-site-data');
            return savedData ? JSON.parse(savedData) : initialSiteData;
        } catch (error) {
            console.error("Could not load site data from localStorage", error);
            return initialSiteData;
        }
    });

    useEffect(() => {
        localStorage.setItem('webcraft-site-data', JSON.stringify(siteData));
    }, [siteData]);

    const updateComponent = (componentId: string, newProps: Partial<PageComponent>) => {
        setSiteData(prev => ({
            ...prev,
            page: prev.page.map(comp =>
                comp.id === componentId ? { ...comp, ...newProps } as PageComponent : comp
            ),
        }));
    };

    const addComponent = (type: PageComponent['type'], index: number) => {
        let newComponent: PageComponent;
        const newId = uuidv4();

        // --- THIS IS THE NEW, ROBUST "COMPONENT FACTORY" LOGIC ---
        switch (type) {
            case 'Hero':
                newComponent = {
                    id: newId,
                    type: 'Hero',
                    preHeading: 'New Hero Section',
                    mainHeading: 'Amazing Content Here',
                    featuredProduct: { name: 'New Product', description: 'A great description.', image: 'https://picsum.photos/id/102/100/100' },
                    primaryCtaText: 'Get Started',
                    secondaryCtaText: 'Learn More',
                    backgroundImage: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                };
                break;
            case 'CategoryShowcase':
                newComponent = {
                    id: newId,
                    type: 'CategoryShowcase',
                    preHeading: 'Our Categories',
                    heading: 'Browse by Section',
                    categories: [ // It must be created with at least 3 default items for the UI to work
                        { tag: 'Category 1', title: 'First Category', description: 'Description for the first category.', image: 'https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&w=600' },
                        { tag: 'Category 2', title: 'Second Category', description: 'Description for the second category.', image: 'https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg?auto=compress&cs=tinysrgb&w=600' },
                        { tag: 'Category 3', title: 'Third Category', description: 'Description for the third category.', image: 'https://images.pexels.com/photos/235615/pexels-photo-235615.jpeg?auto=compress&cs=tinysrgb&w=600' },
                    ]
                };
                break;
            case 'BestSellers':
                newComponent = {
                    id: newId,
                    type: 'BestSellers',
                    preHeading: 'Top Picks',
                    heading: 'Our Best Sellers',
                    products: [
                        { id: uuidv4(), name: 'New Product 1', price: 19.99, rating: 5, image: 'https://i.imgur.com/7gK5nI7.png' },
                        { id: uuidv4(), name: 'New Product 2', price: 29.99, rating: 4, image: 'https://i.imgur.com/83Te3a1.png' },
                    ]
                };
                break;
            // Add default creation logic for other components (FullWidthCta, Testimonials, etc.) here
            // For now, we'll stop here to fix the crash.
            default:
                console.error(`Component type "${type}" has no creation logic.`);
                return;
        }
        
        const newPage = [...siteData.page];
        const insertionIndex = index === -1 ? newPage.length : index;
        newPage.splice(insertionIndex, 0, newComponent);
        setSiteData(prev => ({ ...prev, page: newPage }));
    };

    const removeComponent = (componentId: string) => {
        setSiteData(prev => ({
            ...prev,
            page: prev.page.filter(comp => comp.id !== componentId),
        }));
    };

    const moveComponent = (componentId: string, direction: 'up' | 'down') => {
        setSiteData(prev => {
            const page = [...prev.page];
            const index = page.findIndex(c => c.id === componentId);

            if (index === -1) return prev;
            const newIndex = direction === 'up' ? index - 1 : index + 1;
            if (newIndex < 0 || newIndex >= page.length) return prev;
            
            [page[index], page[newIndex]] = [page[newIndex], page[index]];

            return { ...prev, page };
        });
    };

    return { siteData, setSiteData, updateComponent, addComponent, removeComponent, moveComponent };
};