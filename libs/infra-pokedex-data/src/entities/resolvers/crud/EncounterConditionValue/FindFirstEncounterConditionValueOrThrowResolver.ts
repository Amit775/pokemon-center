import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstEncounterConditionValueOrThrowArgs } from "./args/FindFirstEncounterConditionValueOrThrowArgs";
import { EncounterConditionValue } from "../../../models/EncounterConditionValue";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterConditionValue)
export class FindFirstEncounterConditionValueOrThrowResolver {
  @TypeGraphQL.Query(_returns => EncounterConditionValue, {
    nullable: true
  })
  async findFirstEncounterConditionValueOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEncounterConditionValueOrThrowArgs): Promise<EncounterConditionValue | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValues.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
