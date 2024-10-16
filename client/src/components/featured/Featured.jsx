import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_500,q_auto:eco,dpr_2,f_auto,fl_progressive//fitso-images/uploads/FacilityatKormangalaTT11655469012.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Kormangala</h1>
          <h2> 5 sports/47 courts</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://content.jdmagicbox.com/comp/bangalore/p2/080pxx80.xx80.240408171017.t1p2/catalogue/smt-nagarathnamma-stadium-by-tsg-sports-arena-soladevanahalli-bangalore-swimming-pools-vq3p1b4byd.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Indiranagar</h1>
          <h2>7 sports/34 courts</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://content.jdmagicbox.com/v2/comp/delhi/70/011p2078170/catalogue/r-k-khanna-tennis-stadium-safdarjung-enclave-delhi-stadiums-yjom5a.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Hauz Khas</h1>
          <h2>3 sports/9 courts</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
