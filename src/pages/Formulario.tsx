import { Box, Button, Card, FormControl, Grid, TextField, Dialog, DialogActions, DialogTitle } from "@mui/material";
import router from "next/router";
import React from "react";
import Layaout from "src/components/layaout";



export default function Formulario() {

  const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <Layaout>



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
              <TextField id="nombre" label="Nombre" variant="outlined" style={{ width: 500 }} />
            </Grid>
            <Grid item xs="auto" style={{ padding: 5 }}>
              <TextField id="edad" label="Edad" type="number" style={{ width: 500 }} />
            </Grid>
            <Grid item xs="auto" style={{ padding: 5 }}>
              <TextField
                fullWidth
                id="mail"
                label="Mail"
                type="email"
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
                <Button variant="contained" onClick={ handleClickOpen } style={{ margin: 5 }}>Aceptar</Button>
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
              <Button onClick={ () => router.push(`/`) } autoFocus>
                Aceptar
              </Button>
            </DialogActions>
          </Dialog>
                <Button variant="contained" onClick={() => router.push(`/`)} style={{ margin: 5 }}>Cancelar</Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Layaout >
  )
}


