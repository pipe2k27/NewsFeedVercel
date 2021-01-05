import React, { useEffect } from 'react';

const SearchMenu = ({ defaultUser, onGet }) => {
  useEffect(() => {
    onGet('home');
  });

  return (
    <div className="center bar">
      <button className="button bar-button" onClick={() => onGet('home')}>
        General
      </button>
      <button className="button bar-button" onClick={() => onGet(1)}>
        Politica
      </button>
      <button className="button bar-button" onClick={() => onGet(2)}>
        Internacionales
      </button>
      <button className="button bar-button" onClick={() => onGet(3)}>
        Tecnologia
      </button>
      <button className="button bar-button" onClick={() => onGet(4)}>
        Entretenimiento
      </button>
      <button className="button bar-button" onClick={() => onGet(5)}>
        Deportes
      </button>
    </div>
  );
};

export default SearchMenu;
