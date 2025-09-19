import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateWithoutPokemonFormGenerationsInput } from "../inputs/GenerationCreateWithoutPokemonFormGenerationsInput";
import { GenerationWhereUniqueInput } from "../inputs/GenerationWhereUniqueInput";

@TypeGraphQL.InputType("GenerationCreateOrConnectWithoutPokemonFormGenerationsInput", {})
export class GenerationCreateOrConnectWithoutPokemonFormGenerationsInput {
  @TypeGraphQL.Field(_type => GenerationWhereUniqueInput, {
    nullable: false
  })
  where!: GenerationWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenerationCreateWithoutPokemonFormGenerationsInput, {
    nullable: false
  })
  create!: GenerationCreateWithoutPokemonFormGenerationsInput;
}
