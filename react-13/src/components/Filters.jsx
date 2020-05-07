import React from 'react';

class Filters extends React.Component {
	constructor() {
		super();

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(event) {
		this.props.onChangeSearch(event.target.value);
	}

	handleClick(value) {
		this.props.onChangeSort(value);
	}

	render() {
		return (
			<div data-testid="filters" className="container">
				<section className="filters">
					<div className="filters__search">
						<input
							type="text"
							className="filters__search__input"
							placeholder="Pesquisar"
							value={this.props.searchString}
							onChange={this.handleChange}
						/>

						<button className="filters__search__icon">
							<i className="fa fa-search"/>
						</button>
					</div>

					<button
						onClick={() => this.handleClick('name')}
						className={`filters__item ${this.props.sortBy === 'name' ? 'is-selected' : ''}`}>
						Nome <i className="fas fa-sort-down" />
					</button>

					<button
						onClick={() => this.handleClick('country')}
						className={`filters__item ${this.props.sortBy === 'country' ? 'is-selected' : ''}`}>
						País <i className="fas fa-sort-down" />
					</button>

					<button
						onClick={() => this.handleClick('company')}
						className={`filters__item ${this.props.sortBy === 'company' ? 'is-selected' : ''}`}>
						Empresa <i className="fas fa-sort-down" />
					</button>

					<button
						onClick={() => this.handleClick('department')}
						className={`filters__item ${this.props.sortBy === 'department' ? 'is-selected' : ''}`}>
						Departamento <i className="fas fa-sort-down" />
					</button>

					<button
						onClick={() => this.handleClick('admissionDate')}
						className={`filters__item ${this.props.sortBy === 'admissionDate' ? 'is-selected' : ''}`}>
						Data de admissão <i className="fas fa-sort-down" />
					</button>
				</section>
			</div>
		);
	}
}

export default Filters;
