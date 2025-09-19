import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneContestTypeArgs } from "./args/CreateOneContestTypeArgs";
import { ContestType } from "../../../models/ContestType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContestType)
export class CreateOneContestTypeResolver {
  @TypeGraphQL.Mutation(_returns => ContestType, {
    nullable: false
  })
  async createOneContestType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneContestTypeArgs): Promise<ContestType> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestTypes.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
