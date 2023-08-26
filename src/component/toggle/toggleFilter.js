import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton(props) {
  const [alignment, setAlignment] = React.useState('web');
  // eslint-disable-next-line
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const Products = props.data;

  function filterData(event){
    var filteredData = [];
    var data = Products;
    console.log(event.target.value,data);
    for(var i=0;i<data.length;i++){
        if(data[i].category===event.target.value){
          filteredData.push(data[i]);
        }
    }
    console.log(filteredData);
    props.updateData(filteredData);
  }

  function allData(){
    props.updateData(props.data);
  }

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="all" onClick={allData}>All</ToggleButton>
      <ToggleButton value="Apparel" onClick={filterData}>APPAREL</ToggleButton>
      <ToggleButton value="Electronics" onClick={filterData}>ELECTRONICS</ToggleButton>
      <ToggleButton value="Footware" onClick={filterData}>FOOTWARE</ToggleButton>
      <ToggleButton value="Personal Care" onClick={filterData}>PERSONAL CARE</ToggleButton>
    </ToggleButtonGroup>
  );
}