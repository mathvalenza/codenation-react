import React from 'react'
import { render, waitForElement } from '@testing-library/react'

import App from '../App';
import Contact from '../components/Contact';
import Contacts from '../components/Contacts';
import Filters from '../components/Filters';
import Topbar from '../components/Topbar';

import mockContactsList from './mock/contacts.json';

const mockUserContact = { ...mockContactsList[0] };

const state = {
    contacts: [...mockContactsList],
    hasSearchFilter: false,
    searchFilter: [],
    sortBy: '',
    sortedContacts: [],
};

describe('Contacts APP', () => {
    it('Should render APP', async () => {
        const renderWithState = ({ state }) =>
            render(<App />);

        const { getByTestId } = renderWithState({ state });
        const appContainer = getByTestId('app');

        expect(appContainer).toHaveClass('app');
        expect(appContainer.children.length).toBe(3);
    });

    it('Should render Contact component', () => {
        const { getByTestId } = render(<Contact data={mockUserContact} />);
        const container = getByTestId('contact');
        const name = getByTestId('contact-name');
        const phone = getByTestId('contact-phone');
        const country = getByTestId('contact-country');
        const date = getByTestId('contact-date');
        const company = getByTestId('contact-company');

        expect(container).toHaveClass('contact');
        expect(container.children.length).toBe(7);

        expect(name).toHaveTextContent(mockUserContact.name);
        expect(phone).toHaveTextContent(mockUserContact.phone);
        expect(country).toHaveTextContent(mockUserContact.country);
        expect(date).toHaveTextContent('08/04/2019');
        expect(company).toHaveTextContent(mockUserContact.company);
    });

    it('Should render Contacts component', () => {
        const { getByTestId } = render(<Contacts />);
        const container = getByTestId('contacts');

        expect(container).toHaveClass('container');
        expect(container.children.length).toBe(1);
    });

    it('Should render Filters component', () => {
        const { getByTestId } = render(<Filters />);
        const container = getByTestId('filters');

        expect(container).toHaveClass('container');
        expect(container.children.length).toBe(1);
    });

    it('Should render Topbar component', () => {
        const { getByTestId } = render(<Topbar />);
        const container = getByTestId('topbar');

        expect(container).toHaveClass('topbar');
        expect(container.children.length).toBe(1);
    });
});
