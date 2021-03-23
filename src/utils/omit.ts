export const Omit = (obj: any, key: string) => {
  let newObj = {}
  Object.keys(obj).forEach((item) => {
    if(item!==key){
        newObj = {...newObj,[item]:obj[item]}
    }
  });
  return newObj
};
