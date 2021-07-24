import Image from "next/image";

export const Header = () => {
    return (
        <header>
            {/* Top Nav */}
            <div>
                <Image
                    src="/logo.png"
                    width={150}
                    height={40}
                />
            </div>
            {/* Bottom Nav */}
            <div></div>
        </header>
    );
};
