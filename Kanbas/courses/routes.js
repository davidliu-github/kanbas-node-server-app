import * as dao from "./dao.js";
export default function CourseRoutes(app) {
    const createCourse = async (req, res) => {
        const course = await dao.createCourse(req.body);
        res.json(course);
      };
      const deleteCourse = async (req, res) => { 
        const status = await dao.deleteCourse(req.params.userId);
        res.json(status);
  
      };
  const findAllCourses = async (req, res) => {
    const users = await dao.findAllCourses();
    res.json(users);
  };
  const findCourseById = async (req, res) => {
    const course = await dao.findCourseById(req.params)
    res.json(course)
   };
  const updateCourse = async (req, res) => {
    const { userId } = req.params;
    const status = await dao.updateCourse(userId, req.body);
    currentUser = await dao.findCourseById(userId);
    res.json(status);
  };

  app.post("/api/courses", createCourse);
  app.get("/api/courses", findAllCourses);
  app.get("/api/courses/:userId", findCourseById);
  app.put("/api/courses/:userId", updateCourse);
  app.delete("/api/courses/:userId", deleteCourse);
  
}

