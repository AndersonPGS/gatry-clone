import React from 'react';

const PromotionCard = ({promotion}) => (
  <div>
    <img src={promotion.imageUrl} alt={promotion.title} />
    <div>
      <h1>{promotion.title}</h1>
      <span>R$ {promotion.price}</span>
      <footer>
        {promotion.comments.length > 0 && (
          <div>"{promotion.comments[0].comment}"</div>
        )}
        
        <div>{promotion.comments.length} Comentários</div>
        <a href={promotion.url} target="_blank" rel="noreferrer">IR PARA O SITE</a>
      </footer>
    </div>
  </div>
)

export default PromotionCard;