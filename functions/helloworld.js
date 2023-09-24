export async function onRequest(context) {
    const ps = context.env.DB.prepare('SELECT * from players');
    const data = await ps.first();

    return Response.json(data);
  }