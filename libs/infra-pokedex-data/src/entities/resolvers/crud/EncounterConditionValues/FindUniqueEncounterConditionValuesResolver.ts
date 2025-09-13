import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEncounterConditionValuesArgs } from "./args/FindUniqueEncounterConditionValuesArgs";
import { EncounterConditionValues } from "../../../models/EncounterConditionValues";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterConditionValues)
export class FindUniqueEncounterConditionValuesResolver {
  @TypeGraphQL.Query(_returns => EncounterConditionValues, {
    nullable: true
  })
  async findUniqueEncounterConditionValues(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEncounterConditionValuesArgs): Promise<EncounterConditionValues | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValues.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
