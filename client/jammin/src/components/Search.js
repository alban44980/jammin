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

function Search() {
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
  };

  return (
    <Combobox onSelect={handleSelect} aria-labelledby="demo">
      <ComboboxInput value={value} onChange={handleInput} disabled={!ready} />
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
