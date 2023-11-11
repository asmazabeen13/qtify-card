import "./card.css";

export default () => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-img-frame">
          <img src="bollywood-hits.png" className="card-img" />
        </div>
        <div className="card-content">
          <span className="card-content-pill">100M FOLLOWS</span>
        </div>
      </div>
      <p className="card-label"> NEW BOLLYWOOD</p>
    </div>
  );
};
