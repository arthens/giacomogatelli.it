import React from 'react'
import { FormattedMessage } from 'react-intl'

export default  React.createClass({
    propTypes: {
        events: React.PropTypes.array.isRequired
    },

    render() {
        return <div className="timeline">
            {this.props.events.map((event) => {
                return this.renderEvent(event);
            })}
        </div>;
    },

    renderEvent(event) {
        let key = event.to + event.from + event.tite;
        return (
            <div
                className="timeline__event"
                key={key}
                >
                <div className="timeline__event-period">{event.from} - {event.to}</div>
                <div className="timeline__event-details">
                    <b>{event.title}</b>
                    {this.renderPlace(event)}
                </div>
            </div>
        );
    },

    renderPlace(event) {
        if (event.place) {
            return <div>{event.place}</div>
        } else {
            return <span/>
        }
    }
});
