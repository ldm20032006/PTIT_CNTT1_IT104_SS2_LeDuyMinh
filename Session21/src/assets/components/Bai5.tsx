export default function Bai5() {
    return (
        <>
            <div className="bg-[#d7f2ff] w-[400px] h-[300px] p-[20px] rounded-sm">
                <div className="relative bg-[#b7e8fd] w-full h-full p-2">
                    <p className="text-blue-900 font-medium">Relative parent</p>
                    <button className="absolute bottom-0 left-0 bg-[#0ca5e9] rounded-md p-[10px] text-white">
                        Submit
                    </button>
                </div>
            </div>
        </>
    )
}
