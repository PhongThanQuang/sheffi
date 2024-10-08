import aixos from "axios";

const Basic_URL = 'http://localhost:8080/api/employee';

export const listAccount = () => {
    return aixos.get(Basic_URL);
}