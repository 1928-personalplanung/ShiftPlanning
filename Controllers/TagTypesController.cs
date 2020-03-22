using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShiftPlan;
using ShiftPlan.Data;

namespace ShiftPlan.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TagTypesController : ControllerBase
    {
        private readonly MainDBContext _context;

        public TagTypesController(MainDBContext context)
        {
            _context = context;
        }

        // GET: api/TagTypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TagType>>> GetTagTypes()
        {
            return await _context.TagTypes.ToListAsync();
        }

        // GET: api/TagTypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TagType>> GetTagType(double? id)
        {
            var tagType = await _context.TagTypes.FindAsync(id);

            if (tagType == null)
            {
                return NotFound();
            }

            return tagType;
        }

        // PUT: api/TagTypes/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTagType(double? id, TagType tagType)
        {
            if (id != tagType.Id)
            {
                return BadRequest();
            }

            _context.Entry(tagType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TagTypeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TagTypes
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<TagType>> PostTagType(TagType tagType)
        {
            _context.TagTypes.Add(tagType);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (TagTypeExists(tagType.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetTagType", new { id = tagType.Id }, tagType);
        }

        // DELETE: api/TagTypes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TagType>> DeleteTagType(double? id)
        {
            var tagType = await _context.TagTypes.FindAsync(id);
            if (tagType == null)
            {
                return NotFound();
            }

            _context.TagTypes.Remove(tagType);
            await _context.SaveChangesAsync();

            return tagType;
        }

        private bool TagTypeExists(double? id)
        {
            return _context.TagTypes.Any(e => e.Id == id);
        }
    }
}
