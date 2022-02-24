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

  const handleClickOpen = (valores:any) => {
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
          nombre: '',
          correo: '',
          password: '',
        }}

        validate={(valores) => {
          let errores = {
            nombre:'',
            correo:'',
            password: ''
          };
          //Validación nombre
          if (!valores.nombre) {
            errores.nombre = "El nombre es requerido.";
          } else if(!/^[a-zA-ZÁ-ÿ\s]{1,40}$/.test(valores.nombre)){
            errores.nombre = "El nombre solo puede contener letras y espacios"
          }
          //Validación correo
          if (!valores.correo) {
            errores.correo = "Es obligatorio insertar un correo.";
          }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
            errores.correo = "El correo solo puede contener letras, numeros, puntos, guiones y guión bajo."
          }
          //Validación password
          if (!valores.password) {
            errores.password = "Por favor registre una contraseña.";
          } else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/.test(valores.password)){
            errores.password= "La contraseña debe de tener: "+
            "Minimo 8 caracteres" +
            "Maximo 15"+<br />
            "Al menos una letra mayúscula"+<br />
            "Al menos una letra minucula"+<br />
            "Al menos un dígito"+<br />
            "No espacios en blanco"+<br />
            "Al menos 1 caracter especial"
          }
          
          
          return errores;
        }}

        onSubmit={(valores) => {
          console.log("Formulario enviado")
          console.log(valores)
        }}

      >
        {({ handleSubmit, values, errors, handleChange, handleBlur, touched}) => (

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
                      value={values.nombre}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{ width: 500 }} />
                      {touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div>}
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
                      id="correo"
                      label="Mail"
                      type="email"
                      value={values.correo}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{ width: 500 }}
                    />
                    {touched.correo && errors.correo && <div className="error">{errors.correo}</div>}
                  </Grid>
                  <Grid item xs="auto" style={{ padding: 5 }}>
                    <TextField
                      style={{ width: 500 }}
                      id="password"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.password && errors.password && <div className="error">{errors.password}</div>}
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


