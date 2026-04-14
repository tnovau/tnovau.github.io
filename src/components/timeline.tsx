import siteConfig from '../../data/siteConfig'

const Timeline = () => (
  <div className="timeline">
    <h1>Experience</h1>
    {siteConfig.jobs && siteConfig.jobs.map(job => (
      <article
        key={job.begin.month + job.begin.year}
        className='timeline__item animate-on-scroll'
      >
        <div className="inner">
          <span className="timeline__date">
            <span className="timeline__month">{job.begin.month}</span>
            <span className="timeline__year">{job.begin.year}</span>
          </span>
          <div className="timeline__card">
            <h2 className='timeline__card-title'>
              {job.company
                ? `${job.occupation} at ${job.company}`
                : `${job.occupation}`}
              <br />
              <small className='timeline__card-title--small'>
                ({job.duration || 'present'})
              </small>
            </h2>
            <p>{job.description}</p>
          </div>
        </div>
      </article>
    ))}
  </div>
)

export default Timeline
