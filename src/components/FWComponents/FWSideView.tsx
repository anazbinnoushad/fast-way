import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

type FWSideViewProps = {
    show: boolean,
    onClose: () => void,
    transparent?: boolean,
    children: React.ReactNode;
}

const FWSideView = ({ show, onClose, transparent = false, children }: FWSideViewProps) => {
    return (
        <Transition appear show={show} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className={`fixed inset-0 ${!transparent && "bg-black bg-opacity-25"}`} />
                </Transition.Child>

                <div className="fixed inset-0 scrollbar-hide">
                    <div className="flex min-h-full justify-end scrollbar-hide">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-90 translate-x-1/2"
                            enterTo="opacity-100 translate-x-0"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-x-0"
                            leaveTo="opacity-90 translate-x-1/2"
                        >
                            <Dialog.Panel>
                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}

export default FWSideView;