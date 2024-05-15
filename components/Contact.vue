<template>
    <div class="w-full flex flex-col justify-center items-center bg-wizardBlue lg:p-10 h-screen lg:text-xl ">
        <div class="w-full flex lg:flex-row flex-col  justify-center items-center">
            <div class="lg:w-4/12 w-full flex flex-col justify-center lg:items-end items-center ">
                <img src="/images/mainLogo.png" class="lg:w-full w-1/2"/>
            </div>
            <div class="lg:w-6/12 w-full flex flex-col justify-center items-center">
                <h1 class="mb-5 text-5xl font-bold">Contact Us</h1>
                <div class="lg:w-11/12 w-full">
                    <FormKit type="form" id="myForm" :actions="false" @submit="handleSubmit" form-class="w-full bg-wizardBlue flex flex-col justify-center items-center rounded-lg ">
                        <FormKit
                            name="name"
                            validation="required"
                            label="Name"
                            :classes="{
                                label: 'lg:text-2xl text-xl text-wizardLight',
                                input: 'w-full rounded-lg p-2',
                                outer: 'w-11/12 flex flex-col justify-center ',
                                message: 'text-red-500 bg-white rounded-lg lg:p-2 lg:w-3/6 w-full'
                            }"
                        />
                        <FormKit
                            name="email"
                            validation="required|email"
                            label="Email address"
                            :classes="{
                                label: 'lg:text-2xl text-xl text-wizardLight',
                                input: 'w-full rounded-lg p-2',
                                outer: 'w-11/12 flex flex-col justify-center ',
                                message: 'text-red-500 bg-white rounded-lg lg:p-2  lg:w-3/6 w-full'
                            }"
                        />
                        <FormKit
                            name="request"
                            type="textarea"
                            label="Description"
                            validation="required|length:50,1500"
                            rows="10"
                            :classes="{
                                label: 'lg:text-2xl text-xl text-wizardLight',
                                input: 'w-full rounded-lg p-2',
                                outer: 'w-11/12 flex flex-col justify-center ',
                                message: 'text-red-500 bg-pink-300 rounded-lg p-2  w-3/6'
                            }"
                            />
                            <!-- <FormKit
                                name="dfiles"
                                type="file"
                                label="Files"
                                accept=".stl,.obj,.zip"
                                help="Acceptable File types .zip, .stl, .obj"
                                multiple="false"
                                :classes="{
                                    label: 'lg:text-2xl text-xl text-wizardLight',
                                    input: 'w-full rounded-lg p-2',
                                    outer: 'w-11/12 flex flex-col justify-center ',
                                    fileRemove: 'btn btn-primary'
                                }"
                                /> -->
                                <FormKit
                                    type="submit"
                                    label="Send"
                                    :classes="{
                                    input: 'btn text-wizardLight hover:text-wizardDark bg-wizardDark px-6 text-2xl m-3',
                                }"
                                    />
                    </FormKit>
                </div>
            </div>    
        </div>    
    </div>
</template>

<script setup>
import emailjs from '@emailjs/browser';
// import { setErrors } from '@formkit/nuxt'
const config = useRuntimeConfig();

let complete = ref(false)
emailjs.init({
        publicKey: config.public.emailjs,
      })
async function handleSubmit(data,node) {
//    const body = new FormData()
   const emailData = {}
//    body.append('name', data.name)
//    body.append('email', data.email)
//    body.append('request', data.request)
   emailData['name'] = data.name
   emailData['email'] = data.email
   emailData['request']= data.request
//    data.dfiles.forEach((fileItem) => {
//     body.append('dFiles', fileItem.file)
//     emailData['link'] = `http://www.resinmagicforge/${fileItem.name}`
//    })
//     const res = await fetch('/api/upload', {
//         method: 'POST',
//         body: body
//     })

    const eres = await emailjs.send('service_rmf','resinMagicFormRequest', emailData)
    if(eres.status == 200){
        alert("please check your email")
        node.reset()
       }
    }
</script>

<style lang="scss" scoped>

</style>