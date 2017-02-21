using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VisitorAPI.Models;

namespace VisitorAPI.Repository
{
    public interface IVisitorRepository
    {
        void Add(Visitor item);
        IEnumerable<Visitor> GetAll();
        Visitor Find(long id);
        void Remove(long id);
        void Update(Visitor item);
    }
}
