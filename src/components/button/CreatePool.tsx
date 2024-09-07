import Link from "next/link";

const CreatePoolButton = () => {
    return (
        <div className="flex justify-center">
            <Link
                href="/app/pool/create"
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-800 hover:from-green-500 hover:to-green-700 text-white font-semibold text-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
            >
                Create a Pool
            </Link>
        </div>
    );
};

export default CreatePoolButton;
