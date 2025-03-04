export function Tabs(props) {
    const { todos, selectedTab, setSelectedTab } = props
    const tabs = ['All', 'Open', 'Completed']
    return (
        <nav>
            {tabs.map((tab, tabIndex) => {
                const numOfTabs = tab === 'All' ?
                    todos.length :
                    tab === 'Open' ?
                        todos.filter(val => !val.complete).length :
                        todos.filter(val => val.complete).length

                return (
                    <button onClick={() => {
                        setSelectedTab(tab)
                    }} key={tabIndex} className={"tab-button" + (tab == selectedTab ? ' tab-selected' : ' ')}>
                        <h1>{tab} <span>({numOfTabs})</span></h1>
                    </button>
                )
            })}
            
        </nav>
    )
}