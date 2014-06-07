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
              console.error(url, status, err.toString());
          }.bind(this)
      });
    }
  }
};

var RemotePageComponent = React.createClass({
  getData: function () {
    var that = this;
    RequestCache.load(this.props.url, function(data){
      that.setState({data: data});
    });
  },
  componentWillMount: function() {
    this.getData();
  },
  componentWillReceiveProps: function() {
    this.getData();
  },
  render: function() {
    if (this.state && this.state.data) {
      return <MarkdownComponent data={this.state.data} />;
    } else {
      return <LoadingComponent />
    }
  }
});

var AboutComponent = React.createClass({
  render: function() {
    return <RemotePageComponent url="data/about.en.md" />;
  }
});

var JsxIf = function (props, children, wat, da, fuq) {
  var arguments = Array.prototype.slice.call(arguments),
    props = arguments.shift(),
    children = arguments;

  return props.condition ? children : null;
}

var TimelineComponent = React.createClass({
  render: function() {
    var events = this.props.events;
    return <div className="timeline">{events.map(function (event) {
      return <div className="timeline__event">
        <div className="timeline__event-period">{event.from} - {event.to}</div>
        <div className="timeline__event-details">
          <b>{event.title}</b>
          <JsxIf condition={event.place}>
            <br /> at {event.place}
          </JsxIf>
        </div>
      </div>;
    })}</div>;
  }
});

var SkillsComponent = React.createClass({
  render: function() {
    var skills = this.props.skills;
    return <div className="skill-list">{skills.map(function (skill) {
      return <div className="skill">{skill}</div>;
    })}</div>;
  }
});

var CurriculumComponent = React.createClass({
  getInitialState: function() {
    return {
      intro: "",
      work: [],
      education: [],
      skills: []
    };
  },
  componentWillMount: function() {
    var that = this;
    RequestCache.load("data/curriculum.json", function(data){
      that.setState(data);
    });
  },
  render: function() {
    return (
      <div>
        <h1>Curriculm</h1>

        <p>{this.state.intro}</p>

        <div>
          <h2>Work experience</h2>
          <TimelineComponent events={this.state.work} />
        </div>

        <div>
          <h2>Education</h2>
          <TimelineComponent events={this.state.education} />
        </div>

        <div>
          <h2>Skills</h2>
          <SkillsComponent skills={this.state.skills} />
        </div>
      </div>
    );
  }
});

var ContactComponent = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Contact me</h1>
      </div>
    );
  }
});
