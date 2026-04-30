# Cyber Hype Lab (CHL)

> Satire-tool die de cyber-industrie systematisch belachelijk maakt — met respect voor het vak en zonder respect voor de hype.

**Live:** https://zero0f4.github.io/cyber-hype-lab/

Pure parodie. Niet citeren in serieuze rapporten, audits of klantcommunicatie.

---

## Wat is het?

Negen generators die de marketing-mythen, vendor-pitches en post-mortem-clichés van cyber-security blootleggen door ze één-op-één na te maken — totdat zichtbaar wordt hoe leeg ze zijn.

Lees [**Waarom dit bestaat**](https://zero0f4.github.io/cyber-hype-lab/waarom.html) voor het volledige manifest over buzzword-inflatie, praters-vs-doeners, en wat de échte doeners doen.

## De negen generators

| Groep | Generator | Wat doet het? |
|---|---|---|
| 🎲 **Bingo** | Cyber Bullshit Bingo | 5×5 kaart, **160+ buzzwoorden** (RSAC/Gartner/Forrester + 43 typisch Nederlandse + 38 defensie/cyber-warfare). Klikbaar afstrepen, schud, print-vriendelijk. |
| 🎲 **Bingo** | Patch-excuses Bingo | "Waarom hebben we niet gepatched?"-editie met 40+ klassieke smoezen. |
| 📣 **Vendor-marketing** | Slogan-generator | Random vendor-pitch (~331.000 unieke combinaties uit 4 pools). |
| 📣 **Vendor-marketing** | Product-naam-generator | "AegisShield Pro Cloud" + tagline + nep-startup-pitch. |
| 📣 **Vendor-marketing** | Conference-talk-titel | RSAC/Black Hat/Gartner-stijl keynote-titel + speaker-tag. |
| 👤 **Personen** | APT-naamgenerator | CrowdStrike-stijl: "Sophisticated Glittery Bear" + Microsoft-alias + confidence. |
| 👤 **Personen** | CISO-excuses-generator | NL-incident-statement uit 6 componenten (subject + werkwoord + dreiging + vector + bijzin + geruststelling). |
| 👤 **Personen** | LinkedIn-post | Hook + insight + buzzword-cascade + emoji-staircase + hashtags. |
| 🎬 **Pop culture** | Sci-fi Cyber-Quote | Star Wars · Star Trek · Firefly · Spaceballs vermengd met cyber-jargon. *"I find your lack of MFA disturbing."* |

## Tech

- Vanilla HTML / JS / CSS — geen build-tools
- Network-first service-worker (`cyber-hype-lab-v5`)
- PWA-installeerbaar
- Print-friendly bingo-kaarten (1 kaart = 1 A4)
- Accent-kleur amber (`#f59e0b`)
- Geen tracking, geen analytics, geen cookies

## Lokaal draaien

```bash
git clone https://github.com/zero0f4/cyber-hype-lab.git
cd cyber-hype-lab
python3 -m http.server 8080
# open http://localhost:8080/home.html
```

## Bingo printen

Open `bingo.html` of `patch-excuses.html` → klik **Print**. De pagina-layout (sidebar, breadcrumbs, uitleg) wordt automatisch verborgen; alleen de bingo-kaart wordt geprint, op één A4.

## Disclaimer

Pure parodie. Alle gelijkenissen met bestaande producten, threat actors of incidenten zijn karikaturaal bedoeld. Niet als bron citeren.

## Licentie

MIT — zie [LICENSE](LICENSE).
