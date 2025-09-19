import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstLocationAreaOrThrowArgs } from "./args/FindFirstLocationAreaOrThrowArgs";
import { LocationArea } from "../../../models/LocationArea";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationArea)
export class FindFirstLocationAreaOrThrowResolver {
  @TypeGraphQL.Query(_returns => LocationArea, {
    nullable: true
  })
  async findFirstLocationAreaOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLocationAreaOrThrowArgs): Promise<LocationArea | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreas.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
