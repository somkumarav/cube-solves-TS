import React, { useEffect } from 'react';
import { RiGitBranchLine } from 'react-icons/ri';
import { Solve } from '../App';
// import { convert } from '../hooks/convertTime';

interface Props {
  solve: Solve;
  setShowDisplaySolve: React.Dispatch<React.SetStateAction<boolean>>;
}

//==================================================================
// The development for this component is haulted
//==================================================================

export const DisplaySolve: React.FC<Props> = ({
  solve,
  setShowDisplaySolve,
}) => {
  useEffect(() => {
    window.addEventListener('keyup', (e) => {
      if (e.code === 'Escape') {
        setShowDisplaySolve(false);
      }
    });
  }, [setShowDisplaySolve]);

  return (
    <div
      className="DisplaySolve"
      onClick={() => {
        setShowDisplaySolve(false);
      }}
    >
      <div
        className="displaysolve-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="displaysolve-content-header">
          <h3>CubeSolve</h3>
          <h3>
            <span>
              <RiGitBranchLine />
            </span>
            <span className="displaysolve-content-header-id-text">
              S-{solve.id}
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

// <div className="displaysolve-content-header">
//   <h1>CubeSolve</h1>
// </div>
// <div className="displaysolve-content-body">
//   <h3 className="displaysolve-content-body-item">
//     <span className="text">
//       <span>Cube</span>
//       <span>:</span>
//     </span>
//     <span className="prop">{solve.cube}</span>
//   </h3>
//   <h3 className="displaysolve-content-body-item">
//     <span className="text">
//       <span>Time</span>
//       <span>:</span>
//     </span>
//     <span className="prop">{convert(solve.time)}</span>
//   </h3>
//   <h3 className="displaysolve-content-body-item">
//     <span className="text">
//       <span>Scramble</span>
//       <span>:</span>
//     </span>
//     <span className="prop">{solve.scramble}</span>
//   </h3>
//   <h3 className="displaysolve-content-body-item">
//     <span className="text">
//       <span>Date</span>
//       <span>:</span>
//     </span>
//     <span className="prop">{solve.date}</span>
//   </h3>
// </div>
// <div className="displaysolve-content-footer">
//   <div className="displaysolve-content-footer-button"></div>
//   <div className="displaysolve-content-footer-button"></div>
//   <div className="displaysolve-content-footer-button"></div>
// </div>
