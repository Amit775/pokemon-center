import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnRegionArgs } from "./args/CreateManyAndReturnRegionArgs";
import { Region } from "../../../models/Region";
import { CreateManyAndReturnRegion } from "../../outputs/CreateManyAndReturnRegion";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Region)
export class CreateManyAndReturnRegionResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnRegion], {
    nullable: false
  })
  async createManyAndReturnRegion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnRegionArgs): Promise<CreateManyAndReturnRegion[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).regions.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
