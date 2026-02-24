# React Hook Form + Yup Validation - Registration Form

A modern registration form built with React Hook Form and Yup validation, featuring a beautiful gradient UI.

---

## 🚀 Features

- **React Hook Form** for efficient form management
- **Yup Validation** with schema-based validation
- **Real-time validation** with error messages
- **Password confirmation** validation
- **Terms & conditions** checkbox requirement
- **Success message** on form submission
- **Modern UI** with gradient effects and blur backdrop

---

## 📋 Form Fields

- Full Name (required, min 3 characters)
- Email (required, valid email format)
- Password (required, min 8 chars, at least 1 number)
- Confirm Password (required, must match password)
- Terms & Conditions (must be checked)

---

## 🛠️ Technologies Used

- React 18
- React Hook Form
- Yup
- @hookform/resolvers
- CSS3

---

## 📦 Installation

### 1️⃣ Clone the repository:

```bash
cd <project-folder>
```

### 2️⃣ Install dependencies:

```bash
npm install
```

### 3️⃣ Install required packages:

```bash
npm install react-hook-form yup @hookform/resolvers
```

---

## 🚀 Running the Project

### 1️⃣ Start the development server:

```bash
npm run dev
```

### 2️⃣ Open in your browser:

```
http://localhost:3000
```

---

## 📁 Project Structure

```
src/
├── components/
│   └── RegisterForm.jsx
├── schemas/
│   └── registerSchema.js
├── App.js
├── App.css
└── index.js
```

---

## 📸 Screenshots

### 📝 Registration Form

![Registration Form](assets/screenshots/form.png)

---

### ❌ Validation Errors

![Validation Errors](assets/screenshots/error.png)

---

### ✅ Success Message

![Success Message](assets/screenshots/success.png)

---

## 💡 Usage

1. Fill in the registration form  
2. Validation occurs in real-time  
3. Submit button enables only when form is valid  
4. On success, data is logged to console and success message appears  

---

## 🎨 Validation Rules

| Field | Rules |
|-------|-------|
| Full Name | Required, minimum 3 characters |
| Email | Required, valid email format |
| Password | Required, min 8 chars, at least 1 number |
| Confirm Password | Required, must match password |
| Terms | Must be checked |

---

## 📝 License

This project is created for educational purposes as part of a React assignment.