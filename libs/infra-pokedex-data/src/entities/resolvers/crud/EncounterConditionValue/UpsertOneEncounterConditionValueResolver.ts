import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneEncounterConditionValueArgs } from "./args/UpsertOneEncounterConditionValueArgs";
import { EncounterConditionValue } from "../../../models/EncounterConditionValue";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterConditionValue)
export class UpsertOneEncounterConditionValueResolver {
  @TypeGraphQL.Mutation(_returns => EncounterConditionValue, {
    nullable: false
  })
  async upsertOneEncounterConditionValue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneEncounterConditionValueArgs): Promise<EncounterConditionValue> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValues.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
