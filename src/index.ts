
import {app} from "./Services/app";

import { UserController } from "./Controller/UserController";
import { CreateBandController } from "./Controller/CreateBandController";
import { IdGenerate } from "./Services/idGenerate";
import CreateBandBusiness from "./Business/CreateBandBusiness";
import BandCreatedData from "./Data/BandData";

import { AddShowController } from "./Controller/AddShowController";


const bandController = new CreateBandController(
    new CreateBandBusiness(
        new BandCreatedData(),
        new IdGenerate(),
    )
)


const userController = new UserController()


const detailsBandController = new DetailsBandController


const addShow = new AddShowController()


app.post("/signup", userController.signup)

app.post("/login", userController.login)

app.post('/band', bandController.createBand )


app.get("/details",detailsBandController.getBand )
app.post("/addShow/byhour", addShow.addShow)

