import React from "react";


type Item = {
  name: string;
  text?: string;
  icon?: React.ReactNode;
};

type Props = {
  items: Item[];
  selectedIndex: number;
  onChange?: (data: { index: number; name: string; text?: string }) => void;
};

const CustomContentSwitcher: React.FC<Props> = ({
  items,
  selectedIndex,
  onChange,
}) => {
  return (
    <div className="custom-content-switcher">
      {items.map((item, i) => {
        const isActive = i === selectedIndex;
        return (
          <button
            key={item.name}
            className={`custom-content-switcher__btn ${isActive ? "selected" : ""}`}
            onClick={() => onChange?.({ index: i, name: item.name, text: item.text })}
          >
            {item.icon && <span>{item.icon}</span>}
            {item.text && <span>{item.text}</span>}
          </button>
        );
      })}
    </div>
  );
};

export default CustomContentSwitcher;
