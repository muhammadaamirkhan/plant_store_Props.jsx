import React from 'react';
import HeroBanner from './components/views/home/HeroBanner';
import SectionContainer from './components/layouts/SectionContainer';
import PlantCard from './components/views/home/PlantCard';
import CategoryCard from './components/views/home/CategoryCard';
import TestimonialCard from './components/views/home/TestimonialCard';
import NewsletterSignup from './components/views/home/NewsletterSignup';

const App = () => {
  const featuredPlants = [
    {
      id: 1,
      name: 'Snake Plant',
      price: 29.99,
      image: '/images/Featured/snakeplant.jpg',
      category: 'Indoor'
    },
    {
      id: 2,
      name: 'Peace Lily',
      price: 24.99,
      image: '/images/Featured/peacelily.jpg',
      category: 'Indoor'
    },
    {
      id: 3,
      name: 'Aloe Vera',
      price: 19.99,
      image: '/images/Featured/aloevera.jpg',
      category: 'Succulent'
    },
    {
      id: 4,
      name: 'Fiddle Leaf Fig',
      price: 39.99,
      image: '/images/Featured/fiddleleafe.jpg',
      category: 'Indoor'
    }
  ];

  const categories = [
    {
      id: 1,
      name: 'Indoor Plants',
      description: 'Perfect for your living space',
      image: '/images/Categories/indoor.jpg',
      icon: '🌿'
    },
    {
      id: 2,
      name: 'Outdoor Plants',
      description: 'Enhance your garden',
      image: '/images/Categories/outdoor.jpg',
      icon: '🌳'
    },
    {
      id: 3,
      name: 'Flowering Plants',
      description: 'Add color to your life',
      image: '/images/Categories/flower.jpg',
      icon: '🌸'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Plant Enthusiast',
      content: 'The plants I received were healthy and beautifully packaged.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Interior Designer',
      content: 'Great variety of plants perfect for home staging.',
      rating: 4
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Office Manager',
      content: 'Plants always arrive in perfect condition.',
      rating: 5
    }
  ];

  return (
    <>
      <HeroBanner />

      <SectionContainer title="Featured Plants" bg="bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredPlants.map((plant) => (
            <PlantCard key={plant.id} {...plant} />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer title="Top Plant Categories" bg="bg-gradient-to-b from-white to-green-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer title="What Our Customers Say" bg="bg-gradient-to-b from-green-50 to-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </SectionContainer>

      <NewsletterSignup />
    </>
  );
};

export default App;
