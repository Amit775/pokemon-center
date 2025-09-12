import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsUpdateWithoutPokemonFormGenerationsInput } from "../inputs/GenerationsUpdateWithoutPokemonFormGenerationsInput";
import { GenerationsWhereInput } from "../inputs/GenerationsWhereInput";

@TypeGraphQL.InputType("GenerationsUpdateToOneWithWhereWithoutPokemonFormGenerationsInput", {})
export class GenerationsUpdateToOneWithWhereWithoutPokemonFormGenerationsInput {
  @TypeGraphQL.Field(_type => GenerationsWhereInput, {
    nullable: true
  })
  where?: GenerationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpdateWithoutPokemonFormGenerationsInput, {
    nullable: false
  })
  data!: GenerationsUpdateWithoutPokemonFormGenerationsInput;
}
