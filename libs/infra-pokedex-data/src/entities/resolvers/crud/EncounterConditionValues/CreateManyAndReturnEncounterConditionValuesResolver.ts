import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnEncounterConditionValuesArgs } from "./args/CreateManyAndReturnEncounterConditionValuesArgs";
import { EncounterConditionValues } from "../../../models/EncounterConditionValues";
import { CreateManyAndReturnEncounterConditionValues } from "../../outputs/CreateManyAndReturnEncounterConditionValues";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterConditionValues)
export class CreateManyAndReturnEncounterConditionValuesResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnEncounterConditionValues], {
    nullable: false
  })
  async createManyAndReturnEncounterConditionValues(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnEncounterConditionValuesArgs): Promise<CreateManyAndReturnEncounterConditionValues[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValues.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
