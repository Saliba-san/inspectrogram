import {FormControl, InputLabel, OutlinedInput, Select} from "@mui/material";
import React from "react";
import {useStyles} from "../../styles";

export type SelectListType = {
    data: number | string,
    setData: (data: string | number) => void,
    options: {[key: string | number]: any },
    label: string
}

export function SelectList({data, setData, options, label}: SelectListType) {

    const classes = useStyles();

    function handleDataUpdate (newval: number | string) {
        setData(newval)
    }

    return (
        <div className={classes.paramInput}>
            <FormControl style={{width: 300}}>
                <InputLabel>{label}</InputLabel>
                <Select
                    native
                    input={<OutlinedInput label={label} />}
                    value={data}
                    onChange={(event) => handleDataUpdate(event.target.value)}
                >
                    {
                        Object.entries(options).map(([key, value]) => {
                            return(
                                <option value={value.title} >{value.value}</option>
                            )
                        })}
                </Select>
            </FormControl>
        </div>
    )
}