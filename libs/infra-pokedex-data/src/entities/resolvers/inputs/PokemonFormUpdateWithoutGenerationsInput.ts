import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormTypeUpdateManyWithoutPokemonFormNestedInput } from "../inputs/PokemonFormTypeUpdateManyWithoutPokemonFormNestedInput";
import { PokemonUpdateOneRequiredWithoutFormsNestedInput } from "../inputs/PokemonUpdateOneRequiredWithoutFormsNestedInput";
import { VersionGroupUpdateOneRequiredWithoutPokemonFormsNestedInput } from "../inputs/VersionGroupUpdateOneRequiredWithoutPokemonFormsNestedInput";

@TypeGraphQL.InputType("PokemonFormUpdateWithoutGenerationsInput", {})
export class PokemonFormUpdateWithoutGenerationsInput {
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

  @TypeGraphQL.Field(_type => PokemonUpdateOneRequiredWithoutFormsNestedInput, {
    nullable: true
  })
  pokemon?: PokemonUpdateOneRequiredWithoutFormsNestedInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupUpdateOneRequiredWithoutPokemonFormsNestedInput, {
    nullable: true
  })
  versionGroup?: VersionGroupUpdateOneRequiredWithoutPokemonFormsNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormTypeUpdateManyWithoutPokemonFormNestedInput, {
    nullable: true
  })
  types?: PokemonFormTypeUpdateManyWithoutPokemonFormNestedInput | undefined;
}
