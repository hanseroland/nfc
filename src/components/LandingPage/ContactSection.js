import React from "react";
import { Box, Typography, TextField, Button, } from "@mui/material";
import { motion } from "framer-motion";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Grid from '@mui/material/Grid2';


const ContactSection = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Veuillez entrer votre nom"),
    email: Yup.string().email("Email invalide").required("Veuillez entrer votre email"),
    subject: Yup.string().required("Veuillez entrer le sujet"),
    message: Yup.string().required("Veuillez entrer votre message"),
  });

  return (
    <Box id="contact"
      sx={{
        py: 8,
        px: 4,
        backgroundImage: 'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)', // Dégradé bleu à violet
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        sx={{
          display: "flex",
          maxWidth: "900px",
          borderRadius: 4,
          overflow: "hidden",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          //backgroundImage: 'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)', // Dégradé bleu à violet

        }}
      >
        <Grid container spacing={1}>
          <Grid size={{ xs: 12, md: 4 }}>
            {/* Contact Information */}
            <Box
              sx={{
                color: "white",
                p:3,
                width: "100%",
              }}>
              <Typography variant="h6" fontWeight="bold" mb={2}>
                Nos Contacts
              </Typography>
              <Typography variant="body2" mb={3}>
                Nous facilitons votre monde et nous construisons une autorité élevée.
              </Typography>
              <Typography variant="body2" mb={2}>
                📞 +2211770178668
              </Typography>
              <Typography variant="body2" mb={2}>
                📞 +221876330686
              </Typography>
              <Typography variant="body2" mb={2}>
                📧 support@nfc.com
              </Typography>
              <Typography variant="body2">
                📍 Dakar, Sénégal
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            {/* Contact Form */}
            <Box sx={{ p:2, flexGrow: 1 }}>
              <Formik
                initialValues={{ name: "", email: "", subject: "", message: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                  console.log(values);
                  resetForm();
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Grid container spacing={2}>
                      <Grid
                        size={{ xs: 12, md: 6 }}
                      >
                        <Field
                          as={TextField}
                          fullWidth
                          label="Votre Nom"
                          name="name"
                          variant="outlined"
                          error={touched.name && Boolean(errors.name)}
                          helperText={touched.name && errors.name}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, md: 6 }}>
                        <Field
                          as={TextField}
                          fullWidth
                          label="Votre Email"
                          name="email"
                          variant="outlined"
                          error={touched.email && Boolean(errors.email)}
                          helperText={touched.email && errors.email}
                        />
                      </Grid>
                      <Grid item size={{ xs: 12 }}>
                        <Field
                          as={TextField}
                          fullWidth
                          label="Sujet"
                          name="subject"
                          variant="outlined"
                          error={touched.subject && Boolean(errors.subject)}
                          helperText={touched.subject && errors.subject}
                        />
                      </Grid>
                      <Grid item size={{ xs: 12 }}>
                        <Field
                          as={TextField}
                          fullWidth
                          label="Message"
                          name="message"
                          variant="outlined"
                          multiline
                          rows={4}
                          error={touched.message && Boolean(errors.message)}
                          helperText={touched.message && errors.message}
                        />
                      </Grid>
                    </Grid>
                    <Box mt={3} textAlign="right">
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        component={motion.button}
                        whileHover={{ scale: 1.05 }}
                        sx={{ backgroundColor: "#00a3a3", textTransform: 'none', fontWeight: 'bold' }}
                      >
                        Envoyer le Message
                      </Button>
                    </Box>
                  </Form>
                )}
              </Formik>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactSection;
