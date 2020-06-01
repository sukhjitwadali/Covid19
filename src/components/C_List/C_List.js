import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';



const useStyles = makeStyles((theme)=> ({
    table: {
      minWidth: 400,
    },

    
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      border:'1px solid #eedddd',
      paddingLeft : '5px',
      borderRadius : '5px'

    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }));

function CList(props) {
 
    const classes = useStyles();
    let countries = props.countries
    const [countriess, SetCountries] = useState([]) 
    const [searchTerm, setSearchTerm] = React.useState("");
 
    const handleChange = event => {
      setSearchTerm(event.target.value);
    };
    useEffect(() => {
        const results = countries.filter(country =>
        country.Country.toLowerCase().includes(searchTerm)
      ); 
      SetCountries(results);
    }, [countries,searchTerm]);

    return (
        <div>


    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell >Country 
              <InputBase value={searchTerm}
                onChange={handleChange}

                className={classes.input}
                placeholder="Search Country"
                inputProps={{ 'aria-label': 'search google maps' }}
              />
            </TableCell>
            <TableCell align="right">NewConfirmed</TableCell>
            <TableCell align="right">TotalConfirmed</TableCell>
            <TableCell align="right">NewDeaths</TableCell>
            <TableCell align="right">TotalDeaths</TableCell>
            <TableCell align="right">NewRecovered</TableCell>
            <TableCell align="right">TotalRecovered</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {countriess.map((country) => (
            <TableRow key={country.Country}>
              <TableCell component="th" scope="row">
                {country.Country}
              </TableCell>
              <TableCell align="right">{country.NewConfirmed}</TableCell>
              <TableCell align="right">{country.TotalConfirmed}</TableCell>
              <TableCell align="right">{country.NewDeaths}</TableCell>
              <TableCell align="right">{country.TotalDeaths}</TableCell>
              <TableCell align="right">{country.NewRecovered}</TableCell>
              <TableCell align="right">{country.TotalRecovered}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            
        </div>
    );
}

export default CList;