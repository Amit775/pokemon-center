import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateWithoutPokemonFormGenerationsInput } from "../inputs/GenerationCreateWithoutPokemonFormGenerationsInput";
import { GenerationUpdateWithoutPokemonFormGenerationsInput } from "../inputs/GenerationUpdateWithoutPokemonFormGenerationsInput";
import { GenerationWhereInput } from "../inputs/GenerationWhereInput";

@TypeGraphQL.InputType("GenerationUpsertWithoutPokemonFormGenerationsInput", {})
export class GenerationUpsertWithoutPokemonFormGenerationsInput {
  @TypeGraphQL.Field(_type => GenerationUpdateWithoutPokemonFormGenerationsInput, {
    nullable: false
  })
  update!: GenerationUpdateWithoutPokemonFormGenerationsInput;

  @TypeGraphQL.Field(_type => GenerationCreateWithoutPokemonFormGenerationsInput, {
    nullable: false
  })
  create!: GenerationCreateWithoutPokemonFormGenerationsInput;

  @TypeGraphQL.Field(_type => GenerationWhereInput, {
    nullable: true
  })
  where?: GenerationWhereInput | undefined;
}
