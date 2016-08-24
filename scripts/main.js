var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
var History = ReactRouter.History;
var createBrowserHistory = require('react-router/lib/BrowserHistory');

var h = require('./helpers');


/* 
	App
*/

var App = React.createClass({
	render: function() {
		return(
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Freash Seefood Good"/>
				</div>
				<Order/>
				<Inventory/>
			</div>
		)
	}
});

/* 
	Header
*/

var Header = React.createClass({
	render: function() {
		return(
			<header className="top">
				<h1>Catch
					<span className="ofThe">
						<span className="of">of</span>
						<span className="the">the</span>
					</span>
				Day</h1>
				<h3 className="tagline"><span>{this.props.tagline}</span></h3>
			</header>
		)
	}
})

/* 
	Order
*/

var Order = React.createClass({
	render: function() {
		return(
			<p>Order</p>
		)
	}
})

/* 
	Inventory
*/

var Inventory = React.createClass({
	render: function() {
		return(
			<p>Inventory</p>
		)
	}
})

// Store picker

var StorePicker = React.createClass({
	mixin : [History],

	goToStore: function(event) {
		event.preventDefault();
		var storeId = this.refs.storeId.value;

		this.router.push('/store/' + storeId);
	},

	render: function() {
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please Enter a Store</h2>
				<input type="text" ref="storeId" defaultValue = { h.getFunName() } required />
				<input type="submit"/>
			</form>
		)
	}
});

/**
 * Not found
 */

var NotFound = React.createClass({
	render : function() {
		return <h1>Not Found!</h1>
	}
})


/**
 * Routes
 */

var routes = (
	<Router history = { createBrowserHistory }> 
		<Route path = "/" component = { StorePicker } >
			{/* <IndexRoute component={App} /> */}
			<Route path = "/store/" component = { App } />
			<Route path = "/store/:storeId" component = { App } />
		</Route>
		<Route path = "*" component = { NotFound } />
	</Router>
)


ReactDOM.render(routes, document.querySelector('#main'));