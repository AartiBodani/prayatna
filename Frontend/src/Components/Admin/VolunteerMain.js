import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    fontWeight: 'bold',
    backgroundColor: theme.palette.grey[100],
}));
const VolunteerMain = () => {
    const [volunteers, setVolunteers] = React.useState([]);

    const loadData = async () => {
        const response = await axios.get(`http://localhost:5000/volunteer`);
        console.log(response.data);
        setVolunteers(response.data);
    }

    React.useEffect(() => {
        loadData();
    }, [volunteers])

    const handleDelete = async (id) => {
        const response = await axios.delete(`http://localhost:5000/volunteer/${id}`);
        console.log(response);
    }
    return (
        <>
            <div className='volunteer_main_content'>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Name</StyledTableCell>
                                <StyledTableCell align="left">Email</StyledTableCell>
                                <StyledTableCell align="left">Address</StyledTableCell>
                                <StyledTableCell align="left">Activity</StyledTableCell>
                                <StyledTableCell align="left">Occupation</StyledTableCell>
                                <StyledTableCell align="left">Gender</StyledTableCell>
                                <StyledTableCell align="left">Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {volunteers?.map((volunteer) => (
                                <TableRow key={volunteer._id}>
                                    <TableCell component="th" scope="row">
                                        {volunteer.fname + " " + volunteer.lname}
                                    </TableCell>
                                    <TableCell align="left">{volunteer.email}</TableCell>
                                    <TableCell align="left">{volunteer.address}</TableCell>
                                    <TableCell align="left">{volunteer.activity}</TableCell>
                                    <TableCell align="left">{volunteer.occupation}</TableCell>
                                    <TableCell align="left">{volunteer.gender}</TableCell>

                                    <TableCell align="left">
                                        <DeleteIcon onClick={e => handleDelete(volunteer._id)}></DeleteIcon>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

export default VolunteerMain