import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { LocationAreas } from "../../../models/LocationAreas";
import { LocationGameIndices } from "../../../models/LocationGameIndices";
import { Locations } from "../../../models/Locations";
import { PokemonEvolution } from "../../../models/PokemonEvolution";
import { Regions } from "../../../models/Regions";
import { LocationsAreasArgs } from "./args/LocationsAreasArgs";
import { LocationsEvolutionArgs } from "./args/LocationsEvolutionArgs";
import { LocationsGameIndicesArgs } from "./args/LocationsGameIndicesArgs";
import { LocationsRegionArgs } from "./args/LocationsRegionArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Locations)
export class LocationsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Regions, {
    nullable: true
  })
  async region(@TypeGraphQL.Root() locations: Locations, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: LocationsRegionArgs): Promise<Regions | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locations.findUniqueOrThrow({
      where: {
        id: locations.id,
      },
    }).region({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [LocationAreas], {
    nullable: false
  })
  async areas(@TypeGraphQL.Root() locations: Locations, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: LocationsAreasArgs): Promise<LocationAreas[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locations.findUniqueOrThrow({
      where: {
        id: locations.id,
      },
    }).areas({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [LocationGameIndices], {
    nullable: false
  })
  async gameIndices(@TypeGraphQL.Root() locations: Locations, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: LocationsGameIndicesArgs): Promise<LocationGameIndices[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locations.findUniqueOrThrow({
      where: {
        id: locations.id,
      },
    }).gameIndices({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonEvolution], {
    nullable: false
  })
  async evolution(@TypeGraphQL.Root() locations: Locations, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: LocationsEvolutionArgs): Promise<PokemonEvolution[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locations.findUniqueOrThrow({
      where: {
        id: locations.id,
      },
    }).evolution({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
