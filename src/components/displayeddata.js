import { StudentData, employees, tasks, ProductData, users, movies } from "../lib/data";
function DisplayedData() {
    return (
        <>
            <h2>NAME OF STUDENTS</h2>
            <ul>
                {StudentData.map((data) => (
                    <li key={data.id}>
                        {data.name}
                    </li>
                ))}
            </ul>
            <h2>STUDENTS' INFORMATION</h2>
            <table border="1" style={{ borderCollapse: "collapse", width: "100%", textAlign: "center" }}>
                <thead>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Grade</th>
                </thead>
                <tbody>
                    {StudentData.map((data) => (
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.age}</td>
                            <td>{data.grade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>


            <h2>NAME OF PRODUCTS</h2>
            <ol className="task3">
                {ProductData.map((products) => (
                    <li key={products.id}>
                        {products.name}
                    </li>
                ))}
            </ol>
            <h2>PRODUCTS' INFORMATION</h2>
            <table border="1" style={{ borderCollapse: "collapse", width: "100%", textAlign: "center" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>category</th>
                    </tr>
                </thead>
                <tbody>
                    {ProductData.map((products) => (
                        <tr key={products.id}>
                            <td>{products.name}</td>
                            <td>{products.price}</td>
                            <td>{products.category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>


            <h2>NAME OF GROCERIES</h2>
            <ul className="list3">
                {tasks.map((task) => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
            <h2>GROCERIES DATA</h2>
            <table border="1" style={{ borderCollapse: "collapse", width: "100%", textAlign: "center" }}>
                <thead>
                    <tr className="status">
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id}>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>



            <h2>NAME OF EMPLOYEES</h2>
            <ul>
                {employees.map((employee) => (
                    <li key={employee.id}>
                        {employee.firstName} {employee.lastName}
                    </li>
                ))}
            </ul>
            <h2>EMPLOYEES' DATA</h2>
            <table border="1" style={{ borderCollapse: "collapse", width: "100%", textAlign: "center" }}>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{`${employee.firstName} ${employee.lastName}`}</td>
                            <td>{employee.email}</td>
                            <td>{employee.position}</td>
                        </tr>
                    ))}
                </tbody>
            </table>


            <h2>Usernames</h2>
            <ol>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.username}
                    </li>
                ))}
            </ol>
            <h2>User Details</h2>
            <table border="1" style={{ borderCollapse: "collapse", width: "100%", textAlign: "center" }}>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>


            <h2>MOVIE LISTS</h2>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        {movie.title}
                    </li>
                ))}
            </ul>
            <h2>MOVIE DESCRIPTIONS</h2>
            <table border="1" style={{ borderCollapse: "collapse", width: "100%", textAlign: "center" }}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Release Year</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie) => (
                        <tr key={movie.id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre}</td>
                            <td>{movie.releaseYear}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default DisplayedData;
