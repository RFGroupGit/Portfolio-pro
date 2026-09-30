import { DocsFrame } from './chrome'
import { LensysMark } from './marks'

function DocsNav({ active }: { active: string }) {
  const items = ['Fondations', 'Bouton', 'Champ', 'Tableau', 'Proposer']
  return (
    <aside className="hidden w-40 shrink-0 border-r border-[#1B4F9E]/10 bg-[#F4F8FC] p-3 md:block">
      <p className="mb-3 font-sans text-[9px] font-semibold tracking-[0.16em] uppercase text-[#1B4F9E]/55">Bibliothèque</p>
      <ul className="space-y-0.5">
        {items.map((item) => (
          <li
            key={item}
            className={`rounded-full px-2 py-1.5 font-sans text-[10px] ${
              item === active ? 'bg-[#1B4F9E] text-white' : 'text-[#1B4F9E]/55'
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  )
}

export function PrismAuditScreen() {
  const products: { name: string; buttons: string[] }[] = [
    { name: 'Direct-Agenda', buttons: ['Valider', 'Enregistrer', 'Annuler', 'Supprimer'] },
    { name: 'Direct-Consult', buttons: ['Valider la consultation', 'OK', 'Retour', 'Imprimer'] },
    { name: 'Direct-Op', buttons: ['Enregistrer', 'Confirmer', 'Fermer', 'Alerte'] },
  ]
  const styles = [
    'rounded-full bg-[#1B4F9E] text-white',
    'rounded-sm bg-[#0C71C3] text-white',
    'rounded-lg border border-[#1B4F9E] text-[#1B4F9E]',
    'rounded-full border border-dashed border-[#1B4F9E]/40 text-[#1B4F9E]/60',
  ]
  return (
    <DocsFrame crumb="atelier / inventaire">
      <div className="p-5">
        <p className="font-sans text-[10px] font-semibold tracking-[0.14em] uppercase text-[#1B4F9E]">
          Relevé dans les 3 produits
        </p>
        <p className="mt-1 font-display text-xl text-[#1B4F9E]">Boutons — même action, styles différents</p>
        <div className="mt-5 space-y-3">
          {products.map((product, p) => (
            <div key={product.name} className="grid items-center gap-3 md:grid-cols-[8rem_1fr]">
              <span className="font-sans text-[10px] font-semibold text-[#333]">{product.name}</span>
              <div className="flex flex-wrap gap-2">
                {product.buttons.map((label, i) => (
                  <span key={label} className={`px-3 py-1.5 font-sans text-[10px] ${styles[(i + p) % styles.length]}`}>
                    {label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-5 border-t border-[#1B4F9E]/10 pt-4 font-sans text-[10px] text-[#666]">
          Décision d’atelier : un principal, un secondaire, un texte, un destructif. Les autres styles sont retirés.
        </p>
      </div>
    </DocsFrame>
  )
}

export function PrismTokensScreen() {
  return (
    <DocsFrame crumb="fondations / tokens">
      <div className="flex min-h-[360px]">
        <DocsNav active="Fondations" />
        <div className="grid flex-1 gap-8 p-5 md:grid-cols-3">
          <div>
            <p className="mb-3 font-sans text-[10px] font-semibold tracking-[0.14em] uppercase text-[#1B4F9E]/55">
              Couleur
            </p>
            <div className="space-y-1">
              {[
                ['primary', '#1B4F9E'],
                ['action', '#0C71C3'],
                ['info', '#5BA3D9'],
                ['text', '#333333'],
                ['text-muted', '#666666'],
                ['surface', '#F4F8FC'],
              ].map(([name, hex]) => (
                <div key={name} className="flex items-center gap-2">
                  <span className="h-7 w-7 rounded-md border border-[#1B4F9E]/10" style={{ background: hex }} />
                  <span className="font-sans text-[10px] text-[#333]">
                    --{name}
                    <span className="ml-2 text-[#666]">{hex}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 font-sans text-[10px] font-semibold tracking-[0.14em] uppercase text-[#1B4F9E]/55">
              Typographie
            </p>
            <p className="font-display text-4xl leading-none text-[#1B4F9E]">Aa</p>
            <p className="mt-2 font-sans text-[10px] text-[#666]">14 / 16 / 20 / 28 · 400 / 600</p>
            <p className="mt-4 font-sans text-[10px] text-[#666]">Corps 14 minimum dans les dossiers patients.</p>
          </div>
          <div>
            <p className="mb-3 font-sans text-[10px] font-semibold tracking-[0.14em] uppercase text-[#1B4F9E]/55">
              Espacement
            </p>
            <div className="flex items-end gap-1">
              {[4, 8, 12, 16, 24, 32].map((n) => (
                <div key={n} className="w-3 rounded-sm bg-[#1B4F9E]" style={{ height: n }} />
              ))}
            </div>
            <p className="mt-3 font-sans text-[10px] text-[#666]">space-1 → space-6</p>
          </div>
        </div>
      </div>
    </DocsFrame>
  )
}

export function PrismButtonScreen() {
  return (
    <DocsFrame crumb="composants / bouton">
      <div className="flex min-h-[360px]">
        <DocsNav active="Bouton" />
        <div className="flex-1 p-5">
          <div className="mb-4 flex items-baseline justify-between">
            <p className="font-display text-xl text-[#1B4F9E]">Bouton</p>
            <span className="font-sans text-[10px] text-[#666]">v1.2</span>
          </div>
          <div className="flex flex-wrap gap-2 rounded-2xl border border-dashed border-[#1B4F9E]/20 bg-[#F4F8FC] p-4">
            <span className="rounded-full bg-[#1B4F9E] px-4 py-2 text-white">Défaut</span>
            <span className="rounded-full bg-[#0C71C3] px-4 py-2 text-white">Survol</span>
            <span className="rounded-full ring-2 ring-offset-2 ring-[#1B4F9E] bg-[#1B4F9E] px-4 py-2 text-white">Focus</span>
            <span className="rounded-full border border-[#1B4F9E] px-4 py-2 text-[#1B4F9E]">Secondaire</span>
            <span className="rounded-full bg-[#B42318] px-4 py-2 text-white">Destructif</span>
            <span className="rounded-full bg-[#1B4F9E]/10 px-4 py-2 text-[#1B4F9E]/40">Désactivé</span>
          </div>
          <div className="mt-5 grid gap-3 border-t border-[#1B4F9E]/10 pt-4 md:grid-cols-2">
            <p>
              <span className="font-medium text-[#1B4F9E]">À faire.</span> Un seul bouton principal par écran.
            </p>
            <p>
              <span className="font-medium text-[#1B4F9E]">À éviter.</span> Une action destructive sans confirmation.
            </p>
          </div>
        </div>
      </div>
    </DocsFrame>
  )
}

export function PrismA11yScreen() {
  return (
    <DocsFrame crumb="fondations / contrastes">
      <div className="p-5">
        <p className="font-display text-xl text-[#1B4F9E]">Paires de contraste</p>
        <p className="mt-1 font-sans text-[10px] text-[#666]">Vérifiées au niveau des tokens (WCAG 2.1).</p>
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          {[
            ['primary sur surface', 'AAA', true],
            ['text sur blanc', 'AAA', true],
            ['text-muted sur blanc', 'AA', true],
            ['info sur blanc', 'Échec', false],
          ].map(([pair, level, ok]) => (
            <div
              key={String(pair)}
              className="flex items-center justify-between rounded-xl border border-[#1B4F9E]/15 px-3 py-3"
            >
              <span className="font-sans text-[11px]">{pair}</span>
              <span
                className={`rounded-full px-2 py-0.5 font-sans text-[10px] ${
                  ok ? 'bg-[#1B4F9E]/10 text-[#1B4F9E]' : 'bg-[#B42318] text-white'
                }`}
              >
                {level}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-4 font-sans text-[10px] text-[#666]">« info » reste réservé aux icônes et aux fonds, jamais au texte.</p>
      </div>
    </DocsFrame>
  )
}

export function PrismDocsScreen() {
  return (
    <DocsFrame crumb="proposer un composant">
      <div className="flex min-h-[360px]">
        <DocsNav active="Proposer" />
        <div className="flex-1 p-5">
          <p className="font-display text-xl text-[#1B4F9E]">Proposer un composant</p>
          <ol className="mt-4 space-y-3">
            {[
              'Créer un ticket dans le backlog Jira, avec l’écran concerné',
              'Joindre la maquette dans la bibliothèque Figma partagée',
              'Revue en sprint avec le product owner et un développeur',
              'Accepté : ajouté à la bibliothèque. Refusé : on réutilise un composant existant',
            ].map((step, i) => (
              <li key={step} className="flex gap-3 border-b border-[#1B4F9E]/10 pb-3 font-sans text-[11px]">
                <span className="font-semibold text-[#1B4F9E]">{String(i + 1).padStart(2, '0')}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </DocsFrame>
  )
}

export function PrismProductScreen() {
  const rows: [string, string, string, string][] = [
    ['Martin L.', 'Cholécystectomie', '2', 'Validée'],
    ['Nguyen A.', 'Prothèse de hanche', '3', 'À compléter'],
    ['Rossi P.', 'Arthroscopie du genou', '1', 'Validée'],
    ['Bernard C.', 'Cataracte', '2', 'Planifiée'],
  ]
  return (
    <DocsFrame crumb="exemple / Direct-Consult">
      <div className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LensysMark className="h-5 w-5 text-[#1B4F9E]" />
            <p className="font-display text-xl text-[#1B4F9E]">Consultations du jour</p>
          </div>
          <span className="rounded-full bg-[#1B4F9E] px-3 py-1.5 text-[11px] text-white">Nouvelle consultation</span>
        </div>
        <div className="overflow-hidden rounded-xl border border-[#1B4F9E]/15">
          <div className="grid grid-cols-[1fr_1.4fr_3rem_6rem] bg-[#F4F8FC] px-3 py-2 font-sans text-[9px] font-semibold tracking-[0.12em] uppercase text-[#1B4F9E]/55">
            <span>Patient</span>
            <span>Intervention</span>
            <span>ASA</span>
            <span>Statut</span>
          </div>
          {rows.map(([patient, surgery, asa, status]) => (
            <div key={patient} className="grid grid-cols-[1fr_1.4fr_3rem_6rem] items-center border-t border-[#1B4F9E]/10 px-3 py-2">
              <span>{patient}</span>
              <span className="text-[#666]">{surgery}</span>
              <span>{asa}</span>
              <span
                className={`w-fit rounded-full px-2 py-0.5 text-[10px] ${
                  status === 'À compléter' ? 'bg-[#B42318]/10 text-[#B42318]' : 'bg-[#1B4F9E]/10 text-[#1B4F9E]'
                }`}
              >
                {status}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-3 font-sans text-[10px] text-[#666]">
          Tableau, statuts et bouton issus de la bibliothèque. Données patients fictives.
        </p>
      </div>
    </DocsFrame>
  )
}
