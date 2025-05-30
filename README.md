# Reflection Application

Ứng dụng web full-stack với frontend Angular và backend Spring Boot, được thiết kế để cung cấp một nền tảng quản lý và phản ánh dữ liệu.

## 📋 Mục lục

- [Tổng quan](#tổng-quan)
- [Công nghệ sử dụng](#công-nghệ-sử-dụng)
- [Yêu cầu hệ thống](#yêu-cầu-hệ-thống)
- [Cài đặt và chạy ứng dụng](#cài-đặt-và-chạy-ứng-dụng)
- [Cấu trúc dự án](#cấu-trúc-dự-án)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)

## 🎯 Tổng quan

Reflection Application là một ứng dụng web toàn diện được phát triển với:
- **Frontend**: Angular 19.2.4 - Giao diện người dùng hiện đại và responsive
- **Backend**: Spring Boot 3.4.4 - RESTful API mạnh mẽ và bảo mật
- **Database**: MySQL - Lưu trữ dữ liệu tin cậy

## 🛠️ Công nghệ sử dụng

### Frontend (ReflectionFront)
- **Framework**: Angular 19.2.4
- **Language**: TypeScript
- **CLI**: Angular CLI
- **Testing**: Karma, Jasmine
- **Build Tool**: Webpack (via Angular CLI)

### Backend (Reflection API)
- **Framework**: Spring Boot 3.4.4
- **Language**: Java 17
- **Build Tool**: Maven
- **Database**: MySQL
- **ORM**: Spring Data JPA
- **Validation**: Jakarta Validation API 3.0.2
- **Testing**: Spring Boot Test

## 📋 Yêu cầu hệ thống

### Phần mềm cần thiết
- **Node.js**: >= 18.x
- **npm**: >= 9.x
- **Java**: JDK 17 hoặc cao hơn
- **Maven**: >= 3.6.x
- **MySQL**: >= 8.0
- **Git**: Latest version

### Kiểm tra phiên bản
```bash
node --version
npm --version
java -version
mvn --version
mysql --version
```

## 🚀 Cài đặt và chạy ứng dụng

### 1. Clone repository
```bash
git clone <repository-url>
cd reflection-application
```

### 2. Cài đặt và chạy Backend

#### Chạy backend
```bash
cd backend
mvn clean install
mvn spring-boot:run
```

Backend sẽ chạy tại: `http://localhost:8080`

### 3. Cài đặt và chạy Frontend

```bash
cd frontend/ReflectionFront
npm install
ng serve
```

Frontend sẽ chạy tại: `http://localhost:4200`


## 🔧 Development Commands

### Frontend Commands
```bash
# Development server
ng serve

# Build cho production
ng build

# Run unit tests
ng test

# Run e2e tests
ng e2e

# Generate component
ng generate component component-name

# Generate service
ng generate service service-name

# Code linting
ng lint
```

### Backend Commands
```bash
# Compile dự án
mvn compile

# Chạy tests
mvn test

# Package ứng dụng
mvn package

# Clean và rebuild
mvn clean install

# Chạy ứng dụng
mvn spring-boot:run

# Chạy với profile cụ thể
mvn spring-boot:run -Dspring-boot.run.profiles=dev
```

## 📊 API Documentation

### Base URL
```
http://localhost:9000/api
```


### Lỗi thường gặp

1. **Port 4200 đã được sử dụng**
   ```bash
   ng serve --port 4201
   ```

2. **Database connection error**
   - Kiểm tra MySQL service đang chạy
   - Verify database credentials
   - Check firewall settings

3. **Maven build failed**
   ```bash
   mvn clean install -U
   ```

4. **Node modules issues**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```
