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
import AddCircleIcon from '@mui/icons-material/AddCircle';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    fontWeight: 'bold',
    backgroundColor: theme.palette.grey[100],
}));
const ReportMain = () => {
    const [reports, setReports] = React.useState([]);

    const loadData = async () => {
        const response = await axios.get(`http://localhost:5000/reports`);
        console.log(response.data);
        setReports(response.data);
    }

    React.useEffect(() => {
        loadData();
    }, [reports])


    const handleFraud = async (id, email, address, activity, message) => {
        const response = await axios.post(`http://localhost:5000/fraud`, { email, address, activity, message });
        console.log(response.data);
        if (response) {
            const resp = await axios.delete(`http://localhost:5000/fraud/${id}`);
            console.log(resp);
        }
    }

    const handleDelete = async (id) => {
        const resp = await axios.delete(`http://localhost:5000/fraud/${id}`);
        console.log(resp);
    }

    return (
        <>
            <div className='report_main_content'>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="left">Email</StyledTableCell>
                                <StyledTableCell align="left">Address</StyledTableCell>
                                <StyledTableCell align="left">Activity</StyledTableCell>
                                <StyledTableCell align="left">Message</StyledTableCell>
                                <StyledTableCell align="left">Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {reports?.map((report) => (
                                <TableRow key={report._id}>
                                    <TableCell component="th" scope="row">
                                        {report.email}
                                    </TableCell>
                                    <TableCell align="left">{report.address}</TableCell>
                                    <TableCell align="left">{report.activity}</TableCell>
                                    <TableCell align="left">{report.message}</TableCell>
                                    <TableCell align="left">
                                        <AddCircleIcon onClick={e => handleFraud(report._id, report.email, report.address, report.activity, report.message)}></AddCircleIcon>
                                        <DeleteIcon onClick={e => handleDelete(report._id)}></DeleteIcon>
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

export default ReportMain