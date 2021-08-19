<template>
  <div class="row">
    <div class="form-group row justify-content-center text-center">
      <div class="card text-white bg-secondary mb-3" style="max-width: 20rem;">
        <div class="card-header">TOTAL BEDS</div>
          <div class="card-body">
            <h4 class="card-title"><font-awesome-icon icon="bed" /> {{ total }}</h4>
          </div>
        </div>
    </div>
    <div class="form-group row justify-content-center text-center">
      <div class="card text-white bg-success mx-3" style="max-width: 20rem;">
        <div class="card-header">Vacant</div>
          <div class="card-body">
            <h4 class="card-title"><font-awesome-icon icon="bed" /> {{ vacant }}</h4>
          </div>
      </div>   
      <div class="card text-white bg-danger mx-3" style="max-width: 20rem;">
        <div class="card-header">Occupied</div>
          <div class="card-body">
            <h4 class="card-title"><font-awesome-icon icon="bed" /> {{ occupied }}</h4>
          </div>
      </div>   
    </div>
  </div>
</template>
<script>
export default {
	name: 'Beds',
	props:['total', 'vacant', 'occupied']
}
</script>