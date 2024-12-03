
const Header = ({title}) => {
  
  return (
    <div>
      <div className="container-logo">
        <h1 className="container-logo-titulo">{title}</h1>
        <img className="logoNasa" src="https://blogs.nasa.gov/commercialcrew/wp-content/uploads/sites/230/2022/11/NASA-meatball-for-carousel-120820.jpg" alt="" />
      </div>
    </div>
  );
};

export default Header;
