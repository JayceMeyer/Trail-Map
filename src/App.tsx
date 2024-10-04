import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import NPMapTrail from '@npmap/trail'
import { 
  MOCK_FEATURE_S_RIM_VISITOR_CENTER, 
  MOCK_OAK_FLAT_TRAIL_ALERT_DATA, 
  MOCK_OAK_FLAT_TRAIL_DATA_WITH_ELEVATION 
} from './mock-constants'

function App() {
  const [featureToShow, setFeatureToShow] = useState(null)
  const handleElementClicked = (elementObject: any) => {
    console.log('Received clicked feature: ', elementObject);
  }

  // Example of manually showing a feature/s popup on the map (if contained in the data)
  // NOTE: This will only work if the code using this can have "useState" (a React Component)
  const manuallyShowFeature = (f: any) => {
    setFeatureToShow(f);
  }

  return (
    <>
      <p className="header-text">The Trail Map</p>
      <div className="map-container">
        <div className="left-side">
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </div>
          <button onClick={() => manuallyShowFeature(MOCK_FEATURE_S_RIM_VISITOR_CENTER)} style={{padding: '20px', marginRight: '10px'}}>Example of manually showing popup of feature</button>
        </div>
        
        <NPMapTrail 
            trailDataUrl={MOCK_OAK_FLAT_TRAIL_DATA_WITH_ELEVATION}
            trailAlertsUrl={MOCK_OAK_FLAT_TRAIL_ALERT_DATA}
            featurePopupToShow={featureToShow} // Optional - Use to show a map popup for a feature (if contained in the data from trailDataUrl)
            elementClicked={handleElementClicked} // Optional. Use to capture a clicked map feature
            mapCssHeight={'100%'} // Optional, defaults to 98vh - if the parent element of the map uses "%" for height, then this cannot be a "%" value
            mapCssWidth={'100%'}  // Optional, defaults to 100%
            enableTrailAlerts={true}  // Optional, defaults to true
            enableTrailAlertsToggle={true}  // Optional, defaults to true (but relies on enableTrailAlerts being true)
            enableElevationProfile={true}  // Optional, defaults to true
            // elevationProfileOptions={CUSTOM_ELEVATION_PROFILE_OPTIONS} // Optional, has default styling
        />
      </div>
    </>
  )
}

export default App
