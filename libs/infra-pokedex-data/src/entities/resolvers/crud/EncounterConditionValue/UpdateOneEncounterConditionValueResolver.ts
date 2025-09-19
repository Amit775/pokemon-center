import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneEncounterConditionValueArgs } from "./args/UpdateOneEncounterConditionValueArgs";
import { EncounterConditionValue } from "../../../models/EncounterConditionValue";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterConditionValue)
export class UpdateOneEncounterConditionValueResolver {
  @TypeGraphQL.Mutation(_returns => EncounterConditionValue, {
    nullable: true
  })
  async updateOneEncounterConditionValue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneEncounterConditionValueArgs): Promise<EncounterConditionValue | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValues.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
