# SangreLima – Landing Page

**SangreLima** es una red de conexión inteligente entre donantes y solicitantes de sangre en Lima, Perú. Conecta de forma automática a personas que necesitan sangre con urgencia con donantes compatibles, cercanos y verificados, a partir de solicitudes validadas por un centro de salud.

Este repositorio contiene el **Landing Page** del producto, desarrollado como parte del Trabajo Final del curso **1ASI0385 IHC y Tecnologías Móviles** de la Universidad Peruana de Ciencias Aplicadas (UPC).

## Problemática

El Perú necesita entre 624 000 y 640 000 unidades de sangre al año, pero la colecta nacional apenas supera las 400 000. Además, alrededor del 77 % de las donaciones son de "reposición" (un familiar dona a cambio de la sangre que necesita otro familiar). En una emergencia, las familias deben buscar donantes por redes sociales o de boca en boca, perdiendo tiempo valioso.

## Segmentos objetivo

| Segmento | Descripción |
|---|---|
| Pacientes y familiares | Personas que requieren una transfusión urgente (cirugías, accidentes, tratamientos oncológicos, partos de riesgo). |
| Donantes voluntarios | Donantes recurrentes que quieren donar de forma organizada y ser notificados solo cuando su tipo de sangre es realmente necesario cerca de ellos. |
| Bancos de sangre y clínicas | Centros de salud que buscan ampliar su red de donantes voluntarios verificados más allá de las campañas de reposición. |

## Principales características

- **Solicitudes validadas:** cada solicitud de sangre es verificada por un centro de salud antes de publicarse.
- **Matching por compatibilidad y cercanía:** solo se notifica a donantes con el tipo de sangre correcto, cercanos y que ya cumplen el periodo mínimo desde su última donación.
- **Confirmación con un toque:** el donante confirma su disponibilidad en un solo paso.
- **Seguimiento de la solicitud:** el solicitante ve el estado de su pedido y los donantes confirmados.
- **Historial y reconocimiento:** el donante lleva un historial de sus donaciones.
- **Gestión institucional:** los bancos de sangre validan solicitudes y registran las donaciones realizadas.

## Tecnologías

- HTML5
- CSS3 (sin frameworks de CSS)
- JavaScript (uso básico para interacciones simples)
- Google Fonts (Outfit) y Font Awesome

## Estructura del proyecto

```
sangrelima-landing-page/
├── README.md
└── public/
    ├── index.html
    ├── favicon.ico
    └── assets/
        ├── images/
        ├── scripts/main.js
        └── styles/styles.css
```

## Cómo ejecutarlo

1. Clonar el repositorio.
2. Abrir `public/index.html` en el navegador (o con la opción *Open in Browser* de WebStorm).

## Flujo de trabajo

El equipo aplica **GitFlow** (`main`, `develop`, `feature/*`, `release/*`, `hotfix/*`), **Semantic Versioning** para los releases y **Conventional Commits** para los mensajes de commit.

## Autores – Startup SangreLima

| Integrante | Código |
|---|---|
| Belon Carita, Jorge Mathias | u202322422 |
| Campos Acosta, Fatima Brigit | u202521899 |
| Calderon Mendoza, Sebastian Pavel | u202412227 |
| Martín Farro, Alexis Sebastian | u202515871 |
| Molina Benites, Luis Enrique | u202520955 |
| Reyes Diaz, Frances Kamila | u202421764 |

**Curso:** 1ASI0385 IHC y Tecnologías Móviles – UPC
**Docente:** Kevin Edgar Salazar Ruiz
