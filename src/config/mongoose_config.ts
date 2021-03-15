import mongoose from "mongoose";
import dotent from "dotenv";

dotent.config();

const {USERDB, PASSDB, DBNAME} = process.env


mongoose.connect(
    `mongodb+srv://${USERDB}:${PASSDB}@cluster0.c0pmn.mongodb.net/${DBNAME}?retryWrites=true&w=majority`, 
    { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.set('useFindAndModify', false);


export default mongoose;