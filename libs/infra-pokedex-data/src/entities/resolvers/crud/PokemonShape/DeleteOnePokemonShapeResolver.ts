import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOnePokemonShapeArgs } from "./args/DeleteOnePokemonShapeArgs";
import { PokemonShape } from "../../../models/PokemonShape";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonShape)
export class DeleteOnePokemonShapeResolver {
  @TypeGraphQL.Mutation(_returns => PokemonShape, {
    nullable: true
  })
  async deleteOnePokemonShape(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOnePokemonShapeArgs): Promise<PokemonShape | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonShapes.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
