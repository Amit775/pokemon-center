import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormGenerationsCreateNestedManyWithoutPokemonFormInput } from "../inputs/PokemonFormGenerationsCreateNestedManyWithoutPokemonFormInput";
import { PokemonFormTypesCreateNestedManyWithoutPokemonFormInput } from "../inputs/PokemonFormTypesCreateNestedManyWithoutPokemonFormInput";
import { VersionGroupsCreateNestedOneWithoutPokemonFormsInput } from "../inputs/VersionGroupsCreateNestedOneWithoutPokemonFormsInput";

@TypeGraphQL.InputType("PokemonFormsCreateWithoutPokemonInput", {})
export class PokemonFormsCreateWithoutPokemonInput {
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
  form_identifier?: string | undefined;

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

  @TypeGraphQL.Field(_type => VersionGroupsCreateNestedOneWithoutPokemonFormsInput, {
    nullable: false
  })
  versionGroup!: VersionGroupsCreateNestedOneWithoutPokemonFormsInput;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsCreateNestedManyWithoutPokemonFormInput, {
    nullable: true
  })
  generations?: PokemonFormGenerationsCreateNestedManyWithoutPokemonFormInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypesCreateNestedManyWithoutPokemonFormInput, {
    nullable: true
  })
  types?: PokemonFormTypesCreateNestedManyWithoutPokemonFormInput | undefined;
}
