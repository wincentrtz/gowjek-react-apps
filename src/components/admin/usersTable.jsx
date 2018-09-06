import React, { Component } from "react";
import Table from "../common/table";

class UsersTable extends Component {
  columns = [
    { path: "_id", label: "Id" },
    { path: "name", label: "Name" },
    { path: "email", label: "Email" },
    { path: "password", label: "Password" },
    { path: "phone", label: "Phone" },
    { path: "cash", label: "GoPay" }
  ];
  render() {
    const { users, onSort, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        data={users}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default UsersTable;
