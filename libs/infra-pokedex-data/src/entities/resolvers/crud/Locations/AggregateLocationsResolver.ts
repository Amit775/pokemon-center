import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLocationsArgs } from "./args/AggregateLocationsArgs";
import { Locations } from "../../../models/Locations";
import { AggregateLocations } from "../../outputs/AggregateLocations";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Locations)
export class AggregateLocationsResolver {
  @TypeGraphQL.Query(_returns => AggregateLocations, {
    nullable: false
  })
  async aggregateLocations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLocationsArgs): Promise<AggregateLocations> {
    return getPrismaFromContext(ctx).locations.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
