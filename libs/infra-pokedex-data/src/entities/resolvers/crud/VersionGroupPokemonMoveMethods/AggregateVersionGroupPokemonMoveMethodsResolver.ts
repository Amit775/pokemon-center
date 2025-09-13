import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateVersionGroupPokemonMoveMethodsArgs } from "./args/AggregateVersionGroupPokemonMoveMethodsArgs";
import { VersionGroupPokemonMoveMethods } from "../../../models/VersionGroupPokemonMoveMethods";
import { AggregateVersionGroupPokemonMoveMethods } from "../../outputs/AggregateVersionGroupPokemonMoveMethods";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VersionGroupPokemonMoveMethods)
export class AggregateVersionGroupPokemonMoveMethodsResolver {
  @TypeGraphQL.Query(_returns => AggregateVersionGroupPokemonMoveMethods, {
    nullable: false
  })
  async aggregateVersionGroupPokemonMoveMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVersionGroupPokemonMoveMethodsArgs): Promise<AggregateVersionGroupPokemonMoveMethods> {
    return getPrismaFromContext(ctx).versionGroupPokemonMoveMethods.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
