import * as React from "react";

import Gallery from 'react-grid-gallery';

const IMAGES =
    [
        {
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            caption: "After Rain (Jeshu John - designerspics.com)"
        },

        {
            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
            thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            //tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
            caption: "Boats (Jeshu John - designerspics.com)"
        },

        {
            src: "https://cdn.pixabay.com/photo/2015/10/12/15/41/kayak-984566_1280.jpg",
            thumbnail: "https://cdn.pixabay.com/photo/2015/10/12/15/41/kayak-984566_1280.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
        },

        {
            src: "https://cdn.pixabay.com/photo/2015/10/12/15/41/kayak-984566_1280.jpg",
            thumbnail: "https://cdn.pixabay.com/photo/2015/10/12/15/41/kayak-984566_1280.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
        },

        {
            src: "https://cdn.pixabay.com/photo/2015/10/12/15/41/kayak-984566_1280.jpg",
            thumbnail: "https://cdn.pixabay.com/photo/2015/10/12/15/41/kayak-984566_1280.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
        },

        {
            src: "https://cdn.pixabay.com/photo/2015/10/12/15/41/kayak-984566_1280.jpg",
            thumbnail: "https://cdn.pixabay.com/photo/2015/10/12/15/41/kayak-984566_1280.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
        },

        {
            src: "https://cdn.pixabay.com/photo/2015/10/12/15/41/kayak-984566_1280.jpg",
            thumbnail: "https://cdn.pixabay.com/photo/2015/10/12/15/41/kayak-984566_1280.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
        },

        {
            src: "https://cdn.pixabay.com/photo/2015/10/12/15/41/kayak-984566_1280.jpg",
            thumbnail: "https://cdn.pixabay.com/photo/2015/10/12/15/41/kayak-984566_1280.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
        },

        {
            src: "https://cdn.pixabay.com/photo/2015/10/12/15/41/kayak-984566_1280.jpg",
            thumbnail: "https://cdn.pixabay.com/photo/2015/10/12/15/41/kayak-984566_1280.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
        },

        {
            src: "https://cdn.pixabay.com/photo/2015/10/12/15/41/kayak-984566_1280.jpg",
            thumbnail: "https://cdn.pixabay.com/photo/2015/10/12/15/41/kayak-984566_1280.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
        },

        {
            src: "https://cdn.pixabay.com/photo/2015/10/12/15/41/kayak-984566_1280.jpg",
            thumbnail: "https://cdn.pixabay.com/photo/2015/10/12/15/41/kayak-984566_1280.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
        },

        {
            src: "https://cdn.pixabay.com/photo/2015/10/12/15/41/kayak-984566_1280.jpg",
            thumbnail: "https://cdn.pixabay.com/photo/2015/10/12/15/41/kayak-984566_1280.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
        }
    ]


import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css"

import {ScreenVariantProvider} from "../components/plasmic/ratisbona_coding_e_v/PlasmicGlobalVariant__Screen";
import {PlasmicHomepage} from "../components/plasmic/ratisbona_coding_e_v/PlasmicHomepage";
import TextAnimation from "../components/TextAnimation";

function Homepage() {

const bgImage = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABZJREFUeNpi2r9//38gYGAEESAAEGAAasgJOgzOKCoAAAAASUVORK5CYII=)"

    return <PlasmicHomepage root={{style: {backgroundImage: bgImage}}}
        rotatingHeadlineText={
            <TextAnimation
                wordArray={[
                    'Co-Worken    ', // the string length is important for the animation to work
                    'Kanu Fahren  ',
                    'Wissen teilen',
                    'Problemlösen ',
                ]}
            />
        }


        gallery={
            <Gallery images={IMAGES}/>
        }
    />;
}

export default Homepage;
