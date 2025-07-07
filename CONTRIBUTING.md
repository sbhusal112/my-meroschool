# 🤝 Contributing to Mero School

Thank you for your interest in contributing to Mero School! This document provides guidelines for contributing to this open-source virtual classroom platform.

## 🎯 **How to Contribute**

### **Types of Contributions**
- 🐛 **Bug Reports** - Report issues you find
- 💡 **Feature Requests** - Suggest new features
- 📝 **Documentation** - Improve docs and guides
- 🔧 **Code Contributions** - Submit pull requests
- 🌍 **Translations** - Add new languages
- 🎨 **UI/UX Improvements** - Design enhancements
- 🧪 **Testing** - Write tests and report bugs

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js 16+ 
- MongoDB
- Git
- Basic knowledge of JavaScript/Node.js

### **Setup Development Environment**
```bash
# Fork and clone the repository
git clone https://github.com/YOUR_USERNAME/mero-school-backend.git
cd mero-school-backend

# Install dependencies
npm install

# Copy environment file
cp env.example .env

# Start development server
npm run dev
```

## 📋 **Contribution Guidelines**

### **Code Style**
- Follow existing code style and conventions
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused
- Use ES6+ features when appropriate

### **Commit Messages**
Use conventional commit format:
```
type(scope): description

feat(auth): add social login with Google
fix(api): resolve user registration bug
docs(readme): update installation instructions
style(ui): improve button styling
refactor(db): optimize database queries
test(auth): add unit tests for login
```

### **Pull Request Process**
1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Make** your changes
4. **Test** your changes thoroughly
5. **Commit** with clear messages
6. **Push** to your fork
7. **Create** a Pull Request
8. **Wait** for review and feedback

## 🐛 **Reporting Bugs**

### **Before Reporting**
- Check existing issues
- Search for similar problems
- Try to reproduce the issue

### **Bug Report Template**
```markdown
**Bug Description**
Clear description of the issue

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**
What should happen

**Actual Behavior**
What actually happens

**Environment**
- OS: [e.g., Windows 10]
- Node.js: [e.g., 18.0.0]
- Browser: [e.g., Chrome 120]
- Database: [e.g., MongoDB 6.0]

**Screenshots**
If applicable, add screenshots

**Additional Context**
Any other relevant information
```

## 💡 **Requesting Features**

### **Feature Request Template**
```markdown
**Feature Description**
Clear description of the feature

**Problem Statement**
What problem does this solve?

**Proposed Solution**
How should this work?

**Alternative Solutions**
Other ways to solve this

**Additional Context**
Screenshots, mockups, examples
```

## 🧪 **Testing**

### **Running Tests**
```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test -- --grep "User Model"
```

### **Writing Tests**
- Write tests for new features
- Ensure good test coverage
- Use descriptive test names
- Test both success and failure cases

## 🌍 **Adding Translations**

### **Supported Languages**
- English (en) - Default
- Nepali (np) - Primary target

### **Adding New Language**
1. Add language code to `utils/translations.js`
2. Translate all strings
3. Update language switcher
4. Test with different languages

## 📚 **Documentation**

### **Documentation Standards**
- Use clear, concise language
- Include code examples
- Add screenshots when helpful
- Keep documentation up-to-date

### **Documentation Areas**
- README.md - Project overview
- API.md - API documentation
- DEPLOYMENT.md - Deployment guides
- CONTRIBUTING.md - This file

## 🔒 **Security**

### **Security Guidelines**
- Never commit sensitive data (API keys, passwords)
- Report security vulnerabilities privately
- Follow security best practices
- Use environment variables for secrets

### **Reporting Security Issues**
If you find a security vulnerability:
1. **DO NOT** create a public issue
2. Email: security@meroschool.com
3. Include detailed description
4. Wait for response before disclosure

## 🏷️ **Labels and Milestones**

### **Issue Labels**
- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements to docs
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `question` - Further information requested

### **Pull Request Labels**
- `ready for review` - Ready for maintainer review
- `work in progress` - Still being worked on
- `needs testing` - Requires testing
- `breaking change` - Changes API or behavior

## 🎉 **Recognition**

### **Contributors**
- All contributors will be listed in README.md
- Significant contributions get special recognition
- Contributors can add themselves to CONTRIBUTORS.md

### **Contributor Levels**
- **Contributor** - First contribution
- **Regular Contributor** - Multiple contributions
- **Maintainer** - Consistent, high-quality contributions

## 📞 **Getting Help**

### **Communication Channels**
- **GitHub Issues** - Bug reports and feature requests
- **GitHub Discussions** - General questions and ideas
- **Email** - security@meroschool.com (security issues only)

### **Code of Conduct**
- Be respectful and inclusive
- Help others learn and grow
- Give constructive feedback
- Follow community guidelines

## 🚀 **Quick Start for New Contributors**

1. **Pick an issue** labeled `good first issue`
2. **Comment** on the issue to claim it
3. **Fork** and clone the repository
4. **Create** a branch for your work
5. **Make** your changes
6. **Test** thoroughly
7. **Submit** a pull request
8. **Respond** to feedback

## 📝 **License**

By contributing to Mero School, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to Mero School! Together, we're making education accessible to everyone. 🌍📚** 