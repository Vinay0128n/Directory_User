import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import UserList from './components/UserList';
import AddUserForm from './components/AddUserForm';
import UserDetails from './components/UserDetails';
import EditUser from './components/EditUser';

function App() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [showAddForm, setShowAddForm] = useState(false);
  const navigate = useNavigate();

  const handleUserAdded = () => {
    setRefreshKey(prevKey => prevKey + 1);
    setShowAddForm(false);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">User Directory</h1>
        <Routes>
          <Route path="/" element={
            showAddForm ? (
              <AddUserForm onUserAdded={handleUserAdded} onCancel={() => setShowAddForm(false)} />
            ) : (
              <UserList key={refreshKey} onAddNewUser={() => setShowAddForm(true)} />
            )
          } />
          <Route path="/user/:id" element={<UserDetails />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
