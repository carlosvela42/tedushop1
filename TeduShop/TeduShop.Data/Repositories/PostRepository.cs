﻿using TeduShop.Data.Infrastructure;
using TeduShop.Model.Models;

namespace TeduShop.Data.Repositories
{
    public interface IPostRepository { }

    public class PostRepository : RepositoryBase<Post>
    {
        public PostRepository(IDbFactory dbFactory) : base(dbFactory)
        {
        }
    }
}