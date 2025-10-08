# RakeNet – AI-Based Decision Support System for Rake Formation and Route Optimization  

> Developed by **Team Pilot** for the **Ministry of Steel – Smart India Hackathon 2025**

### Prototype hosted on Vercel for demo purposes  
🔗 [Live Demo](https://rakenet.vercel.app/#/login)

---
## Overview

**RakeNet** is a state-of-the-art AI/ML-based Decision Support System (DSS) designed to revolutionize bulk material rake (full train-load) formation and dispatch planning in large-scale logistics operations, specifically within the **Steel Industry**.

The traditional, manual, or rule-based rake planning process leads to delays, underutilization of assets, and high demurrage costs. RakeNet addresses this by dynamically generating **optimal, cost-efficient, and resource-balanced rake plans** in real-time.

---

## Core Features:
- **AI-Powered Rake Planning:**  
  Uses *Google Gemini API* to analyze pending orders, inventory, and constraints to generate optimized rake formation plans.
- **Dynamic Inventory & Order Tracking:**  
  Monitors production and dispatch data from multiple steel plants.
- **Route Optimization & Live Map:**  
  Displays plant and rake locations using WebGIS (Leaflet + React).
- **Decision Support Dashboard:**  
  Tracks KPIs, order priorities, and resource allocation efficiency.
- **Reporting & Analytics:**  
  Auto-generated reports for order fulfillment and rake utilization.

---

## Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React.js, TypeScript, Tailwind CSS |
| **Backend (Prototype)** | Node.js (Express) |
| **AI/ML Layer** | Google Gemini API (`@google/genai`) |
| **Maps / Visualization** | WebGIS (Leaflet, OpenStreetMap) |
| **Database (Future Integration)** | PostgreSQL + PostGIS |
| **Deployment** | Vercel (Prototype Hosting) |

---

## System Modules

### 1. **Dashboard** (`/dashboard`)
Provides an overview of current stock, pending orders, deadlines, and inventory levels across all bases.

### 2. **Inventory** (`/inventories`)
Displays real-time stock levels, available rakes at each plant, and historical inventory updates.

### 3. **Rake Formation Planner** (`/planner`)
Core interface for generating optimized rake formation plans using AI.  
Shows key metrics such as **Cost**, **Utilization**, and **SLA compliance**, with dispatch recommendations.

### 4. **Logistics Map** (`/logistics-map`)
Real-time **WebGIS** visualization of the logistics network, including plant locations, active routes, and in-transit rakes.

### 5. **Reports** (`/reports`)
Displays historical performance analytics, including **Order Fulfillment Reports** and **Rake Utilization** metrics.

---

## 🚀 Future Enhancements

- Integration with **PostgreSQL/PostGIS** for spatial queries  
- Real-time data ingestion via **IoT/ERP systems**  
- Reinforcement learning for predictive optimization  
- Role-based access for admin and operations users  
- API gateway for integration with government dashboards  

---

## Installation & Setup (for local prototype)

```bash
# Clone the repository
git clone https://github.com/your-username/rakenet.git
cd rakenet

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## Credits

Developed by **Team Pilot**  
For the **Ministry of Steel – Smart India Hackathon 2025**  
RakeNet © 2025 | Decision Support System Prototype

