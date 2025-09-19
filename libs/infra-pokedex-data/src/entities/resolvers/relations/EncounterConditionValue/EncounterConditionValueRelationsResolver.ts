import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { EncounterCondition } from "../../../models/EncounterCondition";
import { EncounterConditionValue } from "../../../models/EncounterConditionValue";
import { EncounterConditionValueMap } from "../../../models/EncounterConditionValueMap";
import { EncounterConditionValueConditionValueMapArgs } from "./args/EncounterConditionValueConditionValueMapArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterConditionValue)
export class EncounterConditionValueRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => EncounterCondition, {
    nullable: false
  })
  async condition(@TypeGraphQL.Root() encounterConditionValue: EncounterConditionValue, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<EncounterCondition> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValues.findUniqueOrThrow({
      where: {
        id: encounterConditionValue.id,
      },
    }).condition({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [EncounterConditionValueMap], {
    nullable: false
  })
  async conditionValueMap(@TypeGraphQL.Root() encounterConditionValue: EncounterConditionValue, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: EncounterConditionValueConditionValueMapArgs): Promise<EncounterConditionValueMap[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValues.findUniqueOrThrow({
      where: {
        id: encounterConditionValue.id,
      },
    }).conditionValueMap({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
