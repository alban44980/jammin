import React from 'react';
import usePlacesAutocomplete from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

import "@reach/combobox/styles.css";

function Search({setCity, setLocation, searchJams, inputstyle, inputcontainstyle, cityPlace, locPlace, findPlaceholder}) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
  } = usePlacesAutocomplete();

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = (val) => {
    setValue(val, false);
    if(setCity){
    setCity(val);
    }
    if(setLocation){
      setLocation(val)
    }
    if(searchJams){
      searchJams(val)
    }
  };

  const style = {
    width: '80%',
    height: '60%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: '20px',
    color: 'white',
    padding: '1rem'
  }

  const containerStyle = {
    height: '20%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  return (
    <Combobox style={inputstyle ? inputstyle : containerStyle} onSelect={handleSelect} aria-labelledby="demo">
      <ComboboxInput required style={inputcontainstyle ? inputcontainstyle :style} value={value} onChange={handleInput} disabled={!ready} placeholder={cityPlace || locPlace || findPlaceholder}/>
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
}

export default Search

//   const {ready, value, suggestions: {status, data}, setValue, clearSuggestion} = usePlacesAutocomplete({
//     requestOptions: {
//       location: {lat: () => 41.3874, lng: () => 2.1686}, //it will prefere suggestions near this location (which is Barcelona)
//       radius: 200 * 10000 //how far arround this middlepoint do you want preferred locations for
//     }
//   })

//   return  (
//     <div>
//       <Combobox onSelect={(address) => {
//         console.log(address)
//         }}
//       >
//         <ComboboxInput value={value} onChange={(e) => {
//           setValue(e.target.value)
//         }}
//         // disabled={!ready}
//         placeholder="Enter an address"
//         />
//         <ComboboxPopover >
//           {status==="OK" & data.map(({id,description}) => <ComboboxOption key={id} value={description}/>)}
//         </ComboboxPopover>

//       </Combobox>
//     </div>
//   )
