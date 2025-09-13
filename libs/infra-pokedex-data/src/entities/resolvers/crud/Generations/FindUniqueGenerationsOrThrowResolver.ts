import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueGenerationsOrThrowArgs } from "./args/FindUniqueGenerationsOrThrowArgs";
import { Generations } from "../../../models/Generations";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Generations)
export class FindUniqueGenerationsOrThrowResolver {
  @TypeGraphQL.Query(_returns => Generations, {
    nullable: true
  })
  async findUniqueGenerationsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGenerationsOrThrowArgs): Promise<Generations | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
