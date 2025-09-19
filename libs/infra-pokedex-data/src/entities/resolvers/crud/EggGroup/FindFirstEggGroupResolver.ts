import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstEggGroupArgs } from "./args/FindFirstEggGroupArgs";
import { EggGroup } from "../../../models/EggGroup";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EggGroup)
export class FindFirstEggGroupResolver {
  @TypeGraphQL.Query(_returns => EggGroup, {
    nullable: true
  })
  async findFirstEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEggGroupArgs): Promise<EggGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).eggGroups.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
