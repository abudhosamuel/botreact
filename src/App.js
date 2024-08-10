import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotSpecs from './BotSpecs';
import SortBar from './SortBar';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  const handleEnlist = (bot) => {
    if (!army.find(b => b.bot_class === bot.bot_class)) {
      setArmy([...army, bot]);
      setBots(bots.filter(b => b.id !== bot.id)); // Remove bot from BotCollection
      setSelectedBot(null);
    } else {
      alert(`You can only enlist one bot from each class!`);
    }
  };

  const handleRelease = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
    setBots([...bots, bot]); // Add bot back to BotCollection
  };

  const handleDischarge = (id) => {
    fetch(`http://localhost:8001/bots/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setArmy(army.filter(b => b.id !== id));
        setBots(bots.filter(b => b.id !== id));
      });
  };

  const handleSort = (type) => {
    setSortType(type);
    const sortedBots = [...bots].sort((a, b) => b[type] - a[type]);
    setBots(sortedBots);
  };

  const handleSelectBot = (bot) => {
    setSelectedBot(bot);
  };

  const handleBackToList = () => {
    setSelectedBot(null);
  };

  return (
    <div>
      <h1>Bot Battlr</h1>
      <YourBotArmy army={army} onRelease={handleRelease} onDischarge={handleDischarge} />
      {selectedBot ? (
        <BotSpecs bot={selectedBot} onBack={handleBackToList} onEnlist={handleEnlist} />
      ) : (
        <>
          <SortBar onSort={handleSort} />
          <BotCollection bots={bots} onEnlist={handleSelectBot} />
        </>
      )}
    </div>
  );
}

export default App;
