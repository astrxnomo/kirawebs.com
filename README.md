# 🌐 Kirawebs.com

**Kirawebs.com** is a website developed for a company that offers technological solutions, including web development, consulting, and cloud services. One of the project's standout features is an **interactive multi-step form** that allows clients to simulate the cost of their website.

---

## 🛠️ Technologies Used

- ⚡ **Next.js** – Main framework for building the application.
- ⚛️ **React** – For creating interactive components.
- 🎨 **Tailwind CSS** – For designing and styling the user interface.
- ✨ **Shadcn/UI** – For modern and accessible UI components.
- 📝 **Notion API** – Used to store contact form submissions in a Notion database.
- 🚀 **Redis** – Implements a rate limiting system (3 messages per minute).
- ✅ **Zod** – Used for schema validation in the contact form.
- 🧹 **ESLint** & **Prettier** – Maintain clean and well-formatted code.
- 🌐 **Appwrite** – Deployment and hosting platform.

---

## 🌟 Key Features

### 💰 Interactive Website Cost Estimation Form

Clients can follow a series of steps to receive a dynamic estimate of their website's cost.

---

### 📝 Contact Form with Validation and Rate Limiting

- 📧 Collects email and message from the user.
- ✅ Data is validated using **Zod**.
- 💾 Upon successful validation, data is stored in a **Notion** database.
- ⚡ A **rate limiter** using **Redis** restricts users to **3 messages per minute**.

---

## 📊 Notion Database Integration

All contact form submissions are automatically stored in a Notion database for easy management and retrieval.

---
