import {List, Map} from 'immutable';
import {expect} from 'chai';

describe('immutability', () => {
    describe('a number', () => {
        function increment(currentState) {
            return currentState + 1;
        }
        it('is immutable', () => {
            let state = 42;
            let nextState = increment(state);
            expect(nextState).to.equal(43);
            expect(state).to.equal(42);
        })
    })

    describe('a tree', () => {
        function addMovie(currentState, movie) {
            // return currentState.set(
            //     'movies',
            //     currentState.get('movies').push(movie)
            // );
            return currentState.update('movies', movies => movies.push(movie));
                // update is helper function?
                // fat arrow ?
        };

        it('is immutable', () => {
            let state = Map({
                movies: List.of('Trainspotting', '28 Days Later')
            });
            let nextState = addMovie(state, 'Sunshine');

            expect(nextState).to.equal(Map({
                movies: List.of(
                    'Trainspotting',
                    '28 Days Later',
                    'Sunshine'
                )
            }));

            expect(state).to.equal(Map({
                movies: List.of(
                    'Trainspotting', '28 Days Later'
                )
            }));
        });
    });
});