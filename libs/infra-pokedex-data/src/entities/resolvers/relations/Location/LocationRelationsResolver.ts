import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Location } from "../../../models/Location";
import { LocationArea } from "../../../models/LocationArea";
import { LocationGameIndex } from "../../../models/LocationGameIndex";
import { PokemonEvolution } from "../../../models/PokemonEvolution";
import { Region } from "../../../models/Region";
import { LocationAreasArgs } from "./args/LocationAreasArgs";
import { LocationEvolutionArgs } from "./args/LocationEvolutionArgs";
import { LocationGameIndicesArgs } from "./args/LocationGameIndicesArgs";
import { LocationRegionArgs } from "./args/LocationRegionArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Location)
export class LocationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Region, {
    nullable: true
  })
  async region(@TypeGraphQL.Root() location: Location, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: LocationRegionArgs): Promise<Region | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locations.findUniqueOrThrow({
      where: {
        id: location.id,
      },
    }).region({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [LocationArea], {
    nullable: false
  })
  async areas(@TypeGraphQL.Root() location: Location, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: LocationAreasArgs): Promise<LocationArea[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locations.findUniqueOrThrow({
      where: {
        id: location.id,
      },
    }).areas({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [LocationGameIndex], {
    nullable: false
  })
  async gameIndices(@TypeGraphQL.Root() location: Location, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: LocationGameIndicesArgs): Promise<LocationGameIndex[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locations.findUniqueOrThrow({
      where: {
        id: location.id,
      },
    }).gameIndices({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonEvolution], {
    nullable: false
  })
  async evolution(@TypeGraphQL.Root() location: Location, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: LocationEvolutionArgs): Promise<PokemonEvolution[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locations.findUniqueOrThrow({
      where: {
        id: location.id,
      },
    }).evolution({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
