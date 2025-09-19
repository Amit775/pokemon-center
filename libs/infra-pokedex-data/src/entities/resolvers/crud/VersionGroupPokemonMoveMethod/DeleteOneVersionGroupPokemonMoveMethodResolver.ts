import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneVersionGroupPokemonMoveMethodArgs } from "./args/DeleteOneVersionGroupPokemonMoveMethodArgs";
import { VersionGroupPokemonMoveMethod } from "../../../models/VersionGroupPokemonMoveMethod";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VersionGroupPokemonMoveMethod)
export class DeleteOneVersionGroupPokemonMoveMethodResolver {
  @TypeGraphQL.Mutation(_returns => VersionGroupPokemonMoveMethod, {
    nullable: true
  })
  async deleteOneVersionGroupPokemonMoveMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneVersionGroupPokemonMoveMethodArgs): Promise<VersionGroupPokemonMoveMethod | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupPokemonMoveMethods.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
