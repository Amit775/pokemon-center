import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnEncounterConditionValueMapArgs } from "./args/CreateManyAndReturnEncounterConditionValueMapArgs";
import { EncounterConditionValueMap } from "../../../models/EncounterConditionValueMap";
import { CreateManyAndReturnEncounterConditionValueMap } from "../../outputs/CreateManyAndReturnEncounterConditionValueMap";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterConditionValueMap)
export class CreateManyAndReturnEncounterConditionValueMapResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnEncounterConditionValueMap], {
    nullable: false
  })
  async createManyAndReturnEncounterConditionValueMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnEncounterConditionValueMapArgs): Promise<CreateManyAndReturnEncounterConditionValueMap[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditionValueMap.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
