import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstEncounterConditionValuesOrThrowArgs } from "./args/FindFirstEncounterConditionValuesOrThrowArgs";
import { EncounterConditionValues } from "../../../models/EncounterConditionValues";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterConditionValues)
export class FindFirstEncounterConditionValuesOrThrowResolver {
  @TypeGraphQL.Query(_returns => EncounterConditionValues, {
    nullable: true
  })
  async findFirstEncounterConditionValuesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEncounterConditionValuesOrThrowArgs): Promise<EncounterConditionValues | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValues.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
