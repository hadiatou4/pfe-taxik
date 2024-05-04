'use client'
import Link from 'next/link'
import React from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import HeaderHome from '../components/HeaderHome'
import Footer from '../components/Footer'

function Acceuil() {
  
  return (
    <div>
        <HeaderHome/>
        <section class="hero">
        <div class="overlay"></div>
        <div class="infos">
            <p class="mainText">
                Votre compagnon de confiance pour tous vos déplacements
            </p>
            <button class="btn">
            <Link href="/Authentification" target='blank'> Réservez un trajet</Link>
            </button>
        </div>
    </section>
    <div class="priceInfos">
        <div class="wrapper">
            <div class="left">
                <h4>Lieu de départ <i class="fa-solid fa-chevron-down"></i></h4>
                
                <GooglePlacesAutocomplete 
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
                selectProps={{
                    
                    styles: {
                        control: (provided) => ({
                            ...provided,
                            backgroundColor:'#d3d3d3',
                            border:'none',
                            fontSize: '2rem'
                        }),
                    },
                    options: {
                        types: ['(regions)'],
                        componentRestrictions: { country: 'MAR' }, // Code ISO du pays, par exemple 'FR' pour la France
                      },
                  }}
                ></GooglePlacesAutocomplete>
            </div>
            <div class="middle">
                <h4>Lieu d'arrivée <i class="fa-solid fa-chevron-down"></i></h4>
                <GooglePlacesAutocomplete 
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
                selectProps={{
                    placeholder: 'Lieu',
                    isClearable: true,
                    className: 'w-full',
                    components: {
                      DropdownIndicator: false,
                    },
                    styles: {
                        control: (provided) => ({
                            ...provided,
                            backgroundColor:'#d3d3d3',
                            border:'none',
                            fontSize: '2rem'
                        }),
                    },
                    restrictions: { country: 'MAR' }, // Restreint aux lieux situés au Maroc
                  }}
                ></GooglePlacesAutocomplete>
            </div>
<<<<<<< HEAD
            <button class="btn bg-black text-white rounded-lg" onClick={handleChange}>Voir le prix</button>
=======
            <button class="btn bg-black text-white rounded-lg"><Link href="/Authentification" target='blank'>Voir le prix</Link></button>
>>>>>>> 6f97b8f19c7fdb2843f386e435d643e2050c65de
        </div>
    </div>

    {/* <!-- End of Hero -->

    <!-- Devenir chauffeur --> */}

    <section class="becomeDriver">
        <div class="left">
            <h2>Devenez un chauffeur</h2>
            <p>
                Rejoignez notre réseau de conducteur professionnel dès aujourd'hui
            </p>
            <button class="btn">
            <Link href="/Authentification" target='blank'>Devenir un chauffeur</Link>
            </button>
        </div>
        <div class="right">

        </div>
    </section>

    {/* <!-- End Devenir chauffeur -->

    <!-- Personnalisez votre trajet --> */}

    <section class="personnalize">
        <div class="left">
            <h2>Personnalisez votre trajet</h2>
            <p>
                Taxik vous permet de choisir le type de conducteur en fonction de vos caractéristiques personnelles ou préférence
            </p>
        </div>
        <div class="right">
            <button class="btn">
            <Link href="/Authentification" target='blank'>En savoir plus</Link>
            </button>
        </div>
    </section>


    {/* <!-- End of personnalisation -->


    <!-- Sécurité--> */}

    <section class="securite">
        <div class="left">
            <h2>Votre sécurité, notre priorité</h2>
            <p>La sécurité est notre priorité. Nous nous 
                engageons à offrir un environnement sûr pour 
                tous nos passagers et chauffeurs
            </p>
        </div>
        <div class="right"></div>
    </section>
    <Footer/>
    </div>

  )
}

export default Acceuil