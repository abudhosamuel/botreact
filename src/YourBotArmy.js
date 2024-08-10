import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ army, onRelease, onDischarge }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {army.map(bot => (
          <BotCard
            key={bot.id}
            bot={bot}
            onClick={() => onRelease(bot)}
            onDelete={() => onDischarge(bot.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
