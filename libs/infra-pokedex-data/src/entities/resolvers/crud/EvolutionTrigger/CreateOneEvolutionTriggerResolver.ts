import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneEvolutionTriggerArgs } from "./args/CreateOneEvolutionTriggerArgs";
import { EvolutionTrigger } from "../../../models/EvolutionTrigger";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EvolutionTrigger)
export class CreateOneEvolutionTriggerResolver {
  @TypeGraphQL.Mutation(_returns => EvolutionTrigger, {
    nullable: false
  })
  async createOneEvolutionTrigger(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneEvolutionTriggerArgs): Promise<EvolutionTrigger> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionTriggers.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
