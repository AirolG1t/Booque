export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `items-center px-4 py-2 bg-[#44cde4] border border-transparent rounded-md block w-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-[#1eb6cf] focus:bg-gray-700 active:bg-[#1eb6cf] focus:outline-none focus:ring-2 focus:ring-[#1EB6CF] focus:ring-offset-2 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
