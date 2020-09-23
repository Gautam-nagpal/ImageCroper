import React, { useState } from "react"
import { Paper, Grid, TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Avatar } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { CustomDialog } from "../../../Components";
import Editor from "./Editor";


function ListComponent() {
    const [lists, setlist] = useState([...staticData])
    const [openModalContent, handleModal] = useState({ isopen: false, data: null, index: 0 });



    function onEdit(index) {
        let editedData = lists[index];
        handleModal({ isopen: true, data: { ...editedData }, index: index })
    }

    function closeModal() {
        handleModal({ isopen: false, data: null, index: 0 })
    }

    return (<Grid container>

        <Grid item xs={12}>
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>#</StyledTableCell>
                            <StyledTableCell>Image</StyledTableCell>
                            <StyledTableCell>First Name</StyledTableCell>
                            <StyledTableCell>Last Name</StyledTableCell>
                            <StyledTableCell>Email</StyledTableCell>
                            <StyledTableCell>Ph Number</StyledTableCell>
                            <StyledTableCell>Salary</StyledTableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            lists && lists.map(({ image, first_name, last_name, email, phone, salary }, index) => (

                                <StyledTableRow key={index} onClick={() => onEdit(index)}>
                                    <StyledTableCell>{index + 1}</StyledTableCell>
                                    <StyledTableCell component="th" scope="row">
                                        <Avatar variant="square" alt={image} src={image ? image : null} />
                                    </StyledTableCell>
                                    <StyledTableCell>{first_name}</StyledTableCell>
                                    <StyledTableCell>{last_name}</StyledTableCell>
                                    <StyledTableCell>{email}</StyledTableCell>
                                    <StyledTableCell>{phone}</StyledTableCell>
                                    <StyledTableCell>{salary}</StyledTableCell>

                                </StyledTableRow>
                            ))
                        }

                    </TableBody>

                </Table>
            </TableContainer>
        </Grid>

        <CustomDialog open={openModalContent.isopen} onClose={() => closeModal()}>
            <Editor setlist={setlist} data={openModalContent.data} index={openModalContent.index} lists={lists} closeModal={closeModal} />
        </CustomDialog>
    </Grid>
    )
}


export default ListComponent;




const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },

}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        cursor: 'pointer'
    },
}))(TableRow);


let staticData = [
    {
        first_name: "Gautam",
        last_name: "Nagpal",
        email: "gautam@gmail.com",
        phone: "9876543210",
        salary: "80000",
        image: "",
        password: ""
    },
    {
        first_name: "test",
        last_name: "1",
        email: "test@gmail.com",
        phone: "9876543210",
        salary: "75000",
        image: "",
        password: ""
    },
    {
        first_name: "Testing",
        last_name: " Data",
        email: "testing@gmail.com",
        phone: "9876543210",
        salary: "90000",
        image: "",
        password: ""
    }
]