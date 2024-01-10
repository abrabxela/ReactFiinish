import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchEpisodes from "../../hooks/SearchEpisodes";





function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SingleItemTabs() {
  const storedFilmDetails = sessionStorage.getItem("filmDetails");
  const parsedFilmDetails = JSON.parse(storedFilmDetails);

  const { summary, id} = { ...parsedFilmDetails };
  
  const [value, setValue] = React.useState(0);
  const series  = SearchEpisodes(id);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        marginTop: "50px",
        width: "100%",
        border: "solid",
        borderColor: "#E73F24",
        background:"#141414"
      }}
    >
      <Box
        sx={{
          marginTop: "20px",
          borderBottom: 1,
          borderColor: "divider",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Description"
            {...a11yProps(0)}
            sx={{
              color: "white",
              "&.Mui-selected": {
                color: "#E73F24",
                background: "#191919",
              },
            }}
          />
          <Tab
            label="Series"
            {...a11yProps(1)}
            sx={{
              color: "white",
              "&.Mui-selected": {
                color: "#E73F24",
                background: "#191919",
              },
              "&.MuiTouchRipple-root": {
                color: "#E73F24",
              },
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Typography sx={{ color: "white" }}>
        <div dangerouslySetInnerHTML={{ __html: `${summary}` }} />
        </Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <TableContainer component={Paper} sx={{ backgroundColor: "#191919" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#282B2F" }}>
                <TableCell sx={{ color: "white" }}>Episode</TableCell>
                <TableCell sx={{ color: "white" }} align="left">
                  Airdate
                </TableCell>
                <TableCell sx={{ color: "white" }} align="left">
                  Rating
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {series && series.map((singleSeries, index) => (
                <TableRow
                  key={singleSeries.id || index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" sx={{ color: "white" }}>
                    {singleSeries.name}
                  </TableCell>
                  <TableCell align="left" sx={{ color: "white" }}>
                    {singleSeries.airdate}
                  </TableCell>
                  <TableCell align="left" sx={{ color: "white" }}>
                    {singleSeries.rating.average}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CustomTabPanel>
    </Box>
  );
}
