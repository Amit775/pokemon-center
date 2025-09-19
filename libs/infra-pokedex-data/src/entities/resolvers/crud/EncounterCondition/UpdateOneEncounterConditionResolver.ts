import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneEncounterConditionArgs } from "./args/UpdateOneEncounterConditionArgs";
import { EncounterCondition } from "../../../models/EncounterCondition";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterCondition)
export class UpdateOneEncounterConditionResolver {
  @TypeGraphQL.Mutation(_returns => EncounterCondition, {
    nullable: true
  })
  async updateOneEncounterCondition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneEncounterConditionArgs): Promise<EncounterCondition | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditions.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
