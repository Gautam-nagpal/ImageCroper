import React from "react"
import ListComponent from "./ListComponent"
import { Grid, Typography } from "@material-ui/core"


function HomePage() {

    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h4" className="heading"> Employee Lists </Typography>

                <ListComponent />

            </Grid>
        </Grid>
    )
}


export default HomePage