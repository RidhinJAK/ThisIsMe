# Ridhin Chat Backend

This is the backend for Ridhin Jasti's portfolio chatbot using HuggingFace API.

## Deploy to Render

1. Create a new Web Service on Render
2. Connect this repository
3. Set the following:
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment Variable:** `HF_API_KEY` = your HuggingFace API key

## Get HuggingFace API Key

1. Go to https://huggingface.co/
2. Create free account
3. Go to Settings → Access Tokens
4. Create new token (Read access is enough)
5. Copy the token

## Test Locally

```bash
cd backend
npm install
HF_API_KEY=your_key_here npm start
```

Then POST to `http://localhost:3000/api/chat` with:
```json
{
  "message": "Tell me about Ridhin"
}
```
