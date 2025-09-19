import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { EncounterCondition } from "../../../models/EncounterCondition";
import { EncounterConditionValue } from "../../../models/EncounterConditionValue";
import { EncounterConditionValuesArgs } from "./args/EncounterConditionValuesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterCondition)
export class EncounterConditionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [EncounterConditionValue], {
    nullable: false
  })
  async values(@TypeGraphQL.Root() encounterCondition: EncounterCondition, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: EncounterConditionValuesArgs): Promise<EncounterConditionValue[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditions.findUniqueOrThrow({
      where: {
        id: encounterCondition.id,
      },
    }).values({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
