import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationUpdateOneRequiredWithoutAbilitiesNestedInput } from "../inputs/GenerationUpdateOneRequiredWithoutAbilitiesNestedInput";

@TypeGraphQL.InputType("AbilityUpdateWithoutPokemonAbilitiesInput", {})
export class AbilityUpdateWithoutPokemonAbilitiesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  is_main_series?: number | undefined;

  @TypeGraphQL.Field(_type => GenerationUpdateOneRequiredWithoutAbilitiesNestedInput, {
    nullable: true
  })
  generation?: GenerationUpdateOneRequiredWithoutAbilitiesNestedInput | undefined;
}
