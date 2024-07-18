import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: ''
    };
    this.getQuote = this.getQuote.bind(this);
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote() {
    fetch('https://type.fit/api/quotes')
      .then(resp => resp.json())
      .then(data => {
        const randomQuote = data[Math.floor(Math.random() * data.length)];
        this.setState({
          quote: randomQuote.text,
          author: randomQuote.author
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    console.log("Current Quote:", this.state.quote);
    return (
      <div className="container">
        <div id="wrapper" className="text-center mt-5">
          <header className="App-header">
            <h1>Random Quote Machine</h1>
          </header>
          <section>
            <div id="quote-box" className="p-4 border rounded">
              <p id="text" className="lead">{this.state.quote}</p>
              <p id="author">- {this.state.author}</p>
              <div className="bottom ">
                <a
                  id="tweet-quote"
                  href={`https://twitter.com/intent/tweet?text="${this.state.quote}" - "${this.state.author}"`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-twitter"></i> Tweet
                </a>
                <button
                  id="new-quote"
                  onClick={this.getQuote}
                  className="btn btn-secondary"
                >
                  New Quote
                </button>
              </div>
            </div>
          </section>
          <div className="footer mt-4">by Wittawat Na Ranong</div>
        </div>
      </div>
    );
  }
}

root.render(
  <React.StrictMode>
    <QuoteMachine />
  </React.StrictMode>
);

// Measure performance
reportWebVitals();
