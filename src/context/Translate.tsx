import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bounce, Id, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface TranslateContextType {
  texts: { text?: string }[];
  translatedTexts: { text?: string }[];
  translate: (s: string) => Promise<void>;
  isTranslating: boolean;
  notify: (s: string) => Id;
}

const defaultValue: TranslateContextType = {
  texts: [],
  translatedTexts: [],
  translate: async () => {},
  isTranslating: false,
  notify: () => "",
};

export const TranslateContext =
  React.createContext<TranslateContextType>(defaultValue);

export const TranslateContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [texts, setTexts] = useState<{ text?: string }[]>([]);
  const [translatedTexts, setTranslatedTexts] = useState<{ text?: string }[]>(
    []
  );
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    const chatInfo = sessionStorage.getItem("chat-info");
    if (chatInfo) {
      const parsedChatInfo = JSON.parse(chatInfo);
      setTexts(parsedChatInfo.texts || []);
      setTranslatedTexts(parsedChatInfo.translatedTexts || []);
    }
  }, []);

  const translateText = async (text: string) => {
    const options = {
      method: "POST",
      url: "https://google-translate113.p.rapidapi.com/api/v1/translator/text",
      headers: {
        "x-rapidapi-key": "8f8b881411msh56c0796c76d7f7ep19cbacjsn1438e8ceeca2",
        "x-rapidapi-host": "google-translate113.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        from: "auto",
        to: "en",
        text: text,
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      return response.data.trans;
    } catch (error) {
      return "Error, Please Turn On VPN ";
    }
  };

  const addTextToChat = async (text: string) => {
    setTexts((prev) => [...prev, { text: text }]);
    setIsTranslating(true);
    try {
      const translatedText = await translateText(text);
      setTranslatedTexts((prev) => [...prev, { text: translatedText }]);
      const updatedTexts = [...texts, { text }];
      const updatedTranslatedTexts = [
        ...translatedTexts,
        { text: translatedText },
      ];
      sessionStorage.setItem(
        "chat-info",
        JSON.stringify({
          texts: updatedTexts,
          translatedTexts: updatedTranslatedTexts,
        })
      );
    } catch (error) {
      console.error("Error translating text:", error);
    } finally {
      setIsTranslating(false);
    }
  };

  const notify = (type: string) => {
    if (type === "L") {
      return toast.success("Logged in Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else if (type === "W") {
      return toast.success("Welcome", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else if (type === "R") {
      return toast.success("Registration Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else if (type === "LO") {
      return toast.success("Logged out Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      return toast.error("Please Check Your Email Or Password", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <TranslateContext.Provider
      value={{
        texts,
        translatedTexts,
        translate: addTextToChat,
        isTranslating,
        notify,
      }}
    >
      {children}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
        style={{ zIndex: 9999 }} // Ensure the ToastContainer is on top
      />
    </TranslateContext.Provider>
  );
};
// export const useTranslateContext = () => useContext(TranslateContext);
