import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueGenerationOrThrowArgs } from "./args/FindUniqueGenerationOrThrowArgs";
import { Generation } from "../../../models/Generation";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Generation)
export class FindUniqueGenerationOrThrowResolver {
  @TypeGraphQL.Query(_returns => Generation, {
    nullable: true
  })
  async getGeneration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGenerationOrThrowArgs): Promise<Generation | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
