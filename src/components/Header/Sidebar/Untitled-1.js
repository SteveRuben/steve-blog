<div className="container">
          <div className="lead">
            <div className="elevator">
              <h1>{`Hey, I'm Steve 👋`} </h1>
              <p>
                {`I'm a full stack software developer creating `}
                <a href="https://github.com/tryptich" target="_blank" rel="noopener noreferrer">
                  open source
                </a>{' '}
                projects and <Link to="/blog">writing</Link> about modern JavaScript, Node.js, and
                development.
              </p>
              <div className="social-buttons">
                <GitHubButton
                  href="https://github.com/tryptich"
                  data-size="large"
                  data-show-count="true"
                >
                  Steve Ruben
                </GitHubButton>
              </div>
            </div>
            <div className="newsletter-section">
              <img src={tania} className="newsletter-avatar" alt="Steve Ruben" />
              <div>
                <h3>Email Newsletter</h3>
                <p>
                  I write tutorials and stuff both in french and in englsih. Get an update when something new comes out by signing up below!
                </p>
                <EmailForm/>
              </div>
            </div>
          </div>
        </div>

        <div className="container front-page">
          <section className="section">
            <h2>
              Latest Articles
              <Link to="/blog" className="view-all">
                View all
              </Link>
            </h2>
            <PostListing simple postEdges={latestPostEdges} />
          </section>

          <section className="section">
            <h2>
              Most Popular
              <Link to="/categories/popular" className="view-all">
                View all
              </Link>
            </h2>
            <PostListing simple postEdges={popularPostEdges} />
          </section>

          <section className="section">
            <h2>Open Source Projects</h2>
            <ProjectListing projects={projects} />
          </section>

          <section className="section">
            <h2>Interviews</h2>
            <SimpleListing simple data={podcasts} />
          </section>

          <section className="section">
            <h2>Talks</h2>
            <SimpleListing simple data={speaking} />
          </section>
        </div>
        <div className="gradient-section">
          <div className="container">
            <h2>Other People Say...</h2>
          </div>
          <div className="quotations">
            {quotes.map(quote => (
              <blockquote className="quotation" key={quote.name}>
                <p>{quote.quote}</p>
                <cite>— {quote.name}</cite>
              </blockquote>
            ))}
          </div>
        </div>