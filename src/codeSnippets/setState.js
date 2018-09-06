
/*
Source: https://reactjs.org/docs/state-and-lifecycle.html
Using State Correctly
There are three things you should know about setState().

*/

// Correct
this.setState({comment: 'Hello'});

// Correct
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}));

//We used an arrow function above, but it also works with regular functions:
// Correct
this.setState(function(prevState, props) {
  return {
    counter: prevState.counter + props.increment
  };
});

//State Updates are Merged

constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }

  //Then you can update them independently with separate setState() calls:

  componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }
