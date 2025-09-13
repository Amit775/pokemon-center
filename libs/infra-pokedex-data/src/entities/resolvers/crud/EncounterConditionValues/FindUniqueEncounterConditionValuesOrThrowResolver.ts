import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEncounterConditionValuesOrThrowArgs } from "./args/FindUniqueEncounterConditionValuesOrThrowArgs";
import { EncounterConditionValues } from "../../../models/EncounterConditionValues";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterConditionValues)
export class FindUniqueEncounterConditionValuesOrThrowResolver {
  @TypeGraphQL.Query(_returns => EncounterConditionValues, {
    nullable: true
  })
  async findUniqueEncounterConditionValuesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEncounterConditionValuesOrThrowArgs): Promise<EncounterConditionValues | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValues.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
