<template>
    <div class="w-full flex flex-col justify-center items-center bg-slate-500 p-10 h-screen text-xl  ">
        <h1 class="mb-5 text-5xl font-bold">Contact Us</h1>
        <div class="w-8/12">
            <FormKit type="form" id="myForm" :actions="false" @submit="handleSubmit" form-class="w-full bg-wizardBlue flex flex-col justify-center items-center p-8 rounded-lg ">
                <FormKit
                    name="name"
                    validation="required"
                    label="Name"
                    :classes="{
                        label: 'text-2xl text-wizardLight',
                        input: 'w-6/12 rounded-lg p-2',
                        outer: 'w-8/12 flex flex-col justify-center ',
                        message: 'text-red-500 bg-white rounded-lg p-2 m-2 w-3/6'
                    }"
                />
                 <FormKit
                    name="email"
                    validation="required|email"
                    label="Email address"
                    :classes="{
                        label: 'text-2xl text-wizardLight',
                        input: 'w-6/12 rounded-lg p-2',
                        outer: 'w-8/12 flex flex-col justify-center',
                        message: 'text-red-500 bg-pink-300 rounded-lg p-2 m-2 w-3/6'
                    }"
                />
                <FormKit
                    name="request"
                    type="textarea"
                    label="Description"
                    validation="required|length:50,1500"
                    rows="10"
                    :classes="{
                        label: 'text-2xl text-wizardLight',
                        input: 'w-8/12 rounded-lg p-2',
                        outer: 'w-8/12 flex flex-col justify-center',
                        message: 'text-red-500 bg-pink-300 rounded-lg p-2 m-2 w-3/6'
                    }"
                    />
                    <FormKit
                        type="file"
                        label="Files"
                        accept=".stl,.obj,.zip"
                        help="Select as many documents as you would like. Accept File types .zip, .stl, .obj"
                        multiple="false"
                        :classes="{
                            label: 'text-2xl text-wizardLight',
                            input: '',
                            outer: 'w-8/12 flex flex-col justify-center p-2 m-2 bg-white rounded-xl flex flex-col',
                            fileRemove: 'btn btn-primary ml-2 mr-2'
                        }"
                        />
                        <FormKit
                            type="submit"
                            label="Send"
                            :classes="{
                            input: 'btn text-wizardLight hover:text-wizardDark bg-wizardDark px-6 text-2xl',
                        }"
                            />
            </FormKit>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      complete: false,
    }
  },
  methods: {
    async handleSubmit(data) {
        console.log(data)
      this.complete = true
      this.$formkit.reset('myForm')
    },
  },
}
</script>

<style lang="scss" scoped>

</style>