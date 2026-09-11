# 🧪 Erevna Lab — Laboratory Management Platform

> **A full-stack web platform designed to digitize and centralize the management of a laboratory's clients, service requests, complaints, appointments, and administrative operations.**

**Erevna Lab** is a complete web-based management system developed as a **Projet de Fin d'Études (PFE)**.

The platform was designed to address the operational needs of a laboratory by providing a centralized digital environment where **clients can submit and follow their requests**, while **administrators can manage clients, requests, complaints, appointments, and operational activities through a dedicated dashboard**.

The application follows a client–server architecture composed of an **Angular web application**, a **PHP API layer**, and a **MySQL database**. The repository contains the Angular frontend under `PfeLAB`, a PHP-based API under `api`, and the MySQL database artifacts under `lab`.

---

# 🎓 PFE Project

Erevna Lab was developed as a **Projet de Fin d'Études (PFE)** with the objective of transforming laboratory management processes into a centralized digital platform.

The project addresses a common problem in organizations that rely on manual or fragmented processes:

```text
                    BEFORE
                      │
       ┌──────────────┼──────────────┐
       │              │              │
   Client Data     Requests      Complaints
       │              │              │
       └──────────────┼──────────────┘
                      │
               Fragmented Process
                      │
                      ▼
                 Manual Work


                    AFTER
                      │
                      ▼
             ┌───────────────────┐
             │   EREVNA LAB      │
             │   Web Platform    │
             └─────────┬─────────┘
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
       Clients      Requests    Complaints
          │            │            │
          └────────────┼────────────┘
                       ▼
                Admin Dashboard
```

The objective is not simply to store information, but to provide a **workflow-oriented system** through which clients and laboratory staff can interact with the same centralized information.

---

# 🌐 What Does Erevna Lab Do?

The platform provides two main experiences:

### 👤 Client Portal

Clients can access their personal space to:

* Create an account
* Log in
* Manage their profile
* Submit requests
* Follow their requests
* View request information
* Interact with the laboratory through the platform

The Angular application contains a dedicated client area with dashboard, profile and request-management functionality.

### 🛡️ Administration Dashboard

Laboratory administrators have a separate management environment for monitoring and processing operational information.

The administration area includes dedicated interfaces for:

* Dashboard / overview
* Client management
* Request management
* Complaints
* Appointments
* Administrative operations

These areas are explicitly represented in the Angular application's administration module.

---

# 🏗️ High-Level Architecture

The application follows a traditional **three-layer web architecture**:

```text
                         USER
                           │
             ┌─────────────┴─────────────┐
             │                           │
             ▼                           ▼
      CLIENT PORTAL              ADMIN DASHBOARD
             │                           │
             └─────────────┬─────────────┘
                           │
                           ▼
                  ┌─────────────────┐
                  │     ANGULAR     │
                  │    FRONTEND     │
                  │                 │
                  │  Angular 13     │
                  │  Material       │
                  │  Bootstrap      │
                  └────────┬────────┘
                           │
                           │ HTTP / REST
                           ▼
                  ┌─────────────────┐
                  │    PHP API      │
                  │                 │
                  │ Authentication  │
                  │ Requests        │
                  │ Clients         │
                  │ Status updates  │
                  │ Data access     │
                  └────────┬────────┘
                           │
                           │ SQL / PDO
                           ▼
                  ┌─────────────────┐
                  │      MySQL      │
                  │                 │
                  │ Clients         │
                  │ Admins          │
                  │ Requests        │
                  │ Complaints      │
                  │ Appointments    │
                  └─────────────────┘
```

The repository reflects this separation clearly: `PfeLAB` contains the Angular application, `api` contains PHP endpoints, and `lab` contains MySQL database files.

---

# 🖥️ Admin Dashboard

The administrator interface is the operational center of the platform.

The dashboard is designed to give laboratory staff a centralized view of the organization's activity.

The administration module includes dedicated sections for:

