using Microsoft.AspNetCore.Mvc;
using MVCReactApp.Server.Models;

namespace MVCReactApp.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : Controller
    {
        private ReactMvcContext _context;

        public EmployeeController(ReactMvcContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("")]
        public ActionResult<IEnumerable<Employee>> GetEmployees()
        {
            var employees = _context.Employees.ToList();

            return StatusCode(StatusCodes.Status200OK, employees);
        }
    }
}
