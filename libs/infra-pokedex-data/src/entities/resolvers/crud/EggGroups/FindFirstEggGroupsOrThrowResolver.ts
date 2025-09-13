import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstEggGroupsOrThrowArgs } from "./args/FindFirstEggGroupsOrThrowArgs";
import { EggGroups } from "../../../models/EggGroups";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EggGroups)
export class FindFirstEggGroupsOrThrowResolver {
  @TypeGraphQL.Query(_returns => EggGroups, {
    nullable: true
  })
  async findFirstEggGroupsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEggGroupsOrThrowArgs): Promise<EggGroups | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).eggGroups.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
