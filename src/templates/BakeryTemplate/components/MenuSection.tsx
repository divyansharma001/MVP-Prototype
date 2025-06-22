import React from 'react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuSectionProps {
  primaryColor: string;
  menuItems: MenuItem[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ primaryColor, menuItems }) => {
  const defaultItems: MenuItem[] = [
    { name: 'Sourdough Loaf', description: 'Classic, rustic, and crusty.', price: '$8.00' },
    { name: 'Croissant', description: 'Buttery, flaky, and delicious.', price: '$4.50' },
    { name: 'Chocolate Chip Cookie', description: 'A timeless favorite.', price: '$3.00' },
  ];
  
  const itemsToDisplay = menuItems.length > 0 ? menuItems : defaultItems;

  return (
    <div className="py-16 px-4 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl font-bold text-center mb-2`}>Our Menu</h2>
        <div className={`w-24 h-1 bg-${primaryColor} mx-auto mb-10`}></div>
        <div className="grid md:grid-cols-2 gap-8">
          {itemsToDisplay.map((item, index) => (
            <div key={index} className="flex justify-between border-b pb-2">
              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
              <p className={`font-bold text-lg text-${primaryColor}`}>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;