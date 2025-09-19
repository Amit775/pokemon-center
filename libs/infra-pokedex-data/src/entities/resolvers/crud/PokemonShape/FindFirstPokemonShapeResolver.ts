import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonShapeArgs } from "./args/FindFirstPokemonShapeArgs";
import { PokemonShape } from "../../../models/PokemonShape";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonShape)
export class FindFirstPokemonShapeResolver {
  @TypeGraphQL.Query(_returns => PokemonShape, {
    nullable: true
  })
  async findFirstPokemonShape(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonShapeArgs): Promise<PokemonShape | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonShapes.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
