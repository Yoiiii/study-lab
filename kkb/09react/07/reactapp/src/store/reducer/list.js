export default function list (list={
    loading:true,
    limit:10,
    data:[]
},action){
    switch(action.type){
        case "LIST_LOAD":
            return{
                ...list,
                loading:true,
            }
        case "LIST_LOADOVER":
            return {
                ...list,
                loading:false,
                data:action.data
            }
        case "LIST_EDITLIMIT":
            return{
                ...list,
                limit:action.limit
            }
    }
    return list
}