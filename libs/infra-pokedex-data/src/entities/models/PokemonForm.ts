import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Pokemon } from "../models/Pokemon";
import { PokemonFormGeneration } from "../models/PokemonFormGeneration";
import { PokemonFormType } from "../models/PokemonFormType";
import { VersionGroup } from "../models/VersionGroup";
import { PokemonFormCount } from "../resolvers/outputs/PokemonFormCount";

@TypeGraphQL.ObjectType("PokemonForm", {})
export class PokemonForm {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  form_identifier?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokemon_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  introduced_in_version_group_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  is_default!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  is_battle_only!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  is_mega!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  form_order!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  order!: number;

  pokemon?: Pokemon;

  versionGroup?: VersionGroup;

  generations?: PokemonFormGeneration[];

  types?: PokemonFormType[];

  @TypeGraphQL.Field(_type => PokemonFormCount, {
    nullable: true
  })
  _count?: PokemonFormCount | null;
}
