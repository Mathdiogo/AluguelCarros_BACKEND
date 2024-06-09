import { DeleteCarController } from "./Controller/DeleteCarController";
import { GetListCarsController } from "./Controller/GetListCarsController";
import { PatchCarRentedController } from "./Controller/PatchCarRentedController";
import { PostCreateCarController } from "./Controller/PostCreateCarController";
import { DeleteCarService } from "./Services/DeleteCarService";
import { GetListService } from "./Services/GetListService";
import { PatchCarRentedService } from "./Services/PatchCarRentedService";
import { PostCreateCarService } from "./Services/PostCreateCarService";
import { DeleteCarTransformer } from "./Transformer/DeleteCarTransformer";
import { GetListTransformer } from "./Transformer/GetListTransformer";
import { PatchCarRentedTransformer } from "./Transformer/PatchCarRentedTransformer";
import { PostCreateCarTransformer } from "./Transformer/PostCreateCarTransformer";


const getListCarsService = new GetListService()
const getListCarsTransformer = new GetListTransformer()

const updateRentedCarService = new PatchCarRentedService()
const updateRentedCarTransformer = new PatchCarRentedTransformer()


const deleteCarService = new DeleteCarService()
const deleteCarTransformer = new DeleteCarTransformer()

const postCreateCarService = new PostCreateCarService()
const postCrateCarTransformer = new PostCreateCarTransformer()

export const getListCarsController = new GetListCarsController(getListCarsTransformer, getListCarsService)

export const updateRentedCarController = new PatchCarRentedController(updateRentedCarTransformer, updateRentedCarService)

export const deleteCarController = new DeleteCarController(deleteCarTransformer, deleteCarService)

export const postCreateCarController = new PostCreateCarController(postCrateCarTransformer, postCreateCarService )