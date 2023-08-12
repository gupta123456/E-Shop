import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton(props) {
  const [alignment, setAlignment] = React.useState('web');
  // eslint-disable-next-line
  const [cardData, setCardData] = React.useState(props.data);
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  function filterData(event){
    var filteredData = [];
    var data = cardData;
    console.log(event.target.value);
    for(var i=0;i<data.length;i++){
        if(data[i].category===event.target.value){
          filteredData.push(data[i]);
        }
    }
    props.updateData(filteredData);
  }

  function allData(){
    props.updateData(cardData);
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
      <ToggleButton value="apparel" onClick={filterData}>APPAREL</ToggleButton>
      <ToggleButton value="electronics" onClick={filterData}>ELECTRONICS</ToggleButton>
      <ToggleButton value="footware" onClick={filterData}>FOOTWARE</ToggleButton>
      <ToggleButton value="personal care" onClick={filterData}>PERSONAL CARE</ToggleButton>
    </ToggleButtonGroup>
  );
}