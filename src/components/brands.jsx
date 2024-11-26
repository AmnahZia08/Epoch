import React, { useEffect, useState } from 'react';
import brand_1 from '../assets/img/brand1.png';
import brand_2 from '../assets/img/brand2.png';
import brand_3 from '../assets/img/brand3.png';
import Marquee from 'react-fast-marquee';
const brandsData = [
  {
    id: 1,
    brand_logo: brand_1,
  },
  {
    id: 2,
    brand_logo: brand_2,
  },
  {
    id: 3,
    brand_logo: brand_3,
  },
];

const Brands = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='brands-area ptb-100'>
      <div className='container'>
        <p>Our Partner By Logo</p>
        <Marquee
          autoFill
          pauseOnHover
          speed={40}
          gradient={!isSmallScreen}
          gradientColor='rgba(0, 6, 16, 1)'
        >
          {brandsData.map(({ id, brand_logo }) => {
            return (
              <div key={id} className='me-5'>
                <img src={brand_logo} alt='image' />
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default Brands;
