import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonShapesArgs } from "./args/FindUniquePokemonShapesArgs";
import { PokemonShapes } from "../../../models/PokemonShapes";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonShapes)
export class FindUniquePokemonShapesResolver {
  @TypeGraphQL.Query(_returns => PokemonShapes, {
    nullable: true
  })
  async findUniquePokemonShapes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonShapesArgs): Promise<PokemonShapes | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonShapes.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
