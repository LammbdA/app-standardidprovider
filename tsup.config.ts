import type { Options } from './tsup';

import { defineConfig } from 'tsup';
import { DIR_DST, DIR_DST_ASSETS } from './tsup/constants';

export default defineConfig(async (options: Options) => {
    if (options.d === DIR_DST) {
        return import('./tsup/server').then((m) => m.default());
    }

    if (options.d === DIR_DST_ASSETS) {
        return import('./tsup/client').then((m) => m.default());
    }

    throw new Error(`Unconfigured directory:${options.d}!`);
});
