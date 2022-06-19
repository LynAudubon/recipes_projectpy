import React, { useEffect } from 'react';
import  { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import  { recipeSlice } from '../redux/slice/recipe';
import { DELETE_RECIPE_BY_ID, GET_RECIPES } from '../redux/types';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});


function Row(props) {
  const { row } = props;
  // console.log('row', row)
  
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  const dispatch = useDispatch()

  return (
    <React.Fragment>
      <TableRow className={classes.root}  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <img src={row.imageUrl} alt={row.name} width='150' height='100' />
        </TableCell>
        <TableCell align="right">{row.name}</TableCell>
        <TableCell align="right">{row.category}</TableCell>
        <TableCell align="right"><Button onClick={() => dispatch(recipeSlice(row))} variant='contained'>UPDATE</Button></TableCell>
        <TableCell align="right"><Button onClick={() => dispatch({type: DELETE_RECIPE_BY_ID, id: row.id})}  variant='contained'>DELETE</Button></TableCell>
      </TableRow> 
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableBody>
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.ingredients}
                      </TableCell>
                      <TableCell>{row.instructions}</TableCell>
                      <TableCell align="right">{row.serving_size}</TableCell>
                      <TableCell align="right">
                        {row.date_added} {row.date_modified}
                      </TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired,
    instructions: PropTypes.string.isRequired,
    serving_size: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
    date_added: PropTypes.string.isRequired,
    date_modified: PropTypes.string.isRequired,
  }).isRequired,
};


export default function RecipesTable() {
  const rows = useSelector(state => state.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: GET_RECIPES})
  }, [dispatch])

  console.log('rows', rows);
    return (
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableBody>
            {rows.map((row) => (
              <Row key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}