```text
                    ADMINISTRATION
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
        ▼                 ▼                 ▼
     Dashboard         Clients          Requests
        │                 │                 │
        ├─────────────────┼─────────────────┤
        │                 │                 │
        ▼                 ▼                 ▼
    Complaints       Appointments       Operations
```

The repository contains dedicated Angular components for the administrator dashboard, clients, complaints and appointments.

---

# 👥 Client Management

The platform centralizes information about laboratory clients.

Administrators can access client information through the administration area, while clients have their own authenticated space.

The client side includes:

* Client dashboard
* Profile management
* Request management

This creates a clear separation between the **internal laboratory interface** and the **customer-facing interface**.

Conceptually:

```text
                    LABORATORY
                        │
              ┌─────────┴─────────┐
              │                   │
              ▼                   ▼
         ADMIN USERS           CLIENTS
              │                   │
              ▼                   ▼
      Manage information     Manage profile
      Process requests      Submit requests
      Handle complaints     Follow requests
      Manage appointments
```

---

# 🎫 Request & Ticket Management

One of the central parts of the application is the management of **client requests / demandes**.

A client can submit a request through the platform instead of relying on manual communication.

The request lifecycle can be represented as:

```text
                  CLIENT
                    │
                    ▼
             Submit Request
                    │
                    ▼
             ┌──────────────┐
             │    REQUEST   │
             └──────┬───────┘
                    │
                    ▼
             Laboratory Review
                    │
                    ▼
              Status Update
                    │
              ┌─────┴─────┐
              ▼           ▼
          Processing    Validated
              │           │
              └─────┬─────┘
                    ▼
               Client View
```

The PHP API exposes endpoints dedicated to retrieving and creating requests, while Angular provides the client and administration interfaces for interacting with them.

The request API also demonstrates server-side filtering and joins between requests and clients. For example, the request retrieval endpoint queries the `demande` and `client` tables together and filters records according to their quotation validation state.

---

# 🔄 Request Processing

The platform allows the laboratory to process submitted requests rather than treating them as static records.

A simplified workflow is:

```text
Client
  │
  │ Submit request
  ▼
New Request
  │
  │ Laboratory reviews
  ▼
Processing
  │
  ├───────────────┐
  │               │
  ▼               ▼
Validated       Rejected
  │
  ▼
Quotation / Service
  │
  ▼
Client notified / informed
```

The API contains functionality for changing request status and handling request records, which provides the basis for a workflow-driven management system.

---

# 💬 Complaints Management

The platform also provides a dedicated area for **complaints / plaintes**.

This gives administrators a centralized location for handling issues reported by clients.

Instead of complaints being handled exclusively through external communication channels, the system provides a dedicated operational module.

```text
Client
  │
  ▼
Complaint
  │
  ▼
Platform
  │
  ▼
Administrator
  │
  ▼
Review / Processing
  │
  ▼
Resolution
```

The Angular administration interface contains a dedicated complaints module.

---

# 📅 Appointment Management

The platform also includes appointment management for the laboratory.

Administrators have a dedicated **RDVs / appointments** section through the administration dashboard.

This provides a centralized mechanism for organizing client appointments rather than keeping scheduling information disconnected from the rest of the client-management system.

The overall workflow can be represented as:

```text
Client
  │
  ▼
Appointment Request
  │
  ▼
Laboratory
  │
  ▼
Appointment Management
  │
  ▼
Scheduled / Managed Appointment
```

---

# 🔐 Authentication & Access Control

The platform separates authenticated client and administrator experiences.

The PHP API contains dedicated authentication endpoints for:

* Client login
* Administrator login
* Client registration

The API layer includes endpoints such as:

```text
login.php
loginAdmin.php
register.php
```

These endpoints are responsible for the authentication side of the application.

On the frontend, authentication is integrated into Angular's routing and application structure, with dedicated login functionality and separate administration/client areas.

This results in an architecture where:

```text
                         LOGIN
                           │
               ┌───────────┴───────────┐
               │                       │
               ▼                       ▼
           CLIENT                    ADMIN
               │                       │
               ▼                       ▼
        Client Dashboard        Admin Dashboard
```

