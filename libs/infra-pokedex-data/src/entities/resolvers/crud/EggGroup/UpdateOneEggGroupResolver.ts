import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneEggGroupArgs } from "./args/UpdateOneEggGroupArgs";
import { EggGroup } from "../../../models/EggGroup";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EggGroup)
export class UpdateOneEggGroupResolver {
  @TypeGraphQL.Mutation(_returns => EggGroup, {
    nullable: true
  })
  async updateOneEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneEggGroupArgs): Promise<EggGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).eggGroups.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
