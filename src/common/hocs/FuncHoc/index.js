import Loading from 'common/loading'

const FuncHoc = FuncComp => {
  let isLoading = true
  setTimeout(() => {
    isLoading = false
  }, 1000)
  return isLoading ? Loading : FuncComp
}
export default FuncHoc
