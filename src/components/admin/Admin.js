import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
  const [activeTab, setActiveTab] = useState('users')
  const [users, setUsers] = useState([])
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login')
      return
    }
    
    fetchData()
  }, [activeTab])

  const fetchData = async () => {
    setLoading(true)
    try {
      const token = localStorage.getItem('token')
      const config = { headers: { Authorization: `Bearer ${token}` } }
      
      if (activeTab === 'users') {
        const res = await axios.get('http://localhost:8000/admin/users', config)
        setUsers(res.data)
      } else {
        const res = await axios.get('http://localhost:8000/admin/orders', config)
        setOrders(res.data)
      }
    } catch (err) {
      console.error('Error fetching data:', err)
      alert('Failed to fetch data')
    } finally {
      setLoading(false)
    }
  }

  const handleOrderStatus = async (orderId, status) => {
    try {
      const token = localStorage.getItem('token')
      await axios.put(
        `http://localhost:8000/admin/orders/${orderId}`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      fetchData()
    } catch (err) {
      console.error('Error updating status:', err)
      alert('Failed to update status')
    }
  }

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <div className="admin-tabs">
          <button 
            className={activeTab === 'users' ? 'active' : ''}
            onClick={() => setActiveTab('users')}
          >
            User Management
          </button>
          <button 
            className={activeTab === 'orders' ? 'active' : ''}
            onClick={() => setActiveTab('orders')}
          >
            Order Approvals
          </button>
        </div>
      </div>

      {loading ? (
        <div className="loading">Loading...</div>
      ) : activeTab === 'users' ? (
        <div className="user-management">
          <h2>Registered Users</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Joined Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                  <td>{user.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="order-approval">
          <h2>Pending Orders</h2>
          <div className="orders-list">
            {orders.filter(o => o.status === 'pending').map(order => (
              <div key={order._id} className="order-card">
                <div className="order-header">
                  <span>Order #{order._id}</span>
                  <span>{new Date(order.createdAt).toLocaleString()}</span>
                </div>
                <div className="order-user">
                  <strong>User:</strong> {order.user?.name} ({order.user?.email})
                </div>
                <div className="order-items">
                  <strong>Medicines:</strong>
                  <ul>
                    {order.items.map((item, i) => (
                      <li key={i}>{item.name} (x{item.quantity}) - ₹{item.price * item.quantity}</li>
                    ))}
                  </ul>
                </div>
                {order.prescription && (
                  <div className="order-prescription">
                    <strong>Prescription:</strong>
                    <img 
                      src={`http://localhost:8000/uploads/${order.prescription}`} 
                      alt="Prescription" 
                      className="prescription-image"
                    />
                  </div>
                )}
                <div className="order-actions">
                  <button 
                    className="approve-btn"
                    onClick={() => handleOrderStatus(order._id, 'approved')}
                  >
                    Approve
                  </button>
                  <button 
                    className="reject-btn"
                    onClick={() => handleOrderStatus(order._id, 'rejected')}
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Admin