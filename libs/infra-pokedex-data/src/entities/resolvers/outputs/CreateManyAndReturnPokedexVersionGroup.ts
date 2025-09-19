import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Pokedex } from "../../models/Pokedex";
import { VersionGroup } from "../../models/VersionGroup";

@TypeGraphQL.ObjectType("CreateManyAndReturnPokedexVersionGroup", {})
export class CreateManyAndReturnPokedexVersionGroup {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokedex_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  version_group_id!: number;

  @TypeGraphQL.Field(_type => Pokedex, {
    nullable: false
  })
  pokedex!: Pokedex;

  @TypeGraphQL.Field(_type => VersionGroup, {
    nullable: false
  })
  versionGroup!: VersionGroup;
}
