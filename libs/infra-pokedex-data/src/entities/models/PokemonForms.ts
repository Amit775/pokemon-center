import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Pokemon } from "../models/Pokemon";
import { PokemonFormGenerations } from "../models/PokemonFormGenerations";
import { PokemonFormTypes } from "../models/PokemonFormTypes";
import { VersionGroups } from "../models/VersionGroups";
import { PokemonFormsCount } from "../resolvers/outputs/PokemonFormsCount";

@TypeGraphQL.ObjectType("PokemonForms", {})
export class PokemonForms {
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

  versionGroup?: VersionGroups;

  generations?: PokemonFormGenerations[];

  types?: PokemonFormTypes[];

  @TypeGraphQL.Field(_type => PokemonFormsCount, {
    nullable: true
  })
  _count?: PokemonFormsCount | null;
}
