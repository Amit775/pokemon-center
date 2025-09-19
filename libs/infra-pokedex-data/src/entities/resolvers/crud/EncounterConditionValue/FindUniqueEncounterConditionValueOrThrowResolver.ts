import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEncounterConditionValueOrThrowArgs } from "./args/FindUniqueEncounterConditionValueOrThrowArgs";
import { EncounterConditionValue } from "../../../models/EncounterConditionValue";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterConditionValue)
export class FindUniqueEncounterConditionValueOrThrowResolver {
  @TypeGraphQL.Query(_returns => EncounterConditionValue, {
    nullable: true
  })
  async getEncounterConditionValue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEncounterConditionValueOrThrowArgs): Promise<EncounterConditionValue | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValues.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
