import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyLocationAreasArgs } from "./args/FindManyLocationAreasArgs";
import { LocationAreas } from "../../../models/LocationAreas";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationAreas)
export class FindManyLocationAreasResolver {
  @TypeGraphQL.Query(_returns => [LocationAreas], {
    nullable: false
  })
  async findManyLocationAreas(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyLocationAreasArgs): Promise<LocationAreas[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreas.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
