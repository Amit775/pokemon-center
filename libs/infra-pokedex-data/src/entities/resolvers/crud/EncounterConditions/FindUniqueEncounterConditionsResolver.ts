import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEncounterConditionsArgs } from "./args/FindUniqueEncounterConditionsArgs";
import { EncounterConditions } from "../../../models/EncounterConditions";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterConditions)
export class FindUniqueEncounterConditionsResolver {
  @TypeGraphQL.Query(_returns => EncounterConditions, {
    nullable: true
  })
  async findUniqueEncounterConditions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEncounterConditionsArgs): Promise<EncounterConditions | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditions.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
