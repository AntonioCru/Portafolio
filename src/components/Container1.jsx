import {
  // MotionConfig,
  motion,
  useInView,
  // useMotionValue,
  // useTransform,
} from "framer-motion";
import React from "react";
import styles from "../styles/StylesContainer1.module.css";
import { useRef } from "react";
import { useFollowPointer } from "../auxiliar/use-follow-pointer.ts";
import imgSvgBoostrap from "../svgs/boostrap.svg";
import reactImg from "../img/reactImg.png";
import javascripImg from "../img/javascriptImg.png";

export const Container1 = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref); //movimiento en el mouse

  const isInView = useInView(ref, { once: true }); //uansdo no se muetra en pantalla

  const stylesC = {
    transform: isInView ? "none" : "translateX(-200px)",
    opacity: isInView ? 1 : 0,
    // transition: '1.3s all cubic-bezier(.17,.86,.76,.66)'
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.container1}>
      <motion.div
        className={styles.svgsBoostrap}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          // borderRadius: ["50%", "50%", "50%", "50%", "50%"]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <img src={imgSvgBoostrap} alt="BoostrapSvg" />
      </motion.div>

      <motion.div
        className={styles.reactImage}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          // borderRadius: ["50%", "50%", "50%", "50%", "50%"]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <img src={reactImg} alt="ReactImage" />
      </motion.div>

      <motion.div className={styles.floatImg}></motion.div>

      <motion.div
        className={styles.jsImage}
        animate={{
          // scale: [1, 2, 2, 1, 1],
          rotate: 360,
          // borderRadius: ["50%", "50%", "50%", "50%", "50%"]
        }}
        transition={{
          duration: 4,
          ease: "linear",
          // times: [0.2, 0.5],
          repeat: Infinity,
          // repeatDelay: 1,
          // repeatType: "mirror"
        }}
      >
        <img src={javascripImg} alt="ReactImage" />
      </motion.div>

      <motion.div className={styles.floatImg}></motion.div>

      <h1 className={styles.title}>
        <motion.span
          style={stylesC}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 3,
              mass: 1,
              restDelta: 0.001,
            },
          }}
        >
          H
        </motion.span>
        <motion.span
          style={stylesC}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.6,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 3,
              mass: 2, //duration y bounce se anulara si se establece stiffness, damping o mass
              restDelta: 0.001,
            },
          }}
        >
          o
        </motion.span>
        <motion.span
          style={stylesC}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.9,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 3,
              mass: 3, //duration y bounce se anulara si se establece stiffness, damping o mass
              restDelta: 0.001,
            },
          }}
        >
          l
        </motion.span>
        <motion.span
          className={stylesC}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.12,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 3,
              mass: 4, //duration y bounce se anulara si se establece stiffness, damping o mass
              restDelta: 0.001,
            },
          }}
        >
          a
        </motion.span>
        ,<br />
        <motion.span
          className={stylesC}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.15,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 3,
              mass: 3, //duration y bounce se anulara si se establece stiffness, damping o mass
              restDelta: 0.00000001,
            },
          }}
        >
          s
        </motion.span>
        <motion.span
          className={stylesC}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.1,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 3,
              mass: 4, //duration y bounce se anulara si se establece stiffness, damping o mass
              restDelta: 0.00000001,
            },
          }}
        >
          o
        </motion.span>
        <motion.span
          className={stylesC}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.6,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 3,
              mass: 3, //duration y bounce se anulara si se establece stiffness, damping o mass
              restDelta: 0.001,
            },
          }}
        >
          y
        </motion.span>
        <motion.span
          className={stylesC}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.6,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 3,
              mass: 4, //duration y bounce se anulara si se establece stiffness, damping o mass
              restDelta: 0.001,
            },
          }}
        >
          A
        </motion.span>
        <motion.span
          className={stylesC}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.6,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 3,
              mass: 5, //duration y bounce se anulara si se establece stiffness, damping o mass
              restDelta: 0.001,
            },
          }}
        >
          n
        </motion.span>
        <motion.span
          className={stylesC}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.9,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 3,
              mass: 6, //duration y bounce se anulara si se establece stiffness, damping o mass
              restDelta: 0.001,
            },
          }}
        >
          t
        </motion.span>
        <motion.span
          className={stylesC}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.9,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 3,
              mass: 4, //duration y bounce se anulara si se establece stiffness, damping o mass
              restDelta: 0.001,
            },
          }}
        >
          o
        </motion.span>
        <motion.span
          className={stylesC}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 3,
              mass: 6, //duration y bounce se anulara si se establece stiffness, damping o mass
              restDelta: 0.001,
            },
          }}
        >
          n
        </motion.span>
        <motion.span
          className={stylesC}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 3,
              mass: 3, //duration y bounce se anulara si se establece stiffness, damping o mass
              restDelta: 0.001,
            },
          }}
        >
          i
        </motion.span>
        <motion.span
          className={stylesC}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 3,
              mass: 3, //duration y bounce se anulara si se establece stiffness, damping o mass
              restDelta: 0.001,
            },
          }}
        >
          o
        </motion.span>
        , <br />
        <motion.span
          className={stylesC}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 3,
              mass: 4, //duration y bounce se anulara si se establece stiffness, damping o mass
              restDelta: 0.001,
            },
          }}
        >
          D
        </motion.span>
        <motion.span
          className={stylesC}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 3,
              mass: 5, //duration y bounce se anulara si se establece stiffness, damping o mass
              restDelta: 0.001,
            },
          }}
        >
          e
        </motion.span>
        <motion.span
          className={stylesC}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 3,
              mass: 7, //duration y bounce se anulara si se establece stiffness, damping o mass
              restDelta: 0.001,
            },
          }}
        >
          s
        </motion.span>
        <motion.span
          className={stylesC}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 3,
              mass: 5, //duration y bounce se anulara si se establece stiffness, damping o mass
              restDelta: 0.001,
            },
          }}
        >
          a
        </motion.span>
        <motion.span
          className={stylesC}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 3,
              mass: 6, //duration y bounce se anulara si se establece stiffness, damping o mass
              restDelta: 0.001,
            },
          }}
        >
          r
        </motion.span>
        <motion.span
          className={stylesC}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 3,
              mass: 7, //duration y bounce se anulara si se establece stiffness, damping o mass
              restDelta: 0.001,
            },
          }}
        >
          r
        </motion.span>
        <motion.span
          className={stylesC}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 3,
              mass: 6, //duration y bounce se anulara si se establece stiffness, damping o mass
              restDelta: 0.001,
            },
          }}
        >
          o
        </motion.span>
        <motion.span
          className={stylesC}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 3,
              mass: 4, //duration y bounce se anulara si se establece stiffness, damping o mass
              restDelta: 0.001,
            },
          }}
        >
          l
        </motion.span>
        <motion.span
          className={stylesC}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 3,
              mass: 8, //duration y bounce se anulara si se establece stiffness, damping o mass
              restDelta: 0.001,
            },
          }}
        >
          l
        </motion.span>
        <motion.span
          className={stylesC}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 3,
              stiffness: 50, //duration y bounce se anulara si se establece stiffness, damping o mass
              restDelta: 0.001,
            },
          }}
        >
          a
        </motion.span>
        <motion.span
          className={stylesC}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 3,
              mass: 4.5, //duration y bounce se anulara si se establece stiffness, damping o mass
              restDelta: 0.001,
            },
          }}
        >
          d
        </motion.span>
        <motion.span
          className={stylesC}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 3,
              mass: 5.5, //duration y bounce se anulara si se establece stiffness, damping o mass
              restDelta: 0.001,
            },
          }}
        >
          o
        </motion.span>
        <motion.span
          className={stylesC}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 3,
              mass: 6, //duration y bounce se anulara si se establece stiffness, damping o mass
              restDelta: 0.001,
            },
          }}
        >
          r
        </motion.span>
        <motion.span
          className={stylesC}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 3,
              mass: 4.3, //duration y bounce se anulara si se establece stiffness, damping o mass
              restDelta: 0.001,
            },
          }}
        >
          W
        </motion.span>
        <motion.span
          className={stylesC}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 3,
              mass: 6.6, //duration y bounce se anulara si se establece stiffness, damping o mass
              restDelta: 0.001,
            },
          }}
        >
          e
        </motion.span>
        <motion.span
          className={stylesC}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 3,
              mass: 4.9, //duration y bounce se anulara si se establece stiffness, damping o mass
              restDelta: 0.001,
            },
          }}
        >
          b
        </motion.span>
      </h1>

      <p className={styles.subtitulo}>Desarrollador Front End</p>

      <motion.div
        ref={ref}
        className={styles.box}
        animate={{ x, y }} //movimiento del mouse ---------------------------
        transition={{
          type: "spring",
          damping: 3,
          stiffness: 50,
          restDelta: 0.001,
        }}
      ></motion.div>
      {/* <div className={styles.containerButtom1}>
        <button className={styles.butttomContact}>
          <div className={styles.icon}>
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
          <span>¡Contactame!</span>
        </button>
      </div> */}

      <div className={styles.containerbotom2}>
        <button
          className={styles.butttomContact2}
          onClick={() => scrollToSection("MyContact")}
        >
          <div className={styles.icon2}>
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
          <span className={styles.span2}>¡Contactame!</span>
        </button>
      </div>

      <div className={styles.containerSubTitulo}>
        <h2 className={styles.SubTitleH2} id="MyPortafolio">
          <motion.span
            className={stylesC}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 3,
                mass: 4, //duration y bounce se anulara si se establece stiffness, damping o mass
                restDelta: 0.0001,
              },
            }}
          >
            M
          </motion.span>
          <motion.span
            className={stylesC}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 4,
                mass: 6, //duration y bounce se anulara si se establece stiffness, damping o mass
                restDelta: 0.0001,
              },
            }}
          >
            i
          </motion.span>
          <motion.span
            className={stylesC}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.81, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 3,
                mass: 6, //duration y bounce se anulara si se establece stiffness, damping o mass
                restDelta: 0.0001,
              },
            }}
          >
            P
          </motion.span>
          <motion.span
            className={stylesC}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.91, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 5,
                mass: 7, //duration y bounce se anulara si se establece stiffness, damping o mass
                restDelta: 0.0001,
              },
            }}
          >
            o
          </motion.span>
          <motion.span
            className={stylesC}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.9, 1.01],
              },
              scale: {
                type: "spring",
                damping: 5,
                mass: 7, //duration y bounce se anulara si se establece stiffness, damping o mass
                restDelta: 0.0001,
              },
            }}
          >
            r
          </motion.span>
          <motion.span
            className={stylesC}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.991, 0.1, 1.01],
              },
              scale: {
                type: "spring",
                damping: 5,
                mass: 8, //duration y bounce se anulara si se establece stiffness, damping o mass
                restDelta: 0.0001,
              },
            }}
          >
            t
          </motion.span>
          <motion.span
            className={stylesC}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 5,
                mass: 5, //duration y bounce se anulara si se establece stiffness, damping o mass
                restDelta: 0.0001,
              },
            }}
          >
            a
          </motion.span>
          <motion.span
            className={stylesC}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.51, 0.8, 1.01],
              },
              scale: {
                type: "spring",
                damping: 5,
                mass: 4.5, //duration y bounce se anulara si se establece stiffness, damping o mass
                restDelta: 0.0001,
              },
            }}
          >
            f
          </motion.span>
          <motion.span
            className={stylesC}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.11, 1, 1.01],
              },
              scale: {
                type: "spring",
                damping: 5,
                mass: 7.4, //duration y bounce se anulara si se establece stiffness, damping o mass
                restDelta: 0.0001,
              },
            }}
          >
            o
          </motion.span>
          <motion.span
            className={stylesC}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 1.21, 1.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 5,
                mass: 3.5, //duration y bounce se anulara si se establece stiffness, damping o mass
                restDelta: 0.0001,
              },
            }}
          >
            l
          </motion.span>
          <motion.span
            className={stylesC}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, -0.71, -0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 5,
                mass: 6.6, //duration y bounce se anulara si se establece stiffness, damping o mass
                restDelta: 0.0001,
              },
            }}
          >
            i
          </motion.span>
          <motion.span
            className={stylesC}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, -0.71, -0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 5,
                mass: 6.6, //duration y bounce se anulara si se establece stiffness, damping o mass
                restDelta: 0.0001,
              },
            }}
          >
            o
          </motion.span>
        </h2>
        <div className={styles.containerparagraph2}>
          <p className={styles.paragraph2}>
            Me llamo Antonio, soy desarrollador Front-End y actualmente me
            encuentro en México, CDMX. En estos ultimos 2 años, me he enfocado
            en aprender tecnologias como lo son React js y framenworks para
            estilizar los sitios. Me concentro en trabajar en equipo y en una
            organización construyendo sus propias aplicaciones web. Disfruto mi
            trabajo, y dispuesto a seguir aprendiendo.
          </p>
          <button
            className={styles.buttonsec2}
            onClick={() => scrollToSection("MyHabilities")}
          >
            <span className={styles.spanbuttonsec2}>¡Ver mas!</span>
          </button>
        </div>
      </div>
    </div>
  );
};