---

# 📄 Document & PDF Generation

The API layer includes PDF-generation functionality through the `genpdf.php` endpoint and a bundled `dompdf` library.

This provides the foundation for generating downloadable or printable documents from application data.

This is particularly useful in a laboratory-management environment where information may need to be transformed into formal documents, reports or quotations.

---

# 📧 Email Integration

The backend also contains a dedicated `mail` component, indicating integration with email-related functionality.

This allows the platform architecture to support communication between the laboratory and its clients through automated or application-driven email workflows.

A typical workflow can therefore be:

```text
Application Event
      │
      ▼
Backend
      │
      ▼
Email Service
      │
      ▼
Client
```

This can be used for events such as request processing, status changes or other client communications.

---

# 🗄️ Database

The application uses **MySQL** for persistent data storage.

The repository contains database artifacts for entities including:

* `client`
* `admin`
* `demande`
* `plainte`
* `actes`

The database directory also contains the associated MySQL table files.

The application therefore uses a relational data model to connect the main entities of the laboratory-management workflow.

A simplified representation is:

```text
                       ┌──────────────┐
                       │    ADMIN     │
                       └──────────────┘
                              │
                              │ manages
                              ▼
                       ┌──────────────┐
                       │   DEMANDE    │
                       └──────┬───────┘
                              │
                 ┌────────────┼────────────┐
                 │            │            │
                 ▼            ▼            ▼
             CLIENT       PLAINTE       ACTES
                 │
                 │
                 ▼
             APPOINTMENTS
```

The PHP API accesses the database through a database connection layer and PDO-based queries.

---

# 🔌 Backend API

The PHP backend acts as the bridge between the Angular application and MySQL.

It provides application-specific endpoints for operations such as:

* Authentication
* Registration
* Client retrieval
* Request creation
* Request retrieval
* Request status changes
* Request deletion
* Client information
* PDF generation

The API directory contains endpoints such as:

```text
login.php
loginAdmin.php
register.php
Demandes.php
ajoutDemande.php
changeStat.php
suppDemande.php
viewClient.php
viewDemande.php
viewDemandes.php
genpdf.php
```

These endpoints form the application's server-side API layer.

The API returns JSON responses to the Angular application, enabling the frontend to consume the backend services over HTTP. For example, the request endpoint explicitly sets its response content type to JSON.

---

# ⚡ Frontend

The user interface is built with **Angular 13**.

The application uses:

* Angular
* Angular Router
* Angular Forms
* Angular Material
* Bootstrap
* Bootstrap Icons
* RxJS

The project's `package.json` identifies Angular `13.2.x` and Angular Material `13.3.x`, together with Bootstrap 5 and other UI dependencies.

The frontend is organized around separate application areas:

```text
Angular Application
│
├── Authentication
│
├── Client Area
│   ├── Dashboard
│   ├── Profile
│   └── Request Management
│
└── Admin Area
    ├── Dashboard
    ├── Clients
    ├── Requests
    ├── Complaints
    └── Appointments
```

The repository's Angular application structure confirms these separate client and administration modules.

---

# 🔄 End-to-End Data Flow

The application follows a clear request/response architecture.

For example, when a client creates a request:

```text
┌───────────────┐
│    CLIENT     │
└───────┬───────┘
        │
        │ Submit request
        ▼
┌───────────────┐
│    ANGULAR    │
│   FRONTEND    │
└───────┬───────┘
        │
        │ HTTP Request
        ▼
┌───────────────┐
│   PHP API     │
│               │
│ Validate data │
│ Process logic │
└───────┬───────┘
        │
        │ SQL / PDO
        ▼
┌───────────────┐
│     MySQL     │
└───────┬───────┘
        │
        │ Stored data
        ▼
┌───────────────┐
│   PHP API     │
└───────┬───────┘
        │
        │ JSON
        ▼
┌───────────────┐
│    ANGULAR    │
└───────┬───────┘
        │
        ▼
      Client
```

