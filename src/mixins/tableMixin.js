const React = require('react')

const tableMixin = {
    setTable(res) {
      this.setState({universities: res, totalItems: res.length, itemsPerPage: 10, activePage: 1})
    },
    handleClick(page) {
      this.setState({
          activePage: page
      })
    },
    renderTable(rows = []) {
        if (!this.state.universities.length) {
            return null;
        }

        return (
            <table>
                <thead>
                <tr>
                    <th>University name</th>
                    <th>Country code</th>
                    <th>Domains</th>
                </tr>
                </thead>
                <tbody>
                {rows.map(u => (
                    <tr key={u.name}>
                        <td>{u.name}</td>
                        <td>{u.alpha_two_code}</td>
                        <td>
                            {u.domains.map(d => (
                                <a key={d} href={`https://${d}`} target="_blank">
                                    {d}
                                </a>
                            ))}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }
}

module.exports = {tableMixin};
