import React from 'react';

function BotCard({ bot, onClick, onDelete }) {
  return (
    <div onClick={onClick} style={{ border: '1px solid black', margin: '10px', padding: '10px', cursor: 'pointer' }}>
      <img src={bot.avatar_url} alt={bot.name} style={{ width: '100px', height: '100px' }} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      {onDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px', cursor: 'pointer' }}
        >
          Discharge
        </button>
      )}
    </div>
  );
}

export default BotCard;
