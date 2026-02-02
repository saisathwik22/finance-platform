# 🤖 Fund Flow 🤑

**A powerful personal finance tracker to manage transactions, budgets, and insights with AI-powered receipt scanning & automated reports.**  

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)  
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)  
![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white)  
![Inngest](https://img.shields.io/badge/Inngest-000?style=for-the-badge)  
![Arcjet](https://img.shields.io/badge/Arcjet-FF6F00?style=for-the-badge)  
![Resend](https://img.shields.io/badge/Resend-000000?style=for-the-badge)  
![Recharts](https://img.shields.io/badge/Recharts-FF6384?style=for-the-badge)  
![Gemini API](https://img.shields.io/badge/Gemini%20AI-4285F4?style=for-the-badge)  

## 🌟 Features  

### 🏦 **Account Management**  
✔️ Create & manage multiple user accounts.  
✔️ Set a **default** account with a toggle switch.  
✔️ Secure authentication with Supabase.  

### 💸 **Transaction Tracking**  
✔️ Log transactions with **categories, filters, and sorting**.  
✔️ Bulk selection & deletion (in progress).  
✔️ Transaction history with **detailed rendering**.  

### 📊 **Budgeting & Financial Insights**  
✔️ **Monthly Budget Progress** card to track spending.  
✔️ **Automated budget alerts** every 6 hours (powered by Inngest).  
✔️ AI-powered **monthly financial reports & insights** via email.  

### 📄 **AI-Powered Receipt Scanner**  
✔️ Scan receipts using **Gemini API**.  
✔️ Automatically extract transaction details.  
✔️ Schedule recurring transactions via **Inngest**.  

### 📧 **Automated Email Reports & Alerts**  
✔️ **Custom email templates** for budget alerts.  
✔️ **Monthly report emails** with AI-driven insights.  
✔️ **Resend integration** for smooth email delivery.  

### 📈 **Interactive Charts & Analytics**  
✔️ **Pie charts** for transaction breakdown using Recharts.  
✔️ **Recent transactions list** for quick access.  
✔️ Visualized spending patterns over time.  

### 🛡️ **Security & Performance**  
✔️ **Rate limiting** with **Arcjet** to prevent spam.  
✔️ **Bot protection** via **Arcjet Shield**.  
✔️ Only allows access through **Inngest-controlled jobs**.  

### 🚀 **Deployment & Integrations**  
✔️ **Fully deployed on Vercel** with seamless Inngest integration.  
✔️ Optimized for **performance and scalability**.  

## 📌 Database Design  

Below is the **database schema** used for Fund Flow.  

🖼️ **Database Diagram Preview:**  
![FundFlow-DBdesign](https://github.com/user-attachments/assets/288b6ade-badc-4d3e-b76e-ff076b58bbce) 

🔗 **Database Design URL:** [View Schema](https://app.eraser.io/workspace/iNJMULESeFP7iTB1C7Br?origin=share) 

## 🔧 Tech Stack  

- **Frontend**: Next.js, React, Tailwind CSS  
- **Backend**: Node.js, Prisma, Supabase (PostgreSQL)  
- **Automation & APIs**: Inngest (Cron Jobs), Arcjet (Rate Limiting & Security), Gemini API (AI Features), Resend (Emails)  
- **Deployment**: Vercel (Integrated with Inngest)  

## 🚀 Live Demo  

🔗 **[Link 1](fund-flow-topaz.vercel.app)** 
🔗 **[Link 2](fund-flow-git-main-sathwiks-projects-8fe7e3d4.vercel.app)** 
🔗 **[Link 3](fund-flow-b2en2cjlq-sathwiks-projects-8fe7e3d4.vercel.app)** 

🔑 **Test Credentials:**  
- **Username**: `admin`  
- **Password**: `testaccount2025`  

## 📸 Screenshots  


<img width="1920" height="1120" alt="Screenshot 2026-02-02 144135" src="https://github.com/user-attachments/assets/bce1a5e5-97ad-4a35-9100-fe0066563bcf" />
<img width="1916" height="1128" alt="Screenshot 2026-02-02 144052" src="https://github.com/user-attachments/assets/43cb1a2a-b0b5-4851-b760-017ac7ef99b7" />
<img width="1896" height="1121" alt="Screenshot 2026-02-02 144012" src="https://github.com/user-attachments/assets/2c5017f5-5c0d-4b9e-98de-f7f10cff29c6" />




## 🛠 Setup & Installation  

Clone the repository and install dependencies:  

```bash  
git clone https://github.com/yourusername/fund-flow.git  
cd fund-flow  
npm install  
```

Set up environment variables in `.env` file:  

```plaintext  
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url  
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key  
DATABASE_URL=your_postgres_url  
INNGEST_API_KEY=your_inngest_key  
ARCJET_API_KEY=your_arcjet_key  
RESEND_API_KEY=your_resend_key  
GEMINI_API_KEY=your_gemini_api_key  
```

Run the development server:  

```bash  
npm run dev  
```

## 📬 Contact  

If you have any questions or feedback, feel free to reach out! 🚀  

## Note

Video showcasing entire project coming soon!
