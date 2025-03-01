import React from 'react';
import useTheme from '../contexts/theme';

const ThemeBtn = () => {
  const { themeMode, darkTheme, lightTheme } = useTheme();

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          value=""
          onChange={onChangeBtn}
          checked={themeMode === 'dark'}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer-focus:outline-none peer-focus:right-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px]
           after:bg-white after:border-gray-300 
           after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
        </div>
      </label>
    </div>
  );
};

export default ThemeBtn;
