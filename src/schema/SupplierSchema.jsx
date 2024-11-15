import * as Yup from "yup";

export const supplierSchema = Yup.object({
    userName: Yup.string().min(2).max(25).required("Please enter your user name"),
    companyName: Yup.string().min(5).max(30).required("Please enter company name"),
    EIN_No: Yup.string().min(2).max(20).required("Please enter EIN number"),
    phoneNo : Yup.string().min(2).max(15).required("Please enter phone number"),
    address : Yup.string().min(2).max(300).required("Please enter your address"),
    country_list : Yup.string().min(2).max(20).required("Please select a country name"),
    state_list: Yup.string().min(2).max(20).required("Please select a state name"),
    zipCode: Yup.string().min(2).max(20).required("Please enter valid zip code"),
    paymentType: Yup.string().min(2).max(20).required("Please select a payment method"),
    email: Yup.string().email().required("Please enter your email"),
})