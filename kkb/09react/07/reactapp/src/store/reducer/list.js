export default function list (list={
    loading:true,
    data:[]
},action){
    switch(action.type){
        case "LIST_LOADOVER":
            return {
                loading:false,
                data:action.data
            }
    }
    return list
}