type FWButtonProps = {
    text: string
}

const FWButton = ({ text }: FWButtonProps) => {
    return (
        <button className=" py-2 px-5 md:py-1 md:px-3 bg-primary rounded-3xl text-white text-sm font-bold capitalize">
            {text}
        </button>
    );
}

export default FWButton;