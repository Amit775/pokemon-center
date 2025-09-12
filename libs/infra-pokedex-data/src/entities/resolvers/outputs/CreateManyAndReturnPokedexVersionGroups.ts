import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Pokedexes } from "../../models/Pokedexes";
import { VersionGroups } from "../../models/VersionGroups";

@TypeGraphQL.ObjectType("CreateManyAndReturnPokedexVersionGroups", {})
export class CreateManyAndReturnPokedexVersionGroups {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokedex_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  version_group_id!: number;

  @TypeGraphQL.Field(_type => Pokedexes, {
    nullable: false
  })
  pokedex!: Pokedexes;

  @TypeGraphQL.Field(_type => VersionGroups, {
    nullable: false
  })
  versionGroup!: VersionGroups;
}
