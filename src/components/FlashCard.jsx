import { useState } from 'react';

export default function FlashCard({
  title = 'Título do card',
  description = 'Descrição do card, que pode ser bem longa e ocupar várias linhas.',
}) {
  const [showTitle, setShowTitle] = useState(true);
  const handleCardClick = () => {
    // setShowTitle(!showTitle);
    setShowTitle(currentShowTitle => !currentShowTitle);
  };
  const fontSizeClassName = showTitle ? 'text-xl' : 'text-sm';
  return (
    <div
      className={`border shadow-lg p-2 m-2 w-80 h-48 cursor-pointer
                  flex flex-row items-center justify-center 
                  font-semibold ${fontSizeClassName}`}
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
      onClick={handleCardClick}
    >
      {showTitle ? title : description}
    </div>
  );
}
