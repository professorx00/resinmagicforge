<template>
    <div class="h-screen text-neutral-content">
        <div v-if="!accessGranted">
             <FormKit type="form" id="myForm" :actions="false" @submit="handleSubmit" :classes="{form:'w-full bg-wizardBlue flex flex-col justify-center items-center rounded-lg h-screen', message: 'text-red-500 text-2xl'}">
                <FormKit
                    name="password"
                    validation="required"
                    label="Password"
                    type="password"
                    :classes="{
                        label: 'text-2xl text-wizardLight',
                        input: 'w-6/12 rounded-lg p-2',
                        outer: 'w-8/12 flex flex-col justify-center ',
                        message: 'text-red-500 bg-white rounded-lg p-2 m-2'
                    }"
                />
                <FormKit
                            type="submit"
                            label="Submit"
                            :classes="{
                            input: 'btn text-wizardLight hover:text-wizardDark bg-wizardDark px-6 text-2xl m-6',
                        }"
                            />
             </FormKit>
        </div>
        <div v-if="accessGranted">
            Access Granted
            <div class="overflow-x-auto text-white">
                <table class="table text-neutral-content">
                     <thead>
                        <tr>
                            <th class="text-neutral-content">File Name</th>
                            <th class="text-neutral-content">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="file in files">
                            <td class="text-neutral-content">{{file}}</td>
                            <td>
                                <button @click="()=>{handleDelete(file)}" class="btn text-wizardLight hover:text-wizardDark bg-wizardDark px-6 text-2xl m-6"><span class="icon-[fa6-solid--trash]"></span></button>
                                <a :href="'/upload/'+file" class="btn text-wizardLight hover:text-wizardDark bg-wizardDark px-6 text-2xl m-6"><span class="icon-[fa6-solid--file-arrow-down]"></span></a>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
    </div>
</template>

<script setup lang="js">
    const config =  useRuntimeConfig()
    const router = useRouter()
    let accessGranted =  ref(false);
    const { data:files, pending, error, refresh } = await useFetch('/api/list')
    const handleSubmit = async (data, node)=>{
        if(data.password == config.public.adminPassword){
            accessGranted.value=true
        }else{
           node.setErrors(['Incorrect Password']) 
        }
    }
    const handleDelete = async(filename)=>{
        const res = await fetch('/api/delete', {
            method: 'POST',
            body: filename
        })
        if(res && res.status == 204){
            refresh()
        }
    }
    
</script>

<style>

</style>