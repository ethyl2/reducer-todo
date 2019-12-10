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
    item: 'Win the Hunger Games',
    completed: true,
    id: 789384738988
    }
]


export const reducer = (state, action)=> {
    switch(action.type) {
        default:
            return state;
    }
}