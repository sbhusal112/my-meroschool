# Mero School - Virtual Classroom Platform

A comprehensive virtual classroom platform built with Node.js, Express, MongoDB, and modern web technologies. Features include real-time video chat, AI-powered assistance, study material management, and multi-language support (English & Nepali).

## 🌟 Features

### Core Features
- **User Management**: Student, teacher, admin, and parent roles
- **Class Management**: Support for classes 1-12 (+2 level)
- **Study Materials**: Upload, organize, and share educational content
- **Homework System**: Assign, submit, and grade assignments
- **Video Chat**: Real-time virtual classrooms with screen sharing
- **AI Assistant**: Educational AI with subject-specific help
- **Multi-language**: English and Nepali support
- **File Management**: Support for images, videos, PDFs, documents
- **Search & Filter**: Advanced search across all content
- **Notifications**: Email and in-app notifications

### Advanced Features
- **AI Media Generation**: Text-to-video, text-to-audio, text-to-image
- **Interactive Whiteboard**: Real-time collaborative drawing
- **Screen Sharing**: Teacher screen sharing capabilities
- **Slides & Animations**: Presentation tools for teachers
- **Student Progress Tracking**: Analytics and performance monitoring
- **Social Features**: Sharing materials, collaborative learning
- **Mobile Responsive**: Works on all devices

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mero-school-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

4. **Database setup**
   ```bash
   # Start MongoDB (if running locally)
   mongod
   
   # Or use MongoDB Atlas (cloud)
   # Update MONGODB_URI in .env
   ```

5. **Run the application**
   ```bash
   # Development
   npm run dev
   
   # Production
   npm start
   ```

6. **Seed database (optional)**
   ```bash
   npm run seed
   ```

## 📁 Project Structure

```
mero-school-backend/
├── models/                 # Database models
│   ├── User.js
│   ├── StudyMaterial.js
│   ├── Homework.js
│   └── VideoChat.js
├── routes/                 # API routes
│   ├── auth.js
│   ├── users.js
│   ├── materials.js
│   ├── homework.js
│   ├── ai.js
│   └── videoChat.js
├── middleware/             # Custom middleware
│   ├── auth.js
│   └── errorHandler.js
├── utils/                  # Utility functions
│   ├── logger.js
│   ├── email.js
│   └── fileUpload.js
├── socket/                 # Socket.IO handlers
│   └── socket.js
├── uploads/                # File uploads
├── logs/                   # Application logs
├── scripts/                # Database scripts
├── server.js              # Main server file
├── package.json
└── README.md
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file based on `env.example`:

```env
# Server Configuration
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:3000

# Database
MONGODB_URI=mongodb://localhost:27017/mero-school

# JWT
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=7d

# Email (for notifications)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# File Upload
MAX_FILE_SIZE=52428800
UPLOAD_PATH=./uploads

# AI Services
OPENAI_API_KEY=your-openai-api-key

# Cloud Storage (optional)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

## 📚 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "student123",
  "email": "student@example.com",
  "password": "Password123",
  "firstName": "John",
  "lastName": "Doe",
  "role": "student",
  "currentClass": 10
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "identifier": "student@example.com",
  "password": "Password123"
}
```

#### Refresh Token
```http
POST /api/auth/refresh
Content-Type: application/json

{
  "refreshToken": "your-refresh-token"
}
```

### Study Materials Endpoints

#### Get Materials by Class & Subject
```http
GET /api/materials?class=10&subject=math
Authorization: Bearer <token>
```

#### Upload Material
```http
POST /api/materials
Authorization: Bearer <token>
Content-Type: multipart/form-data

{
  "title": "Algebra Basics",
  "description": "Introduction to algebraic expressions",
  "type": "lesson",
  "subject": "math",
  "class": 10,
  "files": [file1, file2]
}
```

#### Share Material
```http
POST /api/materials/:id/share
Authorization: Bearer <token>
Content-Type: application/json

{
  "userId": "user-id",
  "permission": "view"
}
```

### AI Assistant Endpoints

#### Chat with AI
```http
POST /api/ai/chat
Authorization: Bearer <token>
Content-Type: application/json

{
  "message": "Explain photosynthesis",
  "subject": "science",
  "class": 8
}
```

#### Generate Media
```http
POST /api/ai/generate-video
Authorization: Bearer <token>
Content-Type: application/json

{
  "description": "Solar system planets",
  "duration": 60,
  "style": "educational"
}
```

### Video Chat Endpoints

#### Create Room
```http
POST /api/video-chat/rooms
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Math Class 10A",
  "subject": "math",
  "class": 10,
  "maxParticipants": 30
}
```

#### Join Room
```http
POST /api/video-chat/rooms/:id/join
Authorization: Bearer <token>
```

## 🔐 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt with configurable rounds
- **Rate Limiting**: API rate limiting to prevent abuse
- **Input Validation**: Comprehensive request validation
- **CORS Protection**: Configurable cross-origin resource sharing
- **Helmet Security**: Security headers middleware
- **Account Locking**: Automatic account lockout after failed attempts
- **File Upload Security**: File type and size validation

## 📊 Database Models

### User Model
- Authentication fields (username, email, password)
- Profile information (name, role, education)
- Preferences (language, theme, notifications)
- Social login integration
- Account security features

### StudyMaterial Model
- Content metadata (title, description, type)
- File attachments with type classification
- Sharing and permissions system
- Rating and review system
- Search and filtering capabilities

### Homework Model
- Assignment details and requirements
- Submission tracking
- Grading system
- Due date management
- Student progress tracking

## 🚀 Deployment

### Local Development
```bash
npm run dev
```

### Production Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Set environment variables**
   ```bash
   NODE_ENV=production
   MONGODB_URI=your-production-mongodb-uri
   JWT_SECRET=your-production-jwt-secret
   ```

3. **Start the server**
   ```bash
   npm start
   ```

### Docker Deployment

```dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
```

### Environment-Specific Configurations

#### Development
- Detailed logging
- CORS enabled for localhost
- File uploads to local storage
- Hot reload with nodemon

#### Production
- Optimized logging
- CORS restricted to frontend domain
- Cloud storage for files
- PM2 process management
- SSL/TLS encryption

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test -- --grep "User Model"
```

## 📈 Monitoring & Logging

- **Winston Logger**: Structured logging with multiple transports
- **Error Tracking**: Comprehensive error handling and reporting
- **Performance Monitoring**: Request timing and database query logging
- **Security Logging**: Authentication and authorization events
- **File Rotation**: Automatic log file rotation and compression

## 🔧 Maintenance

### Database Maintenance
```bash
# Backup database
mongodump --db mero-school --out ./backups

# Restore database
mongorestore --db mero-school ./backups/mero-school
```

### Log Management
```bash
# View recent logs
tail -f logs/combined.log

# View error logs
tail -f logs/error.log
```

### File Cleanup
```bash
# Clean old uploads
npm run cleanup:uploads

# Clean old logs
npm run cleanup:logs
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔄 Updates

Stay updated with the latest features and security patches:
```bash
git pull origin main
npm install
npm run migrate
```

---

**Mero School** - Empowering education through technology 