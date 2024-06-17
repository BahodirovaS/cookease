from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import Response
from authenticator import authenticator
from routers import router, recipe, favorites

class ContentSecurityPolicyMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request, call_next):
        response = await call_next(request)
        response.headers['Content-Security-Policy'] = (
            "default-src 'self'; "
            "connect-src 'self' https://git.heroku.com;"
        )
        return response

app = FastAPI()
app.include_router(authenticator.router)
app.include_router(router.router)
app.include_router(recipe.router)
app.include_router(favorites.router)


app.add_middleware(
    CORSMiddleware,
    ContentSecurityPolicyMiddleware,
    allow_origins=[
        # os.environ.get("CORS_HOST", "http://localhost:3000"),
        "https://bahodirovas.github.io/",
    ],

    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/launch-details")
def launch_details():
    return {
        "launch_details": {
            "year": 2022,
            "month": 12,
            "day": "9",
            "hour": 19,
            "min": 0,
            "tz:": "PST"
        }
    }
