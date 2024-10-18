# Recell

### 1. Projeyi Klonlama ve Klasöre Geçme

```bash
git clone https://github.com/korayguler/react-recell
cd react-recell
```

### 2. Bağımlılıkları Yükleme

```bash
npm install
```

### 3. Projeyi Başlatma

Bu proje hem bir JSON server hem de bir Vite geliştirme sunucusunu aynı anda çalıştırmak için `concurrently` paketini kullanır. Projeyi başlatmak için aşağıdaki komutu çalıştırın:

```bash
npm start
```

Bu komut, aşağıdaki iki komutu aynı anda çalıştıracaktır:

- Vite geliştirme sunucusu: Frontend React uygulaması için (http://localhost:3000)
- JSON server: Mock API için (http://localhost:3001)

### 4. Projeyi Derleme

```bash
npm run build
```

Bu komut, `dist` klasörüne derlenmiş dosyaları oluşturacaktır.

### 5. Projeyi Test Etme

```bash
npm test
```

Bu komut, testleri çalıştıracaktır.

### Projede Kullanılan Önemli Teknolojiler

#### React

- **React**: Kullanıcı arayüzleri oluşturmak için kullanılan bir JavaScript kütüphanesi. Projenin ana yapısını oluşturur.

#### Vite

- **Vite**: React uygulamasını hızlı bir şekilde geliştirmek ve yapılandırmak için kullanılan bir araçtır. Webpack’e göre daha hızlıdır ve modern geliştirme deneyimi sunar.

#### Zustand

- **Zustand**: Global state yönetimi için kullanılan küçük ve esnek bir kütüphanedir. React'teki state yönetimini basit ve performanslı hale getirir. Bu projede alışveriş sepeti ve diğer global state'ler için Zustand kullanılmıştır.

#### React Query (TanStack Query)

- **@tanstack/react-query**: Sunucu verilerinin fetch edilmesi, cache’lenmesi, senkronize edilmesi ve güncellenmesi için kullanılan bir kütüphanedir. Bu proje, API isteklerini ve veri cache'lerini yönetmek için React Query kullanmaktadır.

#### Tailwind CSS

- **Tailwind CSS**: Hızlıca stil ekleyebilmek için kullanılan utility-first bir CSS framework'üdür. Proje içerisinde CSS'i yazarken daha hızlı ve düzenli bir şekilde stil eklemenizi sağlar.

#### Jest ve Testing Library

- **Jest**: JavaScript kodlarını test etmek için kullanılan popüler bir test framework'üdür.
- **@testing-library/react**: React component'lerini test etmek için kullanılan bir kütüphanedir. Projede Jest ve Testing Library birlikte kullanılarak birim testler yazılmıştır.

#### Prettier ve ESLint

- **Prettier**: Kodunuzu otomatize bir şekilde formatlayan bir araçtır.
- **ESLint**: JavaScript kodlarınızı analiz ederek olası hataları bulur ve kod standardizasyonunu sağlar.

#### JSON Server

- **JSON Server**: Basit bir REST API oluşturmak için kullanılır. Bu proje, mock API servisi olarak JSON Server'ı kullanır.
