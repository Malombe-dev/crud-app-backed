# 🛒 Product CRUD API with Image Uploads

A simple RESTful API built with **Node.js**, **Express**, **MongoDB**, and **Cloudinary**. This API allows you to **Create**, **Read**, **Update**, and **Delete** (CRUD) products in a MongoDB database, with support for image uploads to the cloud.

---

## 📦 Features

- Add new products with images
- Get a list of all products
- Get a specific product by ID
- Update a product by ID
- Delete a product by ID
- Cloud-based image storage via Cloudinary

---

## 🧰 Tech Stack

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Cloudinary](https://cloudinary.com/) – for image storage
- [Multer](https://github.com/expressjs/multer) – for handling `multipart/form-data`

---

## 📁 Project Structure

.
├── index.js # Main server file with all routes
├── models/
│ └── product.model.js # Mongoose schema for Product
├── middleware/
│ └── upload.js # Multer config & Cloudinary integration
├── package.json
└── README.md



---

## 🧑‍💻 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/malombe-dev/product-crud-api.git
cd product-crud-api
2. Install dependencies
bash
Copy
Edit
npm install
3. Add Environment Variables
Create a .env file in the root and add the following:


CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
MONGO_URI=your_mongo_connection_string
Replace with your actual Cloudinary credentials and MongoDB URI.

4. Run the server

npm run dev



📬 API Endpoints
Method	Endpoint	Description
GET	/	Welcome message
POST	/api/products	Create a new product with image (form-data)
GET	/api/products	Get all products
GET	/api/products/:id	Get a product by ID
PUT	/api/products/:id	Update a product by ID
DELETE	/api/products/:id	Delete a product by ID

🧪 Testing with Postman
When creating a product, use POST /api/products with form-data in Postman.

Fields:

name (string)

quantity (number)

price (number)

image (file)
