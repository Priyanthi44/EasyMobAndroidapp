using System.Web;
using System.Web.Optimization;

namespace MvcApplication2
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {


            bundles.Add(new ScriptBundle("~/bundles/jquerymobile").Include("~/Scripts/jquery.mobile*"));

            bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/site.css"));

            bundles.Add(new StyleBundle("~/Content/mobilecss").Include("~/Content/jquery.mobile*"));

            bundles.Add(new ScriptBundle("~/bundles/MvcApplication2")
                .IncludeDirectory("~/Scripts/Controllers", "*.js")
                 .Include("~/Scripts/MvcApplication2.js"));

            BundleTable.EnableOptimizations = true;
        }
    }

}