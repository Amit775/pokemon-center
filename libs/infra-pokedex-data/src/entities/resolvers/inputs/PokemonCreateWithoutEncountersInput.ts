import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAbilitiesCreateNestedManyWithoutPokemonInput } from "../inputs/PokemonAbilitiesCreateNestedManyWithoutPokemonInput";
import { PokemonFormsCreateNestedManyWithoutPokemonInput } from "../inputs/PokemonFormsCreateNestedManyWithoutPokemonInput";
import { PokemonGameIndicesCreateNestedManyWithoutPokemonInput } from "../inputs/PokemonGameIndicesCreateNestedManyWithoutPokemonInput";
import { PokemonItemsCreateNestedManyWithoutPokemonInput } from "../inputs/PokemonItemsCreateNestedManyWithoutPokemonInput";
import { PokemonMovesCreateNestedManyWithoutPokemonInput } from "../inputs/PokemonMovesCreateNestedManyWithoutPokemonInput";
import { PokemonSpeciesCreateNestedOneWithoutPokemonInput } from "../inputs/PokemonSpeciesCreateNestedOneWithoutPokemonInput";
import { PokemonStatsCreateNestedManyWithoutPokemonInput } from "../inputs/PokemonStatsCreateNestedManyWithoutPokemonInput";
import { PokemonTypesCreateNestedManyWithoutPokemonInput } from "../inputs/PokemonTypesCreateNestedManyWithoutPokemonInput";

@TypeGraphQL.InputType("PokemonCreateWithoutEncountersInput", {})
export class PokemonCreateWithoutEncountersInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  height!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  weight!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  base_experience!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  order?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  is_default!: number;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateNestedOneWithoutPokemonInput, {
    nullable: false
  })
  species!: PokemonSpeciesCreateNestedOneWithoutPokemonInput;

  @TypeGraphQL.Field(_type => PokemonFormsCreateNestedManyWithoutPokemonInput, {
    nullable: true
  })
  forms?: PokemonFormsCreateNestedManyWithoutPokemonInput | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilitiesCreateNestedManyWithoutPokemonInput, {
    nullable: true
  })
  abilities?: PokemonAbilitiesCreateNestedManyWithoutPokemonInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMovesCreateNestedManyWithoutPokemonInput, {
    nullable: true
  })
  moves?: PokemonMovesCreateNestedManyWithoutPokemonInput | undefined;

  @TypeGraphQL.Field(_type => PokemonStatsCreateNestedManyWithoutPokemonInput, {
    nullable: true
  })
  stats?: PokemonStatsCreateNestedManyWithoutPokemonInput | undefined;

  @TypeGraphQL.Field(_type => PokemonTypesCreateNestedManyWithoutPokemonInput, {
    nullable: true
  })
  types?: PokemonTypesCreateNestedManyWithoutPokemonInput | undefined;

  @TypeGraphQL.Field(_type => PokemonItemsCreateNestedManyWithoutPokemonInput, {
    nullable: true
  })
  items?: PokemonItemsCreateNestedManyWithoutPokemonInput | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndicesCreateNestedManyWithoutPokemonInput, {
    nullable: true
  })
  gameIndices?: PokemonGameIndicesCreateNestedManyWithoutPokemonInput | undefined;
}
