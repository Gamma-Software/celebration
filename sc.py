import csv
import json
import re


def convert_date_to_id(date_str):
    # Dictionnaire de conversion des mois français
    mois_fr = {
        "janvier": "01",
        "février": "02",
        "mars": "03",
        "avril": "04",
        "mai": "05",
        "juin": "06",
        "juillet": "07",
        "août": "08",
        "septembre": "09",
        "octobre": "10",
        "novembre": "11",
        "décembre": "12",
    }

    # Nettoyer et extraire le jour et le mois
    date_str = date_str.strip().lower()
    match = re.match(r"(\d+)(?:er)?\s+([\wé]+)", date_str)
    if not match:
        return None

    jour, mois = match.groups()
    jour = jour.zfill(2)  # Ajoute un 0 devant si nécessaire
    mois_num = mois_fr.get(mois)

    return f"{mois_num}{jour}" if mois_num else None


def csv_to_json(input_file, output_file):
    celebrations = {}
    seen_entries = set()

    with open(input_file, "r", encoding="utf-8") as file:
        reader = csv.reader(file)
        for row in reader:
            if len(row) < 3:  # Ignorer les lignes invalides
                continue

            date = row[0].strip()
            nom = row[1].strip()
            description = row[2].strip()
            origine = row[3].strip() if len(row) > 3 else ""

            # Générer l'ID si nécessaire
            if not re.match(r"\d{4}", date):
                date_id = convert_date_to_id(date)
                if not date_id:
                    continue
            else:
                date_id = date

            # Éviter les doublons
            if date_id in seen_entries:
                continue

            seen_entries.add(date_id)

            # Créer l'entrée JSON
            celebrations[date_id] = {
                "date": date if not re.match(r"\d{4}", date) else nom,
                "nom": nom if not re.match(r"\d{4}", date) else description,
                "description": description if not re.match(r"\d{4}", date) else origine,
                "origine": origine if not re.match(r"\d{4}", date) else "",
            }

    # Écrire le fichier JSON
    with open(output_file, "w", encoding="utf-8") as file:
        json.dump(celebrations, file, ensure_ascii=False, indent=2)


# Utilisation
input_file = "data/celebration.csv"
output_file = "data/celebrations.json"
csv_to_json(input_file, output_file)
