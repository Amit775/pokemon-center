import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonShapeOrThrowArgs } from "./args/FindUniquePokemonShapeOrThrowArgs";
import { PokemonShape } from "../../../models/PokemonShape";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonShape)
export class FindUniquePokemonShapeOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonShape, {
    nullable: true
  })
  async getPokemonShape(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonShapeOrThrowArgs): Promise<PokemonShape | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonShapes.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
