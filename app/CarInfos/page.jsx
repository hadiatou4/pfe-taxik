"use client"
import React, { useState } from 'react';
import { db } from '../firebase.config';
import { doc, updateDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

function CarInfos() {
    const [formData, setFormData] = useState({
        type: "taxiRouge",
        matricule: "",
        numeroPermis: ""
    });
    const router = useRouter()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const driverId = localStorage.getItem("userId");

        const conducteursRef = doc(db, 'Conducteurs', driverId);
      
        const infos = {
            carInfos : {
                type: formData.type,
        matricule: formData.matricule,
        numeroPermis: formData.numeroPermis
            }
        }

        try {
            if (conducteursRef) {
               const updatedInfo = await updateDoc(conducteursRef, infos)
                router.push("/Driver")
                console.log("Car information added successfully!");
            } else {
                console.log("No such document!");
            }
        } catch (error) {
            console.error("Error updating document: ", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full mx-auto bg-black p-8 mt-8 rounded shadow-lg">
            <h2 className="text-2xl text-white font-semibold mb-4">Entrez les informations de votre véhicule</h2>
            <select name="type" id="type" value={formData.type} onChange={handleChange}>
                <option value="taxiRouge">Taxi Rouge</option>
                <option value="voitureConfortable">Voiture confortable</option>
            </select>
            <input name='matricule' type="text" required value={formData.matricule} onChange={handleChange} placeholder="Matricule" className="block w-full px-4 py-2 mb-2 border rounded-md focus:outline-none focus:border-blue-400" />
            <input name='numeroPermis' type="text" required value={formData.numeroPermis} onChange={handleChange} placeholder="Numero de permis" className="block w-full px-4 py-2 mb-2 border rounded-md focus:outline-none focus:border-blue-400" />
            <button type="submit" className="w-full bg-gray-200 text-gray-500 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-200">Terminer</button>
        </form>
    );
}

export default CarInfos;
