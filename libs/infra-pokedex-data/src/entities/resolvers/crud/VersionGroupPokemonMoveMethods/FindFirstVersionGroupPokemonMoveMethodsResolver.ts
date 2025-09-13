import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstVersionGroupPokemonMoveMethodsArgs } from "./args/FindFirstVersionGroupPokemonMoveMethodsArgs";
import { VersionGroupPokemonMoveMethods } from "../../../models/VersionGroupPokemonMoveMethods";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VersionGroupPokemonMoveMethods)
export class FindFirstVersionGroupPokemonMoveMethodsResolver {
  @TypeGraphQL.Query(_returns => VersionGroupPokemonMoveMethods, {
    nullable: true
  })
  async findFirstVersionGroupPokemonMoveMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVersionGroupPokemonMoveMethodsArgs): Promise<VersionGroupPokemonMoveMethods | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupPokemonMoveMethods.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
