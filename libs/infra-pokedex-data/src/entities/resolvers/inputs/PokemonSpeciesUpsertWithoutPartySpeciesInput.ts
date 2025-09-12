import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateWithoutPartySpeciesInput } from "../inputs/PokemonSpeciesCreateWithoutPartySpeciesInput";
import { PokemonSpeciesUpdateWithoutPartySpeciesInput } from "../inputs/PokemonSpeciesUpdateWithoutPartySpeciesInput";
import { PokemonSpeciesWhereInput } from "../inputs/PokemonSpeciesWhereInput";

@TypeGraphQL.InputType("PokemonSpeciesUpsertWithoutPartySpeciesInput", {})
export class PokemonSpeciesUpsertWithoutPartySpeciesInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateWithoutPartySpeciesInput, {
    nullable: false
  })
  update!: PokemonSpeciesUpdateWithoutPartySpeciesInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateWithoutPartySpeciesInput, {
    nullable: false
  })
  create!: PokemonSpeciesCreateWithoutPartySpeciesInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesWhereInput, {
    nullable: true
  })
  where?: PokemonSpeciesWhereInput | undefined;
}
