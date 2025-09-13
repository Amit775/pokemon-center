import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueBerriesOrThrowArgs } from "./args/FindUniqueBerriesOrThrowArgs";
import { Berries } from "../../../models/Berries";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Berries)
export class FindUniqueBerriesOrThrowResolver {
  @TypeGraphQL.Query(_returns => Berries, {
    nullable: true
  })
  async findUniqueBerriesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueBerriesOrThrowArgs): Promise<Berries | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berries.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
