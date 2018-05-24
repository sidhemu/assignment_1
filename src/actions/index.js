let nextLabelId = 0


export const addLabel = () => ({
    type: 'ADD_LABEL',
    text: '',
    id: nextLabelId++
});

export const addText = (text, id) => ({
    type: 'ADD_TEXT',
    text,
    id
})


// export const toggleLabel = id => ({
//     type: 'TOGGLE_LABEL',
//     id
// });


export const removeLabel = (id) => ({
    type: 'REMOVE_LABEL',
    id
});


