import React from "react";
function Modal({ visible, onClose, title, contexte, problematique, previewLink }) {
    const handleOnClose = (e) => {
        if (e.target.id === "container") onClose();
    };
    if (!visible) return null;
    return (
        <div
            id="container"
            onClick={handleOnClose}
            className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white  rounded  p-4 w-full max-w-2xl max-h-full">
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h1 class="text-xl font-semibold text-red-900 dark:text-white">
                            {title}
                        </h1>
                        {/* <button
                            type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="default-modal">
                            <svg
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
                        </button> */}
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
                        <button
                            data-modal-hide="default-modal"
                            type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                             <a
              href={previewLink}
              target="_blank"
              rel="noreferrer noopener"
              className="underline pl-2 font-light dark:text-white"
            >
              Live Preview
            </a>
                        </button>
                        <button
                            data-modal-hide="default-modal"
                            type="button"
                            class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                            Decline
                        </button>
                    </div>
            </div>
        </div>
    );
}

export default Modal;
