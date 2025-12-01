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
const FraudMain = () => {
  const [frauds, setFrauds] = React.useState([]);

  const loadData = async () => {
    const response = await axios.get(`http://localhost:5000/fraud`);
    console.log(response.data);
    setFrauds(response.data);
  };

  React.useEffect(() => {
    loadData();
  }, [frauds]);

  const handleDelete = async (id) => {
    const response = await axios.delete(
      `http://localhost:5000/fraud/remove/${id}`
    );
    console.log(response);
  };
  return (
    <>
      <div className="fraud_main_content">
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
              {frauds?.map((fraud) => (
                <TableRow key={fraud._id}>
                  <TableCell component="th" scope="row">
                    {fraud.email}
                  </TableCell>
                  <TableCell align="left">{fraud.address}</TableCell>
                  <TableCell align="left">{fraud.activity}</TableCell>
                  <TableCell align="left">{fraud.message}</TableCell>
                  <TableCell align="left">
                    <DeleteIcon
                      onClick={(e) => handleDelete(fraud._id)}
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

export default FraudMain;
