# Next.js Authentication System

A full-featured authentication system built with Next.js, featuring user registration, email verification, password reset, and secure JWT-based authentication.

## Features

- 🔐 **User Authentication**
  - User registration with email and username
  - Secure login with JWT tokens
  - Protected routes and API endpoints
  - User profile management

- ✉️ **Email Verification**
  - Email verification on signup
  - Secure token-based verification
  - Resend verification email functionality

- 🔑 **Password Management**
  - Forgot password functionality
  - Secure password reset via email
  - Password hashing with bcryptjs

- 🎨 **Modern UI**
  - Built with Radix UI components
  - Tailwind CSS for styling
  - Dark mode support
  - Responsive design
  - Form validation with React Hook Form and Zod

- 🔒 **Security**
  - JWT token-based authentication
  - Password hashing with bcryptjs
  - Secure API routes
  - Token expiration handling

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (jsonwebtoken)
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Forms**: React Hook Form + Zod validation
- **Email**: Nodemailer
- **Password Hashing**: bcryptjs

## Prerequisites

- Node.js 18+ installed
- MongoDB database (local or cloud)
- Email service credentials (for sending verification/reset emails)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd auth
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with the following variables:

```env
MONGO_DB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret_key_for_jwt
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
DOMAIN=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
auth/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/               # API routes
│   │   │   └── users/
│   │   │       ├── signup/    # User registration endpoint
│   │   │       ├── login/     # User login endpoint
│   │   │       ├── logout/    # User logout endpoint
│   │   │       ├── me/        # Get current user endpoint
│   │   │       ├── verifyemail/  # Email verification endpoint
│   │   │       ├── forgotpassword/  # Forgot password endpoint
│   │   │       └── resetpassword/   # Reset password endpoint
│   │   ├── login/             # Login page
│   │   ├── signup/            # Signup page
│   │   ├── profile/           # User profile page
│   │   ├── verifyemail/       # Email verification page
│   │   ├── forgotpassword/    # Forgot password page
│   │   └── resetpassword/     # Reset password page
│   ├── components/            # React components
│   │   ├── ui/                # Reusable UI components
│   │   ├── login-form.tsx
│   │   ├── signup-form.tsx
│   │   ├── forgot-password-form.tsx
│   │   ├── reset-password-form.tsx
│   │   └── theme-toggle.tsx
│   ├── models/                # MongoDB models
│   │   └── userModel.js       # User schema
│   ├── dbConfig/              # Database configuration
│   │   └── dbconfig.ts
│   ├── helpers/               # Helper functions
│   │   ├── mailer.ts          # Email sending utility
│   │   └── getdatafromtoken.ts # JWT token decoder
│   └── lib/                   # Utility functions
│       └── utils.ts
└── public/                    # Static assets
```

## API Endpoints

### Authentication

- `POST /api/users/signup` - Register a new user
- `POST /api/users/login` - Login user
- `POST /api/users/logout` - Logout user
- `GET /api/users/me` - Get current user (protected)

### Email & Password

- `POST /api/users/verifyemail` - Verify user email
- `POST /api/users/forgotpassword` - Request password reset
- `POST /api/users/resetpassword` - Reset password with token

## Usage

### User Registration

1. Navigate to `/signup`
2. Fill in username, email, and password
3. Submit the form
4. Check your email for verification link
5. Click the verification link to activate your account

### User Login

1. Navigate to `/login`
2. Enter your email and password
3. Click login
4. You'll be redirected to your profile page

### Password Reset

1. Navigate to `/forgotpassword`
2. Enter your email address
3. Check your email for reset link
4. Click the link and set a new password

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGO_DB_URI` | MongoDB connection string | Yes |
| `NEXTAUTH_SECRET` | Secret key for JWT tokens | Yes |
| `EMAIL_USER` | Email address for sending emails | Yes |
| `EMAIL_PASS` | Email app password | Yes |
| `DOMAIN` | Application domain URL | Yes |

## Security Features

- Passwords are hashed using bcryptjs before storage
- JWT tokens are used for secure authentication
- Email verification prevents fake accounts
- Token expiration for password reset links
- Protected API routes require authentication

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support, please open an issue in the repository or contact the maintainers.
