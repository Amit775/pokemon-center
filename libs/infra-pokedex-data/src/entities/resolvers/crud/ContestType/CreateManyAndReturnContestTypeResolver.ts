import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnContestTypeArgs } from "./args/CreateManyAndReturnContestTypeArgs";
import { ContestType } from "../../../models/ContestType";
import { CreateManyAndReturnContestType } from "../../outputs/CreateManyAndReturnContestType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContestType)
export class CreateManyAndReturnContestTypeResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnContestType], {
    nullable: false
  })
  async createManyAndReturnContestType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnContestTypeArgs): Promise<CreateManyAndReturnContestType[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestTypes.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
