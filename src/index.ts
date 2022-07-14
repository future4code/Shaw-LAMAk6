import CreateBandBusiness from "./Business/CreateBandBusiness";
import { CreateBandController } from "./Controller/CreateBandController";
import BandCreatedData from "./Data/userData";
import app from "./Services/app";
import { IdGenerate } from "./Services/idGenerate";

const bandController = new CreateBandController(
    new CreateBandBusiness(
        new BandCreatedData(),
        new IdGenerate(),
    )
)


app.post('/band', bandController.createBand )