import { IndustrialFrame, PlantDevice } from './chrome'

const legacyFields = [
  'Gamme',
  'Modèle',
  'Puissance',
  'Alimentation',
  'Fréquence',
  'Démarrage',
  'Refroidissement',
  'Sécheur',
  'Filtration',
  'Réservoir',
  'Capotage',
  'Pressostat',
  'Régulation',
  'Options élec.',
  'Garantie',
  'Remise',
]

export function QuoteLegacyScreen() {
  return (
    <div className="overflow-hidden rounded-[1.6rem] border border-black/10 bg-[#ececf4] text-[10px] text-[#454545]">
      <div className="border-b border-black/10 bg-[#dedee8] px-3 py-2 font-sans text-[10px] uppercase tracking-[0.08em] text-[#595a70]">
        Configurateur — nouveau devis
      </div>
      <div className="grid grid-cols-2 gap-1 p-2 md:grid-cols-4">
        {legacyFields.map((label) => (
          <label key={label} className="rounded-md border border-black/10 bg-white p-1.5">
            <span className="mb-1 block text-[8px] text-[#595a70]">{label}</span>
            <span className="block h-5 rounded-sm border border-black/10 bg-[#f7f7fd]" />
          </label>
        ))}
      </div>
      <p className="border-t border-black/10 px-3 py-2 font-sans text-[9px] text-[#595a70]">
        Valider · les incompatibilités ne s’affichent qu’après validation
      </p>
    </div>
  )
}

