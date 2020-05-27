<template>
  <GenericListPage :table-config="tableConfig" :header-actions="headerActions" />
</template>

<script type="text/jsx">
import { timeOffset, toSafeLocalDateStr } from '@/utils/common'
import { GenericListPage } from '@/layout/components'

export default {
  components: {
    GenericListPage
  },
  data() {
    return {
      tableConfig: {
        url: '/api/v1/ops/tasks/',
        columns: ['name', 'runtimes', 'host_amount', 'is_success', 'date_start', 'time', 'actions'],
        columnsMeta: {
          name: {
            showOverflowTooltip: true
          },
          runtimes: {
            label: this.$t('ops.runTimes'),
            formatter: function(row) {
              const summary = <div>
                <span class='text-primary'>{row.summary.success}</span>/
                <span class='text-danger'>{row.summary.failed}</span>/
                <span>{row.summary.total}</span>
              </div>
              return summary
            }
          },
          host_amount: {
            label: this.$t('ops.hosts'),
            formatter: function(row) {
              return row.latest_execution.hosts_amount
            }
          },
          is_success: {
            label: this.$t('ops.success'),
            align: 'center',
            width: '80px',
            formatter: row => {
              if (row.latest_execution.is_success) {
                return <i class='fa fa-check text-primary'/>
              }
              return <i class='fa fa-times text-danger'/>
            }
          },
          date_start: {
            label: this.$t('ops.date'),
            formatter: function(row) {
              return toSafeLocalDateStr(row.latest_execution.date_start)
            }
          },
          time: {
            label: this.$t('ops.time'),
            formatter: function(row) {
              return timeOffset(row.latest_execution.date_start, row.latest_execution.date_finished)
            }
          },
          actions: {
            prop: 'id',
            actions: {
              hasUpdate: false,
              extraActions: [
                {
                  name: 'run',
                  title: this.$t('ops.run'),
                  type: 'primary',
                  callback: function({ cellValue, tableData }) {
                    this.$axios.get(
                      `/api/v1/ops/tasks/${cellValue}/run/`
                    ).then(res => {
                      window.open(`/ops/celery/task/${res.task}/log/`, '', 'width=900,height=600')
                    })
                  }
                }
              ]
            }
          }
        }
      },
      headerActions: {
        hasRightActions: false,
        hasLeftActions: false
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>