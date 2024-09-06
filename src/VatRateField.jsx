import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const VatRateField = (props) => {

    // destructure to remove warning about useEffect and any prop causing it to fire
    const { updatePrices } = props;

    useEffect(() => {
        updatePrices();
    }, [props.value, updatePrices]);

    return (
        <div className={props.customstyle}>
            VAT Rate: &nbsp;
            <select value={props.value} onChange={(event) => { props.vatRateChanged(+event.target.value); }}>
                <option value="20">20%</option>
                <option value="15">15%</option>
                <option value="12.5">12.5%</option>
                <option value="0">Exempt</option>
            </select>
        </div>,
        <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown
        </button>
        <ul class="dropdown-menu">
          <li><button class="dropdown-item" type="button">Dropdown item</button></li>
          <li><button class="dropdown-item" type="button">Dropdown item</button></li>
          <li><button class="dropdown-item" type="button">Dropdown item</button></li>
        </ul>
      </div>

        
    );
}



export default VatRateField;
