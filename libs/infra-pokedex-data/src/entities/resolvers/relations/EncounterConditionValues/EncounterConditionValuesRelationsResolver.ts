import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { EncounterConditionValueMap } from "../../../models/EncounterConditionValueMap";
import { EncounterConditionValues } from "../../../models/EncounterConditionValues";
import { EncounterConditions } from "../../../models/EncounterConditions";
import { EncounterConditionValuesConditionValueMapArgs } from "./args/EncounterConditionValuesConditionValueMapArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterConditionValues)
export class EncounterConditionValuesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => EncounterConditions, {
    nullable: false
  })
  async condition(@TypeGraphQL.Root() encounterConditionValues: EncounterConditionValues, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<EncounterConditions> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValues.findUniqueOrThrow({
      where: {
        id: encounterConditionValues.id,
      },
    }).condition({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [EncounterConditionValueMap], {
    nullable: false
  })
  async conditionValueMap(@TypeGraphQL.Root() encounterConditionValues: EncounterConditionValues, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: EncounterConditionValuesConditionValueMapArgs): Promise<EncounterConditionValueMap[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValues.findUniqueOrThrow({
      where: {
        id: encounterConditionValues.id,
      },
    }).conditionValueMap({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
