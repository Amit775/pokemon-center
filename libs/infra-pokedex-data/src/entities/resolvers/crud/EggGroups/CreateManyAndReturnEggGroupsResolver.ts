import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnEggGroupsArgs } from "./args/CreateManyAndReturnEggGroupsArgs";
import { EggGroups } from "../../../models/EggGroups";
import { CreateManyAndReturnEggGroups } from "../../outputs/CreateManyAndReturnEggGroups";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EggGroups)
export class CreateManyAndReturnEggGroupsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnEggGroups], {
    nullable: false
  })
  async createManyAndReturnEggGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnEggGroupsArgs): Promise<CreateManyAndReturnEggGroups[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).eggGroups.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
