import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationUpdateWithoutPokemonSpeciesInput } from "../inputs/GenerationUpdateWithoutPokemonSpeciesInput";
import { GenerationWhereInput } from "../inputs/GenerationWhereInput";

@TypeGraphQL.InputType("GenerationUpdateToOneWithWhereWithoutPokemonSpeciesInput", {})
export class GenerationUpdateToOneWithWhereWithoutPokemonSpeciesInput {
  @TypeGraphQL.Field(_type => GenerationWhereInput, {
    nullable: true
  })
  where?: GenerationWhereInput | undefined;

  @TypeGraphQL.Field(_type => GenerationUpdateWithoutPokemonSpeciesInput, {
    nullable: false
  })
  data!: GenerationUpdateWithoutPokemonSpeciesInput;
}
