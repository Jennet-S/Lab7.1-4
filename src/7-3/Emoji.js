import React from "react";
import { useEmoji } from './EmojiContex';

const Emoji = () => {
    const { isHappy, toggleMood } = useEmoji();

    return (
        <div>
            {isHappy ? (
                <span role="img" aria-label="Happy Emoji">
                    😊
                </span>
            ) : (
                <span role="img" aria-label="Sad Emoji">
                    😢
                </span>
            )}
            <button onClick={toggleMood}>Change Mood</button>
        </div>
    );
};

export default Emoji;