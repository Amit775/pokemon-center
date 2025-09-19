import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstEncounterConditionOrThrowArgs } from "./args/FindFirstEncounterConditionOrThrowArgs";
import { EncounterCondition } from "../../../models/EncounterCondition";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterCondition)
export class FindFirstEncounterConditionOrThrowResolver {
  @TypeGraphQL.Query(_returns => EncounterCondition, {
    nullable: true
  })
  async findFirstEncounterConditionOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEncounterConditionOrThrowArgs): Promise<EncounterCondition | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditions.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
