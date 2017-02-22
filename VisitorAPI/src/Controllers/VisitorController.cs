using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VisitorAPI.Models;
using VisitorAPI.Repository;

namespace VisitorAPI.Controllers
{
    [Route("api/[controller]")]
    public class VisitorController : Controller
    {
        private readonly IVisitorRepository _visitorRepository;

        public VisitorController(IVisitorRepository visitorRepository)
        {
            _visitorRepository = visitorRepository;
        }

        [HttpGet]
        public IEnumerable<Visitor> GetAll()
        {
            return _visitorRepository.GetAll();
        }

        [HttpGet("{id}", Name = "GetVisitor")]
        public IActionResult GetById(long id)
        {
            var item = _visitorRepository.Find(id);
            return item == null ? (IActionResult)NotFound() : new ObjectResult(item);
        }

        [HttpPost]
        public IActionResult Create([FromBody]Visitor item)
        {
            if (item == null)
                return BadRequest();
            _visitorRepository.Add(item);
            return CreatedAtRoute("GetVisitor", new { id = item.visitorId }, item);
        }

        [HttpPut("{id}")]
        public IActionResult Update(long id, [FromBody]Visitor item)
        {
            if (item == null || item.visitorId != id)
                return BadRequest();

            var visitor = _visitorRepository.Find(id);
            if (visitor == null)
                return NotFound();

            visitor.fullName = item.fullName;
            visitor.company = item.company;
            visitor.host = item.host;

            _visitorRepository.Update(visitor);
            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            var visitor = _visitorRepository.Find(id);
            if (visitor == null)
                return NotFound();

            _visitorRepository.Remove(id);
            return new NoContentResult();
        }
    }
}
