import { connect } from "react-redux";
import ToggleTable from "../components/ToggleTable.jsx";
import toggleTable from "../actions/toggleTable.js";
import incrementMoneyEarned from "../actions/incrementMoneyEarned.js";

const mapStateToProps = state => {
  return {
    selectedTable: state.selectedTable,
    tableStatus: state.tableStatusData[state.selectedTable],
    tableData: state.tableData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggle: (id, tableData) => {
      let total = 0;
      for (let i = 0; i < tableData[id].length; i++) {
        total += tableData[id][i].price;
      }

      dispatch(incrementMoneyEarned(total));
      dispatch(toggleTable(id));
    }
  };
};

const ToggleTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleTable);

export default ToggleTableContainer;
