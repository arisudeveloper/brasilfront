import React from 'react';
import Navbar from '../../components/NavBar/NavBar';
import Languages from '../../components/Languages/Languages';
import Footer from '../../components/Footer/Footer';

function Admin() {
  const [users, setUsers] = React.useState([]);
  const [error, setError] = React.useState('');
  React.useEffect(() => {
    fetch('https://backend-production-fb47e.up.railway.app/api/v1/admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data.message)) {
          setUsers(data.message);
          setError('Usuário aprovado');
        } else {
          setError('Usuário não autorizado');
        }
      });
  }, []);

  return (
    <>
      <Languages></Languages>
      <Navbar></Navbar>
      <h1>Admin - Painel Administrativo</h1>
      <p>Status: {error}</p>

      <table
        border="1"
        style={{
          borderCollapse: 'collapse',
          width: '100%',
          marginBottom: '25rem',
        }}
      >
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Email</th>
            <th>Usuário</th>
            <th>Empresa</th>
            <th>País</th>
            <th>Telefone</th>
            <th>WhatsApp</th>
            <th>MICE</th>
            <th>FIT</th>
            <th>Groups</th>
            <th>Guaranteed</th>
            <th>Leisure</th>
            <th>Status</th>
            <th>Ação</th>
          </tr>
        </thead>

        <tbody>
          {Array.isArray(users)
            ? users.map((user, index) => {
                if (user !== undefined) {
                  return (
                    <tr key={index}>
                      <td>{user.firstname}</td>
                      <td>{user.lastname}</td>
                      <td>{user.email}</td>
                      <td>{user.username}</td>
                      <td>{user.company}</td>
                      <td>{user.country}</td>
                      <td>{user.phone}</td>
                      <td>{user.whatsapp}</td>
                      <td>{String(user.mice)}</td>
                      <td>{String(user.fit)}</td>
                      <td>{String(user.groups)}</td>
                      <td>{String(user.guaranteed)}</td>
                      <td>{String(user.leisure)}</td>
                      <td>{user.status}</td>
                      <td>
                        {user.status === 'approved' ? (
                          <span>Aprovado</span>
                        ) : (
                          <button
                            onClick={() => {
                              fetch(
                                `http://localhost:3000/api/v1/admin/user/${user.id}`,
                                {
                                  method: 'PATCH',
                                  headers: {
                                    'Content-Type': 'application/json',
                                  },
                                  credentials: 'include',
                                },
                              );
                            }}
                          >
                            Aprovar
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                }
                return null;
              })
            : null}
        </tbody>
      </table>
      <Footer></Footer>
    </>
  );
}
export default Admin;
