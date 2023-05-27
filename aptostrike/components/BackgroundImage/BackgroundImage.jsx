import React from "react";
import Image from "next/legacy/image";
import BgImg from "../../public/img/bg.jpg";

const BackgroundImage = () => {
    return (
        <div className="bg-image-wrapper">
            <Image
                src={BgImg}
                layout="fill"
                objectFit="cover"
                priority

            />
        </div>
    );
};

export default BackgroundImage;
