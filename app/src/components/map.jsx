/** @jsx React.DOM */
var React = require('react');
var _ = require('underscore');
var UI = require('react-topui');

module.exports = React.createClass({

  propTypes: {
    links: React.PropTypes.array.isRequired
  },

  getInitialState: function(){
    return {state: 1}
  },
  componentWillMount: function(){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'http://maps.googleapis.com/maps/api/js?sensor=true';

    var p = new Promise(
      function(resolve, reject){

      }
    );
  },
  componentDidMount: function(){

  },

  render: function(){
    return(
      <div id="mapcanvas"></div>
    );
  }

});
