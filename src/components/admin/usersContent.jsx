import React, { Component } from "react";
import _ from "lodash";
import UsersTable from "./usersTable";
import SearchBox from "./searchBox";
import Pagination from "../common/pagination";
import { paginate } from "../../utils/paginate";

class UserContent extends Component {
  state = {
    users: [
      {
        _id: 1,
        name: "Nama1",
        email: "Email1",
        password: "Password1",
        phone: "Phone1",
        cash: 0
      },
      {
        _id: 2,
        name: "Nama2",
        email: "Email2",
        password: "Password2",
        phone: "Phone2",
        cash: 0
      },
      {
        _id: 3,
        name: "Nama8",
        email: "Email8",
        password: "Password8",
        phone: "Phone8",
        cash: 10000
      },
      {
        _id: 4,
        name: "Nama4",
        email: "Email4",
        password: "Password4",
        phone: "Phone4",
        cash: 0
      },
      {
        _id: 5,
        name: "Nama5",
        email: "Email5",
        password: "Password5",
        phone: "Phone5",
        cash: 0
      },
      {
        _id: 6,
        name: "Nama6",
        email: "Email6",
        password: "Password6",
        phone: "Phone6",
        cash: 0
      },
      {
        _id: 7,
        name: "Nama7",
        email: "Email7",
        password: "Password7",
        phone: "Phone7",
        cash: 0
      }
    ],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    sortColumn: { path: "title", order: "asc" }
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      searchQuery,
      users: allUsers
    } = this.state;

    let filtered = allUsers;
    if (searchQuery)
      filtered = allUsers.filter(m =>
        m.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filtered = allUsers.filter(m => m.genre._id === selectedGenre._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    const { totalCount, data: users } = this.getPagedData();
    return (
      <div className="container">
        <SearchBox
          value={this.state.searchQuery}
          onChange={this.handleSearch}
        />
        <UsersTable
          users={users}
          sortColumn={this.state.sortColumn}
          onSort={this.handleSort}
        />
        <Pagination
          itemsCount={totalCount}
          pageSize={this.state.pageSize}
          currentPage={this.state.currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default UserContent;
