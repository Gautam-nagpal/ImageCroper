import React, { useState } from "react";
import { Grid, makeStyles } from "@material-ui/core"
import validateInput from "../../../utilities/validation";
import FirstStepForm from "./FirstStepForm";
import Imagecroper from "./Imagecroper";
import LastStepForm from "./LastStepForm";
import CustomStepper from "./CustomStepper"

function Editor(props) {
    const { setlist, data, lists, index, closeModal } = props;
    const classes = useStyles();

    const [activeStep, setActiveStep] = useState(0);
    const [editedData, handleEdit] = useState({ ...data })
    const [errors, handleErrors] = useState({})

    function handleNext(key = false) {
        if (isValid()) {
            if (key) {
                let newList = [...lists]
                newList[index] = editedData;
                setlist(newList);
                closeModal()
                return
            }
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    function handleBack() {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    function onChange(name, value) {
        handleEdit({
            ...editedData,
            [name]: value
        })
        changeError(name)
    }

    function changeError(name) {
        handleErrors({
            ...errors,
            [name]: ""
        })
    }

    function isValid() {
        const { isValid, errors } = validateInput(editedData, `${activeStep}`)
        if (!isValid) {
            handleErrors(errors)
        }
        return isValid
    }


    function getSteps() {
        return ['EditForm', 'Edit Image', 'Edit Password'];
    }

    function getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <FirstStepForm
                    editedData={editedData}
                    errors={errors}
                    onChange={onChange}
                />;
            case 1:
                return <Imagecroper
                    image={editedData.image}
                    errors={errors}
                    changeError={changeError}
                    onChange={onChange}
                />;
            case 2:
                return <LastStepForm
                    editedData={editedData}
                    errors={errors}
                    onChange={onChange}
                />;
            default:
                return 'Unknown stepIndex';
        }
    }

    return (
        <Grid container>
            <Grid item xs={12} className={classes.root}>
                <CustomStepper
                    getSteps={getSteps}
                    getStepContent={getStepContent}
                    activeStep={activeStep}
                    setActiveStep={setActiveStep}
                    handleNext={handleNext}
                    handleBack={handleBack}

                />

            </Grid>
        </Grid>
    )
}


const useStyles = makeStyles((theme) => ({
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

export default Editor;
