import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnBerryArgs } from "./args/CreateManyAndReturnBerryArgs";
import { Berry } from "../../../models/Berry";
import { CreateManyAndReturnBerry } from "../../outputs/CreateManyAndReturnBerry";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Berry)
export class CreateManyAndReturnBerryResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnBerry], {
    nullable: false
  })
  async createManyAndReturnBerry(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnBerryArgs): Promise<CreateManyAndReturnBerry[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berries.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
