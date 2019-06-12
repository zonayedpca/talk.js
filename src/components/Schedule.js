import React from 'react';

import { Container, Title } from './common';

import './schedule.css';

const speakers = [
  { name: 'Someone Will Be', topic: 'Something Right', time: '11:00PM' },
  { name: 'Someone Will Be', topic: 'Something Right', time: '11:00PM' },
  { name: 'Someone Will Be', topic: 'Something Right', time: '11:00PM' },
  { name: 'Someone Will Be', topic: 'Something Right', time: '11:00PM' },
  { name: 'Someone Will Be', topic: 'Something Right', time: '11:00PM' },
  { name: 'Someone Will Be', topic: 'Something Right', time: '11:00PM' },
  { name: 'Someone Will Be', topic: 'Something Right', time: '11:00PM' },
  { name: 'Someone Will Be', topic: 'Something Right', time: '11:00PM' },
  { name: 'Someone Will Be', topic: 'Something Right', time: '11:00PM' },
  { name: 'Someone Will Be', topic: 'Something Right', time: '11:00PM' }
]

export default () => (
  <div className="schedule-area">
    <Container>
      <Title title="Schedule" content="Our Time will be Spent Wisely" />
      <div className="schedule">
        <table>
          <tbody>
            <tr>
              <th className="no">#</th>
              <th>Session</th>
              <th>Speaker</th>
              <th>Time</th>
            </tr>
            { speakers.map(({ name, topic, time }, index) => (
              <tr key={index}>
                <td className="no">{index + 1}</td>
                <td>{name}</td>
                <td>{topic}</td>
                <td>{time}</td>
              </tr>
            )) }
          </tbody>
        </table>
      </div>
    </Container>
  </div>
)
