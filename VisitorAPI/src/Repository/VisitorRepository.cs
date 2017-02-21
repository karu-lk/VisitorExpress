using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VisitorAPI.Models;

namespace VisitorAPI.Repository
{
    public class VisitorRepository:IVisitorRepository
    {
        private readonly VisitorContext _context;

        public VisitorRepository(VisitorContext context)
        {
            _context = context;
        }

        public IEnumerable<Visitor> GetAll()
        {
            return _context.Visitors.ToList();
        }

        public void Add(Visitor item)
        {
            _context.Visitors.Add(item);
            _context.SaveChanges();
        }

        public Visitor Find(long id)
        {
            return _context.Visitors.FirstOrDefault(t => t.visitorId == id);
        }

        public void Remove(long id)
        {
            var entity = _context.Visitors.First(t => t.visitorId == id);
            _context.Visitors.Remove(entity);
            _context.SaveChanges();
        }

        public void Update(Visitor item)
        {
            _context.Visitors.Update(item);
            _context.SaveChanges();
        }
    }
}
