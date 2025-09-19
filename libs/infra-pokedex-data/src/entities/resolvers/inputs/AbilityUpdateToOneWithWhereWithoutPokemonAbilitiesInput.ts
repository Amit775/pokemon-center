import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilityUpdateWithoutPokemonAbilitiesInput } from "../inputs/AbilityUpdateWithoutPokemonAbilitiesInput";
import { AbilityWhereInput } from "../inputs/AbilityWhereInput";

@TypeGraphQL.InputType("AbilityUpdateToOneWithWhereWithoutPokemonAbilitiesInput", {})
export class AbilityUpdateToOneWithWhereWithoutPokemonAbilitiesInput {
  @TypeGraphQL.Field(_type => AbilityWhereInput, {
    nullable: true
  })
  where?: AbilityWhereInput | undefined;

  @TypeGraphQL.Field(_type => AbilityUpdateWithoutPokemonAbilitiesInput, {
    nullable: false
  })
  data!: AbilityUpdateWithoutPokemonAbilitiesInput;
}
