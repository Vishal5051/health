const features = [
  { title: '24x7 Emergency', desc: 'Immediate medical attention any time.' },
  { title: 'Expert Doctors', desc: 'Highly experienced specialists.' },
  { title: 'International Patients', desc: 'Global care with love.' },
];

const FeatureCards = () => (
  <section className="features">
    {features.map((f, i) => (
      <div key={i} className="feature-card">
        <h3>{f.title}</h3>
        <p>{f.desc}</p>
      </div>
    ))}
  </section>
);

export default FeatureCards;
