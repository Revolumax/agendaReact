import axios from "axios";

const Alldates  = async (state) => {

    const peticion = await axios.get('http://www.raydelto.org/agenda.php')
    state(peticion.data)
}

export {

    Alldates
}