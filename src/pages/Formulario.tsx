import { Box, Button, Card, FormControl, Grid, TextField, Dialog, DialogActions, DialogTitle } from "@mui/material";
import router from "next/router";
import React from "react";
import Layaout from "src/components/layaout";
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import type { } from '@mui/lab/themeAugmentation';
import { Formik } from "formik";



export default function Formulario() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (valores) => {
    setOpen(true);
    console.log(valores);
    console.log("Formulario enviado");
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [value, setValue] = React.useState<Date | null>(null);


  return (
    <Layaout>

      <Formik

        initialValues={{
          name: 'Carlos',
          email: '',
        }}

        validate={(valores) => {
          let error = {};
          if (!valores.name) {
            error.name = "El nombre es requerido";
          }
          return error;
        }}

        onSubmit={() => {
          console.log("formulario enviado")
          console.log(valores.name)
        }}

      >
        {({ handleSubmit, values, handleChange }) => (

          <form className="formulario" onSubmit={handleSubmit}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={4}
              style={{ padding: 5 }}
            >
              <Grid item xs="auto" >
                <Card style={{ borderColor: "#00000000", borderStyle: "inset" }}>
                  <Grid item xs="auto" style={{ padding: 5 }} >
                    <TextField
                      id="nombre"
                      type="text"
                      placeholder="Ingrese su nombre"
                      name="nombre"
                      label="Nombre"
                      variant="outlined"
                      value={values.name}
                      onChange={handleChange}
                      style={{ width: 500 }} />
                  </Grid>
                  <Grid item xs="auto" style={{ padding: 5 }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="Fecha de nacimiento"
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} style={{ width: 500 }} />}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs="auto" style={{ padding: 5 }}>
                    <TextField
                      fullWidth
                      id="mail"
                      label="Mail"
                      type="text"
                      value={values.email}
                      // onChange={handleChange}
                      style={{ width: 500 }}
                    />
                  </Grid>
                  <Grid item xs="auto" style={{ padding: 5 }}>
                    <TextField
                      style={{ width: 500 }}
                      id="outlined-password-input"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                    />
                  </Grid>
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={4}

                  >
                    <Grid item xs="auto">
                      <Button variant="contained" type="submit" onClick={handleClickOpen} style={{ margin: 5 }}>Aceptar</Button>

                      {/* Dialogo */}
                      <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle id="alert-dialog-title">
                          {"Registrado correctamente!"}
                        </DialogTitle>

                        <DialogActions>
                          <Button onClick={() => router.push(`/`)} autoFocus>
                            Aceptar
                          </Button>
                        </DialogActions>
                      </Dialog>
                      {/* Dialogo */}

                      <Button variant="contained" onClick={() => router.push(`/`)} style={{ margin: 5 }}>Cancelar</Button>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Layaout >
  )
}


