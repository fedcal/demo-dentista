import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

import type { InfoStudio, CatalogoServizi, TeamStudio, DotazioneTecnologica, Faq } from './types';

@Injectable({ providedIn: 'root' })
export class MockDataService {
  private readonly http = inject(HttpClient);

  // Cache stream con shareReplay per evitare richieste duplicate
  readonly info$: Observable<InfoStudio> = this.http
    .get<InfoStudio>('/assets/mock/info.json')
    .pipe(shareReplay(1));

  readonly servizi$: Observable<CatalogoServizi> = this.http
    .get<CatalogoServizi>('/assets/mock/servizi.json')
    .pipe(shareReplay(1));

  readonly team$: Observable<TeamStudio> = this.http
    .get<TeamStudio>('/assets/mock/team.json')
    .pipe(shareReplay(1));

  readonly dotazione$: Observable<DotazioneTecnologica> = this.http
    .get<DotazioneTecnologica>('/assets/mock/dotazione.json')
    .pipe(shareReplay(1));

  readonly faq$: Observable<Faq> = this.http
    .get<Faq>('/assets/mock/faq.json')
    .pipe(shareReplay(1));
}
