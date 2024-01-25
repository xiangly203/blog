import { Noto_Serif_SC as FontSerif } from 'next/font/google'

const fontSerif = FontSerif({ weight: "900", subsets: ["latin"] });
export default function XYi(){
    return (
        <div className={fontSerif.className}>
            XYi
        </div>
    );
}