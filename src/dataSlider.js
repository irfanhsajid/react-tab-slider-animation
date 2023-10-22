import img1 from './assets/images/img1.jpg'
import img2 from './assets/images/img2.jpg'
import img3 from './assets/images/img3.jpg'
import img4 from './assets/images/img4.jpg'
import img5 from './assets/images/img5.jpg'

const sliderDetails = [
    {
        id: 1,
        title: "তালগাছ ও রাস্তা",
        details: "A picturesque view of Nayonabhiram in Machimpara village! This picture was framed on a cold morning last year.",
        img: `${img1}`,
        backgroundImage: "linear-gradient( 67.6deg, rgba(225,242,254,1) -2.8%, rgba(193,224,250,1) 44.6%, rgba(19,116,197,1) 102.4% )",
        // Add background color for image 1
        titleColor: "black" // Add title color for image 1
    },
    {
        id: 2,
        title: "সূর্যাস্ত ও সৌন্দর্য",
        details: "Ah! The field's expanse! A view of Nayonabhiram in Machimpara village! This picture was framed on a certain morning last year.",
        img: `${img2}`,
        backgroundImage: "radial-gradient(circle 272px at 34.9% 49.3%, rgba(219,214,0,1) 0%, rgba(61,253,147,1) 100.7%)", // Add background color for image 2
        titleColor: "black" // Add title color for image 2
    },
    {
        id: 3,
        title: "ভোরের শিশির",
        details: "How enchanting is Kuasha! A view of Nayonabhiram! This picture was framed on a cold morning last year.",
        img: `${img3}`,
        backgroundImage: "radial-gradient(circle farthest-corner at 100.6% 51.9%, rgba(255,186,2,1) 0%, rgba(26,149,77,1) 90%)",
        // Add background color for image 3
        titleColor: "black" // Add title color for image 3
    },
    {
        id: 4,
        title: "শিশিরবিন্দু",
        details: "How amazing! The field's expanse! A view of Nayonabhiram in the village! This picture was framed one morning last year.",
        img: `${img4}`,
        backgroundImage: "radial-gradient(circle 401px at 50.6% -0.3%, rgba(255,255,255,0.31) 1.2%, rgba(36,212,219,1) 100.2%)", // Add background color for image 4
        titleColor: "black" // Add title color for image 4
    },
    {
        id: 5,
        title: "ঘাসক্ষেত",
        details: "The beauty of the grass field is extraordinary! Nayonabhiram view! This picture was framed on a cold morning last year.",
        img: `${img5}`,
        backgroundImage: "linear-gradient(102.1deg, rgba(37,94,23,1) 7.7%, rgba(246,253,213,1) 93.3%)",
        // Add background color for image 5
        titleColor: "black" // Add title color for image 5
    }
];

export default sliderDetails;
