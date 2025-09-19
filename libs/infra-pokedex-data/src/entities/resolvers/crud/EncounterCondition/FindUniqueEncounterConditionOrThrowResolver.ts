import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEncounterConditionOrThrowArgs } from "./args/FindUniqueEncounterConditionOrThrowArgs";
import { EncounterCondition } from "../../../models/EncounterCondition";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterCondition)
export class FindUniqueEncounterConditionOrThrowResolver {
  @TypeGraphQL.Query(_returns => EncounterCondition, {
    nullable: true
  })
  async getEncounterCondition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEncounterConditionOrThrowArgs): Promise<EncounterCondition | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditions.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
