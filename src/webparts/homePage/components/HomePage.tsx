import * as React from 'react';
import * as ReactDom from 'react-dom';
import styles from './HomePage.module.scss';
import { IHomePageProps } from './IHomePageProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Sidebar from "./Pages/Sidebar"
import SidebarMenu from "./Pages/SidebarMenu"
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Home } from '../components/Routes/Home';
import { Demo } from '../components/Routes/Demo';
import { Dogs } from '../components/Routes/Dogs';

//import { NavSection  } from "./Pages/Nav";
import * as jquery from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class HomePage extends React.Component<IHomePageProps, {}> {
  siteUrl = '';
  state={};
  constructor(props) {   
      super(props);
      this.state['itemsArray'] = [];
      //this.spHttpClient = this.props.spHttpClient;
      this.siteUrl = 'https://collab.lilly.com/sites/LillyClassified2/';
  }
  public componentDidMount() {
    this.GetCategorySubcategory();
}

public async GetCategorySubcategory() {
  var itemsArray = [];
  var reactHandler = this;
  var subarr = [];
  var finalarr = [];

  var listname = "Create Ad";
  //var reactHandler = this;
  var filterValue1 = "Furniture";
  var filterValue2 = "Chair";
  try {
    await jquery.ajax({
      url: `${this.siteUrl}/_api/web/lists/getbytitle('Subcategory')/items?$select=Title,Category/Title&$expand=Category&$top=5000`,
      type: "GET",
      headers: { 'Accept': 'application/json; odata=verbose;' },
      success: function (resultData) {
        console.log("value==" + resultData.d.results);
        var results = resultData.d.results;
        for (var i = 0; i < results.length; i++) {
          itemsArray.push({
            "SubCategory": results[i].Title,
            "Category": results[i].Category.Title
          });
        }
      },
      eror: function (data) {   
        console.log("An error occurred. Please try again.");
      }
    });
  }
  catch (error) {
    console.log(error)
  }
  this.GetCategory(itemsArray);
}

public async GetCategory(arraycatsub) {

  console.log("arraycatsub=" + arraycatsub);
  var CategoryArray = [];
  var reactHandler = this;
  var subarr = [];
  var finalarr = [];
  var listname = "Create Ad";
  //var reactHandler = this;
  var filterValue1 = "Furniture";
  var filterValue2 = "Chair";
  try {
    await jquery.ajax({
      url: `${this.siteUrl}/_api/web/lists/getbytitle('Category')/items?$select=Title&$top=5000`,
      type: "GET",
      headers: { 'Accept': 'application/json; odata=verbose;' },
      success: function (resultData) {
        console.log("value==" + resultData.d.results);
        var results = resultData.d.results;
        for (var i = 0; i < results.length; i++) {
          CategoryArray.push({
            "Category": results[i].Title
          });
        }
      },
      eror: function (data) {
        console.log("An error occurred. Please try again.");
      }
    });
var subcatvalue='';
    for (var i = 0; i < CategoryArray.length; i++) {
      subarr = [];         
      subarr.push("All" );
      for (var j = 0; j < arraycatsub.length; j++) {
        if (CategoryArray[i].Category == arraycatsub[j].Category) {
          //console.log("test=" + CategoryArray[i].Category + " Test 2 " + arraycatsub[j].Category + "test3 subcategory" + arraycatsub[j].SubCategory);
          subarr.push(arraycatsub[j].SubCategory );
        }          
        //console.log("finalarr=" + finalarr);
      }
      finalarr.push({
        "Category": CategoryArray[i].Category,
        "SubCategory": subarr
      });
    }
    this.setState({'itemsArray' : finalarr})
    for (var K = 0; K < finalarr.length; K++) {     
      console.log("Category=" + finalarr[K].Category );
      for (var p = 0; p < finalarr[K].SubCategory.length; p++)
      {
      console.log("SubCategory=" + finalarr[K].SubCategory[p]);
      }
    }
  }
  catch (error) {
    console.log(error)
  }
}

  public render(): React.ReactElement<IHomePageProps> {
    return (  
      <div className={ styles.homePage }>
        <Router>
          
          <Sidebar itemsArray = {this.state['itemsArray']}/>    
          {/* <Route exact path = "/:Category/:SubCategory" component={Home} /> */}
        </Router>
      </div>
    );
  }
}
