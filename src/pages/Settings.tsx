import { useState } from 'react';

interface Props {}

// interface SettingsOptions {
//   name: string;
//   displayMessage: string;
//   options: string[];
//   function: () => void;
//   category: '' | 'general' | 'theme';
// }

export const Settings: React.FC<Props> = () => {
  const [addSolve, setAddSolve] = useState<'timer' | 'typing'>('timer');

  return (
    <div className="Settings container">
      <div className="settings-left">
        <div className="settings-left-item">
          <h3>general</h3>
        </div>
        <div className="settings-left-item">
          <h3>theme</h3>
        </div>
        <div className="settings-left-item">
          <h3>account</h3>
        </div>
      </div>

      {/* settings-right */}
      <div className="settings-right">
        <div className="settings-right-item">
          <div className="settings-right-item-left">
            <h3 className="settings-right-item-name">add solve method</h3>
            <h3 className="settings-right-item-message">
              select method to add solve using timer or typing
            </h3>
          </div>
          <div className="settings-right-item-right">
            <button
              onClick={() => {
                setAddSolve('timer');
              }}
            >
              timer
            </button>
            <button
              onClick={() => {
                setAddSolve('typing');
              }}
            >
              typing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// SETTINGS
// addSolve -typing -toggle it always or not

// const settingsOptions = [
//   {
//     name: 'add solve method',
//     displayMessage: 'select default method to add solve',
//     options: ['timer', 'manual input'],
//     category: 'general',
//   },
//   {
//     name: 'stick manual input',
//     displayMessage:
//       'manual input modal will not dissaper after ever solve if turned on',
//     options: ['on', 'off'],
//     category: 'general',
//   },
// ];
