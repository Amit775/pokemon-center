import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneEggGroupArgs } from "./args/CreateOneEggGroupArgs";
import { EggGroup } from "../../../models/EggGroup";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EggGroup)
export class CreateOneEggGroupResolver {
  @TypeGraphQL.Mutation(_returns => EggGroup, {
    nullable: false
  })
  async createOneEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneEggGroupArgs): Promise<EggGroup> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).eggGroups.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
