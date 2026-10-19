function ProfileCard(props) {
  return (
    <div className="card">
      <img src="https://placehold.co/120" alt={props.name} />
      <h2>{props.name}</h2>
      <p>Age: {2026 - props.birthYear}</p>
      <p>Hobby: {props.hobby.toUpperCase()}</p>
    </div>
  )
}

export default ProfileCard
