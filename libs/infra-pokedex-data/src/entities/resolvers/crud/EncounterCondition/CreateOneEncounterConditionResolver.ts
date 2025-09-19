import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneEncounterConditionArgs } from "./args/CreateOneEncounterConditionArgs";
import { EncounterCondition } from "../../../models/EncounterCondition";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterCondition)
export class CreateOneEncounterConditionResolver {
  @TypeGraphQL.Mutation(_returns => EncounterCondition, {
    nullable: false
  })
  async createOneEncounterCondition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneEncounterConditionArgs): Promise<EncounterCondition> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditions.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
