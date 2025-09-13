import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonShapesArgs } from "./args/FindFirstPokemonShapesArgs";
import { PokemonShapes } from "../../../models/PokemonShapes";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonShapes)
export class FindFirstPokemonShapesResolver {
  @TypeGraphQL.Query(_returns => PokemonShapes, {
    nullable: true
  })
  async findFirstPokemonShapes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonShapesArgs): Promise<PokemonShapes | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonShapes.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
