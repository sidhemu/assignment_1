const labelList = (state = [], action) => {
    switch (action.type) {
        case 'ADD_LABEL':
            return [
                ...state,
                {
                    id: action.id,
                    text: '',
                    checked: false
                }
            ]
        case 'TOGGLE_LABEL':
            return state.map(label =>
                (label.id === action.id)
                    ? { ...label, checked: !label.checked }
                    : label
            )
        case 'REMOVE_LABEL':
            let array = [...state];
            console.log(action.id);
            
            array.splice(action.id, 1);
            state = [];
            state = [...array];            
            return state;            
            // return state.filter(label => label.id !== action.id);
        
        case 'ADD_TEXT':
        console.log(action);            
            let arr = [...state];
            arr[action.id].text = action.text;
            
            return arr;
        default:
            return state
    }
}

export default labelList;