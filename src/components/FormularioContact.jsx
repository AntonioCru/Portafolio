import React from "react";
import styles from "../styles/StylesFormularioContact.module.css";
import stylesTwo from "../styles/StylesContainer1.module.css";
import emailjs from "emailjs-com";

import { useForm } from "react-hook-form";

export const FormularioContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = {
      nombre: data.nombre,
      telefono: data.telefono,
      correo: data.correo,
      direccion: data.direccion,
      descripcion: data.descripcion,
    };
    emailjs
      .send(
        "service_0t12wnn",
        "template_ew2mo4p",
        formData,
        "zsZBGh9FtiLsClpcN"
      )
      .then((res) => {
        if (res.status === 200 && res.text === "OK") {
          alert("Correo Enviado con exito");
        }
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className={styles.containerFormularioContact}
        id="MyContact"
        translate="no"
      >
        <div className={styles.containerContact}>
          <h2 className={styles.subtitleContact}>Contactame</h2>
          <p className={styles.paragraphContact}>
            Estoy interesado en oportunidades. No obstante, si tienes otra
            petición o pregunta, no dudes en utilizar el formulario y me pondré
            en contacto con tigo.
          </p>

          <div className={styles.formulario}>
            <div className={styles.containerName}>
              <input
                placeholder="Nombre"
                type="text"
                className={styles.inputText1}
                name="nombre"
                {...register("nombre", { required: true })}
              />
              {errors.nombre && <span>Escriba un Nombre</span>}
            </div>
            <div className={styles.containerTelefono}>
              <input
                placeholder="Telefono WhatsApp"
                type="text"
                className={styles.inputText2}
                name="telefono"
                {...register("telefono", { required: true })}
              />
              {errors.telefono && <span>Escriba un Telefono de WhatsApp</span>}
            </div>
            <div className={styles.containerCorreo}>
              <input
                placeholder="Correo"
                type="email"
                className={styles.inputText3}
                name="correo"
                {...register("correo", { required: true })}
              />
              {errors.correo && <span>Escriba un Correo</span>}
            </div>
            <div className={styles.containerDireccion}>
              <input
                placeholder="Dirección o Coordenadas"
                type="text"
                className={styles.inputText4}
                name="direccion"
                {...register("direccion", { required: true })}
              />
              {errors.direccion && (
                <span>Escriba una Dirección o Coordenadas</span>
              )}
            </div>
            <div className={styles.containerDescripcion}>
              <textarea
                placeholder="Descripción"
                className={styles.textareaContainer}
                name="descripcion"
                {...register("descripcion", { required: true })}
              />
              {errors.descripcion && <span>Escriba una Descripción</span>}
            </div>
            <div className={styles.containerbotom2}>
              <button className={stylesTwo.butttomContact2} type="submit">
                <div className={stylesTwo.icon2}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-right-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </div>
                <span className={styles.span2}>Contactar</span>
              </button>
            </div>
          </div>
        </div>
        {/* <div className={styles.containerMap}>MAPA</div> */}
      </div>
    </form>
  );
};
