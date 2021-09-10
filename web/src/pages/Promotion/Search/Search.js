import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import PromotionCard from 'components/Promotion/Card/Card';

const PagesPromotionSearch = () => {
  const [promotions, setPromotions] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/promotions?_embed=comments')
      .then((response) => {
        setPromotions(response.data);
      });
  }, []);

  return (
    <div
        style={{
          maxWidth: 800,
          margin: '30px auto',
      }}>
      
      {promotions.map((promotion) => (
        <PromotionCard promotion={promotion}/>
      ))}
    </div>
    )
}

export default PagesPromotionSearch;