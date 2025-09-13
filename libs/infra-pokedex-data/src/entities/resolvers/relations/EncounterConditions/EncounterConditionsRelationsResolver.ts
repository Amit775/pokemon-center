import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { EncounterConditionValues } from "../../../models/EncounterConditionValues";
import { EncounterConditions } from "../../../models/EncounterConditions";
import { EncounterConditionsValuesArgs } from "./args/EncounterConditionsValuesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterConditions)
export class EncounterConditionsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [EncounterConditionValues], {
    nullable: false
  })
  async values(@TypeGraphQL.Root() encounterConditions: EncounterConditions, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: EncounterConditionsValuesArgs): Promise<EncounterConditionValues[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditions.findUniqueOrThrow({
      where: {
        id: encounterConditions.id,
      },
    }).values({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
