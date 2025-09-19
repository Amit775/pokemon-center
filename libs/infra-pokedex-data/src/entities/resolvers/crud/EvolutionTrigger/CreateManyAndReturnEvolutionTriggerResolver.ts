import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnEvolutionTriggerArgs } from "./args/CreateManyAndReturnEvolutionTriggerArgs";
import { EvolutionTrigger } from "../../../models/EvolutionTrigger";
import { CreateManyAndReturnEvolutionTrigger } from "../../outputs/CreateManyAndReturnEvolutionTrigger";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EvolutionTrigger)
export class CreateManyAndReturnEvolutionTriggerResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnEvolutionTrigger], {
    nullable: false
  })
  async createManyAndReturnEvolutionTrigger(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnEvolutionTriggerArgs): Promise<CreateManyAndReturnEvolutionTrigger[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionTriggers.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
