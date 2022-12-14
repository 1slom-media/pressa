import { CategoriesSchema, Event, LoginSchema, SubCategories} from "../lib/validation.js"
export default (req,res,next)=>{
    try {
        if(req.url=="/login"){
            let{error}=LoginSchema.validate(req.body)
            if(error) throw error
        }
        if(req.url=="/categories"){
            let{error}=CategoriesSchema.validate(req.body)
            if(error) throw error
        }
        if(req.url=="/subcategories"){
            let{error}=SubCategories.validate(req.body)
            if(error) throw error
        }
        if(req.url=="/events"){
            let{error}=Event.validate(req.body)
            if(error) throw error
        }
        return next()
    } catch (error) {
        return next(new Error(401,error.message))
    }
}