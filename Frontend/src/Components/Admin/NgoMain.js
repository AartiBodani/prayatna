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
const NgoMain = () => {
    const [ngos, setNgos] = React.useState([]);

    const loadData = async () => {
        const response = await axios.get(`http://localhost:5000/regngos`);
        console.log(response.data);
        setNgos(response.data);
    }

    React.useEffect(() => {
        loadData();
    }, [ngos])

    const handleDelete = async (id) => {
        const response = await axios.delete(`http://localhost:5000/regngos/${id}`);
        console.log(response);
    }
    return (
        <>
            <div className='user_main_content'>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Ngo Name</StyledTableCell>
                                <StyledTableCell align="left">Email</StyledTableCell>
                                <StyledTableCell align="left">Contact</StyledTableCell>
                                <StyledTableCell align="left">Headname</StyledTableCell>
                                <StyledTableCell align="left">Address</StyledTableCell>
                                <StyledTableCell align="left">Activity</StyledTableCell>
                                <StyledTableCell align="left">Is verified</StyledTableCell>
                                <StyledTableCell align="left">Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ngos?.map((ngo) => (
                                <TableRow key={ngo._id}>
                                    <TableCell component="th" scope="row">
                                        {ngo.ngo_name}
                                    </TableCell>
                                    <TableCell align="left">{ngo.email}</TableCell>
                                    <TableCell align="left">{ngo.contact_number}</TableCell>
                                    <TableCell align="left">{ngo.head_name}</TableCell>
                                    <TableCell align="left">{ngo.address}</TableCell>
                                    <TableCell align="left">{ngo.activity}</TableCell>
                                    <TableCell align="left">{ngo.isVerified ? "true" : "false"}</TableCell>
                                    <TableCell align="left">
                                        <DeleteIcon onClick={e => handleDelete(ngo._id)}></DeleteIcon>
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

export default NgoMain