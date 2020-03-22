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
    public class WorkModesController : ControllerBase
    {
        private readonly MainDBContext _context;

        public WorkModesController(MainDBContext context)
        {
            _context = context;
        }

        // GET: api/WorkModes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<WorkMode>>> GetWorkModes()
        {
            return await _context.WorkModes.ToListAsync();
        }

        // GET: api/WorkModes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<WorkMode>> GetWorkMode(double? id)
        {
            var workMode = await _context.WorkModes.FindAsync(id);

            if (workMode == null)
            {
                return NotFound();
            }

            return workMode;
        }

        // PUT: api/WorkModes/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWorkMode(double? id, WorkMode workMode)
        {
            if (id != workMode.Id)
            {
                return BadRequest();
            }

            _context.Entry(workMode).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WorkModeExists(id))
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

        // POST: api/WorkModes
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<WorkMode>> PostWorkMode(WorkMode workMode)
        {
            _context.WorkModes.Add(workMode);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (WorkModeExists(workMode.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetWorkMode", new { id = workMode.Id }, workMode);
        }

        // DELETE: api/WorkModes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<WorkMode>> DeleteWorkMode(double? id)
        {
            var workMode = await _context.WorkModes.FindAsync(id);
            if (workMode == null)
            {
                return NotFound();
            }

            _context.WorkModes.Remove(workMode);
            await _context.SaveChangesAsync();

            return workMode;
        }

        private bool WorkModeExists(double? id)
        {
            return _context.WorkModes.Any(e => e.Id == id);
        }
    }
}
