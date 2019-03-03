import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
  card: {
    maxWidth: 150,
    maxHight: 300
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  media: {
    width: 50,
    height: 50,
    padding: '20px'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

const WeatherDayCard = (props) => {
  const {
    classes,
    date,
    weatherStateIcon,
    weatherState,
    maxtemp,
    mintemp,
    humidity
  } = props;

  const weatherdate = new Date(date);
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  const weatherDay = days[weatherdate.getDay()];
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={`https://www.metaweather.com/static/img/weather/${weatherStateIcon}.svg`}
      />

      <CardContent>
        <div>{weatherDay}</div>
        <div>{weatherState}</div>
        <div>maxtemp: {maxtemp} &#8451;</div>
        <div>mintemp: {mintemp} &#8451;</div>
        <div>humidity: {humidity} %</div>
      </CardContent>
    </Card>
  );
};

WeatherDayCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WeatherDayCard);
