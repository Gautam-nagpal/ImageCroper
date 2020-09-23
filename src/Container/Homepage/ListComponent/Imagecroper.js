import React, { useState } from "react";
import Cropper from "react-cropper";
import { Grid, makeStyles, Button } from "@material-ui/core"
import "cropperjs/dist/cropper.css";
import { InputField } from "../../../Components";


function Imagecroper(props) {
    const { errors, changeError, onChange: onChangeParent } = props
    const [image, setImage] = useState(props.image);
    const [cropData, setCropData] = useState(null);
    const [cropper, setCropper] = useState();
    const classes = useFormStyles();

    const onChange = (e) => {
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }

        changeError("image")
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(files[0]);
    };

    const getCropData = () => {
        if (typeof cropper !== "undefined") {
            setCropData(cropper.getCroppedCanvas().toDataURL());
            onChangeParent("image", cropper.getCroppedCanvas().toDataURL())
        }
    };

    function saveImage() {
        if (!cropData) {
            getCropData()
        }
        setImage(null)
        setCropper(null)
        // onChangeParent("image", cropData)
    }

    return (
        <Grid item xs={12} className={classes.form}>
            <Grid item xs={12}>
                <InputField
                    type="file"
                    onChange={(e) => onChange(e)}
                    accept="image/*"
                />
                {errors && errors.image ? <p className="error-msz">Image is Required</p> : null}
                {
                    image ? <React.Fragment>
                        <Cropper
                            style={{ height: 200, width: "100%" }}
                            initialAspectRatio={1}
                            preview=".img-preview"
                            src={image}
                            viewMode={1}
                            guides={true}
                            minCropBoxHeight={10}
                            minCropBoxWidth={10}
                            background={false}
                            responsive={true}
                            autoCropArea={1}
                            checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                            onInitialized={(instance) => {
                                setCropper(instance);
                            }}
                        />
                        <Button variant="contained" color="primary" onClick={() => saveImage()}> save</Button>

                    </React.Fragment>
                        : null
                }
            </Grid>
            {
                cropData ?
                    <div>
                        <img style={{ width: 200, height: 200 }} src={cropData} alt="cropped" />
                    </div>
                    :
                    null
            }

        </Grid>
    );
};


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

export default Imagecroper;