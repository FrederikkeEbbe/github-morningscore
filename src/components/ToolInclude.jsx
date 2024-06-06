import React from 'react'

const tools = [
  { title: 'SEO overblik', text: 'Enkelheden i vores dashboard hjælper dig med at få succes med søgemaskineoptimering, uanset hvor erfaren du er.' },
  { title: 'Missioner', text: 'Modtag intelligente skræddersyede forslag kaldet "missioner". Når du gennemfører missioner, optjener du også XP og stiger i level.' },
  { title: 'Helbred', text: 'Scan din hjemmeside fuldstændigt for at holde styr på dens helbred, og se, hvilke problemer der skal rettes, og hvordan du gør det.' },
  { title: 'Links', text: 'Hold styr på alle dine nye og tabte links, og opbyg en stærk backlink-profil, der hjælper dig med at nå til tops i søgeresultaterne.' },
  { title: 'Track søgeord', text: 'Se den daglige placering på dine søgeord ved at spore dem. Der er også en knap til øjeblikkelig scanning. Organiser søgeord i mapper for at få et perfekt overblik.' },
  { title: 'Research', text: 'Morningscore tilbyder mange værktøjer til søgeordsanalyse. Vores globale søgeordsdatabase er enorm, og brugerfladen er intuitiv.' },
  { title: 'Konkurrenter', text: 'Scan og analysér konkurrenternes hjemmesider for søgeord og links, og brug indsigterne til altid at være et skridt foran.' },
  { title: 'Mål vækst', text: 'Spor dine fremskridt og din vækst inden for SEO. Se præcis, hvad din Google-trafik er værd. Administrer det hele fra ét sted.' },
];

const ToolInclude = () => {
  return (
    <>
    <section className='toolbox-section'>
      <h5>MED I RUMMET</h5>
      <h1>Værktøjet inkluderer</h1>
      
      <div className='toolbox-grid'>
          {tools.map((tool, index) => (
            <div className='toolbox-item' key={index}>
              <h3>{tool.title}</h3>
              <p>{tool.text}</p>
            </div>
          ))}
        </div>

    </section>
    </>
  )
}

export default ToolInclude