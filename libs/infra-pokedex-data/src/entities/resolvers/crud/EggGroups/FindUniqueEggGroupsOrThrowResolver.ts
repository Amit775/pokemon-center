import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEggGroupsOrThrowArgs } from "./args/FindUniqueEggGroupsOrThrowArgs";
import { EggGroups } from "../../../models/EggGroups";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EggGroups)
export class FindUniqueEggGroupsOrThrowResolver {
  @TypeGraphQL.Query(_returns => EggGroups, {
    nullable: true
  })
  async findUniqueEggGroupsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEggGroupsOrThrowArgs): Promise<EggGroups | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).eggGroups.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
