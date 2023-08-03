import './pokedex-cover.css'

export function PokedexCover({ open = false, click }: { open?: boolean, click?: () => void }) {  
    return <div className={`pokedex-cover ${open ? 'open' : ''}`}>
      <div className='top'>
        <div className='pokeball-upper-half'>
          <div className='pokeball-button' onClick={click}>
            <div className='pokeball-button-inner' />
          </div>
        </div>
      </div>
      <div className='bottom'>
        <div className='pokeball-lower-half' >
          <div className='pokeball-lower-border'/>
        </div>
      </div>
    </div>
  }
  