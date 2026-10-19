function Card({ title, children }) {
  return (
    <section style={{ border: '2px solid green', borderRadius: '12px', padding: '16px', margin: '12px 0' }}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

export default Card
