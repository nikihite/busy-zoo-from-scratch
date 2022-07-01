import React from 'react';
import MaterialTable from 'material-table';
import { customers } from './data.js';

export default function MyTable() {
  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        columns={
          [
            { title: 'ID', field: 'id' },
            { title: 'City', field: 'city' },
            { title: 'Country', field: 'country' },
            { title: 'Email', field: 'email' },
            { title: 'Gender', field: 'gender' },
            { title: 'Computer Address Host', field: 'ip_address' }
          ]
        }
        data={customers}
        title="Customer Info"
        options={{  
          headerStyle: { 
            background: 'darkseagreen',
            border: 'solid 3px darkolivegreen'
          },
          rowStyle: { 
            background: 'tan',
          }
        }
        }
      />      
    </div>
  );
}