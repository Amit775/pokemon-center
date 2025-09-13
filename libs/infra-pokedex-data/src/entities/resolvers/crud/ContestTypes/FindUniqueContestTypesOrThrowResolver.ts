import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueContestTypesOrThrowArgs } from "./args/FindUniqueContestTypesOrThrowArgs";
import { ContestTypes } from "../../../models/ContestTypes";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContestTypes)
export class FindUniqueContestTypesOrThrowResolver {
  @TypeGraphQL.Query(_returns => ContestTypes, {
    nullable: true
  })
  async findUniqueContestTypesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueContestTypesOrThrowArgs): Promise<ContestTypes | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestTypes.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
