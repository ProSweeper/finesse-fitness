import './Features.css'

export default function Features() {
  return (
    <section className='featuresContainer responsiveGrid'>
      <div className='featureCard'>
        <h3>Over 1300 Exercises</h3>
        <div className="features">
          <img src="https://i.imgur.com/jBMjiVg.png" alt="pushup" />
          <img src="https://i.imgur.com/nWl6lhQ.png" alt="weight lift" />
          <img src="https://i.imgur.com/2vBC1nB.png" alt="running" />
          <img src="https://i.imgur.com/qPoY8Wj.png" alt="fitness" />
        </div>
      </div>
      <div className="featureCard">
        <h3>Animated Examples</h3>
        <div className="features">
          <img src="https://i.imgur.com/tiYCHQu.png" alt="benchpress" />
          <img src="https://i.imgur.com/1biUyTr.png" alt="pull up" />
          <img src="https://i.imgur.com/8So4njv.png" alt="deadlift" />
          <img src="https://i.imgur.com/ygpz7UI.png" alt="dumbell" />
        </div>
      </div>
      <div className='featureCard comingSoon'>
        <h3>Share Your Workouts</h3>
        <h1>Coming Soon</h1>
      </div>
      <div className='featureCard comingSoon'>
        <h3>Track Your Progress</h3>
        <h1>Coming Soon</h1>
      </div>
    </section>

    
  )
}