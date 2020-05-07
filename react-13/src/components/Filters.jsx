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
		this.props.onChangeOrder(value);
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
						className="filters__item is-selected">
						Nome <i className="fas fa-sort-down" />
					</button>

					<button
						onClick={() => this.handleClick('country')}
						className="filters__item">
						País <i className="fas fa-sort-down" />
					</button>

					<button
						onClick={() => this.handleClick('company')}
						className="filters__item">
						Empresa <i className="fas fa-sort-down" />
					</button>

					<button
						onClick={() => this.handleClick('department')}
						className="filters__item">
						Departamento <i className="fas fa-sort-down" />
					</button>

					<button
						onClick={() => this.handleClick('admissionDate')}
						className="filters__item">
						Data de admissão <i className="fas fa-sort-down" />
					</button>
				</section>
			</div>
		);
	}
}

export default Filters;
