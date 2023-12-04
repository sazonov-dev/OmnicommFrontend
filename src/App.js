const {ApiMixinFactory} = require('./mixins/apiMixin');
const {tableMixin} = require('./mixins/tableMixin')
const {paginationMixin} = require('./mixins/paginationMixin')
const React = require('react')
const createReactClass = require('create-react-class')
const {Pagination} = require('./Pagination')
const $ = require('jquery')

const apiMixin =  ApiMixinFactory.prototype.getApiMixin($.ajax)

const App = createReactClass({
    mixins: [
        tableMixin,
        paginationMixin,
        apiMixin
    ],
    render: function () {
        const self = this
        const start = (this.state.itemsPerPage * (this.state.activePage - 1))
        const end = start * this.state.itemsPerPage
        const universities = this.state.universities.slice(start, start * this.state.itemsPerPage)
        const table = self.renderTable(universities)

            return (<div>
                <label htmlFor="#search">Поиск</label>
                <br/>
                <input id="search" onChange={self.handleSearchChange} type="string" value={this.state.value}/>
                <div>
                    {table}
                </div>
                <Pagination itemsPerPage={10}
                            totalItems={this.state.universities.length}
                            onPageChange={self.handleClick}/>
                <div>{this.state.color}</div>
            </div>)
        }
})

export {App}
