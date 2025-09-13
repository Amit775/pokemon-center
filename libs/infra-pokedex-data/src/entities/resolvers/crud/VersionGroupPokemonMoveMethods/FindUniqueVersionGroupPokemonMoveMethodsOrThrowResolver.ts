import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueVersionGroupPokemonMoveMethodsOrThrowArgs } from "./args/FindUniqueVersionGroupPokemonMoveMethodsOrThrowArgs";
import { VersionGroupPokemonMoveMethods } from "../../../models/VersionGroupPokemonMoveMethods";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VersionGroupPokemonMoveMethods)
export class FindUniqueVersionGroupPokemonMoveMethodsOrThrowResolver {
  @TypeGraphQL.Query(_returns => VersionGroupPokemonMoveMethods, {
    nullable: true
  })
  async findUniqueVersionGroupPokemonMoveMethodsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueVersionGroupPokemonMoveMethodsOrThrowArgs): Promise<VersionGroupPokemonMoveMethods | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupPokemonMoveMethods.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
