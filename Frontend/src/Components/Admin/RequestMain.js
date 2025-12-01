import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "bold",
  backgroundColor: theme.palette.grey[100],
}));
const RequestMain = () => {
  const [req, setReq] = React.useState([]);

  const loadData = async () => {
    const response = await axios.get(`http://localhost:5000/request`);
    console.log(response.data);
    setReq(response.data);
  };

  React.useEffect(() => {
    loadData();
  }, [req]);

  const handleDelete = async (id) => {
    const response = await axios.delete(`http://localhost:5000/request/${id}`);
    console.log(response);
  };
  return (
    <>
      <div className="user_main_content">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>User Name</StyledTableCell>
                <StyledTableCell align="left">Email</StyledTableCell>
                <StyledTableCell align="left">Message</StyledTableCell>
                <StyledTableCell align="left">Status</StyledTableCell>
                <StyledTableCell align="left">Time</StyledTableCell>
                <StyledTableCell align="left">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {req?.map((request) => (
                <TableRow key={request._id}>
                  <TableCell component="th" scope="row">
                    {request.user_name}
                  </TableCell>
                  <TableCell align="left">{request.email}</TableCell>
                  <TableCell align="left">{request.message}</TableCell>
                  <TableCell align="left">{request.status}</TableCell>
                  <TableCell align="left">{request.time}</TableCell>
                  <TableCell align="left">
                    <DeleteIcon
                      onClick={(e) => handleDelete(request._id)}
                    ></DeleteIcon>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default RequestMain;