This separation makes the system easier to maintain and allows the frontend and backend to evolve independently.

---

# 🧩 Core Features

| Feature              | Client | Admin |
| -------------------- | :----: | :---: |
| Registration         |    ✅   |   —   |
| Authentication       |    ✅   |   ✅   |
| Profile              |    ✅   |   —   |
| Dashboard            |    ✅   |   ✅   |
| Submit requests      |    ✅   |   —   |
| View/manage requests |    ✅   |   ✅   |
| Request status       |    ✅   |   ✅   |
| Client management    |    —   |   ✅   |
| Complaints           |    —   |   ✅   |
| Appointments         |    —   |   ✅   |
| PDF generation       |    —   |   ✅   |
| Database persistence |    ✅   |   ✅   |

---

# 🛠️ Technology Stack

## Frontend

* **Angular 13**
* **TypeScript**
* **Angular Material**
* **Bootstrap 5**
* **Bootstrap Icons**
* **RxJS**
* **Angular Router**
* **Angular Forms**

The project's package configuration confirms the Angular 13 ecosystem and the UI libraries used by the application.

## Backend

* **PHP**
* **REST-style HTTP endpoints**
* **PDO**
* **JSON**
* **Dompdf**
* Email integration

The API implements JSON responses and database access through PDO.

## Database

* **MySQL**

The repository includes database artifacts for the application's main entities.

---

# 🏛️ Architecture Pattern

At a high level, Erevna Lab follows a **separated frontend/backend architecture**:

```text
                    ┌────────────────────┐
                    │      Angular       │
                    │      Client        │
                    └─────────┬──────────┘
                              │
                              │ HTTP / JSON
                              │
                    ┌─────────▼──────────┐
                    │      PHP API       │
                    │                    │
                    │ Business Logic     │
                    │ Authentication     │
                    │ Data Access        │
                    └─────────┬──────────┘
                              │
                              │ PDO / SQL
                              │
                    ┌─────────▼──────────┐
                    │       MySQL        │
                    │     Database       │
                    └────────────────────┘
```

This architecture separates the presentation layer from backend services and persistence.

---

# 🚀 Getting Started

The project is structured as a local full-stack application rather than a standalone frontend.

To run it, you need:

* Node.js / npm
* Angular CLI compatible with Angular 13
* PHP
* A PHP-compatible web server such as Apache
* MySQL
* A local environment such as XAMPP, WAMP, MAMP or a custom PHP/MySQL setup

---

# 1. Clone the Repository

```bash
git clone https://github.com/SALAH-EO/Erevna_Lab.git

cd Erevna_Lab
```

The repository contains the frontend, backend API and database components required by the project.

---

# 2. Set Up the Database

Create a MySQL database for the laboratory application.

The repository contains the database artifacts under:

```text
lab/
```

The database includes tables related to:

```text
admin
client
demande
plainte
actes
```

Import the corresponding database structure/data into your MySQL environment before starting the application.

---

# 3. Configure the PHP API

The PHP API needs access to your local MySQL server.

Configure the database connection according to your local environment.

The API contains a dedicated database connection layer used by the PHP endpoints.

Place the API directory inside the document root of your PHP server.

For example, with XAMPP:

```text
xampp/
└── htdocs/
    └── Erevna_Lab/
        └── api/
```

The exact API URL should then correspond to your local Apache configuration.

---

# 4. Install Frontend Dependencies

Navigate to the Angular project:

```bash
cd PfeLAB
```

Install the dependencies:

```bash
npm install
```

The project uses Angular CLI 13.2.x and Angular 13.2.x dependencies.

If necessary, install the matching Angular CLI version:

```bash
npm install -g @angular/cli@13.2.6
```

---

# 5. Start the Angular Application

Run:

```bash
ng serve
```

The original Angular project configuration uses the standard Angular development server and serves the application at:

```text
http://localhost:4200/
```

Open the application in your browser:

```text
http://localhost:4200
```

---

# 🔗 Frontend ↔ Backend Configuration

Before using the application, make sure the Angular services point to the correct local PHP API URL.

