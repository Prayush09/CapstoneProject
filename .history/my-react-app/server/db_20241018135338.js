import mongoose from 'mongoose'
console.log("Connected to DB")

const Schema = mongoose.Schema;

const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    //TODO - ADD ZOD TO THIS....
    userName: String,
    email: {type: String, unique: true},
    password: String,
    //preferences begin here
    country: String,
    state: String,
    city: String,
    phoneNo: Number, //for integer you use number.
    
})

const adminSchema = new Schema({
    //TODO Create an array which will get all the requests of the user for matching
    //TODO Create a listing array which contains the listing this particular admin has created.
})


const listSchema = new Schema({
    
})


const preferencesSchema = new Schema({
    _id: ObjectId,
    preferences: [{
        pref1: {type: String, required: true},
        pref2: {type: String, required: true},
        pref3: {type: String, required: true},
        pref4: {type: String, required: true},
        pref5: {type: String, required: true},
        pref6: String,
        pref7: String,
        pref8: String,
        pref9: String,
        pref10: String
    }]
})

export const userModel = mongoose.model('user', userSchema);
export const preferenceModel = mongoose.model('prefUser', preferencesSchema);

