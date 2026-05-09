# Customization

## Cambiare i dati mock

Edita i file in `src/assets/mock/`. Vedi [Mock Data](/mock-data).

## Cambiare i colori

I design tokens sono in `src/styles.css`:

```css
:root {
  --color-accent: #0969da;        /* Cambia qui per il colore primario */
  --color-bg-default: #ffffff;
  --color-fg-default: #1f2328;
  /* ... */
}
```

## Cambiare il logo

Sostituisci `public/favicon.ico` e aggiungi il logo SVG in `public/logo.svg`.

## Aggiungere route

1. Crea il componente in `src/app/pages/{nome}/`
2. Aggiungi la route in `src/app/app.routes.ts`:

```typescript
{
  path: 'servizi',
  loadComponent: () => import('./pages/servizi/servizi.component').then((m) => m.ServiziComponent),
  title: 'Servizi — Studio Dentistico'
}
```

## Cambiare i metadati SEO

Edita `src/index.html` per:
- `<title>` globale
- `<meta name="description">`
- Open Graph

Per metadati per-route usa `Title` e `Meta` di `@angular/platform-browser`.

## Disabilitare il prerender

In `angular.json`:

```json
"prerender": false
```

In questo caso il sito gira solo in modalità SSR runtime (più lento al cold start, più dinamico).

## Possibili sviluppi customizzabili

Oltre ai Tier standard, il template Studio Dentistico supporta queste integrazioni:

1. **3D dental scan viewer**: WebGL viewer per DICOM/STL, rotazione 360°, layer visibility
2. **AI radiografia analysis**: Carica RX → Ollama detecta carie, bone loss, anomalie cliniche
3. **Cost calculator interattivo**: Cliente seleziona trattamenti → totale + simula rateale
4. **Video consultation**: Pre-visita Zoom per valutazione iniziale, link auto-generato
5. **E-prescription**: Ricette digitali per farmaci, firma dentista, invio email paziente
6. **App mobile**: iOS/Android con cartella offline, reminder push, pagamenti integrati
7. **Analytics dashboard**: Revenue per dentista, treatment conversion, patient retention
8. **Multi-sede**: Riepilogo consolidato, centralized patient DB, gestione staff per studio

**Note healthcare**: Tutti i sviluppi avanzati rispettano GDPR Art.9 (dati health sensibili) e backup encrypted daily.

Contatta Federico per valutazione effort e pricing addon.

---

## White-label per cliente

1. Fork del repo o copia in nuova cartella
2. Sostituisci `dentista` con nome cliente (`studio-rossini`)
3. Sostituisci footer rimuovendo riferimento a Federico (modifica `footer.component.ts`)
4. Personalizza `vercel.json` con domain custom cliente
5. Deploy su Vercel cliente con loro account
