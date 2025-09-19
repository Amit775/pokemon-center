import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Pokedex } from "../models/Pokedex";
import { VersionGroup } from "../models/VersionGroup";

@TypeGraphQL.ObjectType("PokedexVersionGroup", {})
export class PokedexVersionGroup {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokedex_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  version_group_id!: number;

  pokedex?: Pokedex;

  versionGroup?: VersionGroup;
}
