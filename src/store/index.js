import { createStore } from 'vuex';
import { actionModule } from '@/store/modules/actionModule'
import { projectModule } from '@/store/modules/projectModule'

export default createStore({

    modules: {
      action: actionModule,
      project: projectModule
    }
})