export function QuoteStep1Screen() {
  return (
    <IndustrialFrame title="Nouveau devis" step="Produit">
      <div className="p-5">
        <p className="font-sans text-[10px] font-semibold tracking-[0.12em] uppercase text-[#6000FF]">Étape 1 sur 3</p>
        <p className="mt-1 font-display text-2xl font-semibold tracking-tight">Quel produit configurer ?</p>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {[
            ['Compresseurs à vis', '7,5 à 90 kW'],
            ['Sécheurs d’air', 'Frigorifiques · adsorption'],
            ['Groupes complets', 'Compresseur + sécheur + cuve'],
          ].map(([p, detail], i) => (
            <div
              key={p}
              className={`rounded-2xl p-4 ${
                i === 0
                  ? 'bg-gradient-to-br from-[#ffb56a] via-[#c44bff] to-[#62c4ff] text-white'
                  : 'border border-black/8 bg-[#f7f7fd] text-[#121212]'
              }`}
            >
              <p className="font-medium">{p}</p>
              <p className={`mt-1 text-[10px] ${i === 0 ? 'text-white/80' : 'text-[#595a70]'}`}>{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </IndustrialFrame>
  )
}

export function QuoteConfigScreen() {
  return (
    <IndustrialFrame title="Devis D-2044" step="Configuration">
      <div className="grid min-h-[360px] md:grid-cols-[1fr_14rem]">
        <div className="space-y-2 p-4">
          {[
            ['Puissance', '37 kW', true],
            ['Alimentation', '230 V monophasé — incompatible avec 37 kW', false],
            ['Démarrage', 'Étoile-triangle', true],
            ['Refroidissement', 'Air', true],
          ].map(([label, value, ok]) => (
            <div
              key={String(label)}
              className={`rounded-2xl px-4 py-3 ${
                ok ? 'bg-[#f7f7fd]' : 'bg-gradient-to-r from-[#ffb56a]/20 to-[#c44bff]/20 ring-1 ring-[#6000FF]/40'
              }`}
            >
              <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.1em] text-[#595a70]">{label}</p>
              <p className="font-medium">{value}</p>
            </div>
          ))}
        </div>
        <aside className="border-t border-black/6 bg-[#f7f7fd] p-4 md:border-t-0 md:border-l">
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6000FF]">Prix</p>
          <p className="mt-2 font-display text-3xl font-semibold">24 850 € HT</p>
          <p className="mt-4 rounded-2xl bg-white p-3 text-[11px] text-[#454545] ring-1 ring-[#6000FF]/20">
            Un moteur de 37 kW nécessite une alimentation 400 V triphasée. Choisissez 400 V ou une puissance inférieure.
          </p>
        </aside>
      </div>
    </IndustrialFrame>
  )
}

export function QuoteSummaryScreen() {
  return (
    <IndustrialFrame title="Devis D-2044" step="Récapitulatif">
      <div className="p-5">
        <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6000FF]">
          Devis D-2044 · Compresseur à vis
        </p>
        <table className="mt-4 w-full text-left">
          <thead className="font-sans text-[9px] uppercase tracking-[0.1em] text-[#595a70]">
            <tr>
              <th className="px-3 py-2">Article</th>
              <th className="px-3 py-2">Qté</th>
            </tr>
          </thead>
          <tbody>
            {['Compresseur à vis 37 kW', 'Alimentation 400 V triphasée', 'Démarrage étoile-triangle', 'Sécheur frigorifique'].map(
              (row) => (
                <tr key={row} className="border-t border-black/6">
                  <td className="px-3 py-2">{row}</td>
                  <td className="px-3 py-2">1</td>
                </tr>
              ),
            )}
          </tbody>
        </table>
        <div className="mt-4 flex items-end justify-between pt-4">
          <span className="font-sans text-[10px] uppercase tracking-[0.12em] text-[#595a70]">Total HT</span>
          <span className="font-display text-4xl font-semibold">27 320 €</span>
        </div>
        <p className="mt-4 rounded-full bg-[#121212] py-3 text-center font-sans text-[10px] font-semibold tracking-[0.12em] text-white uppercase">
          Générer le devis PDF
        </p>
      </div>
    </IndustrialFrame>
  )
}

export function QuoteHelpScreen() {
  return (
    <IndustrialFrame title="Devis D-2044 · aide" step="Configuration">
      <div className="grid min-h-[320px] md:grid-cols-[1fr_16rem]">
        <div className="p-4">
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6000FF]">Démarrage</p>
          <p className="mt-1 font-medium">Direct / étoile-triangle / variateur</p>
          <p className="mt-3 rounded-2xl bg-[#f7f7fd] p-3 text-[11px] leading-relaxed text-[#454545]">
            Au-delà de 11 kW, le démarrage direct n’est pas proposé : il provoque un appel de courant trop fort sur
            l’installation du client. Choisissez étoile-triangle ou variateur de vitesse.
          </p>
        </div>
        <aside className="border-t border-black/6 bg-[#f7f7fd] p-4 md:border-t-0 md:border-l">
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6000FF]">Rédigé avec</p>
          <p className="mt-2 text-[11px] text-[#454545]">
            Le support, à partir d’une question qui revenait souvent dans les tickets.
          </p>
        </aside>
      </div>
    </IndustrialFrame>
  )
}

export function QuoteMobileScreen() {
  return (
    <PlantDevice>
      <div className="p-3">
        <div className="mb-3 grid grid-cols-3 gap-1 rounded-full bg-[#f7f7fd] p-1 font-sans text-[9px] font-semibold uppercase">
          <span className="px-1 py-1 text-center text-[#595a70]">Produit</span>
          <span className="rounded-full bg-[#121212] px-1 py-1 text-center text-white">Config.</span>
          <span className="px-1 py-1 text-center text-[#595a70]">Récap.</span>
        </div>
        <p className="font-display text-xl font-semibold">Configuration</p>
        <div className="mt-3 space-y-2">
          {['Puissance · 37 kW', 'Alimentation · 400 V tri', 'Démarrage · étoile-triangle'].map((row) => (
            <p key={row} className="rounded-2xl bg-[#f7f7fd] px-3 py-2">
              {row}
            </p>
          ))}
        </div>
        <p className="mt-4 font-display text-3xl font-semibold">27 320 € HT</p>
        <p className="mt-3 rounded-full bg-[#121212] py-2 text-center font-sans text-[10px] font-semibold text-white uppercase">
          Continuer
        </p>
      </div>
    </PlantDevice>
  )
}
