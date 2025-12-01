import * as React from "react";
import { styled } from "@mui/material/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GroupsIcon from "@mui/icons-material/Groups";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import ReportIcon from "@mui/icons-material/Report";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import "./Dashboard.css";
import "fontawesome-free/css/all.min.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "bold",
  backgroundColor: theme.palette.grey[100],
}));

const rows = [
  {
    name: "Frozen yoghurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 24,
    protein: 6.0,
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
  },
];

const AdminMain = () => {
  const [user, setData] = React.useState([]);
  const [ngo, setNgo] = React.useState([]);
  const [req, setReq] = React.useState([]);

  const loadData = async () => {
    const response = await axios.get(`http://localhost:5000/reguser`);
    console.log(response.data);
    setData((user) => response.data);

    const responsengo = await axios.get(`http://localhost:5000/regngos`);
    console.log(responsengo.data);
    setNgo((ngo) => responsengo.data);

    const responsereq = await axios.get(`http://localhost:5000/request`);
    console.log(responsereq.data);
    setReq((req) => responsereq.data);
  };

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="admin_main_content">
        <div className="admin_content container-fluid mt-2">
          <div class="admin_row row">
            <div class="col-12 text-center col-lg-4 col-sm-12 mt-2">
              <div class="admin-counter p-2">
                <p>
                  <AccountCircleIcon sx={{ fontSize: "50px" }} />
                </p>
                <h3>USERS</h3>
                <h3>{user.length}</h3>
              </div>
            </div>
            <div class="col-12 text-center col-lg-4 col-sm-12 mt-2">
              <div class="admin-counter  p-2 ">
                <p>
                  <GroupsIcon sx={{ fontSize: "50px" }} />
                </p>
                <h3>NGO'S</h3>
                <h3>{ngo.length}</h3>
              </div>
            </div>
            <div class="col-12 text-center col-lg-4 col-sm-12 mt-2">
              <div class="admin-counter p-2">
                <p>
                  <AccessibilityIcon sx={{ fontSize: "50px" }} />
                </p>
                <h3>REQUESTS</h3>
                <h3>{req.length}</h3>
              </div>
            </div>
            {/* <div class="col-12 col-lg-4 col-sm-4">
              <div class="counter bg-danger">
                <p>
                  <ReportIcon />
                </p>
                <h3>REPORT</h3>
                <h3>30+</h3>
              </div>
            </div> */}
          </div>
        </div>
        {/* <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                <StyledTableCell align="right">Calories</StyledTableCell>
                <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                <StyledTableCell align="right">
                  Protein&nbsp;(g)
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer> */}
      </div>
    </>
  );
};

export default AdminMain;
