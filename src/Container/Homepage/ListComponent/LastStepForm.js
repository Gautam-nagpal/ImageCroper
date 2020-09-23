import React, { useState } from "react";
import { Grid, makeStyles, InputAdornment, IconButton } from "@material-ui/core"
import { InputField } from "../../../Components";

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const LastStepForm = (props) => {
    const classes = useFormStyles();
    const [showpass, togglePass] = useState(false)
    const { editedData, errors, onChange } = props;

    function toggle() {
        togglePass(!showpass)
    }

    return (
        <Grid item xs={12} className={classes.form}>
            <Grid item xs={12} sm={12} md={12} className={classes.inputFields}>
                <InputField
                    type={showpass ? "text" : "password"}
                    label="Password"
                    name="password"
                    value={editedData.password}
                    onChange={(e) => onChange(e.target.name, e.target.value)}
                    errors={errors.password}

                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={toggle}
                            >
                                {showpass ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }}
                />
            </Grid>

        </Grid>
    )
}


const useFormStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    form: {
        padding: theme.spacing(5)
    },

    inputFields: {
        margin: theme.spacing(2, 0)
    }

}));


export default LastStepForm;
