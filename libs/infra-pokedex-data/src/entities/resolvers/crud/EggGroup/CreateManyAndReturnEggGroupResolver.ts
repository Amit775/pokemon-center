import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnEggGroupArgs } from "./args/CreateManyAndReturnEggGroupArgs";
import { EggGroup } from "../../../models/EggGroup";
import { CreateManyAndReturnEggGroup } from "../../outputs/CreateManyAndReturnEggGroup";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EggGroup)
export class CreateManyAndReturnEggGroupResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnEggGroup], {
    nullable: false
  })
  async createManyAndReturnEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnEggGroupArgs): Promise<CreateManyAndReturnEggGroup[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).eggGroups.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
