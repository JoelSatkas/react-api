import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import {Grid} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 400,
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
        },
        iconButton: {
            padding: 10,
        },
        divider: {
            height: 28,
            margin: 4,
        },
    }),
);

type SearchArtworkInputProps = {
    placeHolder: string;
    search: (input: string) => void
}

//Simple search input component that calls parent callback on submission of search query.
const SearchArtworkInput = (props: SearchArtworkInputProps) => {
    const classes = useStyles();

    const searchPressed = (e: any) => {
        props.search(e.target.value);
    };

    return (
        <Grid container justify = "center" style={{margin: '20px'}}>
            <Paper component="form" className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder={props.placeHolder}
                    inputProps={{ 'aria-label': `${props.placeHolder}` }}
                />
                <IconButton onClick={searchPressed} className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </Grid>
    );
};

export default SearchArtworkInput;
