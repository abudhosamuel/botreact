import React from 'react';

function BotSpecs({ bot, onBack, onEnlist }) {
  return (
    <div style={{ textAlign: 'center', padding: '20px', border: '1px solid black' }}>
      <img src={bot.avatar_url} alt={bot.name} style={{ width: '200px', height: '200px' }} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      <button onClick={onBack}>Back to List</button>
      <button onClick={() => onEnlist(bot)}>Enlist Bot</button>
    </div>
  );
}

export default BotSpecs;
