type FWButtonProps = {
    text: string,
    onClick: () => void
}

const FWButton = ({ text, onClick }: FWButtonProps) => {
    return (
        <button className=" py-2 px-5 md:py-1 md:px-3 bg-primary rounded-3xl text-white text-sm font-bold capitalize" onClick={onClick}>
            {text}
        </button>
    );
}

export default FWButton;