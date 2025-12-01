// import React from 'react';
// import { makeStyles } from '@mui/styles';
// import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import SettingsIcon from '@mui/icons-material/Settings';
// import HelpIcon from '@mui/icons-material/Help';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import { Link } from 'react-router-dom';

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//     },
//     drawer: {
//         width: drawerWidth,
//         flexShrink: 0,
//     },
//     drawerPaper: {
//         width: drawerWidth,
//     },
//     // toolbar: theme.mixins.toolbar,
// }));

// function Sidebar() {
//     const classes = useStyles();

//     return (
//         <div className={classes.root}>
//             <Drawer
//                 className={classes.drawer}
//                 variant="permanent"
//                 classes={{
//                     paper: classes.drawerPaper,
//                 }}
//             >
//                 <div className={classes.toolbar} />
//                 <List>
//                     <ListItem button componentss={Link} to="/">
//                         <ListItemIcon><DashboardIcon /></ListItemIcon>
//                         <ListItemText />
//                     </ListItem>
//                     <ListItem button >
//                         <ListItemIcon><AccountCircleIcon /></ListItemIcon>
//                         <ListItemText primary="Profile" />
//                     </ListItem>
//                     <ListItem button>
//                         <ListItemIcon><SettingsIcon /></ListItemIcon>
//                         <ListItemText primary="Settings" />
//                     </ListItem>
//                     <ListItem button>
//                         <ListItemIcon><HelpIcon /></ListItemIcon>
//                         <ListItemText primary="Help" />
//                     </ListItem>
//                     <ListItem button>
//                         <ListItemIcon><ExitToAppIcon /></ListItemIcon>
//                         <ListItemText primary="Logout" />
//                     </ListItem>
//                 </List>
//             </Drawer>
//         </div>
//     );
// }

// export default Sidebar;

import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // toolbar: theme.mixins.toolbar,
}));

function Sidebar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem button components={Link} to="/dashboard">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button components={Link} to="/profile">
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button components={Link} to="/services">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem button components={Link} to="/help">
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary="Help" />
          </ListItem>
          <ListItem button components={Link} to="/logout">
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default Sidebar;
