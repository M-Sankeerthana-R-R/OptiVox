from fastapi import FastAPI
from pydantic import BaseModel
from symspellpy.symspellpy import SymSpell
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace "" with your domain if needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# ---- 1. Spell-checker using SymSpell -----------------------------------
sym_spell = SymSpell(max_dictionary_edit_distance=2, prefix_length=7)
dictionary_path = "frequency_dictionary_en_82_765.txt"
if not os.path.exists(dictionary_path):
    raise FileNotFoundError("Download 'frequency_dictionary_en_82_765.txt' and place it in the app directory.")
sym_spell.load_dictionary(dictionary_path, term_index=0, count_index=1)

def auto_correct(text: str) -> str:
    suggestions = sym_spell.lookup_compound(text.lower(), max_edit_distance=2)
    corrected = suggestions[0].term if suggestions else text
    return corrected.capitalize()

# ---- 2. Input schema ---------------------------------------------------
class TextRequest(BaseModel):
    text: str

# ---- 3. Main endpoint --------------------------------------------------
@app.post("/predict")
async def predict(req: TextRequest):
    raw = req.text.strip()
    if not raw:
        return {"error": "Empty input"}

    cleaned = auto_correct(raw)

    # NO prediction here at all!
    return {
        "original_input": raw,
        "cleaned_input": cleaned
    }