import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { EncounterConditionValueMap } from "../../../models/EncounterConditionValueMap";
import { EncounterConditionValues } from "../../../models/EncounterConditionValues";
import { Encounters } from "../../../models/Encounters";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterConditionValueMap)
export class EncounterConditionValueMapRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Encounters, {
    nullable: false
  })
  async encounter(@TypeGraphQL.Root() encounterConditionValueMap: EncounterConditionValueMap, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Encounters> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValueMap.findUniqueOrThrow({
      where: {
        encounter_id: encounterConditionValueMap.encounter_id,
      },
    }).encounter({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => EncounterConditionValues, {
    nullable: false
  })
  async conditionValue(@TypeGraphQL.Root() encounterConditionValueMap: EncounterConditionValueMap, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<EncounterConditionValues> {
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
