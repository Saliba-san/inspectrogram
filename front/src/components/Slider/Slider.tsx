import {Box} from "@mui/material";
import React, {useState} from "react";

export function Slider () {

    const [specLenght, setSpecLenght] = useState([0,120])
    const minDistance = 15;

    function valuetext(value: number) {
        return `${value} s`;
    }

    const handleChange1 = ( newValue: number, activeThumb: number) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setSpecLenght([Math.min(newValue[0], specLenght[1] - minDistance), specLenght[1]]);
        } else {
            setSpecLenght([specLenght[0], Math.max(newValue[1], specLenght[0] + minDistance)]);
        }
    };

    return(
        <div style={{flex: "content"}}>
            <Box sx={{ width: 300 }}>
                {/*<Slider*/}
                {/*    value={specLenght}*/}
                {/*    valueLabelDisplay="auto"*/}
                {/*    getAriaValueText={valuetext}*/}
                {/*    disableSwap*/}
                {/*/>*/}
            </Box>
        </div>
    )
}