import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilitiesUpdateWithoutPokemonAbilitiesInput } from "../inputs/AbilitiesUpdateWithoutPokemonAbilitiesInput";
import { AbilitiesWhereInput } from "../inputs/AbilitiesWhereInput";

@TypeGraphQL.InputType("AbilitiesUpdateToOneWithWhereWithoutPokemonAbilitiesInput", {})
export class AbilitiesUpdateToOneWithWhereWithoutPokemonAbilitiesInput {
  @TypeGraphQL.Field(_type => AbilitiesWhereInput, {
    nullable: true
  })
  where?: AbilitiesWhereInput | undefined;

  @TypeGraphQL.Field(_type => AbilitiesUpdateWithoutPokemonAbilitiesInput, {
    nullable: false
  })
  data!: AbilitiesUpdateWithoutPokemonAbilitiesInput;
}
