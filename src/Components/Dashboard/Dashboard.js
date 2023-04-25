import Demo from './../Demo/Demo'
import Sidebar from './Sidebar'

const Dashboard = () => {
    return (
        <div className="dashbboard">
            <Sidebar />
            <Demo />
        </div>
    )
}

export default Dashboard