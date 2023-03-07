const Character = ({ character, image }) =>  {
  return (
    <div className='character'>
        <h3>{character}</h3>
        <img src={image}></img>
    </div>
  )
}


export default Character;