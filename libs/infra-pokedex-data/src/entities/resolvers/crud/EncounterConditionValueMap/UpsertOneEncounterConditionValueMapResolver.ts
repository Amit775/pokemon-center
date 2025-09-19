import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneEncounterConditionValueMapArgs } from "./args/UpsertOneEncounterConditionValueMapArgs";
import { EncounterConditionValueMap } from "../../../models/EncounterConditionValueMap";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterConditionValueMap)
export class UpsertOneEncounterConditionValueMapResolver {
  @TypeGraphQL.Mutation(_returns => EncounterConditionValueMap, {
    nullable: false
  })
  async upsertOneEncounterConditionValueMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneEncounterConditionValueMapArgs): Promise<EncounterConditionValueMap> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValueMap.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
