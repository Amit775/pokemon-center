import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateWithoutPokemonSpeciesInput } from "../inputs/GenerationCreateWithoutPokemonSpeciesInput";
import { GenerationWhereUniqueInput } from "../inputs/GenerationWhereUniqueInput";

@TypeGraphQL.InputType("GenerationCreateOrConnectWithoutPokemonSpeciesInput", {})
export class GenerationCreateOrConnectWithoutPokemonSpeciesInput {
  @TypeGraphQL.Field(_type => GenerationWhereUniqueInput, {
    nullable: false
  })
  where!: GenerationWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenerationCreateWithoutPokemonSpeciesInput, {
    nullable: false
  })
  create!: GenerationCreateWithoutPokemonSpeciesInput;
}
