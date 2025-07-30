import { useState } from 'react';

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const feedback = [
    'SmartCare saved my life! - Ramesh',
    'Very caring doctors. - Anita',
    'Excellent for international treatment. - John',
  ];

  return (
    <section className="testimonials">
      <h2>Patient Reviews</h2>
      <p>{feedback[index]}</p>
      <button onClick={() => setIndex((index + 1) % feedback.length)}>Next</button>
    </section>
  );
};

export default Testimonials;
