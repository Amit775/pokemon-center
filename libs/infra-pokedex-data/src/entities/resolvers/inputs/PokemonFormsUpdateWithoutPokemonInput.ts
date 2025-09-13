import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormGenerationsUpdateManyWithoutPokemonFormNestedInput } from "../inputs/PokemonFormGenerationsUpdateManyWithoutPokemonFormNestedInput";
import { PokemonFormTypesUpdateManyWithoutPokemonFormNestedInput } from "../inputs/PokemonFormTypesUpdateManyWithoutPokemonFormNestedInput";
import { VersionGroupsUpdateOneRequiredWithoutPokemonFormsNestedInput } from "../inputs/VersionGroupsUpdateOneRequiredWithoutPokemonFormsNestedInput";

@TypeGraphQL.InputType("PokemonFormsUpdateWithoutPokemonInput", {})
export class PokemonFormsUpdateWithoutPokemonInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  form_identifier?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  is_default?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  is_battle_only?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  is_mega?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  form_order?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  order?: number | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsUpdateOneRequiredWithoutPokemonFormsNestedInput, {
    nullable: true
  })
  versionGroup?: VersionGroupsUpdateOneRequiredWithoutPokemonFormsNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsUpdateManyWithoutPokemonFormNestedInput, {
    nullable: true
  })
  generations?: PokemonFormGenerationsUpdateManyWithoutPokemonFormNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypesUpdateManyWithoutPokemonFormNestedInput, {
    nullable: true
  })
  types?: PokemonFormTypesUpdateManyWithoutPokemonFormNestedInput | undefined;
}
