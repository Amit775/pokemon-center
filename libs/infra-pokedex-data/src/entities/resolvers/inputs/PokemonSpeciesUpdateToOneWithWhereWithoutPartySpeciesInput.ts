import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesUpdateWithoutPartySpeciesInput } from "../inputs/PokemonSpeciesUpdateWithoutPartySpeciesInput";
import { PokemonSpeciesWhereInput } from "../inputs/PokemonSpeciesWhereInput";

@TypeGraphQL.InputType("PokemonSpeciesUpdateToOneWithWhereWithoutPartySpeciesInput", {})
export class PokemonSpeciesUpdateToOneWithWhereWithoutPartySpeciesInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesWhereInput, {
    nullable: true
  })
  where?: PokemonSpeciesWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateWithoutPartySpeciesInput, {
    nullable: false
  })
  data!: PokemonSpeciesUpdateWithoutPartySpeciesInput;
}
