var MovieTitle = React.createClass({
    render: function() {
        return React.createElement('h2', {}, this.props.title);
    }
})

var MovieDescription = React.createClass({
    render: function() {
        return React.createElement('p', {}, this.props.description);
    }
})

var MovieImg = React.createClass({
    render: function() {
        return React.createElement('img', { src: this.props.image, height: 200, width: 300 });
    }
})

var Movie = React.createClass({
    render: function() {
        return React.createElement('li', {className: 'media border'},
            React.createElement(MovieTitle, { title: this.props.movie.Title }),
            React.createElement(MovieDescription, { description: this.props.movie.Description }),
            React.createElement(MovieImg, { image: this.props.movie.Images[1] })
        );
    }
})

var MovieList = React.createClass({
    render: function() {
        var movieElements = this.props.movies.map(function(movie) {
            return React.createElement(Movie, { movie: movie, key: movie.Id })
        })
        return React.createElement('div', {}, 
                React.createElement('h1', {}, 'Lista filmów'), 
                React.createElement('ul', {}, movieElements));
    }
})

var element = React.createElement(MovieList, { movies: movies });

ReactDOM.render(element, document.getElementById('root'));