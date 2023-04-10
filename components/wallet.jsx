import React from 'react'

const wallet = () => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={onClose}
          >
            <div className="min-h-screen px-4 text-center">
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
    
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
    
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  My Wallet
                </Dialog.Title>
    
                <div className="mt-4 space-y-4">
                  <div className="flex items-center justify-between py-2 border-b border-gray-200">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-600">
                        Card ending in 1234
                      </div>
                      <div className="text-lg font-semibold text-gray-900">
                        $500.00
                      </div>
                    </div>
                    <button className="px-3 py-1 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600">
                      Remove
                    </button>
                  </div>
    
                  <div className="flex items-center justify-between py-2 border-b border-gray-200">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-600">
                        Card ending in 5678
                      </div>
                      <div className="text-lg font-semibold text-gray-900">
                        $250.00
                      </div>
                    </div>
                    <button className="px-3 py-1 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600">
                      Remove
                    </button>
                  </div>
    
                  <div className="flex items-center justify-between py-2 border-b border-gray-200">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-600">
                        Card ending in 9012
                      </div>
                      <div className="text-lg font-semibold text-gray-900">
                        $1000.00
                      </div>
                    </div>
                    <button className="px-3 py-1 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600">
                      Remove
                    </button>
                  </div>
    
                  <div className="flex items-center justify-between py-2">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-600">
                        Add a new card
                      </div>
                    </div>
                    <button className="px-3 py-1 text-sm font-medium text-white bg-green-500 rounded hover:bg-green-600">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition>
      );
    }


export default wallet