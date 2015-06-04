'use strict';

var React = require('react/addons');

var Tooltip = React.createClass({

  propTypes: {
    cssPosition: React.PropTypes.string.isRequired,
    xPos: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.string
    ]).isRequired,
    yPos: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.string
    ]).isRequired,
    text: React.PropTypes.string.isRequired,
    closeTooltip: React.PropTypes.func.isRequired
  },

  getDefaultProps: function() {
    return {
      cssPosition: 'absolute',
      xPos: -1000,
      yPos: -1000,
      text: ''
    };
  },

  render: function() {
    let { cssPosition, yPos, xPos, text, title, closeTooltip } = this.props;
    var styles = {
      'position': cssPosition === 'fixed' ? 'fixed' : 'absolute',
      'top': yPos,
      'left': xPos
    };

    return (
      <div>
        <div className="tour-backdrop" onClick={this.props.closeTooltip} />
        <div className="tour-tooltip" style={styles}>
          <h1>{ title || 'Header' }</h1>
          <p>{ text || ''}</p>
          <div className="tour-btn close" onClick={closeTooltip}>Close</div>
        </div>
      </div>
    );
  }

});

module.exports = Tooltip;
