import React from 'react'
import '../Timezone/timezone.css'


const Timezone = (props) => (
    <div>
        <h3>Procedure to chnage the time zone</h3>
        <div className="main-zone">
            <h4>Changing the Time Zone in Linux</h4><br />
            <p>Before changing the time zone, you’ll need to find out the long name of the time zone you want to use. The time zone naming convention usually uses a “Region/City” format.</p><br />
            <p>To view all available time zones, use the timedatectl command or list the files in the /usr/share/zoneinfo directory:</p>
            <pre>$ timedatectl list-timezones</pre>
            <pre>
            Output :<br />
            ...<br />
            &nbsp;&nbsp;America/Montserrat<br />
            &nbsp;&nbsp;America/Nassau<br />
            &nbsp;&nbsp;America/New_York<br />
            &nbsp;&nbsp;America/Nipigon<br />
            &nbsp;&nbsp;America/Nome<br />
            &nbsp;&nbsp;America/Noronha ...
            </pre>
            <p>Once you identify which time zone is accurate to your location, run the following command as root or sudo user:</p>
            <pre>$ sudo timedatectl set-timezone &tl;your_time_zone&gt;</pre>
            <p>For example, to change the system’s timezone to America/New_York you would type:</p>
            <pre>$ sudo timedatectl set-timezone America/New_York</pre>
            <p>To verify the change, invoke the timedatectl command again:</p>
            <pre>$ timedatectl</pre>
            <pre>
            Output :<br /><br />

            &nbsp;&nbsp;Local time: Tue 2019-12-03 13:55:09 EST<br />
            &nbsp;&nbsp;Universal time: Tue 2019-12-03 18:55:09 UTC<br />
            &nbsp;&nbsp;RTC time: Tue 2019-12-03 18:02:16<br />
            &nbsp;&nbsp;Time zone: America/New_York (EST, -0500)<br />
            &nbsp;&nbsp;System clock synchronized: no<br />
            &nbsp;&nbsp;systemd-timesyncd.service active: yes<br />
            &nbsp;&nbsp;RTC in local TZ: no<br />
            </pre>
            <p>Successfully changed your system’s time zone.</p>
        </div>
    </div>
);
export default Timezone;