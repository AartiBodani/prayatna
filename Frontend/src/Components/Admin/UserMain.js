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
const UserMain = () => {
    const [users, setUsers] = React.useState([]);

    const loadData = async () => {
        const response = await axios.get(`http://localhost:5000/users`);
        console.log(response.data);
        setUsers(response.data);
    }

    React.useEffect(() => {
        loadData();
    }, [users])

    const handleDelete = async (id) => {
        const response = await axios.delete(`http://localhost:5000/users/${id}`);
        console.log(response);
    }
    return (
        <>
            <div className='user_main_content'>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>User Name</StyledTableCell>
                                <StyledTableCell align="left">Email</StyledTableCell>
                                <StyledTableCell align="left">Contact</StyledTableCell>
                                <StyledTableCell align="left">Is verified</StyledTableCell>
                                <StyledTableCell align="left">Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users?.map((user) => (
                                <TableRow key={user._id}>
                                    <TableCell component="th" scope="row">
                                        {user.user_name}
                                    </TableCell>
                                    <TableCell align="left">{user.email}</TableCell>
                                    <TableCell align="left">{user.contact_number}</TableCell>
                                    <TableCell align="left">{user.isVerified ? "True" : "False"}</TableCell>
                                    <TableCell align="left">
                                        <DeleteIcon onClick={e => handleDelete(user._id)}></DeleteIcon>
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

export default UserMain