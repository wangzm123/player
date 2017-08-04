import request from './request' 

export function getClass(){
    return request('/api/recipe/class')
}
export function getList(param){
    return request ('/api/recipe/byclass',{
        params:{
            classid:param.classid
        }
    })
   
}