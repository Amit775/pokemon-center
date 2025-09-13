import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEncounterConditionsOrThrowArgs } from "./args/FindUniqueEncounterConditionsOrThrowArgs";
import { EncounterConditions } from "../../../models/EncounterConditions";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterConditions)
export class FindUniqueEncounterConditionsOrThrowResolver {
  @TypeGraphQL.Query(_returns => EncounterConditions, {
    nullable: true
  })
  async findUniqueEncounterConditionsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEncounterConditionsOrThrowArgs): Promise<EncounterConditions | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditions.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
