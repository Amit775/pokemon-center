import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Generations } from "../../../models/Generations";
import { LocationGameIndices } from "../../../models/LocationGameIndices";
import { Locations } from "../../../models/Locations";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationGameIndices)
export class LocationGameIndicesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Locations, {
    nullable: false
  })
  async location(@TypeGraphQL.Root() locationGameIndices: LocationGameIndices, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Locations> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationGameIndices.findUniqueOrThrow({
      where: {
        location_id_generation_id: {
          location_id: locationGameIndices.location_id,
          generation_id: locationGameIndices.generation_id,
        },
      },
    }).location({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Generations, {
    nullable: false
  })
  async generation(@TypeGraphQL.Root() locationGameIndices: LocationGameIndices, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Generations> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationGameIndices.findUniqueOrThrow({
      where: {
        location_id_generation_id: {
          location_id: locationGameIndices.location_id,
          generation_id: locationGameIndices.generation_id,
        },
      },
    }).generation({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
