export function Tabs(props) {
    let dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = new Date().getDay()
    const { todos, selectedTab, setSelectedTab } = props
    const tabs = ["All", "Open", "Daily", "Completed"]
    return (
        <nav>
            {tabs.map((tab, tabIndex) => {
                const numOfTabs = tab === "All" ?
                    todos.length :
                    tab === "Open" ?
                        todos.filter(val => !val.complete).length :
                    tab === "Daily" ? 
                        todos.filter(val => !val.complete & val.taskRecurs === dayName[day] || !val.complete & val.taskRecurs === "Daily").length :
                        todos.filter(val => val.complete).length

                return (
                    <button onClick={() => {
                        setSelectedTab(tab)
                    }} key={tabIndex} className={"tab-button" + (tab == selectedTab ? " tab-selected" : " ")}>
                        <h1>{tab} <span>({numOfTabs})</span></h1>
                    </button>
                )
            })}
            
        </nav>
    )
}