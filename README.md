# PixelWave Studio 🌊🎨

Welcome to **PixelWave Studio** – a creative and responsive website template designed for digital design studios, freelancers, and creative agencies.

## 🚀 Project Overview

PixelWave Studio is a modern, responsive website designed to showcase your services, testimonials, and contact information with style. Built using HTML, CSS, and vanilla JavaScript (EmailJS integration), this site is easy to customize and perfect for small agencies or individual creatives.

## ✨ Features

- ✅ Clean, gradient-based UI
- 💬 Testimonial section with navigation arrows
- 📩 Fully functional contact form powered by [EmailJS](https://www.emailjs.com/)
- 📱 Responsive design for all screen sizes
- 🎨 Custom CSS with modern layout using Flexbox and Grid
- 🧾 Minimal external dependencies (FontAwesome & Google Fonts)

## 📁 Project Structure

PixelWave-Studio/ │ ├── index.html ├── style.css ├── script.js ├── images/ │ ├── logo.png │ ├── tm.jpg │ └── dots.png └── README.md



## 📬 Contact Form Setup

This project uses [EmailJS](https://www.emailjs.com/) to send emails directly from the frontend without a backend.

### Steps to Set Up EmailJS:

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create a new service and template
3. Get your **Service ID**, **Template ID**, and **Public Key**
4. Replace these in your `script.js`:

```javascript
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
emailjs.init('YOUR_PUBLIC_KEY');



---

Let me know if you'd like a version in Arabic or if you're planning to host it online (I can help you with deployment tips too).
