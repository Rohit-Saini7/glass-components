import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Dropdown = ({
  placeHolder = 'Select...',
  options = [
    { value: 'alfa', label: 'Alfa' },
    { value: 'bravo', label: 'Bravo' },
    { value: 'charlie', label: 'Charlie' },
  ],
  Multiple = false,
  Searchable = false,
  onChange = (value) => {
    console.log('Value of Dropdown is set to: ', value);
  },
  hoverColor = '#9fc3f870',
  searchBorder = '1px solid #ccc',
  selectedColor = 'rgba(0 ,0, 0, 0.1)',
  menuBorder = '1px solid #ccc',
  menuZindex = 10,
  menuBgColor = 'transparent',
  dropdownBoreder = '1px solid #ccc',
  fontColor = '#fff',
  tagBgColor = 'rgba(255, 255 ,255 ,0.1)',
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(Multiple ? [] : null);
  const [searchValue, setSearchValue] = useState('');

  const searchRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    setSearchValue('');
    if (showMenu && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showMenu]);

  useEffect(() => {
    const handler = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    window.addEventListener('click', handler);
    return () => {
      window.removeEventListener('click', handler);
    };
  });

  const removeOption = (option) => {
    return selectedValue.filter((o) => o.value !== option.value);
  };

  const onTagRemove = (e, option) => {
    e.stopPropagation();
    const newValue = removeOption(option);
    setSelectedValue(newValue);
    onChange(newValue);
  };

  const onItemClick = (option) => {
    let newValue;
    if (Multiple) {
      if (selectedValue.findIndex((o) => o.value === option.value) >= 0) {
        newValue = removeOption(option);
      } else {
        newValue = [...selectedValue, option];
      }
    } else {
      newValue = option;
    }
    setSelectedValue(newValue);
    onChange(newValue);
  };

  const isSelected = (option) => {
    if (Multiple) {
      return selectedValue.filter((o) => o.value === option.value).length > 0;
    }

    if (!selectedValue) {
      return false;
    }

    return selectedValue.value === option.value;
  };

  const onSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const getOptions = () => {
    if (!searchValue) {
      return options;
    }

    return options.filter(
      (option) =>
        option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
    );
  };

  return (
    <Container dropdownBoreder={dropdownBoreder} fontColor={fontColor}>
      <DropdownInput ref={inputRef} onClick={() => setShowMenu((p) => !p)}>
        {!selectedValue || selectedValue.length === 0 ? (
          placeHolder
        ) : Multiple ? (
          <Tags>
            {selectedValue.map((option) => (
              <TagItem key={option.value} tagBgColor={tagBgColor}>
                {option.label}
                <CloseIcon
                  onClick={(e) => onTagRemove(e, option)}
                  fontColor={fontColor}
                />
              </TagItem>
            ))}
          </Tags>
        ) : (
          selectedValue.label
        )}
        <DownIcon showMenu={showMenu} fontColor={fontColor} />
      </DropdownInput>
      {showMenu && (
        <Menu
          menuBorder={menuBorder}
          menuBgColor={menuBgColor}
          menuZindex={menuZindex}
        >
          {Searchable && (
            <SearchBoxInput
              onChange={onSearch}
              value={searchValue}
              ref={searchRef}
              searchBorder={searchBorder}
              menuBgColor={menuBgColor}
              fontColor={fontColor}
            />
          )}
          {getOptions().map((option) => (
            <Item
              onClick={() => onItemClick(option)}
              key={option.value}
              className={`${isSelected(option) && 'selected'}`}
              selectedColor={selectedColor}
              hoverColor={hoverColor}
            >
              {option.label}
            </Item>
          ))}
        </Menu>
      )}
    </Container>
  );
};

export default Dropdown;

const Container = styled.div`
  text-align: left;
  border: ${({ dropdownBoreder }) => dropdownBoreder};
  position: relative;
  border-radius: 5px;
  max-width: 20%;
  color: ${({ fontColor }) => fontColor};
`;

const DropdownInput = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
`;

const Menu = styled.div`
  position: absolute;
  transform: translateY(4px);
  width: 100%;
  border-radius: 5px;
  overflow: auto;
  max-height: 150px;
  border: ${({ menuBorder }) => menuBorder};
  z-index: ${({ menuZindex }) => menuZindex};
  background-color: ${({ menuBgColor }) => menuBgColor};
`;

const SearchBoxInput = styled.input`
  width: calc(100% - 10px);
  margin: 5px;
  box-sizing: border-box;
  padding: 5px;
  border: ${({ searchBorder }) => searchBorder};
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  color: ${({ fontColor }) => fontColor};
  background-color: ${({ menuBgColor }) => menuBgColor};
`;

const Item = styled.div`
  padding: 5px 10px;
  cursor: pointer;
  margin: 5px;
  border-radius: 2px;
  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
  }
  &.selected {
    background-color: ${({ selectedColor }) => selectedColor};
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const TagItem = styled.div`
  background-color: ${({ tagBgColor }) => tagBgColor};
  padding: 2px 4px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const DownIcon = styled.i`
  position: relative;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  border-radius: 50%;
  transition: 0.2s ease;
  rotate: ${({ showMenu }) => (!showMenu ? '0deg' : '180deg')};
  &:before,
  &:after {
    content: '';
    height: 2px;
    width: 12px;
    position: absolute;
    left: 50%;
    top: 50%;
    background-color: ${({ fontColor }) => fontColor};
  }
  &:before {
    rotate: 45deg;
    translate: -80% -50%;
  }
  &:after {
    rotate: -45deg;
    translate: -20% -50%;
  }
`;

const CloseIcon = styled.i`
  position: relative;
  width: 16px;
  height: 16px;
  transition: 0.25s ease;
  border-radius: 50%;
  &:before,
  &:after {
    position: absolute;
    left: 10%;
    content: ' ';
    height: 15px;
    width: 2px;
    background-color: ${({ fontColor }) => fontColor};
  }
  &:before {
    transform: rotate(45deg);
    translate: 5px;
  }
  &:after {
    transform: rotate(-45deg);
    translate: 5px;
  }
  &:hover {
    rotate: 180deg;
  }
`;
