import React, { useEffect, useState } from 'react';
import './css/NewsList.css';

const NewsList = ({ news }) => {
  const [quantity, setQuantity] = useState(21);

  useEffect(() => {
    setQuantity(21);
  }, [news]);

  return (
    <div style={{ position: 'relative' }}>
      <div className="newsList center">
        {news.map((e, i) => {
          if (i < quantity && e.img_url !== null) {
            return (
              <div key={i} className="card darker-back">
                <div className="imageHolder">
                  <img
                    src={
                      e.img_url === null
                        ? 'https://i1.sndcdn.com/avatars-000270080057-j5h0mz-t500x500.jpg'
                        : e.img_url
                    }
                    alt={i}
                    className="pic"
                  />
                </div>
                <div className="textHolder">
                  <span className="newsTitle cool-text">{e.title}</span>
                </div>
                <div>
                  <a className="button read-more" href={e.url}>
                    Leer Mas
                  </a>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div style={{ position: 'relative', height: 50 }}>
        <a
          className="load-more"
          onClick={() => {
            setQuantity((prev) => prev + 20);
          }}
        >
          load more
        </a>
      </div>
    </div>
  );
};

export default NewsList;
