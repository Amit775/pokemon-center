import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterCreateNestedManyWithoutPokemonInput } from "../inputs/EncounterCreateNestedManyWithoutPokemonInput";
import { PokemonAbilityCreateNestedManyWithoutPokemonInput } from "../inputs/PokemonAbilityCreateNestedManyWithoutPokemonInput";
import { PokemonFormCreateNestedManyWithoutPokemonInput } from "../inputs/PokemonFormCreateNestedManyWithoutPokemonInput";
import { PokemonGameIndexCreateNestedManyWithoutPokemonInput } from "../inputs/PokemonGameIndexCreateNestedManyWithoutPokemonInput";
import { PokemonItemCreateNestedManyWithoutPokemonInput } from "../inputs/PokemonItemCreateNestedManyWithoutPokemonInput";
import { PokemonMoveCreateNestedManyWithoutPokemonInput } from "../inputs/PokemonMoveCreateNestedManyWithoutPokemonInput";
import { PokemonStatCreateNestedManyWithoutPokemonInput } from "../inputs/PokemonStatCreateNestedManyWithoutPokemonInput";
import { PokemonTypeCreateNestedManyWithoutPokemonInput } from "../inputs/PokemonTypeCreateNestedManyWithoutPokemonInput";

@TypeGraphQL.InputType("PokemonCreateWithoutSpeciesInput", {})
export class PokemonCreateWithoutSpeciesInput {
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

  @TypeGraphQL.Field(_type => PokemonFormCreateNestedManyWithoutPokemonInput, {
    nullable: true
  })
  forms?: PokemonFormCreateNestedManyWithoutPokemonInput | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilityCreateNestedManyWithoutPokemonInput, {
    nullable: true
  })
  abilities?: PokemonAbilityCreateNestedManyWithoutPokemonInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveCreateNestedManyWithoutPokemonInput, {
    nullable: true
  })
  moves?: PokemonMoveCreateNestedManyWithoutPokemonInput | undefined;

  @TypeGraphQL.Field(_type => PokemonStatCreateNestedManyWithoutPokemonInput, {
    nullable: true
  })
  stats?: PokemonStatCreateNestedManyWithoutPokemonInput | undefined;

  @TypeGraphQL.Field(_type => PokemonTypeCreateNestedManyWithoutPokemonInput, {
    nullable: true
  })
  types?: PokemonTypeCreateNestedManyWithoutPokemonInput | undefined;

  @TypeGraphQL.Field(_type => PokemonItemCreateNestedManyWithoutPokemonInput, {
    nullable: true
  })
  items?: PokemonItemCreateNestedManyWithoutPokemonInput | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndexCreateNestedManyWithoutPokemonInput, {
    nullable: true
  })
  gameIndices?: PokemonGameIndexCreateNestedManyWithoutPokemonInput | undefined;

  @TypeGraphQL.Field(_type => EncounterCreateNestedManyWithoutPokemonInput, {
    nullable: true
  })
  encounters?: EncounterCreateNestedManyWithoutPokemonInput | undefined;
}
