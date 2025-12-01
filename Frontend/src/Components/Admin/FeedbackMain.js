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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    fontWeight: 'bold',
    backgroundColor: theme.palette.grey[100],
}));

const FeedbackMain = () => {
    const [feedback, setFeedback] = React.useState([]);

    const loadData = async () => {
        const response = await axios.get(`http://localhost:5000/feedback`);
        console.log(response.data);
        setFeedback(feedback => response.data);
    }

    React.useEffect(() => {
        loadData();
    }, [])
    return (
        <>
            <div className='feedback_main_content'>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>User Name</StyledTableCell>
                                <StyledTableCell align="right">User Email</StyledTableCell>
                                <StyledTableCell align="right">Message</StyledTableCell>
                                <StyledTableCell align="right">Ratings</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {feedback?.map((feed) => (
                                <TableRow key={feed._id}>
                                    <TableCell component="th" scope="row">
                                        {feed.user_name}
                                    </TableCell>
                                    <TableCell align="right">{feed.emailfeedback}</TableCell>
                                    <TableCell align="right">{feed.message}</TableCell>
                                    <TableCell align="right">{feed.rating}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

export default FeedbackMain