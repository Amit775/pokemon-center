import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneEncounterConditionValueMapArgs } from "./args/CreateOneEncounterConditionValueMapArgs";
import { EncounterConditionValueMap } from "../../../models/EncounterConditionValueMap";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterConditionValueMap)
export class CreateOneEncounterConditionValueMapResolver {
  @TypeGraphQL.Mutation(_returns => EncounterConditionValueMap, {
    nullable: false
  })
  async createOneEncounterConditionValueMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneEncounterConditionValueMapArgs): Promise<EncounterConditionValueMap> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValueMap.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
