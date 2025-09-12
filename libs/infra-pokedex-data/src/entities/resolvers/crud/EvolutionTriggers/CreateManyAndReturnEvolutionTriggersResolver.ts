import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnEvolutionTriggersArgs } from "./args/CreateManyAndReturnEvolutionTriggersArgs";
import { EvolutionTriggers } from "../../../models/EvolutionTriggers";
import { CreateManyAndReturnEvolutionTriggers } from "../../outputs/CreateManyAndReturnEvolutionTriggers";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EvolutionTriggers)
export class CreateManyAndReturnEvolutionTriggersResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnEvolutionTriggers], {
    nullable: false
  })
  async createManyAndReturnEvolutionTriggers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnEvolutionTriggersArgs): Promise<CreateManyAndReturnEvolutionTriggers[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionTriggers.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
