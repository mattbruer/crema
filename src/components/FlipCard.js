import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const FlipCard = ({ front, back }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        style={{ width: '100%' }}
        onMouseEnter={() => setIsFlipped(!isFlipped)}
      >
        {front}
      </div>
      <div
        style={{ width: '100%', height: '100%' }}
        onMouseLeave={() => setIsFlipped(!isFlipped)}
      >
        {back}
      </div>
    </ReactCardFlip>
  );
};

export default FlipCard;
