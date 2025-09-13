import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonShapesOrThrowArgs } from "./args/FindUniquePokemonShapesOrThrowArgs";
import { PokemonShapes } from "../../../models/PokemonShapes";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonShapes)
export class FindUniquePokemonShapesOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonShapes, {
    nullable: true
  })
  async findUniquePokemonShapesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonShapesOrThrowArgs): Promise<PokemonShapes | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonShapes.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
