import React from 'react';
import '../css/Aside.css';

export default function Aside() {
    return (
        <aside>
          <div id = 'asideDiv1'>
            <h3 id = 'asideTitle'>CaldAR</h3>
          </div>
          <div id = 'asideDiv2'>
            <ol>
              <h4>
                <li>
                  <a href="/#">Customers</a>
                </li>
                <li>
                  <a href="/#">Technicias</a>
                </li>
                <li>
                  <a href="/#">Schedule</a>
                </li>
                <li>
                  <a href="/#">Boilers</a>
                </li>
                <li>
                  <a href="/#">Settings</a>
                </li>
                <li>
                  <a href="/#">Reports</a>
                </li>
              </h4>
            </ol>
          </div>
        </aside>
    )
}
