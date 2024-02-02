import { createContext, useContext, useState } from "react";

export const StateContext = createContext();

export const ContextProvider = ({ children }) => {

    const [fruit, setFruit] = useState({ fruits: [], packbag: false });

    const [vegie, setVegies] = useState({ vegies: [], packbag: false });


    const addFPack = () => {
        //lets get everything first and append
        console.log('arrived f');
        setFruit({ ...fruit, packbag: !fruit.packbag }); 
      
    }

    const addVPack = () => {
        //lets get everything first and append
        console.log('arrived V');
        setVegies({ ...vegie, packbag: !vegie.packbag });
    }

    //Gonna take in a fruit
    const addFruits = (item) => {
        //initialize a new fruit
        let newFruit;
        if (!fruit.fruits.includes(item)) {
            //all fruits plus the new fruit
            newFruit = [...fruit.fruits, item];
        } else {
            //remove the fruit selected by filtering it out
            newFruit = fruit.fruits.filter(currItem => currItem !== item);
        }
        //all fruits
        setFruit({ ...fruit, fruits: newFruit })

    }

    //Gonna take in a fruit
    const addVegies = (item) => {
        //initialize a new fruit
        let newVegie;
        if (!vegie.vegies.includes(item)) {
            //all fruits plus the new fruit
            newVegie = [...vegie.vegies, item];
        } else {
            //remove the fruit selected by filtering it out
            newVegie = vegie.vegies.filter(currItem => currItem !== item);
        }
        //all fruits
        setVegies({ ...vegie, vegies: newVegie })

    }

    return (
        <StateContext.Provider value={{
            fruit,
            vegie,
            addFruits,
            addVegies,
            addFPack,
            addVPack,
        }}>
            {children}
        </StateContext.Provider>
    )

}

export const useStateContext = () => useContext(StateContext);