# CashNest 💸

A modern full-stack personal finance management application built using the **MERN Stack**. CashNest helps users manage income, expenses, and budgets with real-time analytics, charts, and a responsive dashboard UI.

---

# 🚀 Live Demo

Frontend:
[CashNest Frontend](https://vercel.com?utm_source=chatgpt.com)

Backend API:
[CashNest Backend](https://render.com?utm_source=chatgpt.com)

---

# 📌 Features

## ✅ Dashboard Analytics

* Total Income
* Total Expenses
* Remaining Balance
* Budget Overview
* Recent Activities

## ✅ Income Management

* Add Income
* Edit Income
* Delete Income

## ✅ Expense Management

* Add Expenses
* Edit Expenses
* Delete Expenses
* Category-based Tracking

## ✅ Budget System

* Set Monthly Budget
* Track Remaining Budget
* Budget Usage Percentage

## ✅ Data Visualization

* Expense Category Pie Chart
* Weekly Income vs Expense Bar Chart

## ✅ Search & Filter

* Search transactions
* Filter by categories
* Sort by dates and amount

## ✅ Responsive Design

* Mobile-friendly UI
* Modern dark dashboard
* Smooth user experience

## ✅ Persistence

* MongoDB Atlas cloud storage
* LocalStorage support

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Vite
* React Router DOM
* Axios
* Chart.js
* React Hot Toast
* CSS3

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* CORS
* dotenv

## Deployment

* Vercel (Frontend)
* Render (Backend)

---

# 📂 Project Structure

```txt
CashNest/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── charts/
│   │   ├── styles/
│   │   ├── api/
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── seed.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

# 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/cashnest.git
```

---

# 2️⃣ Install Frontend Dependencies

```bash
cd client
npm install
```

---

# 3️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

---

# 🔐 Environment Variables

## Backend `.env`

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

CLIENT_URL=http://localhost:5173
```

---

# ▶️ Run Project

## Start Backend

```bash
cd backend
npm run dev
```

## Start Frontend

```bash
cd client
npm run dev
```

---

# 🌐 API Routes

## Income Routes

| Method | Route              | Description        |
| ------ | ------------------ | ------------------ |
| GET    | `/api/incomes`     | Get all incomes    |
| POST   | `/api/incomes`     | Add income         |
| PUT    | `/api/incomes/:id` | Update income      |
| DELETE | `/api/incomes/:id` | Delete income      |
| DELETE | `/api/incomes`     | Delete all incomes |

---

## Expense Routes

| Method | Route               | Description         |
| ------ | ------------------- | ------------------- |
| GET    | `/api/expenses`     | Get all expenses    |
| POST   | `/api/expenses`     | Add expense         |
| PUT    | `/api/expenses/:id` | Update expense      |
| DELETE | `/api/expenses/:id` | Delete expense      |
| DELETE | `/api/expenses`     | Delete all expenses |

---

## Budget Routes

| Method | Route         | Description   |
| ------ | ------------- | ------------- |
| GET    | `/api/budget` | Get budget    |
| POST   | `/api/budget` | Save budget   |
| DELETE | `/api/budget` | Delete budget |

---

# 📊 Charts Included

* Doughnut Chart (Expense Categories)
* Bar Chart (Weekly Income vs Expense)

Built using:

* Chart.js
* react-chartjs-2

---

# 🚀 Deployment

## Frontend Deployment

Deployed on:
[Vercel](https://vercel.com?utm_source=chatgpt.com)

## Backend Deployment

Deployed on:
[Render](https://render.com?utm_source=chatgpt.com)

## Database

Hosted on:
[MongoDB Atlas](https://www.mongodb.com/atlas/database?utm_source=chatgpt.com)

---

# 📖 Learning Outcomes

Through this project:

* Learned MERN Stack development
* Built REST APIs using Express.js
* Integrated MongoDB Atlas
* Implemented CRUD operations
* Learned deployment with Render & Vercel
* Implemented Context API state management
* Created responsive dashboard UI
* Used charts for analytics visualization

---

# 🔮 Future Improvements

* Authentication & Authorization
* JWT Login System
* PDF Export Reports
* AI Financial Insights
* Recurring Transactions
* Monthly Analytics
* Mobile Application

---

# 👩‍💻 Author

**Shrutika Gawande**

---

# ⭐ If you like this project

Give it a ⭐ on GitHub!
