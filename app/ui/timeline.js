'use client'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Timeline() {
  return (
    <div>
      <h1>The North Pole 2022</h1>
      <p>The ultimate adventure</p>

      <div className="timeline mx-auto my-20 max-w-lg">
        <div className="checkpoint relative max-w-lg p-5">
          <div className="border-2 border-gray-600 rounded-lg p-6">
            <h2>Day 1:</h2>
            <p className="leading-7">This is the textThis is the textThis is the textThis is the textThis is the textThis is the textThis is the textThis is the text</p>
          </div>
        </div>
        <div className="checkpoint">
          <div>
            <h2>Day 2:</h2>
            <p>This is the text</p>
          </div>
        </div>
        <div className="checkpoint">
          <div>
            <h2>Day 3:</h2>
            <p>This is the text</p>
          </div>
        </div>
      </div>
    </div>
  );
}
