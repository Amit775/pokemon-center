import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateWithoutPokemonSpeciesInput } from "../inputs/GenerationsCreateWithoutPokemonSpeciesInput";
import { GenerationsUpdateWithoutPokemonSpeciesInput } from "../inputs/GenerationsUpdateWithoutPokemonSpeciesInput";
import { GenerationsWhereInput } from "../inputs/GenerationsWhereInput";

@TypeGraphQL.InputType("GenerationsUpsertWithoutPokemonSpeciesInput", {})
export class GenerationsUpsertWithoutPokemonSpeciesInput {
  @TypeGraphQL.Field(_type => GenerationsUpdateWithoutPokemonSpeciesInput, {
    nullable: false
  })
  update!: GenerationsUpdateWithoutPokemonSpeciesInput;

  @TypeGraphQL.Field(_type => GenerationsCreateWithoutPokemonSpeciesInput, {
    nullable: false
  })
  create!: GenerationsCreateWithoutPokemonSpeciesInput;

  @TypeGraphQL.Field(_type => GenerationsWhereInput, {
    nullable: true
  })
  where?: GenerationsWhereInput | undefined;
}
