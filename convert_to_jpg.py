"""
Konverterer alle billedfiler i denne mappe til .jpg format.
Kør: python convert_to_jpg.py
Kræver: pip install Pillow pillow-heif
"""

import os
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Pillow mangler. Installer med: pip install Pillow")
    sys.exit(1)

# Prøv at importere HEIF-support (valgfrit)
try:
    import pillow_heif
    pillow_heif.register_heif_opener()
    HEIF_SUPPORT = True
except ImportError:
    HEIF_SUPPORT = False

# Understøttede billedformater
IMAGE_EXTENSIONS = {
    ".png", ".bmp", ".gif", ".tiff", ".tif", ".webp",
    ".ico", ".ppm", ".pgm", ".pbm", ".pcx", ".tga",
    ".heic", ".heif", ".avif",
}

def convert_to_jpg(directory: Path):
    script_name = Path(__file__).name
    converted = 0
    skipped = 0
    errors = []

    files = sorted(directory.iterdir())

    for filepath in files:
        if not filepath.is_file():
            continue
        if filepath.name == script_name:
            continue

        ext = filepath.suffix.lower()

        # Spring allerede .jpg/.jpeg filer over
        if ext in (".jpg", ".jpeg"):
            continue

        if ext not in IMAGE_EXTENSIONS:
            continue

        output_path = filepath.with_suffix(".jpg")

        # Spring over hvis .jpg allerede eksisterer
        if output_path.exists():
            print(f"  SPRING OVER  {filepath.name} -> {output_path.name} (eksisterer allerede)")
            skipped += 1
            continue

        try:
            img = Image.open(filepath)

            # Konverter til RGB (JPG understøtter ikke RGBA/P/LA)
            if img.mode in ("RGBA", "LA", "P", "PA"):
                background = Image.new("RGB", img.size, (255, 255, 255))
                if img.mode == "P":
                    img = img.convert("RGBA")
                background.paste(img, mask=img.split()[-1])
                img = background
            elif img.mode != "RGB":
                img = img.convert("RGB")

            # Gem som JPG med høj kvalitet
            img.save(output_path, "JPEG", quality=95)
            print(f"  OK           {filepath.name} -> {output_path.name}")
            converted += 1

        except Exception as e:
            print(f"  FEJL         {filepath.name}: {e}")
            errors.append((filepath.name, str(e)))

    print(f"\n{'='*50}")
    print(f"Konverteret: {converted}")
    print(f"Sprunget over: {skipped}")
    print(f"Fejl: {len(errors)}")

    if not HEIF_SUPPORT:
        print("\nBemærk: HEIC/HEIF support mangler.")
        print("Installer med: pip install pillow-heif")

    if errors:
        print("\nFejl detaljer:")
        for name, err in errors:
            print(f"  {name}: {err}")


if __name__ == "__main__":
    script_dir = Path(__file__).resolve().parent
    print(f"Konverterer billeder i: {script_dir}\n")
    convert_to_jpg(script_dir)
    print("\nFærdig!")
    input("\nTryk ENTER for at lukke...")
