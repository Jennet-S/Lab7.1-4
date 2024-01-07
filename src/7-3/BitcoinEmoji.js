import React from 'react';
import Emoji from './Emoji';
import { useEmoji } from './EmojiContex'

function BitcoinEmoji() {
  const { isHappy, toggleMood } = useEmoji();

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        <p>
          Current Emoji: <Emoji isHappy={isHappy} />
        </p>

        {isHappy !== null && (
          <p>
            {isHappy ? (
              <span role="img" aria-label="Happy Emoji">
                😊
              </span>
            ) : (
              <span role="img" aria-label="Sad Emoji">
                😢
              </span>
            )}
          </p>
        )}

        <button onClick={toggleMood}>Change Mood</button>
      </label>
    </div>
  );
}

export default BitcoinEmoji;
