# Tier e Funzionalità

Questa pagina descrive i 3 livelli di personalizzazione del template Studio Dentistico.

## Tier Base — €500–800 (75–80 ore)

**Ideal per**: Studi dentistici piccoli che cercano sito vetrina professionale.

### Descrizione
Sito vetrina SSR con profili dentisti, catalogo trattamenti, FAQ cliniche, foto sterilizzazione, blog igiene orale e form contatto.

### Per chi
- Studio monodentista o 2–3 dentisti
- Dentista in rebranding verso web moderno
- Showcase commerciale per agenzie

### Funzionalità incluse
- Hero CTA "Richiedi appuntamento"
- Profili dentisti con foto, specialità, diplomi
- Catalogo trattamenti (pulizia, otturazione, implant, ortodonzia, estetica)
- FAQ cliniche (dolore, anestesia, costi, igiene)
- Galleria foto sterilizzazione + attrezzature
- Testimonial pazienti
- Blog igiene orale (2–3 articoli esempio)
- Form contatto con Resend
- Schema.org JSON-LD (`Dentist`, `LocalBusiness`, `HealthAndBeautyBusiness`)
- Lighthouse Score ≥90 SEO, ≥85 Performance

### NON incluse
- Prenotazioni online
- Cartella clinica digitale
- Patient portal
- DICOM viewer
- App mobile

### Add-on consigliati
- Articoli blog igiene (10+): €150
- Multi-lingua IT/EN: €200
- Google My Business + reviews: €100

### Manutenzione mensile
- Aggiornamento orari: 15 min
- Aggiornamento listino prezzi: 20 min
- Monitoring score: autonomo
- **Costo**: €0 self-service o €50/mese

---

## Tier Intermedio — €1.500–2.200 (240–250 ore)

**Ideal per**: Studi consolidati con online booking e GDPR compliance.

### Descrizione
Tier Base + prenotazioni online, patient portal, cartella clinica PDF, SMS/Email reminder, consensi GDPR digitalizzati, Stripe pagamenti.

### Per chi
- Studio con 200+ pazienti attivi
- Studio 4–6 dentisti
- Studio che vuole alternative a software verticali Odonto/OPAL

### Funzionalità incluse
- Tutto il Tier Base
- **Prenotazioni online**: Calendario per dentista + slot 30 min, real-time sync backend
- **Patient portal**: login via email, storico appuntamenti, referti scaricabili, anamnesi form pre-visita
- **SMS/Email reminder**: 24h + 2h prima appuntamento con opzione "conferma appuntamento"
- **Pagamenti Stripe**: deposit iniziale/saldo finale, opzione rateale (3–6 mesi)
- **Consensi GDPR**: firma digitale consensi trattamento dati, privacy policy template completo
- **Fatturazione**: ricevute digitali, tracking pagamenti
- **CRM pazienti**: storico visite, note cliniche (private), follow-up reminder
- **Newsletter Resend**: promo pulizia semestrale, focus igiene preventiva
- **Multi-lingua IT/EN**
- **Healthcare compliance**: GDPR Art.9 (dati health sensibili), password policies, backup encrypted

### NON incluse
- 3D dental scan viewer
- AI radiografia analysis
- Telemedicina video consultation
- E-prescription
- App mobile

### Add-on consigliati
- Estensione CRM avanzata con note cliniche: €300
- Integrazione Google Calendar dentisti: €150
- Telemedicina Zoom pre-screening: €250
- SMS reminder illimitati: €100/mese

### Manutenzione mensile
- Gestione prenotazioni: 1h
- Aggiornamento cartelle cliniche: 1h
- Supporto pazienti tech: 1.5h stimate
- **Costo**: €150/mese (GDPR compliance + healthcare support) o €1.800/anno

---

## Tier Avanzato — €4.000–6.000 (490–500 ore)

**Ideal per**: Catena dentale multi-sede con AI radiografia + mobile app.

### Descrizione
Tier Intermedio + 3D dental scan viewer (DICOM/STL), AI radiografia analysis (detect carie/bone loss), cost calculator interattivo, video consultation pre-screening, e-prescription, app mobile.

### Per chi
- Catena dentale multi-sede (3+ sedi)
- Studio premium con implantologia avanzata
- Startup tech dentale

### Funzionalità incluse
- Tutto il Tier Intermedio
- **3D dental scan viewer**: WebGL viewer per DICOM/STL, rotazione, zoom, layer visibility
- **AI radiografia analysis**: Carica RX → AI (Ollama) detecta carie, bone loss, anomalie, confidence score
- **Cost calculator interattivo**: Cliente seleziona trattamenti → totale dinamico, simula rateale
- **Video consultation pre-screening**: Zoom pre-visita per valutazione iniziale, link auto-generato
- **E-prescription**: Ricette digitali (farmaci antibiotici), firma dentista, invio email paziente
- **App mobile React Native**: iOS/Android con cartella clinica offline, reminder push, pagamenti integrati
- **Analytics dashboard**: Revenue per dentista, treatment conversion rate, patient retention, RX archive
- **Multi-sede**: Riepilogo consolidato fatturato, gestione staff per studio, centralized patient database

### NON incluse
- Integrazione PACS hospitality-grade
- Integration CardioDiagnostici terzi
- Marketplace provider

### Add-on consigliati
- PACS integration avanzata: €800
- AI training su dataset clinico custom: €500
- Dashboard white-label per franchisee: €600
- Supporto 24/5 healthcare: €500/mese

### Manutenzione mensile
- Monitoring AI models: 30 min
- GDPR compliance audit: 1h
- Supporto avanzato: 4h stimate
- **Costo**: €250/mese (incluso 12h supporto + healthcare SLA)

---

## Matrice tier-feature

| Feature | Base | Intermedio | Avanzato |
|---|---|---|---|
| Sito vetrina SSR | ✓ | ✓ | ✓ |
| Prenotazioni online | — | ✓ | ✓ |
| Patient portal | — | ✓ | ✓ |
| Cartella clinica PDF | — | ✓ | ✓ |
| SMS/Email reminder | — | ✓ | ✓ |
| Consensi GDPR | — | ✓ | ✓ |
| Pagamenti Stripe | — | ✓ | ✓ |
| 3D scan viewer | — | — | ✓ |
| AI radiografia | — | — | ✓ |
| Cost calculator | — | — | ✓ |
| Video consultation | — | — | ✓ |
| E-prescription | — | — | ✓ |
| App mobile | — | — | ✓ |
| Multi-sede | — | — | ✓ |

---

## GDPR Healthcare compliance

Tutti i tier includono:
- **Art.9 dati sensibili**: Enfasi che cartella clinica richiede consenso esplicito
- **Encryption**: Database PostgreSQL con pgcrypto, HTTPS forzato, backup daily encrypted
- **Data retention**: Minimo 10 anni per responsabilità civile, policy configurabile
- **Access logs**: Audit trail chi accede cartella, quando, da dove
- **Disaster recovery**: Backup daily off-site, RTO <24h

---

## Processo scelta tier

1. **Inventario**: Quanti pazienti? Che specialità? Staff size?
2. **Roadmap**: Online booking entro 6 mesi? Multi-sede futura? Implantologia 3D?
3. **Compliance**: Già GDPR ready? Cartelle cliniche digitali?
4. **Budget**: One-time vs recurring? Healthcare SLA?

Contattaci per assessment gratuito: [Contatti](/contatti).
