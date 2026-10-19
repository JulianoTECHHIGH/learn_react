import ProfileCard from './components/ProfileCard'
import Card from './components/Card'


function App() {
  return (
    <main>
      <h1>Our Class</h1>
      <ProfileCard name="Maria Lopez" birthYear={2008} hobby="photography" />
      <ProfileCard name="Jamal Carter" birthYear={2007} hobby="basketball" />
      <ProfileCard name="Priya Shah" birthYear={2008} hobby="coding" />
      <Card title="About Our Class">
  <p>We are 12th graders learning React.</p>
</Card>

<Card title="Meet the Students">
  <ProfileCard name="Maria Lopez" birthYear={2008} hobby="photography" />
  <ProfileCard name="Jamal Carter" birthYear={2007} hobby="basketball" />
</Card>

    </main>
    
  )
}

export default App


