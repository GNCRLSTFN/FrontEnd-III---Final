export const reducer = (state, action) =>{
    switch(action.type){
        case "GET_DENTISTS":
            return {...state, dentists: action.payload}
        case "ADD_FAV":
            return {...state, favs: [...state.favs, action.payload]}
        case "TOGGLE_THEME":
            return {...state, theme: state.theme === "dark" ? "light" : "dark"}
        default:
            return state
    }
}