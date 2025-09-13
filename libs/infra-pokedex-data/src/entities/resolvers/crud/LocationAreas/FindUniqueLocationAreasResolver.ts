import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueLocationAreasArgs } from "./args/FindUniqueLocationAreasArgs";
import { LocationAreas } from "../../../models/LocationAreas";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationAreas)
export class FindUniqueLocationAreasResolver {
  @TypeGraphQL.Query(_returns => LocationAreas, {
    nullable: true
  })
  async findUniqueLocationAreas(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLocationAreasArgs): Promise<LocationAreas | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreas.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
