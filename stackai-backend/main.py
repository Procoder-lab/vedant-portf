from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Initialize the FastAPI application
app = FastAPI(
    title="Stackai API",
    description="Backend engine for the Stackai test and doubt-solving platform.",
    version="1.0.0"
)

# Configure CORS to allow your future React frontend to communicate with this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, change "*" to your actual Vercel/Netlify URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# A simple health check route
@app.get("/")
async def root():
    return {"status": "online", "message": "Stackai Backend is running."}