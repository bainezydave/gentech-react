import React from 'react';


const DayPart = (hour = 1) => 
{
    hour = parseInt(hour);

    if (hour >= 4 && hour < 6)   return "earlymorning";
    if (hour >= 6 && hour < 9)   return "morning";
    if (hour >= 9 && hour < 15)  return "day";
    if (hour >= 15 && hour < 18) return "afternoon";
    if (hour >= 18 && hour < 20) return "evening";
    if (hour >= 20 && hour < 22) return "latenight";
    return "overnight"
}



const Clock = (timezone = "Australia/Sydney") =>
{
    let date = new Date();

    let hour      = date.toLocaleTimeString("en-AU", { timeZone: timezone, hour12: false, hour: '2-digit' });
    let localDate = date.toLocaleDateString("en-AU", { timeZone: timezone,  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'  });
    let localTime = date.toLocaleTimeString("en-AU", { timeZone: timezone });
    let continent = timezone.split("/")[0];
    let city      = timezone.split("/")[1].replace(/_/g, " ");
    
    return (
        <div className="clock" data-daypart={DayPart(hour)} style={{ order: hour }}>
            <div className="continent">{continent}</div>
            <div className="name">{city}</div>
            <div className="date">{localDate}</div>
            <div className="time">{localTime}</div>
        </div>
    )
}

export default Clock;
