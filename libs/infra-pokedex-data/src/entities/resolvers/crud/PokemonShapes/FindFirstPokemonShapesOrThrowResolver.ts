import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonShapesOrThrowArgs } from "./args/FindFirstPokemonShapesOrThrowArgs";
import { PokemonShapes } from "../../../models/PokemonShapes";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonShapes)
export class FindFirstPokemonShapesOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonShapes, {
    nullable: true
  })
  async findFirstPokemonShapesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonShapesOrThrowArgs): Promise<PokemonShapes | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonShapes.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
