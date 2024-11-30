import React, { useState } from "react";
import { Button, TextField, Typography, Box, IconButton } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";

// Schéma de validation pour la connexion
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Email invalide").required("L'email est requis"),
  password: Yup.string().required("Le mot de passe est requis"),
});

const SigninPage = ({ mode, toggleTheme }) => {
  const handleSubmit = (values) => {
    console.log("Valeurs du formulaire : ", values);
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        my: 4,
        p: 3,
        border: "1px solid #ccc",
        borderRadius: 2,
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        textAlign: "center",
        bgcolor: "background.default",
      }}
    >
      <IconButton href="/" sx={{ mb: 2 }}>
        <ArrowBackIcon />
      </IconButton>
      {/* Bouton pour changer de thème */}
      <IconButton onClick={toggleTheme} sx={{ mb: 2, color: "text.primary" }}>
        {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>

      <Typography variant="h4" component="h1" gutterBottom>
        Connexion
      </Typography>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <Box mb={2}>
              <Field
                name="email"
                as={TextField}
                fullWidth
                label="Email"
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
            </Box>
            <Box mb={2}>
              <Field
                name="password"
                as={TextField}
                fullWidth
                label="Mot de passe"
                type="password"
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              sx={{
                background: "linear-gradient(to right, #FF5722, #FFD700)", // Dégradé
                color: "text.primary",
                fontWeight: "bold",
                padding: { xs: "4px 8px", md: "4px 8px", sm: "4px 8px" },
                borderRadius: "8px",
                textTransform: "none",
                fontSize: { xs: "12px", md: "16px", sm: "16px" },
                "&:hover": {
                  background: "linear-gradient(to left, #FF5722, #FFD700)",
                },
              }}
            >
              Se connecter
            </Button>
            <Typography variant="body2" sx={{ mb: 1, mt: 2 }}>
              ou
            </Typography>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
              sx={{ textTransform: "none", mb: 1 }}
            >
              Connexion avec Google
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<FacebookIcon />}
              sx={{ textTransform: "none" }}
            >
              Connexion avec Facebook
            </Button>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Vous n'avez pas de compte ?{" "}
              <a href="/#/inscription" style={{ color: "blue", textDecoration: "none" }}>
                Inscrivez-vous
              </a>
            </Typography>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default SigninPage;
