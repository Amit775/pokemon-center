import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateWithoutPokemonSpeciesInput } from "../inputs/GenerationCreateWithoutPokemonSpeciesInput";
import { GenerationUpdateWithoutPokemonSpeciesInput } from "../inputs/GenerationUpdateWithoutPokemonSpeciesInput";
import { GenerationWhereInput } from "../inputs/GenerationWhereInput";

@TypeGraphQL.InputType("GenerationUpsertWithoutPokemonSpeciesInput", {})
export class GenerationUpsertWithoutPokemonSpeciesInput {
  @TypeGraphQL.Field(_type => GenerationUpdateWithoutPokemonSpeciesInput, {
    nullable: false
  })
  update!: GenerationUpdateWithoutPokemonSpeciesInput;

  @TypeGraphQL.Field(_type => GenerationCreateWithoutPokemonSpeciesInput, {
    nullable: false
  })
  create!: GenerationCreateWithoutPokemonSpeciesInput;

  @TypeGraphQL.Field(_type => GenerationWhereInput, {
    nullable: true
  })
  where?: GenerationWhereInput | undefined;
}
