import  React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Category from "./Category/category";
import Price from "./Price/Price";
import Colors from "./Colors/Color";

function SidebarModal({handleChange}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [sortBy,setSortBy] = useState('Featured');
    const changeCountry = (event) => {
        setSortBy(event.target.value);
    }

    const lists = [
        {label: 'Featured'},
        {label: 'Top rate'},
        {label: 'New Arrival'},
        {label: 'Price: Hight to Low'},
        {label: 'Price: Low to Hight'}
    ]
  return (
    <>
    <div className='row'>
      <Button className='filter-button' style={{background:'#fff',color:'black'}} onClick={() => setShow(true)}>
        Filters and Sort
      </Button>

      <Modal
      style={{width: '80%'}}
      fullscreen
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-200w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
          <button style={{background:'#c3dacc86',color:'black'}}>View Items</button>
          <button style={{background:'#c3dacc86',color:'black'}} onClick={handleClose}>X</button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{width:'100%',left:'10%',overflowY:'auto'}}>
        <section className="sidebarr" style={{width: '30%'}}>
        <h2>Sort By: {sortBy} </h2>
        {lists.map((item,i) => (
            <div className='' key={i} style={{width:'100%',right:'100%'}}>
                
          <label><input type='radio' checked={setSortBy === item.label} value={item.label} onChange={changeCountry}></input>{item.label}</label>
          <br/>
      
            </div>
        ))}
        

        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
        </Modal.Body>
      </Modal>
      </div>
    </>
  );
}

export default SidebarModal;