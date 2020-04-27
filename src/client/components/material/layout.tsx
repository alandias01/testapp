import React, { Component } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button, Grid, makeStyles, CircularProgress, Avatar, Chip, Theme, Card, CardContent, CardActions, Badge } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';

//To change theme
import { createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
    palette: {
        type: "dark"
    }
});


interface IMaterialLayoutProps {

}

interface IMaterialLayoutState {
    loading: boolean;
    chips: string[];
}

export class MaterialLayout extends Component<IMaterialLayoutProps, IMaterialLayoutState> {

    constructor(props: any) {
        super(props);
        this.state = {
            loading: false,
            chips: ['Alan', 'Mike', 'William']
        }
    }

    handleClickStart = () => this.setState({ loading: true });
    handleClickStop = () => this.setState({ loading: false });
    handleDelete = (e: any) => {
        console.info('You clicked the delete icon.' + e.target.value);
    };

    handleClick = (e: any) => {
        console.info('You clicked the Chip.' + e);
    };

    render() {
        const { loading, chips } = this.state;

        const chipData = chips.map(x => <Chip label={x} onDelete={this.handleDelete} />);

        return (
            <div>
                <ThemeProvider theme={theme}>
                    <TopBar />

                    {chipData}
                    <button onClick={this.handleClickStart}>Start</button>
                    <button onClick={this.handleClickStop}>Stop</button>
                    {loading && <CircularProgress />}
                    <br /><br /><br />

                    <GridComponent />
                </ThemeProvider>

            </div>
        )
    }
}

const useStylesTopBar = makeStyles((theme: Theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }
}));

function TopBar() {
    const classes = useStylesTopBar();
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    News
                </Typography>
                <Button color="inherit">Login</Button>
                <IconButton aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

const useStylesGridComponent = makeStyles((theme: Theme) => ({
    root: {
        paddingLeft: '20px',
        paddingRight: '20px',
        alignContent: "flex-start"
    }
}));

function GridComponent() {
    const classes = useStylesGridComponent();

    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12} sm={'auto'} >
                <WordCard heading="Word of the Day" word="card 1" />
            </Grid>

            <Grid item xs={12} sm={'auto'} >
                <WordCard heading="Word of the Day" word="card 2 card 2 card 2" />
            </Grid>

            <Grid item xs={12} sm={'auto'} >
                <WordCard heading="Word of the Day" word="card 3" />
            </Grid>
        </Grid>
    );
}

const useStylesWordCard = makeStyles((theme: Theme) => ({
    root: {
        minWidth: 300,
        maxWidth: 300,
        borderRadius: 0,
        borderTopStyle: "solid",
        borderTopColor: "orange"
    }
}));

function WordCard(props: any) {
    const classes = useStylesWordCard();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {props.heading}
                </Typography>
                <Typography variant="h5" component="h2">
                    {props.word}
                </Typography>
                <Typography color="textSecondary">
                    adjective
                </Typography>
                <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}


