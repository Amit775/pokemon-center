import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyVersionGroupPokemonMoveMethodArgs } from "./args/FindManyVersionGroupPokemonMoveMethodArgs";
import { VersionGroupPokemonMoveMethod } from "../../../models/VersionGroupPokemonMoveMethod";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VersionGroupPokemonMoveMethod)
export class FindManyVersionGroupPokemonMoveMethodResolver {
  @TypeGraphQL.Query(_returns => [VersionGroupPokemonMoveMethod], {
    nullable: false
  })
  async versionGroupPokemonMoveMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyVersionGroupPokemonMoveMethodArgs): Promise<VersionGroupPokemonMoveMethod[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupPokemonMoveMethods.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
