/* eslint-disable react/prop-types */

export const Popup = ({ showPopup, setShowPopup }) => {

  return (
    <div>
        {showPopup && (
        <div className="popup">
          <p>Thanks for your message!</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </div>
  )
}
