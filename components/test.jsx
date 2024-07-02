import React, { useState } from 'react';

const Test = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className="hover:bg-gray-200">Menu</button>
      {isHovered && (
        <div className="absolute top-10 left-0 bg-white border shadow">
          {/* Your menu items */}
          <a href="">Hi</a>
        </div>
      )}
    </div>
  );
};
export default Test;