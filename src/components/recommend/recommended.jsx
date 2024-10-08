import Button from "../Button";
import "./recommended.css";
import SortBy from '../sortby';

const Recommended = ({ handleClick }) => {
  return (
    <>
    
      <div className="row">
        <div className="col-md-3 offset-3  d-flex align-self-stretch">
                
        {/* <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
        </div> */}
        </div>
        <div  className='offset-md-3  d-flex align-self-stretch'>
          <SortBy />
        </div>
      </div>
    </>
  );
};

export default Recommended;