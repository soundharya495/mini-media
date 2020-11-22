import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
    button: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  })
);

const Register = () => {
  const classes = useStyle();
  const preventDefault = (event) => event.preventDefault();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className={classes.root}>
      <Box mt={5} px={2}>
        <Grid
          container
          spacing={3}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <Paper className={classes.paper}>
              <Typography variant="h3" gutterBottom>
                Register
              </Typography>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className={classes.container}
              >
                <TextField
                  name="email"
                  inputRef={register}
                  label="Enter email"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  error={errors.email ? true : false}
                />

                <TextField
                  name="password"
                  type="password"
                  inputRef={register}
                  label="Enter password"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  error={errors.email ? true : false}
                />
                <TextField
                  name="password"
                  type="password"
                  inputRef={register}
                  label="Confirm password"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  error={errors.email ? true : false}
                />
                <Button
                  className={classes.button}
                  type="submit"
                  variant="outlined"
                  aria-label="delete"
                  color="primary"
                >
                  Continue
                </Button>
                <Link
                  className={classes.button}
                  fullWidth
                  href="/login"
                  //  onClick={preventDefault}
                >
                  Already have an account Login here.
                </Link>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Register;
