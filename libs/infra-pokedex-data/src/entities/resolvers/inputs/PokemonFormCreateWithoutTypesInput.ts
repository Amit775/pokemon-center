import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateNestedOneWithoutFormsInput } from "../inputs/PokemonCreateNestedOneWithoutFormsInput";
import { PokemonFormGenerationCreateNestedManyWithoutPokemonFormInput } from "../inputs/PokemonFormGenerationCreateNestedManyWithoutPokemonFormInput";
import { VersionGroupCreateNestedOneWithoutPokemonFormsInput } from "../inputs/VersionGroupCreateNestedOneWithoutPokemonFormsInput";

@TypeGraphQL.InputType("PokemonFormCreateWithoutTypesInput", {})
export class PokemonFormCreateWithoutTypesInput {
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

  @TypeGraphQL.Field(_type => PokemonCreateNestedOneWithoutFormsInput, {
    nullable: false
  })
  pokemon!: PokemonCreateNestedOneWithoutFormsInput;

  @TypeGraphQL.Field(_type => VersionGroupCreateNestedOneWithoutPokemonFormsInput, {
    nullable: false
  })
  versionGroup!: VersionGroupCreateNestedOneWithoutPokemonFormsInput;

  @TypeGraphQL.Field(_type => PokemonFormGenerationCreateNestedManyWithoutPokemonFormInput, {
    nullable: true
  })
  generations?: PokemonFormGenerationCreateNestedManyWithoutPokemonFormInput | undefined;
}
