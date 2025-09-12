import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneEvolutionTriggersArgs } from "./args/DeleteOneEvolutionTriggersArgs";
import { EvolutionTriggers } from "../../../models/EvolutionTriggers";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EvolutionTriggers)
export class DeleteOneEvolutionTriggersResolver {
  @TypeGraphQL.Mutation(_returns => EvolutionTriggers, {
    nullable: true
  })
  async deleteOneEvolutionTriggers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneEvolutionTriggersArgs): Promise<EvolutionTriggers | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionTriggers.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
