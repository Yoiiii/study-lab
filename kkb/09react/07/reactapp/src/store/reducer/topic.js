export default function topic (topic={
  loading:true,
  data:{}
},action){
  switch(action.type){
      case "TOPIC_LOAD":
          return{
              ...topic,
              loading:true,
          }
      case "TOPIC_LOADOVER":
          return {
              ...topic,
              loading:false,
              data:action.data
          }
  }
  return topic
}