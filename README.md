
---

## 🚦 How It Works

1. The **browser** sends a request to `http://localhost:8080/api/hello`
2. The request goes to the **NGINX container** (port 8080)
3. NGINX forwards the request to the **Node.js container**
4. Node.js handles the request and sends a response
5. NGINX returns that response to the browser

✅ Node.js is **never exposed to the outside world**, only NGINX is.

---

## 🧰 Technologies Used

| Tech | Why it's used |
|------|----------------|
| **NGINX** | Acts as a reverse proxy/API Gateway |
| **Node.js + Express** | Backend server responding to requests |
| **Docker** | Runs both services in isolated containers |
| **Docker Compose** | Starts and connects both services easily |

---


