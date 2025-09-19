import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationUpdateWithoutPokemonFormGenerationsInput } from "../inputs/GenerationUpdateWithoutPokemonFormGenerationsInput";
import { GenerationWhereInput } from "../inputs/GenerationWhereInput";

@TypeGraphQL.InputType("GenerationUpdateToOneWithWhereWithoutPokemonFormGenerationsInput", {})
export class GenerationUpdateToOneWithWhereWithoutPokemonFormGenerationsInput {
  @TypeGraphQL.Field(_type => GenerationWhereInput, {
    nullable: true
  })
  where?: GenerationWhereInput | undefined;

  @TypeGraphQL.Field(_type => GenerationUpdateWithoutPokemonFormGenerationsInput, {
    nullable: false
  })
  data!: GenerationUpdateWithoutPokemonFormGenerationsInput;
}
