var Movie = React.createClass({
    propTypes: {
        movie: React.propTypes.object.isRequired
    },

    render: function() {
        return React.createElement('li', {},
            React.createElement(MovieTitle, {title: this.props.movie.title}),
            React.createElement(MovieDescription, {description: this.props.movie.description}),
            React.createElement(MovieImage, { image: this.props.movie.image })
        );
    }
})

var MovieTitle = React.createClass({
    propTypes: {
        title: React.propTypes.string.isRequired
    },

    render: function() {
        return React.createElement('h2', {}, this.props.title);
    }
})

var MovieDescription = React.createClass({
    propTypes: {
        description: React.propTypes.string.isRequired
    },

    render: function() {
        return React.createElement('p', {}, this.props.description);
    }
})

var MovieImage = React.createClass({
    propTypes: {
        image: React.propTypes.string.isRequired
    },
    render: function() {
        return React.createElement('img', {src: this.props.image});
    }
})