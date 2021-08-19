<template>
  <div>
    <select v-model="selected" class="form-select mt-10 block w-full border p-3 rounded">
      <option value="0">Select Hospital</option>
    </select>
  </div>
</template>
<script>
export default {
  name: 'HospitalSelect',
  props: ['hospital_name'],
  data() {
    return {
      selected: 0
    }
  },
}
</script>