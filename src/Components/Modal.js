import React from "react";
function Modal({
    visible,
    onClose,
    title,
    contexte,
    problematique
}) {
    const handleOnClose = (e) => {
        if (e.target.id === ("closebutton") || ("closecross")) onClose();
    };
    if (!visible) return null;
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white  rounded  p-4 w-full max-w-2xl max-h-full">
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h1 class="text-xl font-semibold text-red-900 dark:text-white">
                        {title}
                    </h1>
                    <button id="closebutton" onClick={handleOnClose}
                            type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                            <svg  id="closecross" onClick={handleOnClose}
                                class="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14">
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                </div>

                <div class="p-4 md:p-5 space-y-4">
                    <h1 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Contexte
                    </h1>
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        {contexte}
                    </p>
                    <h1 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Problématique
                    </h1>
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        {problematique}
                    </p>
                </div>
                <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                </div>
            </div>
        </div>
    );
}

export default Modal;
