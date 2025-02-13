# **Base Auth**  
### **Authentication System**  

## **Getting Started**  
Follow these steps to set up and run the project locally.  

### **1. Clone the Repository**  
```sh
git clone https://github.com/smit5217/Base_auth.git
```

### **2. Install Dependencies**  
Navigate to the project folder and install required dependencies:  
```sh
cd Base_auth
npm install
```

### **3. Configure the Database**  
Ensure you have **MySQL** installed and running. Then, create a database and update your environment variables.  

#### **Database Credentials**  
Update your `.env` file with the following credentials:  
```env
DB_HOST=localhost
DB_USER=root
DB_PASS=.....
DB_NAME=test
JWT_SECRET=Jg2bbd2y467t2bddb236bceygfbehc67b
```

### **4. Start the Backend Server**  
Run the backend server with:  
```sh
npm start
```

### **5. Start the Frontend**  
Navigate to the frontend directory (if applicable) and start the frontend:  
```sh
npm start
```

## **Features to Improve**  
Here are some potential improvements for future updates:  
✅ Add validation for duplicate entries and incomplete responses.  
✅ Implement **Joi** for input validation.  
✅ Add **unit tests** using **Jest** and **Supertest**.  
✅ Enhance the user interface for **login** and **registration**.  
✅ Use **Toast notifications** for warnings and error messages.  

---
