import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    mainSection: {
        padding: theme.spacing(5)
    }
}));





export default function CustomStepper(props) {
    const classes = useStyles();

    const { getSteps, getStepContent, activeStep = 0, handleNext, handleBack } = props;

    const steps = getSteps();

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div className={classes.mainSection}>
                {
                    activeStep === steps.length ? (
                        null
                    )
                        :
                        (
                            <div>
                                <div className={classes.instructions}>{getStepContent(activeStep)}</div>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.backButton}
                                    >
                                        Back
                                </Button>
                                    <Button variant="contained" color="primary" onClick={
                                        activeStep === steps.length - 1 ? () => handleNext(true) : () => handleNext()}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        )}
            </div>
        </div>
    );
}