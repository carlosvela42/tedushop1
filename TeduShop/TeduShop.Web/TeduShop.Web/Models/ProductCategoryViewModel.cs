using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace TeduShop.Web.Models
{
    public class ProductCategoryViewModel
    {
        public int ID { get; set; }
        [Required(ErrorMessage = "Yêu cầu nhập tên danh mục")]
        public string Name { get; set; }
        [Required]
        public string Alias { get; set; }

        public string Description { get; set; }

        public int? ParentID { get; set; }

        public int? DisplayOrder { get; set; }

        public string Image { get; set; }

        public bool? HomeFlag { get; set; }
        public DateTime? CreatedDate { set; get; }
        public string CreatedBy { set; get; }
        public DateTime? UpdatedDate { set; get; }
        public string UpdatedBy { set; get; }
        public string MetaKeyword { get; set; }
        public string MetaDescription { get; set; }
        [Required]
        public bool Status { get; set; }

        public virtual IEnumerable<ProductViewModel> Products { get; set; }
    }
}