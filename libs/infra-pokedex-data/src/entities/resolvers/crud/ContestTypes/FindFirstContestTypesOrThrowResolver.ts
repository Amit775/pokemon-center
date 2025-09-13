import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstContestTypesOrThrowArgs } from "./args/FindFirstContestTypesOrThrowArgs";
import { ContestTypes } from "../../../models/ContestTypes";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContestTypes)
export class FindFirstContestTypesOrThrowResolver {
  @TypeGraphQL.Query(_returns => ContestTypes, {
    nullable: true
  })
  async findFirstContestTypesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstContestTypesOrThrowArgs): Promise<ContestTypes | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestTypes.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
