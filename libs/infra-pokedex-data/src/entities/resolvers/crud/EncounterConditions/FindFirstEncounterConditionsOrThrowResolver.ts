import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstEncounterConditionsOrThrowArgs } from "./args/FindFirstEncounterConditionsOrThrowArgs";
import { EncounterConditions } from "../../../models/EncounterConditions";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterConditions)
export class FindFirstEncounterConditionsOrThrowResolver {
  @TypeGraphQL.Query(_returns => EncounterConditions, {
    nullable: true
  })
  async findFirstEncounterConditionsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEncounterConditionsOrThrowArgs): Promise<EncounterConditions | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditions.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
