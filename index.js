var MovieTitle = React.createClass({
    render: function() {
        return React.createElement('h2', {}, this.props.title);
    }
})

var MovieDescription = React.createClass({
    render: function() {
        return React.createElement('p', {className: 'media-heading'}, this.props.description);
    }
})

var MovieImg = React.createClass({
    render: function() {
        return React.createElement('img', {className:'media-object', src: this.props.image, height: 200, width: 300 });
    }
})

var Movie = React.createClass({
    render: function() {
        var mediaElement = React.createElement('div', {className: 'media border'},
            React.createElement('div', {className: 'media-left'}, 
                React.createElement(MovieImg, { image: this.props.movie.Images[1] })),
            React.createElement('div', {className: 'media-body'}, 
                React.createElement(MovieTitle, { title: this.props.movie.Title }),
                React.createElement(MovieDescription, { description: this.props.movie.Description }))
        );

        return React.createElement('li', {}, mediaElement);
    }
})

var MovieList = React.createClass({
    render: function() {
        var movieElements = this.props.movies.map(function(movie) {
            return React.createElement(Movie, { movie: movie, key: movie.Id })
        })
        return React.createElement('div', {}, 
                React.createElement('h1', {}, 'Lista filmów'), 
                React.createElement('ul', {style: {listStyleType: 'none'}}, movieElements));
    }
})

var element = React.createElement(MovieList, { movies: movies });

ReactDOM.render(element, document.getElementById('root'));