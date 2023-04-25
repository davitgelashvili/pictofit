const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__head">
                <button className="sidebar__head--btn">
                    ქალი
                </button>
                <button className="sidebar__head--btn">
                    კაცი
                </button>
            </div>
            <p>ზომა</p>
            <select>
                <option>აირჩიე ზომა</option>
                <option>პატარა</option>
                <option>საშუალო</option>
                <option>დიდი</option>
            </select>
            <ul>
                <li>
                    თავი
                    <ul>
                        <li>
                            კეპი
                        </li>
                        <li>
                            პანამა ქუდი
                        </li>
                    </ul>
                </li>
                <li>
                    ტანი
                    <ul>
                        <li>
                            მაისური
                        </li>
                        <li>
                            პერანგი
                        </li>
                        <li>
                            ჰუდი
                        </li>
                        <li>
                            პიჯაკი
                        </li>
                    </ul>
                </li>
                <li>
                    ქვედაბოლო
                    <ul>
                        <li>
                            კაბა
                        </li>
                    </ul>
                </li>
                <li>
                    შარვალი
                    <ul>
                        <li>
                            კლასიკური
                        </li>
                        <li>
                            შორტი
                        </li>
                        <li>
                            ჯინსი
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar