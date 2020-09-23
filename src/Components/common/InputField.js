import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            width: "100%"
        },
    },
}));

const InputField = (props) => {
    const classes = useStyles();
    let {
        type,
        name,
        value,
        errors,
        onChange,
        label,
        className,
        defaultValue,
        ...rest
    } = props;
    return (
        <div className={classes.root} >
            {
                errors ?
                    <TextField
                        error
                        label={label}
                        value={value}
                        onChange={onChange}
                        helperText={errors}
                        variant="outlined"
                        type={type}
                        name={name}
                        inputProps={{
                            accept: rest.accept
                        }}
                        {...rest}
                    />
                    :
                    <TextField
                        label={label}
                        value={value}
                        name={name}
                        onChange={onChange}
                        helperText={errors}
                        variant="outlined"
                        type={type}
                        inputProps={{
                            accept: rest.accept
                        }}
                        {...rest}
                    />
            }
        </div>
    );
}

export default InputField;