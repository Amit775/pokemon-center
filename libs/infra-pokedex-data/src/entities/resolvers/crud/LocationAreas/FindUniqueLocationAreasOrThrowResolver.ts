import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueLocationAreasOrThrowArgs } from "./args/FindUniqueLocationAreasOrThrowArgs";
import { LocationAreas } from "../../../models/LocationAreas";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationAreas)
export class FindUniqueLocationAreasOrThrowResolver {
  @TypeGraphQL.Query(_returns => LocationAreas, {
    nullable: true
  })
  async findUniqueLocationAreasOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLocationAreasOrThrowArgs): Promise<LocationAreas | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreas.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
