/**
 * @jsx React.DOM
 */

var RoutingComponent = React.createClass({
  componentWillMount : function() {
    this.props.router.on("route", (function() {
      this.forceUpdate();
    }).bind(this));
  },
  render : function() {
    var componentName = this.props.router.current;
    switch (this.props.router.current) {
        case 'about':
            return <AboutComponent url="data/about.en.md" />;

        case 'curriculum':
            return <CurriculumComponent />;

        case 'contact':
            return <ContactComponent />;

        default:
            return <div />;
    }
}
});

var AppRouter = Backbone.Router.extend({
    routes: {
        "*component": "selectComponent",
    }
});

var router = new AppRouter;
router.on('route:selectComponent', function(component) {
    this.current = component || "about";
});

React.renderComponent(
    <RoutingComponent router={router} />,
    document.getElementById('content')
);

// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();


/*

// Trigger the initial route and enable HTML5 History API support, set the
// root folder to '/' by default.  Change in app.js.
Backbone.history.start({ pushState: false });

// All navigation that is relative should be passed through the navigate
// method, to be processed by the router. If the link has a `data-bypass`
// attribute, bypass the delegation completely.
$(document).on("click_", "a[href]:not([data-bypass])", function(evt) {

  // Get the absolute anchor href.
  var href = { prop: $(this).prop("href"), attr: $(this).attr("href") };
  // Get the absolute root.
  var root = location.protocol + "//" + location.host + app.root;

  alert('so');

  // Ensure the root is part of the anchor href, meaning it's relative.
  if (href.prop.slice(0, root.length) === root) {
    // Stop the default event to ensure the link will not cause a page
    // refresh.
    evt.preventDefault();

    // `Backbone.history.navigate` is sufficient for all Routers and will
    // trigger the correct events. The Router's internal `navigate` method
    // calls this anyways.  The fragment is sliced from the root.
    Backbone.history.navigate(href.attr, true);
  }
});
*/
