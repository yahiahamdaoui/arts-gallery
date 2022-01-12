export default (paintings = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...paintings, action.payload];
        case 'UPDATE':
            return paintings.map((painting) => (painting._id === action.payload._id ? action.payload : painting));
        case 'DELETE':
            return paintings.filter((painting) => painting._id !== action.payload);
        default:
            return paintings;
    }
}