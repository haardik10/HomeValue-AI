# HomeValue AI Real Estate Compatibility Index

The **Real Estate Compatibility Index** is a web-based application that helps users identify properties aligned with their personal preferences. It calculates a compatibility score based on user-selected criteria such as location, area, price, BHK, and amenities—enabling smarter real estate decisions.

---

## ✨ Features
- **Preference-based ranking**: Scores each property against selected filters.
- **Deterministic scoring**: Transparent formula:  
  `score = matched_criteria / total_selected_criteria`
- **ML-assisted (optional)**: Uses a Random Forest model for advanced predictions.
- **Interactive UI**: Real-time updates with React.js.
- **Data-driven filtering**: Only properties with a non-zero score are shown, sorted by best match.

---

## 🧱 Tech Stack
- **Frontend**: React.js (Vite), JavaScript (ES6+), CSS  
- **Backend**: Flask, Flask-CORS, Python  
- **Machine Learning**: scikit-learn (Random Forest), pandas, NumPy  

---

## 🗂 Data Structure
Each property is an object like:

```json
{
  "id": 1,
  "name": "Green Villa",
  "location": "Mumbai",
  "area": 1200,
  "price": 5000000,
  "bhk": 3,
  "gym": true,
  "parking": true,
  "swimmingPool": false,
  "petFriendly": true
}

## 🧠 Scoring Logic

### Deterministic Score
`score = matched_criteria / total_selected_criteria`

- Criteria can include: location, minArea, maxPrice, bhk, and any checked amenities.  
- Only properties with `score > 0` are returned.  
- Results are sorted by descending score.  

### ML Score (Optional)
A Random Forest model (trained on labeled compatibility examples or synthetic data) can output a probability/score. You can:  

- Show both scores side by side, or  
- Blend them: `final = α * deterministic + (1 - α) * ml_score`  

> 💡 Tip: Start with deterministic scoring; enable ML once you have data.  

---

## 🧑‍💻 UI & State
- **Inputs**: Location (dropdown), Minimum Area, Maximum Price, BHK, Amenities (checkboxes).  
- **State**: Managed with React `useState`.  
- **Updates**: A generic `handleInputChange()` syncs input state and triggers re-scoring.  

---

## 🚀 Getting Started

### 1) Clone the repo
```bash
git clone https://github.com/Riddhilalla/real-estate-prediction.git
cd real-estate-prediction

2) Backend (Flask + ML)
cd server
pip install -r requirements.txt
# If no requirements.txt, run:
# pip install Flask Flask-Cors pandas numpy scikit-learn joblib
python rent.py

3) Frontend (React)
cd ../client
npm install
npm run dev


Vite dev server (default: http://localhost:5173).

Configure API base URL in an .env (e.g., VITE_API_URL=http://localhost:5000).

📦 Project Structure
real-estate-prediction/
├─ client/                 # React frontend
│  ├─ src/
│  │  ├─ components/       # Filters, PropertyCard, ScoreBadge, etc.
│  │  ├─ pages/            # Home, Results
│  │  ├─ hooks/            # usePreferences, useFetch, etc.
│  │  ├─ utils/            # scoring helpers
│  │  └─ App.jsx
│  └─ index.html
├─ server/                 # Flask backend + ML
│  ├─ rent.py              # API and model integration
│  ├─ model.joblib         # (optional) saved Random Forest
│  ├─ data/                # sample CSV/JSON
│  └─ requirements.txt
└─ README.md

🔌 Example API (suggested)

POST /score

{
  "location": "Mumbai",
  "minArea": 1000,
  "maxPrice": 6000000,
  "bhk": 3,
  "amenities": ["gym", "parking", "petFriendly"]
}


Response

[
  {"id": 1, "name": "Green Villa", "score": 0.83, "ml_score": 0.76, "final": 0.80},
  {"id": 7, "name": "Sea Breeze",  "score": 0.67, "ml_score": 0.71, "final": 0.69}
]

