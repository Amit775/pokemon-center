import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Generation } from "../../../models/Generation";
import { Location } from "../../../models/Location";
import { LocationGameIndex } from "../../../models/LocationGameIndex";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationGameIndex)
export class LocationGameIndexRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Location, {
    nullable: false
  })
  async location(@TypeGraphQL.Root() locationGameIndex: LocationGameIndex, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Location> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationGameIndices.findUniqueOrThrow({
      where: {
        location_id_generation_id: {
          location_id: locationGameIndex.location_id,
          generation_id: locationGameIndex.generation_id,
        },
      },
    }).location({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Generation, {
    nullable: false
  })
  async generation(@TypeGraphQL.Root() locationGameIndex: LocationGameIndex, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Generation> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationGameIndices.findUniqueOrThrow({
      where: {
        location_id_generation_id: {
          location_id: locationGameIndex.location_id,
          generation_id: locationGameIndex.generation_id,
        },
      },
    }).generation({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
