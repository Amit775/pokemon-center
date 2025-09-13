import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyEggGroupsArgs } from "./args/FindManyEggGroupsArgs";
import { EggGroups } from "../../../models/EggGroups";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EggGroups)
export class FindManyEggGroupsResolver {
  @TypeGraphQL.Query(_returns => [EggGroups], {
    nullable: false
  })
  async findManyEggGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyEggGroupsArgs): Promise<EggGroups[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).eggGroups.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
