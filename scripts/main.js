var React = require("react");
var ReactDOM = require("react-dom");

var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
var History = ReactRouter.History;

var createBrowserHistory = require("history/lib/createBrowserHistory");

var adventures = require("./adventures");

var App = React.createClass({
    getInitialState: function(){
        return {
            adventures: adventures,
            current_adventure: 0
        }
    },
    showOptions(options){
        // iterate through choices and make a choice component for each
        var self = this;
        if(options){
            var choices = options.map(function(o){
                return <Choice key={o.label} details={o} changeAdventure={ self.changeAdventure } />
            })
            return choices   
        } else {
            return <Lose />
        }
    },
    changeAdventure: function(to){
        this.setState({
            current_adventure: to
        });
    },
    render: function(){
        var data = this.state.adventures[this.state.current_adventure];
        var text = data.text.split("\n").map(function(el){
            return(<p key={el} >{el}</p>)
        });
        return(
            <div className = "main-container"
                style={{backgroundImage: 'url(' + data.image + ')'}}>
                <nav>
                    <h1>
                        <span className = "title">ReactJS</span>
                        Choose your own adventure
                    </h1>
                </nav>
                <div className="current_adventure">
                    { text }
                    <div className="choices">
                        { this.showOptions(data.options) }
                    </div>
                </div>
            </div>
        )
    }
})

var Choice = React.createClass({
    onButtonClick: function(to){
        this.props.changeAdventure(to);
    },
    render: function(){
        var details = this.props.details
        return <a onClick={this.onButtonClick.bind(this, details.to)} className="button">{ details.label }</a>
    }
})

var Lose = React.createClass({
    render: function(){
        return <p className="lose">You Lose</p>
    }
})

var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}/>
  </Router>
);

ReactDOM.render(routes, document.querySelector("#main"));
