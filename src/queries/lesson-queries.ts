import { Lesson } from "@/model/lesson-model";

export const getLesson = async (lessonId: string) => {
  const lesson = await Lesson.findById(lessonId);
  return lesson;
};
