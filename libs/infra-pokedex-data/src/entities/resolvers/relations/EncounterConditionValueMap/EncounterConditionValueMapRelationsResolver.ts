import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Encounter } from "../../../models/Encounter";
import { EncounterConditionValue } from "../../../models/EncounterConditionValue";
import { EncounterConditionValueMap } from "../../../models/EncounterConditionValueMap";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterConditionValueMap)
export class EncounterConditionValueMapRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Encounter, {
    nullable: false
  })
  async encounter(@TypeGraphQL.Root() encounterConditionValueMap: EncounterConditionValueMap, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Encounter> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValueMap.findUniqueOrThrow({
      where: {
        encounter_id: encounterConditionValueMap.encounter_id,
      },
    }).encounter({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => EncounterConditionValue, {
    nullable: false
  })
  async conditionValue(@TypeGraphQL.Root() encounterConditionValueMap: EncounterConditionValueMap, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<EncounterConditionValue> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValueMap.findUniqueOrThrow({
      where: {
        encounter_id: encounterConditionValueMap.encounter_id,
      },
    }).conditionValue({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
