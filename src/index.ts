import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { rollup, type RollupOptions } from 'rollup';

import Express from 'express';
import router from './pages/router';

// Build the client side code
const rollupConfig: RollupOptions = {
    input: './src/shared.ts',
    output: {
        name: 'window',
        file: 'public/bundle.js',
        format: 'iife',
        sourcemap: true,
        extend: true,
        globals: {
            window: 'window'
        }
    },
    plugins: [
        resolve(),
        commonjs(),
        typescript()
    ]
};



async function build() {
    const bundle = await rollup(rollupConfig);
    if (rollupConfig.output == null) throw new Error('output is null');
    if (Array.isArray(rollupConfig.output)) {
        for (const output of rollupConfig.output) {
            await bundle.write(output);
        }
    } else {
        await bundle.write(rollupConfig.output);
    }
}
build()

const app = Express();
app.use(Express.static('public'));

app.use(router);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
