import { MarketingFrame, PhoneEditorial } from './chrome'
import { CegedimMark } from './marks'

const benefits = ['Dossier patient', 'Agenda & RDV en ligne', 'Facturation SESAM-Vitale']

export function CegWorkshopScreen() {
  return (
    <MarketingFrame url="miro.com · atelier pages produits">
      <div className="grid min-h-[360px] gap-px bg-[#EDF3F6] md:grid-cols-3">
        {[
          ['Marketing', 'Les mots que tapent les médecins. Les preuves. Le ton.', '« logiciel médecin généraliste »'],
          ['Produit', 'Ce que le logiciel fait vraiment, sans jargon interne.', 'dossier · agenda · facturation'],
          ['Commercial', 'Une seule action : demander une démo.', 'formulaire = succès'],
        ].map(([who, goal, note]) => (
          <div key={who} className="bg-white p-6">
            <p className="font-display text-2xl text-[#105C77]">{who}</p>
            <p className="mt-3 text-sm leading-relaxed text-[#105C77]/75">{goal}</p>
            <p className="mt-6 font-sans text-[10px] text-[#13BBB2]">{note}</p>
          </div>
        ))}
      </div>
    </MarketingFrame>
  )
}

export function CegIaScreen() {
  return (
    <MarketingFrame url="figma · structure de page">
      <div className="p-6">
        <p className="font-display text-xl text-[#105C77]">Même arborescence dans Figma et en HTML</p>
        <ol className="mt-6 space-y-2">
          {[
            ['H1', 'Accroche — une phrase, une action'],
            ['H2', 'Ce que fait le logiciel — trois blocs'],
            ['H2', 'Pour qui — mode d’exercice'],
            ['H2', 'Preuves — témoignages, certifications'],
            ['H2', 'Demander une démo — le formulaire'],
          ].map(([tag, label]) => (
            <li key={label} className="flex items-baseline gap-4 border-b border-[#105C77]/10 py-2">
              <span className="w-8 font-sans text-[10px] text-[#13BBB2]">{tag}</span>
              <span>{label}</span>
            </li>
          ))}
        </ol>
        <p className="mt-5 text-[11px] text-[#105C77]/55">Le plan de la maquette sert aussi de plan SEO.</p>
      </div>
    </MarketingFrame>
  )
}

export function CegDesktopScreen() {
  return (
    <MarketingFrame url="cegedim-sante.com / solutions / medecins">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#105C77] via-[#13BBB2] to-[#3ED1EB]" />
        <div className="relative px-8 py-10 text-white">
          <div className="mb-6 flex items-center gap-2">
            <CegedimMark className="h-7 w-7" />
            <span className="font-sans text-[11px] font-light tracking-wide">cegedim santé</span>
          </div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-white/70">Logiciel de gestion de cabinet</p>
          <p className="mt-3 max-w-md font-display text-4xl leading-[0.95] font-light tracking-tight">
            Plus de temps pour vos patients.
          </p>
          <p className="mt-6 inline-block rounded bg-[#FB5080] px-5 py-2.5 text-[11px] font-medium text-white">
            Demander une démo
          </p>
          <div className="mt-12 grid gap-6 border-t border-white/20 pt-6 md:grid-cols-3">
            {benefits.map((b) => (
              <p key={b} className="font-display text-lg font-light">
                {b}
              </p>
            ))}
          </div>
        </div>
      </div>
    </MarketingFrame>
  )
}

export function CegMobileScreen() {
  return (
    <PhoneEditorial>
      <div className="bg-gradient-to-br from-[#105C77] to-[#13BBB2] px-5 pt-6 pb-8 text-white">
        <p className="text-[10px] tracking-[0.2em] uppercase text-white/70">Médecins</p>
        <p className="mt-3 font-display text-[1.85rem] leading-[0.95] font-light tracking-tight">
          Plus de temps pour vos patients.
        </p>
        <p className="mt-8 rounded bg-[#FB5080] py-3 text-center text-[12px] font-medium">Demander une démo</p>
      </div>
      <div className="space-y-4 px-5 py-6">
        {benefits.map((b) => (
          <p key={b} className="border-b border-[#105C77]/10 pb-3 font-display text-lg font-light">
            {b}
          </p>
        ))}
      </div>
    </PhoneEditorial>
  )
}

export function CegFormScreen() {
  return (
    <PhoneEditorial>
      <div className="px-5 pt-6 pb-8">
        <p className="font-display text-2xl leading-tight font-light">Demander une démo</p>
        <p className="mt-2 text-[11px] text-[#105C77]/55">Un conseiller vous rappelle.</p>
        <div className="mt-6 space-y-4">
          {['Nom et prénom', 'E-mail professionnel', 'Téléphone', 'Profession'].map((f) => (
            <label key={f} className="block">
              <span className="text-[10px] tracking-[0.12em] uppercase text-[#13BBB2]">{f}</span>
              <span className="mt-1 block h-10 rounded border border-[#105C77]/15 bg-[#EDF3F6]" />
            </label>
          ))}
        </div>
        <p className="mt-8 rounded bg-[#FB5080] py-3 text-center font-medium text-white">Être rappelé</p>
      </div>
    </PhoneEditorial>
  )
}

export function CegSeoScreen() {
  return (
    <MarketingFrame url="search.google.com · Search Console">
      <div className="p-6">
        <p className="font-display text-xl font-light text-[#105C77]">Requêtes · 28 derniers jours</p>
        <div className="mt-4 grid grid-cols-[1fr_4.5rem] border-b border-[#105C77]/10 pb-2 font-sans text-[9px] tracking-[0.12em] uppercase text-[#105C77]/50">
          <span>Requête</span>
          <span>Position moy.</span>
        </div>
        <ul>
          {[
            ['logiciel médecin généraliste', '8,4'],
            ['logiciel médical ségur', '11,2'],
            ['logiciel cabinet médical', '14,7'],
            ['agenda médical en ligne', '19,3'],
          ].map(([q, pos]) => (
            <li key={q} className="grid grid-cols-[1fr_4.5rem] border-b border-[#105C77]/10 py-3">
              <span className="underline decoration-[#13BBB2]/50 underline-offset-2">{q}</span>
              <span className="font-sans text-[11px] text-[#13BBB2]">{pos}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[11px] text-[#105C77]/55">
          Revu avec le marketing pour ajuster titres et contenus. Chiffres illustratifs.
        </p>
      </div>
    </MarketingFrame>
  )
}
