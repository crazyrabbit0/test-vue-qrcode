<template>
    <div class="w-100 h-100 d-flex flex-column align-center pa-3">
        <qrcode-stream
            :constraints="constraints"
            :formats="formats"
            @camera-on="onCameraReady"
            @error="onError"
            @detect="onDetect"
        />
    </div>
</template>

<script setup>
    import { QrcodeStream, setZXingModuleOverrides } from 'vue-qrcode-reader'
    import wasmFile from '@/../node_modules/zxing-wasm/dist/reader/zxing_reader.wasm?url'
    // Import "zxing_reader.wasm" locally  (instead of getting it from the CDN)
    setZXingModuleOverrides({
        locateFile: (path, prefix) => {
            if (path.endsWith('.wasm')) {
                return wasmFile
            }
            return prefix + path
        },
    })

    const constraints = reactive({ facingMode: 'environment' })
    const formats = ['qr_code']

    function onDetect(detectedCodes) {
        alert(detectedCodes[0].rawValue)
        console.log(detectedCodes)
    }

    function onCameraReady(capabilities) {
        console.log(capabilities)
    }
    function onError(error) {
        console.log(error)
    }
</script>
