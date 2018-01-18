import './cluster-details.style.scss';

import _ from 'lodash';

class clusterDetailsController {

  // Imports go here
  constructor($stateParams, ClusterIndices) {
    'ngInject';
    
    this.clusterName = $stateParams.clusterName

    this.ClusterIndices = ClusterIndices;


    

    this.fetchingIndices = true;
    this.ClusterIndices.clusterInidices(this.clusterName).then((resp) => {
      console.log('------ inidicies: ', resp.data.data)
      this.indices = resp.data.data;

    }, (err) => {

    })
    .finally(() => {
      this.fetchingIndices = false;
    })

    /*
    /api/indices/[cluster_name]/_summary"
     - Number of nodes
      - Number of Shardes
    /api/indices/[cluster_name]
     - List Indices
    */
  }
  

}

export default clusterDetailsController;