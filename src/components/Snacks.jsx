import React from "react";
import { useParams } from "react-router-dom";

const snackData = {
    soda: {
        image: "/src/assets/alexandra-nosova-lpv--JSLa58-unsplash.jpg",
        description: "Such a selection, choose from our variety of sodas!",
        credit: {
            text: "Photo by Alexandra Nosova on Unsplash",
            link: "https://unsplash.com/photos/blue-and-orange-labeled-bottles-lpv--JSLa58",
        },
    },
    chips: {
        image: "/src/assets/esperanza-doronila-L1ltnmBlA14-unsplash.jpg",
        description: "Munch Munch, choose from a variety of chips!",
        credit: {
            text: "Photo by Esperanza Doronila on Unsplash",
            link: "https://unsplash.com/photos/a-close-up-of-a-bag-of-potato-chips-L1ltnmBlA14",
        },
    },
    candy: {
        image: "/src/assets/denny-muller-mGP8gyGb8zY-unsplash.jpg",
        description: "Have a sweet tooth, choose from our variety of candy!",
        credit: {
            text: "Photo by Denny Müller on Unsplash",
            link: "https://unsplash.com/photos/orange-and-red-plastic-pack-mGP8gyGb8zY",
        }
    },
    gummies: {
        image: "/src/assets/evie-fjord-wfIaDGcvXOo-unsplash.jpg",
        description: "Chewy and delightful, explore our range of gummies!",
        credit: {
            text: "Photo by Evie Fjord on Unsplash",
            link: "https://unsplash.com/photos/orange-green-and-pink-candies-wfIaDGcvXOo",
        }
    }

};

const Snacks = () => {
    const { snackType } = useParams();
    const snack = snackData[snackType];

    return (
        <div>
            <h2>Snacks Info Page</h2>
            {/* <p>Craving something savory? Explore our selection of snacks!</p>
            {snackType && <p>You are viewing snacks of type: {snackType}</p>}
            <section>
                <img src="" alt="Snacks" />
                <a>TBD</a>
            </section> */}
            {snack ? (
                <div>
                    <p>{snack.description}</p>
                    <img src={snack.image} alt={snackType} />
                    {snack.credit && (
                        <p>
                            {snack.credit.text}{" "}
                            <a href={snack.credit.link} target="_blank" rel="noopener noreferrer">
                                (Source)
                            </a>
                        </p>
                    )}
                </div>
            ) : (
                <p>Snack not found. Please select a valid snack!</p>
            )}
        </div>
    );
};

export default Snacks;