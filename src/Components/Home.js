import EmployeeListItem from "./EmployeeListItem"

function Home(){
return(
    <div id="Body">
        <h1 class="Left" id="lh1">Employee Directory</h1>
        <form id="search">Search Bar</form>
        <aside class="Left">
            <EmployeeListItem class="Left" />
        </aside>
    </div>
)
}

export default Home