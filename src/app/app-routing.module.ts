import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AdminloanComponent } from './adminloan/adminloan.component';
import { LoancalcComponent } from './loancalc/loancalc.component';
import { AllusersComponent } from './allusers/allusers.component';
import { UsercreatorComponent } from './usercreator/usercreator.component';
import { EditproductrentComponent } from './editproductrent/editproductrent.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { AdminlawyerservicesComponent } from './adminlawyerservices/adminlawyerservices.component';
import { LawyerprofileComponent } from './lawyerprofile/lawyerprofile.component';
import { LawyerpageComponent } from './lawyerpage/lawyerpage.component';
import { LawyerserviceComponent } from './lawyerservice/lawyerservice.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AdmingetreviewsComponent } from './admingetreviews/admingetreviews.component';
import { AdmingetrequirementsComponent } from './admingetrequirements/admingetrequirements.component';
import { AdmingetproductComponent } from './admingetproduct/admingetproduct.component';
import { AdmingetusersComponent } from './admingetusers/admingetusers.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { InsertselectorComponent } from './insertselector/insertselector.component';
import { PostproductrentComponent } from './postproductrent/postproductrent.component';
import { MypropertiesComponent } from './myproperties/myproperties.component';
import { SavedsearchesComponent } from './savedsearches/savedsearches.component';
import { BoardAgentComponent } from './board-agent/board-agent.component';
import { SearchComponent } from './search/search.component';
import { CompareComponent } from './compare/compare.component';
import { RequirementComponent } from './requirement/requirement.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { PostproductComponent } from './postproduct/postproduct.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { UserlogoutComponent } from './userlogout/userlogout.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { ProfileComponent } from './profile/profile.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { BlogCreatePostComponent } from './blog-create-post/blog-create-post.component';
import { BlogSinglePostComponent } from './blog-single-post/blog-single-post.component';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';
import { AdminBlogSinglePostComponent } from './admin-blog-single-post/admin-blog-single-post.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { PostsGuard } from './posts.guard';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'productlisting', component: ProductListingComponent},
  {path: 'productpage', component: ProductpageComponent},
  {path: 'register', component: UserregisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'logout', component: UserlogoutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'insertproductsale', component: PostproductComponent},
  {path: 'insertproductrent', component: PostproductrentComponent},
  {path: 'search', component: SearchComponent},
  {path: 'agentregister', component: BoardAgentComponent},
  {path: 'insertproduct', component: InsertselectorComponent},
  {path: 'requirement', component: RequirementComponent},
  {path: 'myproperties', component: MypropertiesComponent},
  {path: 'compare', component: CompareComponent},
  {path: 'login', component: UserloginComponent},
  {path: 'savedsearches', component: SavedsearchesComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'admin', component: BoardAdminComponent},
  {path: 'adminpanel', component: AdminpanelComponent},
  {path: 'editproduct', component: EditproductComponent},
  {path: 'editproductrent', component: EditproductrentComponent},
  {path: 'adminusers', component: AdmingetusersComponent},
  {path: 'adminproducts', component: AdmingetproductComponent},
  {path: 'adminrequirements', component: AdmingetrequirementsComponent},
  {path: 'adminreviews', component: AdmingetreviewsComponent},
  {path: 'usercreator', component: UsercreatorComponent},
  {path: 'lawyerservice', component: LawyerserviceComponent},
  {path: 'lawyers', component: LawyerpageComponent},
  {path: 'lawyerprofile', component: LawyerprofileComponent},
  {path: 'adminlawyerservices', component: AdminlawyerservicesComponent},
  {path: 'allusers', component: AllusersComponent},
  {path: 'loancalc', component: LoancalcComponent},
  {path: 'adminloan', component: AdminloanComponent},
  {path: 'testimonials', component: TestimonialsComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blog-create-post', component: BlogCreatePostComponent, canActivate: [PostsGuard]},
  {path: 'blog-single-post/:slug', component: BlogSinglePostComponent},
  {path: 'blog-edit-post/:slug', component: BlogCreatePostComponent},
  //{path:'blog-edit-post/:slug', component: BlogEditPostComponent},
  //{path: 'blog-single-post', component: BlogSinglePostComponent},
  {path: 'admin-blog', component: AdminBlogComponent, canActivate: [PostsGuard]},
  {path: 'admin-blog-single-post/:slug', component: AdminBlogSinglePostComponent},
  {path: 'emi-calculator', component: EmiCalculatorComponent},								
  {path: '**', component: NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
