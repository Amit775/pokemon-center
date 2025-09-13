import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstEncounterConditionValuesArgs } from "./args/FindFirstEncounterConditionValuesArgs";
import { EncounterConditionValues } from "../../../models/EncounterConditionValues";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterConditionValues)
export class FindFirstEncounterConditionValuesResolver {
  @TypeGraphQL.Query(_returns => EncounterConditionValues, {
    nullable: true
  })
  async findFirstEncounterConditionValues(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEncounterConditionValuesArgs): Promise<EncounterConditionValues | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValues.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
