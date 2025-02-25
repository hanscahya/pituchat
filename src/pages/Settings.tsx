import DefaultLayout from '../components/layout/DefaultLayout';
import StoreButton from '../components/features/setting/StoreButton';

import { settingItems } from '../services/setting';
import { FaPlus } from 'react-icons/fa';

export default function Settings() {
  return (
    <DefaultLayout>
      <section className="p-6">
        <h1 className="text-lg font-bold">Shop</h1>

        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6 lg:gap-4">
          {settingItems.map(item => (
            <StoreButton
              key={item.vendor}
              vendor={item.vendor}
              storeName={item.storeName}
              isConnected={item.isConnected}
            />
          ))}

          <div className="flex items-center justify-center">
            <button className="flex items-center gap-3 rounded-lg border-2 border-blue-500 p-4 py-3 text-blue-500">
              <FaPlus className="h-4 w-4" />
              <span>Tambah Toko</span>
            </button>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
