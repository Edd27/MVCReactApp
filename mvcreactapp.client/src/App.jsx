import { useEffect, useState } from 'react';

function App() {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchEmployees = async () => {
            setLoading(true);
            try {
                const res = await fetch("/api/Employee");

                if (!res.ok) {
                    throw new Error("Error was ocurred");
                }

                const data = await res.json();

                setEmployees(data);
            } catch (e) {
                setError(true);
            }

            setLoading(false);

        }

        fetchEmployees();
    }, []);

    if (error) {
        return (
            <h2>Error was ocurred</h2>
        )
    }

    return (
        <main className="container-fluid">
            <h2>Employees list</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                        </tr >
                    </thead >
                    <tbody>
                        {employees.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.address}</td>
                                <td>{employee.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table >
            )}
        </main>
    )
}

export default App;