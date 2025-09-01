import { Check } from "lucide-react"; // icon library
import adviceOptions from "../data/AdviceOptions";

export default function AdviceComparison() {
    return (
        <section className="py-[70px]" >
            <div className="container">
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left">
                        <thead>
                            <tr>
                                <th className="p-4"></th>
                                {adviceOptions.headers.map((header, i) => (
                                    <th key={i} className="p-4 font-semibold border-b">{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {adviceOptions.rows.map((row, i) => (
                                // <tr key={i} className={i % 2 === 1 ? "bg-gray-100" : ""}>
                                <tr key={i} className="odd:bg-white even:bg-gray-100">
                                    <td className="p-4 font-medium border-b">{row.label}</td>
                                    {
                                        row.values.map((val, j) => (
                                            <td key={j} className="p-4 text-center border-b">
                                                {val === true ? <Check className="inline w-5 h-5" /> : val === false ? "" : val}
                                            </td>
                                        ))
                                    }
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div >
        </section>
    );
}
