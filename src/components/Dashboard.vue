<template>
  <div>
    <main v-if="!loading">
      <data-title :text="title" :dataDate="dataDate" />
      <br>
      <beds :total="total" :occupied="occupied" :vacant="vacant" />
      <br>
      <hospital-select :hospital_name="hospital_name" />
    </main>
    <main v-else>
      Fetching Data...
    </main>
  </div>
</template>
<script>
import DataTitle from '@/components/DataTitle'
import Beds from '@/components/Beds'
import HospitalSelect from '@/components/HospitalSelect'

export default {
  name: 'Dashboard',
  components: {
    DataTitle,   
    Beds,
    HospitalSelect,
  },
  data() {
    return {
      loading: true,
      title: 'Hospital',
      dataDate: '',
      stats: '',
      municipalities: [],
      hospitals: [],
      hospital_name: '',
      total: '',
      vacant: '',
      occupied: '',
    }
  },
  async created() {
    /* promise */
    const data = await this.fetchData()
    console.log(data)
    this.total = data.data.beds.total_vacant + data.data.beds.total_occupied
    this.vacant = data.data.beds.total_vacant
    this.occupied = data.data.beds.total_occupied
    this.dataDate = data.last_update
    this.hospital_name = data.data.hospital_name
    this.loading = false
  },
  methods: {
    async fetchData() {
      const res = await fetch('https://covid19-api-philippines.herokuapp.com/api/facilities/summary?hospital_name=bataan%20general%20hospital%20and%20medical%20center')
      const data = await res.json()
      return data
    },
  },
}
</script>