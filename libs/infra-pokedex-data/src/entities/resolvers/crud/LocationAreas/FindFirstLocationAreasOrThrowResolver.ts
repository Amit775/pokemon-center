import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstLocationAreasOrThrowArgs } from "./args/FindFirstLocationAreasOrThrowArgs";
import { LocationAreas } from "../../../models/LocationAreas";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationAreas)
export class FindFirstLocationAreasOrThrowResolver {
  @TypeGraphQL.Query(_returns => LocationAreas, {
    nullable: true
  })
  async findFirstLocationAreasOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLocationAreasOrThrowArgs): Promise<LocationAreas | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreas.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
