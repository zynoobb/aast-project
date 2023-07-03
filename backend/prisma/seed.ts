import database from "../src/db";
import { QUESTION_LIST } from "../src/common/questions/questionList";
import { ARTIST_LIST } from "../src/common/artists/artistList";

async function seeds() {
  const questions = await database.question.createMany({
    data: QUESTION_LIST,
  });

  console.log(`create ${questions.count} questions.`);

  const artists = await database.artist.createMany({
    data: ARTIST_LIST,
  });

  console.log(`create ${artists.count} artists.`);
}

seeds()
  .then(async () => {
    await database.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await database.$disconnect();
    process.exit(1);
  });