For example:

```text
Angular
   │
   │ HTTP
   ▼
http://localhost/.../api/
   │
   ▼
PHP
   │
   ▼
MySQL
```

The exact URL depends on where you place the `api` directory in your local Apache/XAMPP/WAMP environment.

---

# 👤 Using the Platform

Once the frontend, PHP server and MySQL database are running, the application provides two main workflows.

## Client Workflow

```text
Register
   │
   ▼
Login
   │
   ▼
Client Dashboard
   │
   ├── Profile
   │
   └── Requests
          │
          ├── Create request
          ├── View request
          └── Follow status
```

## Administrator Workflow

```text
Admin Login
     │
     ▼
Admin Dashboard
     │
     ├── Clients
     │
     ├── Requests
     │
     ├── Complaints
     │
     └── Appointments
```

This separation allows the same platform to serve both the laboratory's internal operations and its clients.

---

# 🧪 Development

The Angular project was generated with Angular CLI 13.2.6. The repository's project configuration supports the standard Angular development commands.

### Development server

```bash
ng serve
```

### Production build

```bash
ng build
```

### Unit tests

```bash
ng test
```

These commands are defined by the project's Angular configuration.

---

# 🔒 Security Considerations

Because this project was developed as a PFE and is provided as a portfolio/educational project, it should be treated as a **development project rather than a production deployment**.

Before deploying a system like this publicly, additional security work should be performed, including:

* Secure password hashing
* Strong authentication mechanisms
* Session/token management
* Input validation
* SQL injection protection
* CSRF protection
* CORS configuration
* Secure API authorization
* HTTPS
* Secure email configuration
* Environment-based secrets
* Database access restrictions
* Production error handling

In particular, configuration and database credentials should never be committed to a public repository.

---

# 🎯 Project Objectives

The project was built around several practical objectives:

### 1. Digitalize laboratory operations

Replace fragmented/manual workflows with a centralized web application.

### 2. Improve client interaction

Give clients a dedicated space to submit and monitor their requests.

### 3. Centralize information

Keep client, request, complaint and appointment information within one system.

### 4. Provide administrative visibility

Give laboratory staff a dashboard through which they can monitor and process operational activities.

### 5. Separate application layers

Use a dedicated frontend, API and database rather than combining all application logic into a single layer.

### 6. Automate repetitive operations

Use backend endpoints and application workflows to reduce manual data handling.

---

# 🧭 Project Architecture at a Glance

```text
                         EREVNA LAB
                             │
                             ▼
                    ┌─────────────────┐
                    │   Web Platform  │
                    └────────┬────────┘
                             │
              ┌──────────────┴──────────────┐
              │                             │
              ▼                             ▼
        CLIENT PORTAL                 ADMIN DASHBOARD
              │                             │
              └──────────────┬──────────────┘
                             │
                             ▼
                      ANGULAR 13
                             │
                         HTTP / JSON
                             │
                             ▼
                         PHP API
                             │
                    ┌────────┼────────┐
                    │        │        │
                    ▼        ▼        ▼
                  Auth    Requests   Services
                    │        │        │
                    └────────┼────────┘
                             │
                             ▼
                           MySQL
                             │
              ┌──────────────┼──────────────┐
              ▼              ▼              ▼
           Clients        Requests      Complaints
                             │
                             ▼
                        Appointments
```

---

# 👨‍💻 Author

**Salah Eddine Ouirra**

**Data Science & Big Data | Software Engineering | AI Engineering**

---

# ⭐ Repository

**GitHub:**
https://github.com/SALAH-EO/Erevna_Lab

If you find the project interesting, feel free to ⭐ star the repository.

---

## 🎓 About This Project

**Erevna Lab** represents one of my major academic projects and was developed as my **Projet de Fin d'Études (PFE)**.

The project gave me practical experience in designing and implementing a complete web application, from the user interface and backend API to database persistence and business workflows.

It represents an early full-stack foundation in my development journey and a step toward building larger, more complex software and AI-driven systems.
