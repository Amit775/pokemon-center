import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Generations } from "../models/Generations";
import { Locations } from "../models/Locations";
import { Pokedexes } from "../models/Pokedexes";
import { VersionGroupRegions } from "../models/VersionGroupRegions";
import { RegionsCount } from "../resolvers/outputs/RegionsCount";

@TypeGraphQL.ObjectType("Regions", {})
export class Regions {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  generations?: Generations[];

  locations?: Locations[];

  pokedexes?: Pokedexes[];

  versionGroups?: VersionGroupRegions[];

  @TypeGraphQL.Field(_type => RegionsCount, {
    nullable: true
  })
  _count?: RegionsCount | null;
}
