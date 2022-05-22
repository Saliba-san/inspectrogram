import {FormControl, InputLabel, OutlinedInput, Select} from "@mui/material";
import React from "react";
import {useStyles} from "../../styles";

export type SelectListType = {
    data: string,
    setData: (data: string) => void,
    options: {[key: string | number]: any },
    label: string
}

export function SelectList({data, setData, options, label}: SelectListType) {

    const classes = useStyles();

    function handleDataUpdate (newval: number | string) {

        if (typeof newval === "string") {
            setData(newval)
        } else {
            setData(newval.toString())
        }
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
                                <option value={value.value}>{value.title}</option>
                            )
                        })}
                </Select>
            </FormControl>
        </div>
    )
}