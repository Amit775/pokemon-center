import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEggGroupOrThrowArgs } from "./args/FindUniqueEggGroupOrThrowArgs";
import { EggGroup } from "../../../models/EggGroup";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EggGroup)
export class FindUniqueEggGroupOrThrowResolver {
  @TypeGraphQL.Query(_returns => EggGroup, {
    nullable: true
  })
  async getEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEggGroupOrThrowArgs): Promise<EggGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).eggGroups.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
