import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnEncounterConditionArgs } from "./args/CreateManyAndReturnEncounterConditionArgs";
import { EncounterCondition } from "../../../models/EncounterCondition";
import { CreateManyAndReturnEncounterCondition } from "../../outputs/CreateManyAndReturnEncounterCondition";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterCondition)
export class CreateManyAndReturnEncounterConditionResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnEncounterCondition], {
    nullable: false
  })
  async createManyAndReturnEncounterCondition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnEncounterConditionArgs): Promise<CreateManyAndReturnEncounterCondition[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterConditions.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
