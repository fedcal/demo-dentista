// Tipi TypeScript per i dati mock dello Studio Dentistico Mariani

export interface Indirizzo {
  via: string;
  citta: string;
  provincia: string;
  cap: string;
  regione: string;
  paese: string;
  lat: number;
  lng: number;
}

export interface ContattiStudio {
  telefono: string;
  email: string;
  social: {
    instagram?: string;
    facebook?: string;
  };
}

export interface OrariApertura {
  lunedi: string;
  martedi: string;
  mercoledi: string;
  giovedi: string;
  venerdi: string;
  sabato: string;
  domenica: string;
}

export interface StrutturaDentistica {
  accessibileDisabili: boolean;
  parcheggioConvenzionato: boolean;
  sedazioneConscia: boolean;
  urgenze24h: boolean;
  finanziamentoRateale: boolean;
  primaVisitaGratuita: boolean;
}

export interface MetaSeo {
  title: string;
  description: string;
  keywords: string[];
}

export interface InfoStudio {
  ragioneSociale: string;
  nomeCommerciale: string;
  direttoreSanitario: string;
  tagline: string;
  partitaIva: string;
  iscrizioneAlbo: string;
  direttiva: string;
  indirizzo: Indirizzo;
  contatti: ContattiStudio;
  orari: OrariApertura;
  struttura: StrutturaDentistica;
  metaSeo: MetaSeo;
}

// ---- Servizi ----

export type CategoriaServizioId =
  | 'igiene'
  | 'conservativa'
  | 'endodonzia'
  | 'protesica'
  | 'implantologia'
  | 'ortodonzia'
  | 'estetica'
  | 'chirurgia';

export interface CategoriaServizio {
  id: CategoriaServizioId;
  nome: string;
  ordine: number;
}

export interface ServizioOdontoiatrico {
  id: number;
  categoria: CategoriaServizioId;
  nome: string;
  descrizione: string;
  prezzoMin: number;
  prezzoMax: number;
  durataSeduta: string;
  frequenzaConsigliata: string;
  featured: boolean;
}

export interface CatalogoServizi {
  categorie: CategoriaServizio[];
  servizi: ServizioOdontoiatrico[];
}

// ---- Team ----

export interface Odontoiatra {
  id: number;
  nome: string;
  ruolo: string;
  bio: string;
  anniEsperienza: number;
  iscrizione: string;
  image: string;
  specializzazioni: string[];
  formazione: string[];
}

export interface TeamStudio {
  team: Odontoiatra[];
}

// ---- Dotazione tecnologica ----

export interface Tecnologia {
  id: number;
  nome: string;
  categoria: string;
  descrizione: string;
  vantaggi: string[];
  emoji: string;
}

export interface DotazioneTecnologica {
  tecnologie: Tecnologia[];
}

// ---- FAQ ----

export interface FaqItem {
  domanda: string;
  risposta: string;
}

export interface Faq {
  faq: FaqItem[];
}

// ---- Form prima visita ----

export type MotivoVisita = 'igiene' | 'dolore' | 'estetica' | 'ortodonzia' | 'impianti' | 'altro';

export interface FormPrimaVisita {
  nome: string;
  email: string;
  telefono: string;
  motivoVisita: MotivoVisita;
  pauraDentista: boolean;
  urgenza: boolean;
  note: string;
  privacyGdpr: boolean;
}
