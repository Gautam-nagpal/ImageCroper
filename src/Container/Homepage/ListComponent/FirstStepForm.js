import React from "react";
import { Grid, makeStyles } from "@material-ui/core"
import { InputField } from "../../../Components";


const FirstStepForm = (props) => {
    const classes = useFormStyles();
    const { editedData, errors, onChange } = props
    return (
        <Grid item xs={12} className={classes.form}>
            <Grid item xs={12} sm={12} md={12} className={classes.inputFields}>
                <InputField
                    type="text"
                    label="First name"
                    name="first_name"
                    value={editedData.first_name}
                    onChange={(e) => onChange(e.target.name, e.target.value)}
                    errors={errors.first_name}
                />
            </Grid>

            <Grid item xs={12} className={classes.inputFields}>
                <InputField
                    type="text"
                    label="Last name"
                    name="last_name"
                    value={editedData.last_name}
                    onChange={(e) => onChange(e.target.name, e.target.value)}
                    errors={errors.last_name}
                />
            </Grid>

            <Grid item xs={12} className={classes.inputFields}>
                <InputField
                    type="email"
                    label="Email"
                    name="email"
                    value={editedData.email}
                    onChange={(e) => onChange(e.target.name, e.target.value)}
                    errors={errors.email}
                />
            </Grid>

            <Grid item xs={12} className={classes.inputFields}>
                <InputField
                    type="text"
                    label="Ph Number"
                    name="phone"
                    value={editedData.phone}
                    onChange={(e) => onChange(e.target.name, e.target.value)}
                    errors={errors.phone}
                />
            </Grid>

            <Grid item xs={12} className={classes.inputFields}>
                <InputField
                    type="text"
                    label="Salary"
                    name="salary"
                    value={editedData.salary}
                    onChange={(e) => onChange(e.target.name, e.target.value)}
                    errors={errors.salary}
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


export default FirstStepForm;
