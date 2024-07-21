export default function decorate(block) {
  // Inject CSS styles into the document
  const styles = `
      body {
          font-family: "Fira Sans", sans-serif;
      }
      .arena-stye .container ul.cd_breadcrumb li a {
          color: #164b91;
      }
      .arena-stye .dealer-page-title {
          color: #164b91;
      }
      .grey-bg #dealer_filter_search {
          background: #164b91 !important;
          border: 1px solid #164b91 !important;
          color: #ffffff !important;
      }
      .container .btn-dealer:hover {
          background: #fff !important;
          color: #000000 !important;
          border-radius: 0;
          border: 1px solid #164b91;
      }
      .cd_breadcrumb {
          margin: 0;
          padding: 10px 0;
          list-style: none;
      }
      .cd_breadcrumb li {
          display: inline-block;
      }
      .cd_breadcrumb li a {
          font-size: 14px;
          font-weight: bold;
          text-transform: uppercase;
          color: #000;
          text-decoration: none;
      }
      .cd_breadcrumb li a.back-icon {
          background: url("images/brd-arrow.webp") 0 3px no-repeat;
          padding-left: 10px;
          line-height: 150%;
          margin-left: 10px;
      }
      .cd_breadcrumb li a.hover {
          text-decoration: none;
      }
      .dealer-page-title {
          font-size: 1.25rem;
          margin: 10px 0 20px 0;
          font-weight: 500;
          text-transform: uppercase;
      }
      .grey-bg {
          background-color: #fcfcfc;
          padding: 0;
          margin: 50px 0;
          float: left;
          width: 100%;
          margin-top: 0;
      }
      .form-group {
          margin-bottom: 1rem;
      }
      .cd_form .form-control {
          border: 1px solid #d1d1d1;
          border-radius: 0;
          height: 40px;
          padding: 8px;
          background: #fff;
          font-weight: normal;
          color: #000000;
          outline: 0 none;
      }
      .cd_form .form-control::placeholder {
          color: #b3b3b3;
      }
      .cd_form .form-control:focus {
          outline: 0 none;
      }
      .cd_form .form-control:readonly,
      .cd_form .form-control:disabled {
          color: #757474 !important;
      }
      .form-control {
          display: block;
          width: 100%;
          height: calc(1.5em + .75rem + 2px);
          padding: .375rem .75rem;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.5;
          color: #495057;
          background-color: #fff;
          background-clip: padding-box;
          border: 1px solid #ced4da;
          border-radius: .25rem;
          transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
      }
      .form-control.is-valid,
      .form-control.is-valid:focus {
          border-color: #28a745;
          box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
      }
      .form-control.is-invalid,
      .form-control.is-invalid:focus {
          border-color: #dc3545;
          box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
      }
      .invalid-feedback {
          width: 100%;
          margin-top: .25rem;
          font-size: 80%;
          color: #dc3545;
      }
      .btn-group {
          display: flex;
          gap: 20px;
      }
      .form-control:focus {
          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
      }
      #dealer_filter_search {
          min-width: 110px;
      }
      .btn-dealer {
          font-size: 1rem;
          border: 1px solid #000;
          text-transform: uppercase;
          padding: 7px 12px;
          transition: all 0.3s ease;
          line-height: 1.5;
          height: auto;
          width: 100%;
      }
      .btn-dealer:hover {
          background: #fff;
          border: 1px solid #000;
          color: #000000;
      }
      .search_table_listings {
          margin-top: 20px;
          box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
          width: 100%;
      }
      .table-responsive {
          display: block;
          width: 100%;
          overflow-x: auto;
          overflow-y: visible;
      }
      .search_table_listings .table {
          border: 1px solid #e9e9e9;
      }
      table {
          border-collapse: collapse;
          border-spacing: 0;
      }
      .table {
          width: 100%;
          color: #212529;
      }
      .table-hover tbody tr:hover td {
          color: #212529;
          background-color: rgba(0, 0, 0, 0.075);
      }
      .table td,
      .table th {
          padding: .75rem;
          vertical-align: top;
          border-top: 1px solid #dee2e6;
          text-align: left;
      }
      .table thead th {
          vertical-align: bottom;
          border-bottom: 2px solid #dee2e6;
          background-color: #dee2e6;
      }
      .table tbody + tbody {
          border-top: 2px solid #dee2e6;
      }
      .table-sm td,
      .table-sm th {
          padding: .3rem;
      }
      .table-bordered {
          border: 1px solid #dee2e6;
      }
      .table-bordered td,
      .table-bordered th {
          border: 1px solid #dee2e6;
      }
      .table-bordered thead td,
      .table-bordered thead th {
          border-bottom-width: 2px;
      }
      .search_table_listings .table.table-bordered th,
      .search_table_listings .table.table-bordered td {
          border: 1px solid #d1d1d1;
          font-size: 0.875rem;
          line-height: 130%;
      }
      .popUpmain {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1000;
          justify-content: center;
          align-items: center;
      }
      .popUpmain .modal-content {
          padding: 35px;
          position: relative;
          max-width: 500px;
          margin: auto;
      }
      .modal-content {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 100%;
          pointer-events: auto;
          background-color: #fff;
          background-clip: padding-box;
          border: 1px solid rgba(0, 0, 0, 0.2);
          border-radius: .3rem;
          outline: 0;
      }
      .popUpmain .modal-content .close {
          position: absolute;
          right: 10px;
          top: 10px;
          padding-top: 17px;
      }
      .popUpmain .modal-content .popupContent {
          text-align: center;
      }
      .popUpmain .modal-content .popupContent.red h2 {
          color: #ff0000;
      }
      .popUpmain .modal-content .popupContent h2 img {
          display: inline-block;
          vertical-align: middle;
          position: relative;
          top: -3px;
          height: 32px;
      }
      .popUpmain .modal-content .popupContent p {
          font-size: 1.0625rem;
          word-break: break-word;
          margin: 25px auto 35px auto;
          font-weight: 400;
      }
      .blackButton {
          display: inline-block;
      }
      .popUpmain .modal-content .popupContent.red .blackButton button {
          text-decoration: none;
          padding: 11px 12px 9px 12px;
          display: inline-block;
          font-size: 0.9375rem;
          color: #ffffff;
          font-weight: 400;
          transition: 0.5s;
          text-transform: uppercase;
          border: 1px solid #ffffff;
          background-color: #000000;
      }
      .popUpmain .modal-content .popupContent.red .blackButton button:hover {
          color: #000000;
          background: #ffffff;
      }
  `;
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  // JavaScript functionality
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.addedNodes.length) {
        const addedNode = mutation.addedNodes[0];
        if (addedNode.classList && addedNode.classList.contains("popUpmain")) {
          addedNode.style.display = "none";
        }
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  // Event listener for the button click
  block
    .querySelector(".blackButton button")
    .addEventListener("click", function () {
      const popUpMain = block.querySelector(".popUpmain");
      popUpMain.style.display = "flex";
    });

  // Close popup
  block.querySelector(".close").addEventListener("click", function () {
    const popUpMain = block.querySelector(".popUpmain");
    popUpMain.style.display = "none";
  });
}
