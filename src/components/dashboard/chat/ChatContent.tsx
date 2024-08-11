import { useContext, useState, useEffect } from "react";
import { TranslateContext } from "../../../context/Translate";
import Message from "./Message";
import TypingLoading from "../../UI/TypingLoading";

import classes from "./ChatContent.module.css";

const ChatContent = () => {
  const ctx = useContext(TranslateContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (ctx.isTranslating) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [ctx.isTranslating]);

  const combinedMessages = [];
  for (
    let i = 0;
    i < Math.max(ctx.texts.length, ctx.translatedTexts.length);
    i++
  ) {
    if (i < ctx.texts.length) {
      combinedMessages.push({ text: ctx.texts[i].text, me: true });
    }
    if (i < ctx.translatedTexts.length) {
      combinedMessages.push({ text: ctx.translatedTexts[i].text, me: false });
    }
  }

  return (
    <div
      className={classes.chat}
      style={{
        padding: "2.5rem 2rem 2rem",
        width: "100%",
        height: "100%",
        overflowY: "auto",
      }}
    >
      {combinedMessages.map(({ text, me }, index) => (
        <Message key={index} message={text} me={me} />
      ))}
      {loading ? (
        <Message message={<TypingLoading></TypingLoading>} me={false} />
      ) : (
        ""
      )}
    </div>
  );
};

export default ChatContent;
