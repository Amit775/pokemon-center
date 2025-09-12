import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnContestTypesArgs } from "./args/CreateManyAndReturnContestTypesArgs";
import { ContestTypes } from "../../../models/ContestTypes";
import { CreateManyAndReturnContestTypes } from "../../outputs/CreateManyAndReturnContestTypes";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContestTypes)
export class CreateManyAndReturnContestTypesResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnContestTypes], {
    nullable: false
  })
  async createManyAndReturnContestTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnContestTypesArgs): Promise<CreateManyAndReturnContestTypes[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestTypes.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
