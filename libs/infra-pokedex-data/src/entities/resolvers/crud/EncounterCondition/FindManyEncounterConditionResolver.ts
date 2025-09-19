import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyEncounterConditionArgs } from "./args/FindManyEncounterConditionArgs";
import { EncounterCondition } from "../../../models/EncounterCondition";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterCondition)
export class FindManyEncounterConditionResolver {
  @TypeGraphQL.Query(_returns => [EncounterCondition], {
    nullable: false
  })
  async encounterConditions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyEncounterConditionArgs): Promise<EncounterCondition[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditions.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
