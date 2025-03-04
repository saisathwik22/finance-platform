# 🌊 Fund Flow 💰  

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

🔗 **[Visit Fund Flow](https://finance-platform-ten.vercel.app/)** 

🔑 **Test Credentials:**  
- **Email**: `reddysaisathwik022@gmail.com`  
- **Password**: `dummyadmin25`  

## 📸 Screenshots  


![Screenshot (69)](https://github.com/user-attachments/assets/8acf592f-907c-4142-b583-229df8bb73f9)
![Screenshot (70)](https://github.com/user-attachments/assets/a14626fa-e899-4426-9a50-fef8666f4b0f)
![Screenshot (71)](https://github.com/user-attachments/assets/f0ec2c78-7383-4a7f-9de2-da5f4bee0e17)
![Screenshot (72)](https://github.com/user-attachments/assets/3bc70245-367c-435c-9619-b5ced4169a7d)




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
