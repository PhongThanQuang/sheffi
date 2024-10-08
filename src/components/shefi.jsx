import Dropdown from 'react-bootstrap/dropdown';

function MenuBanner() {
  return (
    <div style={{position: 'relative',marginLeft: '44.9%'}}>
    <Dropdown>
      <Dropdown.Toggle style={{backgroundColor: '#c3dacc86',color: 'black',outline: 'none'}} id="dropdown-basic">
        SheFi
      </Dropdown.Toggle>

    <div style={{position: 'absolute',marginLeft: '55%'}}>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Gifts for All</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Wommens Whats New</Dropdown.Item>
        <Dropdown.Item href="#/action-3">All Wommens</Dropdown.Item>
        <Dropdown.Item href="#/action-4">All Mens</Dropdown.Item>
      </Dropdown.Menu>
    </div>
    </Dropdown>
    </div>
  );
}

export default MenuBanner;