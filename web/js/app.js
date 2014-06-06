/**
 * @jsx React.DOM
 */
var MarkdownComponent = React.createClass({
  render: function() {
    var converter = new Showdown.converter();
    var html = converter.makeHtml(this.props.data);
    return <div dangerouslySetInnerHTML={{__html: html}} />;
  }
});

var ErrorComponent = React.createClass({
  render: function() {
    return (
      <div className="error">
        <h1>{'Ooops, something went wrong :('}</h1>
      </div>
    );
  }
});

var LoadingComponent = React.createClass({
  render: function() {
    return <h1>Loading...</h1>;
  }
});

var cache = {};
var RequestCache = {
  load: function(url, callback) {
    if (cache[url]) {
      callback(cache[url]);
    } else {
      $.ajax({
          url: url,
          success: function(data) {
            cache[url] = data;
            callback(cache[url]);
          }.bind(this),
          error: function(xhr, status, err) {
              console.error(this.props.url, status, err.toString());
          }.bind(this)
      });
    }
  }
};

var AboutComponent = React.createClass({
  componentWillMount: function() {
    var that = this;
    RequestCache.load(this.props.url, function(data){
      that.setState({data: data})
    });
  },
  render: function() {
    if (this.state && this.state.data) {
      return <MarkdownComponent data={this.state.data} />;
    } else {
      return <LoadingComponent />
    }
  }
});

var CurriculumComponent = React.createClass({
  render: function() {
    return <h1>Curriculum</h1>;
  }
});

var ContactComponent = React.createClass({
  render: function() {
    return <h1>Contact me</h1>;
  }
});
