import React from 'react'
import SearchForm from '../SearchingForm';
import CocktailList from '../CocktailList';
export default function Home() {
    return (
        <div>
            <SearchForm />
            <CocktailList />
        </div>
    )
}
