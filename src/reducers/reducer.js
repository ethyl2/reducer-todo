

export const initialState = [{
    item: 'Improve my bow and arrow skills',
    completed: false,
    id: 3892987589
    },
    {
    item: 'Decide between Petra and Gale',
    completed: false,
    id: 87893487489    
    }
    ,
    {
    item: 'Be nicer to other people',
    completed: false,
    id: 789095837849
    },
    {
    item: 'Stay alive',
    completed: false,
    id: 12345678
    },
    {
    item: 'Sleep in a tree',
    completed: false,
    id: 789087358
    },
    {
    item: 'Win the Hunger Games',
    completed: false,
    id: 789384738988
    }
]


export const reducer = (state, action)=> {
    switch(action.type) {
        case 'ADD':
            return [...state, {item: action.payload, completed: false, id: Date.now()}];
        case 'TOGGLE':
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {...todo, completed: !(todo.completed)};
                } else {
                    return todo;
                }
            });
        case 'CLEAR':
            return state.filter(todo => !todo.completed);
        default:
            return state;
    }
}