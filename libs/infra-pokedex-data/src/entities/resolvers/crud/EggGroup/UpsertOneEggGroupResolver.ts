import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneEggGroupArgs } from "./args/UpsertOneEggGroupArgs";
import { EggGroup } from "../../../models/EggGroup";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EggGroup)
export class UpsertOneEggGroupResolver {
  @TypeGraphQL.Mutation(_returns => EggGroup, {
    nullable: false
  })
  async upsertOneEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneEggGroupArgs): Promise<EggGroup> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).eggGroups.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
