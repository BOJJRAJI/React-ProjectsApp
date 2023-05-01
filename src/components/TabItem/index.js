import './index.css'

const TabItem = props => {
  const {tabDetails, onChangeTab, isActive} = props
  const {displayText, tabId} = tabDetails

  const activeTab = isActive ? 'active-tab-btn' : null

  function changeTab() {
    onChangeTab(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTab}`}
        onClick={changeTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
