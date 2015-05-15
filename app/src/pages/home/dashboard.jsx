/** @jsx React.DOM */
var React = require('react');
var IScroll = require('../../components/iscroll');
var Navigation = require('./nav');
var Ipsum = require('../../components/ipsum');
var __ = require('../../flux/stores/lang')._
var UI = require('react-topui');
var AppStateActions = require('../../flux/actions/appState');

module.exports = React.createClass({

  componentDidMount: function(){
    AppStateActions.setTitle(__('app.name'));
  },

  render: function(){
    return (
      <div>
      <IScroll>

      </IScroll>
      </div>
      );
  }

});
