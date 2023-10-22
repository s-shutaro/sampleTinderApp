import React, { useState } from "react";
import TinderCard from "react-tinder-card";

const db = [
  {
    name: "Fさん",
    url: "./img/business_woman03.png",
    info: {
      year: 20,
      certification: "-",
      hobby: "買い物",
      comment: "お願いします！"
    }
  },
  {
    name: "Cさん",
    url: "./img/business_man03.png",
    info: {
      year: 40,
      certification: "MOS",
      hobby: "散歩",
      comment: "お願いします！"
    }
  },
  {
    name: "Dさん",
    url: "./img/business_woman01.png",
    info: {
      year: 10,
      certification: "応用情報",
      hobby: "映画鑑賞🎬",
      comment: "お願いします！"
    }
  },
  {
    name: "Eさん",
    url: "./img/business_woman02.png",
    info: {
      year: 4,
      certification: "ITパスポート",
      hobby: "読書📚",
      comment: "お願いします！"
    }
  },
  {
    name: "Bさん",
    url: "./img/business_man02.png",
    info: {
      year: 6,
      certification: "-",
      hobby: "筋トレ",
      comment: "お願いします！"
    }
  },
  {
    name: "Aさん",
    url: "./img/business_man01.png",
    info: {
      year: 2,
      certification: "基本情報",
      hobby: "ゲーム🎮",
      comment: "お願いします！"
    }
  }
];

function Sample() {
  const characters = db;
  const [lastDirection, setLastDirection] = useState();
  const [isCard, setIsCard] = useState(true);
  const [currentInfo, setCurrentInfo] = useState(db[db.length - 1].info);

  const swiped = (direction, nameToDelete) => {
    setLastDirection(direction === "right" ? "いいね!" : "うーん...");
    setTimeout(() => setLastDirection(), 1000);
    const currentIndex = characters.findIndex(
      (element) => element.name === nameToDelete
    );
    if (currentIndex === 0) {
      setIsCard(false);
    } else {
      const nextIndex = currentIndex - 1;
      setCurrentInfo(db[nextIndex].info);
    }
  };

  return (
    <div>
      {isCard ? (
        <div className="balloon-001">
          入社：{currentInfo.year}年目
          <br />
          資格：{currentInfo.certification}
          <br />
          趣味：{currentInfo.hobby}
          <br />
          一言：{currentInfo.comment}
        </div>
      ) : (
        <div />
      )}
      <div className="cardContainer">
        {characters.map((character) => (
          <TinderCard
            className="swipe"
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name)}
          >
            <div
              style={{ backgroundImage: "url(" + character.url + ")" }}
              className="card"
            >
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      {lastDirection ? (
        <h2 className="infoText">{lastDirection}</h2>
      ) : (
        <h2 className="infoText" />
      )}
    </div>
  );
}

export default Sample;
