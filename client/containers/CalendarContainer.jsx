import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Calendar from 'react-calendar';
import { fetchAndSetStats, setDummyStats } from '../actions/actions';

export default () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    fetchAndSetStats(dispatch);
    //setDummyStats(["January 5, 2022", "January 13, 2022", "Jan 25, 2022", "Jan 26, 2022"], dispatch);
  }, []);
  
  const completionDates = useSelector(state => state.stats.completionDates);
  const now = Date.now();

  const sameDay = (date1, date2) => {
    date1 = new Date(date1);
    date2 = new Date(date2);
    return date1.getFullYear() === date2.getFullYear()
      && date1.getMonth() === date2.getMonth()
      && date1.getDate() === date2.getDate()
  };

  const dateHasCompletion = (date) => (
    !!completionDates.filter(x => sameDay(date, x)).length
  );

  const selectTileClass = ({date}) => {
    if (dateHasCompletion(date)) {
      return "tile-solved";
    } 
    else {
      return "tile-normal";
    } 
  };

  const computeStreak = (completionDates) => {
    // The streak is calculated such that if you haven't completed your
    // algo yet today, the streak isn't broken, but if you do complete
    // today's algo it immediately counts toward the streak.
    const dayDuration = 24 * 60 * 60 * 1000;
    let currDate = Date.now();
    let streak = 0;
    if (dateHasCompletion(currDate)) {
      streak++;
    }
    currDate -= dayDuration;
    while(dateHasCompletion(currDate)) {
      streak++;
      currDate -= dayDuration;
    }
    return streak;
  };
  const streak = computeStreak(completionDates);
  const streakMsg = streak > 0
    ? `You've done algos for ${streak} day(s) in a row!`
    : 'Get started on your algos!';

  const completionMsg = dateHasCompletion(Date.now())
    ? "You've already finished today's algo. Nice one!"
    : "You still need to do today's algo";

  return <>
    <span>{completionMsg}</span>
    <br />
    <span>{streakMsg}</span>
    <br />
    <div className = "calendar">
    <Calendar tileClassName={selectTileClass} />
    </div>
  </>
};
// perhaps wrap with div and reference in application
// or set classname for calendar component

/*
*/