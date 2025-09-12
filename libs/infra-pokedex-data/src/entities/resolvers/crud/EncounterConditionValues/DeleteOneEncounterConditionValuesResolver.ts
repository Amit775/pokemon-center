import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneEncounterConditionValuesArgs } from "./args/DeleteOneEncounterConditionValuesArgs";
import { EncounterConditionValues } from "../../../models/EncounterConditionValues";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterConditionValues)
export class DeleteOneEncounterConditionValuesResolver {
  @TypeGraphQL.Mutation(_returns => EncounterConditionValues, {
    nullable: true
  })
  async deleteOneEncounterConditionValues(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneEncounterConditionValuesArgs): Promise<EncounterConditionValues | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValues.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
