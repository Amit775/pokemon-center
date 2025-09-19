import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Generation } from "../models/Generation";
import { Location } from "../models/Location";
import { Pokedex } from "../models/Pokedex";
import { VersionGroupRegion } from "../models/VersionGroupRegion";
import { RegionCount } from "../resolvers/outputs/RegionCount";

@TypeGraphQL.ObjectType("Region", {})
export class Region {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  generations?: Generation[];

  locations?: Location[];

  pokedexes?: Pokedex[];

  versionGroups?: VersionGroupRegion[];

  @TypeGraphQL.Field(_type => RegionCount, {
    nullable: true
  })
  _count?: RegionCount | null;
}
