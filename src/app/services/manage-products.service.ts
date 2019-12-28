import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment"


@Injectable({
  providedIn: 'root'
})
export class ManageProductsService {

  constructor(
    private http: HttpClient
  ) {
  }

  getIngredientMenus() {
    return this.http.get(`${environment.staticUrl}dashboard/admin/ingr_menu`)
  }

  getIngredients() {
    return this.http.get(`${environment.staticUrl}dashboard/admin/ingredient`)
  }

  getProductMenus() {
    return this.http.get(`${environment.staticUrl}dashboard/admin/prod_menu`)
  }

  getProducts() {
    return this.http.get(`${environment.staticUrl}dashboard/admin/product`)
  }

  getComboMenu() {
    return this.http.get(`${environment.staticUrl}dashboard/admin/combo_menu`)
  }

  getCombos() {
    return this.http.get(`${environment.staticUrl}dashboard/admin/combo`)
  }


  addIngredientMenu(title) {
    return this.http.post(`${environment.staticUrl}dashboard/admin/ingr_menu/add`, {title})
  }

  addIngredient(ingredient) {
    return this.http.post(`${environment.staticUrl}dashboard/admin/ingredient/add`, ingredient)
  }

  addProductMenu(title) {
    return this.http.post(`${environment.staticUrl}dashboard/admin/prod_menu/add`, {title})
  }

  addProduct(data) {
    return this.http.post(`${environment.staticUrl}dashboard/admin/product/add`, data)
  }

  addCombo(data) {
    return this.http.post(`${environment.staticUrl}dashboard/admin/combo/add`, data)
  }

  addComboMenu(data) {
    return this.http.post(`${environment.staticUrl}dashboard/admin/combo_menu/add`, data)
  }

  addComboProd(data) {
    return this.http.post(`${environment.staticUrl}dashboard/admin/combo_prod/add`, data)
  }

  removeComboProd(id) {
    return this.http.delete(`${environment.staticUrl}dashboard/admin/combo_prod/delete?id=${id}`);
  }

  removeIngredientMenu(id) {

    return this.http.delete(`${environment.staticUrl}dashboard/admin/ingredientmenu/delete?id=${id}`);
  }

  deleteIngredient(id) {
    return this.http.delete(`${environment.staticUrl}dashboard/admin/ingredient/delete`, {params: {id}});
  }

  removeProductMenu(id) {
    return this.http.delete(`${environment.staticUrl}dashboard/admin/prod_menu/delete`, {params: {id}});
  }

  removeComboMenu(id) {
    return this.http.delete(`${environment.staticUrl}dashboard/admin/combo_menu/delete`, {params: {id}});
  }

  removeCombo(id) {
    return this.http.delete(`${environment.staticUrl}dashboard/admin/combo/delete`, {params: {id}});
  }

  updateIngredientMenu(val) {
    return this.http.put(`${environment.staticUrl}dashboard/admin/ingr_menu/update`, val);
  }

  updateIngredient(val) {
    return this.http.put(`${environment.staticUrl}dashboard/admin/ingredient/update`, val);
  }

  updateProductMenu(val) {
    return this.http.put(`${environment.staticUrl}dashboard/admin/prod_menu/update`, val);
  }

  updateProduct(val) {
    return this.http.put(`${environment.staticUrl}dashboard/admin/product/update`, val);
  }

  updateComboMenu(val) {
    return this.http.put(`${environment.staticUrl}dashboard/admin/combo_menu/update`, val);
  }

  updateCombo(val) {
    return this.http.put(`${environment.staticUrl}dashboard/admin/combo/update`, val);
  }

  uploadAdVideo(fd) {
    return this.http.post(`${environment.staticUrl}dashboard/admin/ads/video/add`, fd);
  }

  getAdVideos() {
    return this.http.get(`${environment.staticUrl}dashboard/admin/progress_monitor`);

  }

  removeProduct(id) {
    return this.http.delete(`${environment.staticUrl}dashboard/admin/product/delete`, {params: {id}});
  }


}
