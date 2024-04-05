export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-gray-300 text-[#1EB6CF] shadow-sm focus:ring-[#1EB6CF] ' +
                className
            }
        />
    );
}
