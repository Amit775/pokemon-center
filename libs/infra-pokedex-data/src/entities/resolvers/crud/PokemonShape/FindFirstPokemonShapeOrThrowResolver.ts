import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonShapeOrThrowArgs } from "./args/FindFirstPokemonShapeOrThrowArgs";
import { PokemonShape } from "../../../models/PokemonShape";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonShape)
export class FindFirstPokemonShapeOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonShape, {
    nullable: true
  })
  async findFirstPokemonShapeOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonShapeOrThrowArgs): Promise<PokemonShape | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonShapes.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
