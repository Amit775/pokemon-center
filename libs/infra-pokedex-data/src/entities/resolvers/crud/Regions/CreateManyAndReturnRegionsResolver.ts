import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnRegionsArgs } from "./args/CreateManyAndReturnRegionsArgs";
import { Regions } from "../../../models/Regions";
import { CreateManyAndReturnRegions } from "../../outputs/CreateManyAndReturnRegions";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Regions)
export class CreateManyAndReturnRegionsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnRegions], {
    nullable: false
  })
  async createManyAndReturnRegions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnRegionsArgs): Promise<CreateManyAndReturnRegions[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).regions.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
