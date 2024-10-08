import React,{useState,useEffect,useRef} from "react";
import Dropdown from 'react-bootstrap/dropdown';

const lists = [
    {label: 'Featured'},
    {label: 'Top rate'},
    {label: 'New Arrival'},
    {label: 'Price: Hight to Low'},
    {label: 'Price: Low to Hight'}
]



function SortBy(){
    const [sortBy,setSortBy] = useState('');
    const changeCountry = (event) => {
        setSortBy(event.target.value);
    }
    return(
        <div className=" text-white" style={{width:'20rem'}}>
            <div className="w-50">
                <select style={{cursor:'pointer'}} className="form-control" onChange={changeCountry}>
                    <option value="" style={{display:'none'}}>SortBy: Featured</option>
                    {lists.map((item,i) => (
                        <option key={i} value={item.label} style={{padding:'40px',cursor:'pointer'}}>{item.label}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}
export default SortBy;