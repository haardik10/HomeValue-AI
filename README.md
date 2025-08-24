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
