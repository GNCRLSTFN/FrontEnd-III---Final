import Card from '../Components/Card'
import { useDentistContext } from '../Components/Context/GlobalContext'
import '../styles/Card.css'
import '../styles/Home.css'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useDentistContext()


  return (
    <main className={`home-container`}>
      <h1>Home</h1>
      <div className='card-grid-container'>
        <div className='card-grid'>
          {state.dentists.map((dentist)=><Card key={dentist.id} id={dentist.id} name={dentist.name} username={dentist.username} showAddFavButton={true}/>)}
        </div>
      </div>
    </main>
  )
}

export default Home