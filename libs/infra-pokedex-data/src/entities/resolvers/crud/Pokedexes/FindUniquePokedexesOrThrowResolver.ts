import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokedexesOrThrowArgs } from "./args/FindUniquePokedexesOrThrowArgs";
import { Pokedexes } from "../../../models/Pokedexes";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pokedexes)
export class FindUniquePokedexesOrThrowResolver {
  @TypeGraphQL.Query(_returns => Pokedexes, {
    nullable: true
  })
  async findUniquePokedexesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokedexesOrThrowArgs): Promise<Pokedexes | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexes.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
