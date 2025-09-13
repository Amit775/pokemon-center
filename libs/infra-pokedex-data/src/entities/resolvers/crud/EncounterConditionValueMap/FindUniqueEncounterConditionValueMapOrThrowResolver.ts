import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEncounterConditionValueMapOrThrowArgs } from "./args/FindUniqueEncounterConditionValueMapOrThrowArgs";
import { EncounterConditionValueMap } from "../../../models/EncounterConditionValueMap";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterConditionValueMap)
export class FindUniqueEncounterConditionValueMapOrThrowResolver {
  @TypeGraphQL.Query(_returns => EncounterConditionValueMap, {
    nullable: true
  })
  async getEncounterConditionValueMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEncounterConditionValueMapOrThrowArgs): Promise<EncounterConditionValueMap | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValueMap.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
